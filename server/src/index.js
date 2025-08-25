import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import { requireAuth } from './middleware/authMiddleware.js';

// Define __filename and __dirname before using them
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from the server root directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const allowedOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: allowedOrigin }));

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in .env file');
    }
    await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB connected to ${MONGODB_URI}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

connectDB();

const fixtureSchema = new mongoose.Schema(
  {
    shipperName: String,
    chartererName: String,
  charterType: { type: String, enum: ['Voyage', 'Time', 'Bareboat'], default: 'Voyage' },
    vesselName: String,
    dwt: Number,
    builtYear: Number,
    flag: String,
    vesselClass: String,
    imoNumber: String,
  cargoNature: { type: String, enum: ['BulkDry', 'LiquidTanker', 'HeavyLift'], default: 'BulkDry' },
    cargoType: String,
    cargoQtyMt: Number,
    cargoPctTolerance: Number,
    stowageFactor: String,
    loadPorts: [String],
    dischargePorts: [String],
    laycanStart: Date,
    laycanEnd: Date,
    cancelingDate: Date,
    freightType: { type: String, enum: ['per_mt', 'lumpsum'], default: 'per_mt' },
    freightAmount: Number,
    freightTerms: String,
    paymentTerms: String,
    loadingRate: String,
    dischargeRate: String,
    loadingTerms: String,
    dischargeTerms: String,
    demurragePerDay: Number,
    despatchPerDay: Number,
    commissionPct: Number,
    arbitrationPlace: String,
    governingLaw: String,
    bunkerType: String,
    costResponsibility: String,
    tradingLimits: String,
    specialClauses: [String],
    otherClauses: [String],
    recap: String, // New field to store recap text
  cpBaseForm: String,
  cpSuggested: String,
  cpReason: String,
  },
  { timestamps: true }
);

function fmtNumber(n, decimals = 0) {
  if (n === undefined || n === null || Number.isNaN(n)) return '';
  return Number(n).toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals });
}

function dateRangeStr(start, end) {
  if (!start && !end) return '';
  const fmt = (d) => new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' });
  if (start && end) return `${fmt(start)} – ${fmt(end)}`;
  return start ? fmt(start) : fmt(end);
}

function recapFromDoc(d) {
  const qty = d.cargoQtyMt ? `${fmtNumber(d.cargoQtyMt)} MT${d.cargoPctTolerance ? ` (+/- ${fmtNumber(d.cargoPctTolerance)}%)` : ''}` : '';
  const freight =
    d.freightType === 'lumpsum'
      ? `USD ${fmtNumber(d.freightAmount)} lumpsum${d.freightTerms ? `, ${d.freightTerms}` : ''}`
      : `USD ${fmtNumber(d.freightAmount)} per MT${d.freightTerms ? `, ${d.freightTerms}` : ''}`;

  const lines = [
    'Fixture Recap',
    '',
  ...(d.charterType || d.cargoNature ? [`Charter Type: ${d.charterType || ''} | Cargo Category: ${d.cargoNature || ''}`] : []),
    ...(d.shipperName || d.chartererName ? [`Parties: Shipper ${d.shipperName || ''}; Charterer ${d.chartererName || ''}`] : []),
    `Vessel: ${d.vesselName || ''} – ${fmtNumber(d.dwt)} DWT – Built ${d.builtYear || ''} – ${d.flag || ''} Flag – Class ${d.vesselClass || ''}`,
    ...(d.imoNumber ? [`IMO: ${d.imoNumber}`] : []),
    `Cargo: ${qty} ${d.cargoType ? d.cargoType : ''}`.trim(),
    `Load Port: ${Array.isArray(d.loadPorts) ? d.loadPorts.join('; ') : ''}`,
    `Discharge Port: ${Array.isArray(d.dischargePorts) ? d.dischargePorts.join('; ') : ''}`,
    `Laycan: ${dateRangeStr(d.laycanStart, d.laycanEnd)}`,
    ...(d.cancelingDate ? [`Canceling Date: ${dateRangeStr(d.cancelingDate)}`] : []),
    `Freight: ${freight}`,
    ...(d.paymentTerms ? [`Payment: ${d.paymentTerms}`] : []),
    ...(d.stowageFactor ? [`Stowage Factor: ${d.stowageFactor}`] : []),
    ...(d.loadingRate ? [`Loading Rate/Terms: ${d.loadingRate}${d.loadingTerms ? `, ${d.loadingTerms}` : ''}`] : []),
    ...(d.dischargeRate ? [`Discharge Rate/Terms: ${d.dischargeRate}${d.dischargeTerms ? `, ${d.dischargeTerms}` : ''}`] : []),
    `Demurrage: USD ${fmtNumber(d.demurragePerDay)} per day`,
    `Despatch: USD ${fmtNumber(d.despatchPerDay)} per day${d.demurragePerDay ? ' (half demurrage)'.repeat(d.despatchPerDay === d.demurragePerDay / 2 ? 1 : 0) : ''}`,
    `Commission: ${d.commissionPct ?? ''}% to Brokers`,
    `Arbitration: ${d.arbitrationPlace || ''}, ${d.governingLaw || ''} Law`,
    ...(d.bunkerType ? [`Bunkers: ${d.bunkerType}`] : []),
    ...(d.costResponsibility ? [`Costs: ${d.costResponsibility}`] : []),
    ...(d.tradingLimits ? [`Trading Limits: ${d.tradingLimits}`] : []),
  '',
  ...(d.cpBaseForm || d.cpSuggested || d.cpReason ? [`Base CP Template: ${d.cpBaseForm || d.cpSuggested || ''}${d.cpReason ? ` — ${d.cpReason}` : ''}`] : []),
    '',
    'Other terms:',
    ...([
        ...(Array.isArray(d.specialClauses) ? d.specialClauses : []),
        ...(Array.isArray(d.otherClauses) ? d.otherClauses : []),
      ].length
      ? [...(d.specialClauses || []), ...(d.otherClauses || [])].map((c) => `- ${c}`)
      : [
          '- 1 Safe Port / 1 Safe Berth each, Always Accessible',
          '- NOR to be tendered whether in berth or not (WIBON)',
          '- Weather Working Days (WWD)',
        ]),
  ];
  return lines.join('\n');
}

const Fixture = mongoose.model('Fixture', fixtureSchema);

app.get('/api/health', (_, res) => res.json({ ok: true }));

// Auth routes
app.use('/api', authRoutes);

// Example protected route
app.get('/api/me', requireAuth, (req, res) => {
  res.json({ user: req.user });
});

// n8n webhook forwarder to avoid browser CORS
async function doFetch(url, options) {
  if (typeof fetch === 'function') return fetch(url, options);
  const mod = await import('node-fetch');
  return mod.default(url, options);
}

async function forwardToN8n(url, req, res, authHeaderEnvKey = 'N8N_WEBHOOK_AUTH_HEADER') {
  try {
    const headers = { 'content-type': 'application/json' };
    const authVal = process.env[authHeaderEnvKey];
    if (authVal) headers['authorization'] = authVal;
    const r = await doFetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(req.body || {}),
    });
    const contentType = r.headers.get('content-type') || 'application/octet-stream';
    const contentDisposition = r.headers.get('content-disposition');
    const buf = Buffer.from(await r.arrayBuffer());
    res.status(r.status).setHeader('Content-Type', contentType);
    if (contentDisposition) res.setHeader('Content-Disposition', contentDisposition);
    res.setHeader('Content-Length', buf.length);
    res.send(buf);
  } catch (err) {
    console.error('n8n forward error:', err.message);
    res.status(502).json({ error: 'Failed to forward to n8n' });
  }
}

// Generic forwarder (legacy)
app.post('/api/n8n/webhook', async (req, res) => {
  const url = process.env.N8N_WEBHOOK_URL;
  if (!url) return res.status(500).json({ error: 'N8N_WEBHOOK_URL is not configured on server' });
  await forwardToN8n(url, req, res, 'N8N_WEBHOOK_AUTH_HEADER');
});

// CP generation forwarder (Wait for Response from n8n)
app.post('/api/generate-cp', async (req, res) => {
  const url = process.env.N8N_CP_WEBHOOK_URL || process.env.N8N_WEBHOOK_URL;
  if (!url) return res.status(500).json({ error: 'N8N_CP_WEBHOOK_URL is not configured on server' });
  await forwardToN8n(url, req, res, 'N8N_CP_WEBHOOK_AUTH_HEADER');
});

app.post('/api/fixtures', async (req, res) => {
  try {
    const fixture = await Fixture.create(req.body);
    res.status(201).json(fixture);
  } catch (err) {
    console.error('Error creating fixture:', err.message);
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/fixtures', async (req, res) => {
  try {
    const fixtures = await Fixture.find().sort({ createdAt: -1 }).lean();
    res.json(fixtures);
  } catch (err) {
    console.error('Error fetching fixtures:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/fixtures/:id', async (req, res) => {
  try {
    const fixture = await Fixture.findById(req.params.id).lean();
    if (!fixture) return res.status(404).json({ error: 'Not found' });
    res.json(fixture);
  } catch (err) {
    console.error('Error fetching fixture:', err.message);
    res.status(400).json({ error: 'Invalid id' });
  }
});

app.get('/api/fixtures/:id/recap', async (req, res) => {
  try {
    const fixture = await Fixture.findById(req.params.id).lean();
    if (!fixture) return res.status(404).send('Not found');
    res.type('text/plain').send(fixture.recap || recapFromDoc(fixture)); // Use stored recap if available
  } catch (err) {
    console.error('Error generating recap:', err.message);
    res.status(400).send('Invalid id');
  }
});

if (process.env.NODE_ENV === 'production') {
  const clientDist = path.resolve(__dirname, '../../client/dist');
  app.use(express.static(clientDist));
  app.get('*', (_, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));