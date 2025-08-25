import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const allowedOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: allowedOrigin }));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fixture_recaps';
await mongoose.connect(MONGODB_URI);

const fixtureSchema = new mongoose.Schema(
  {
    // Parties
    shipperName: String,
    chartererName: String,

    // Vessel
    vesselName: String,
    dwt: Number,
    builtYear: Number,
    flag: String,
    vesselClass: String,
    imoNumber: String,

    // Cargo & Ports
    cargoType: String,
    cargoQtyMt: Number,
    cargoPctTolerance: Number,
    stowageFactor: String,
    loadPorts: [String],
    dischargePorts: [String],

    // Dates
    laycanStart: Date,
    laycanEnd: Date,
    cancelingDate: Date,

    // Freight
    freightType: { type: String, enum: ['per_mt', 'lumpsum'], default: 'per_mt' },
    freightAmount: Number,
    freightTerms: String,
    paymentTerms: String,

    // Laytime / ops
    loadingRate: String,
    dischargeRate: String,
    loadingTerms: String,
    dischargeTerms: String,

    // Dem/des
    demurragePerDay: Number,
    despatchPerDay: Number,

    // Commercial
    commissionPct: Number,

    // Law
    arbitrationPlace: String,
    governingLaw: String,

    // Other
    bunkerType: String,
    costResponsibility: String,
    tradingLimits: String,
    specialClauses: [String],
    otherClauses: [String],

    // timestamps
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
  const freight = d.freightType === 'lumpsum'
    ? `USD ${fmtNumber(d.freightAmount)} lumpsum${d.freightTerms ? `, ${d.freightTerms}` : ''}`
    : `USD ${fmtNumber(d.freightAmount)} per MT${d.freightTerms ? `, ${d.freightTerms}` : ''}`;

  const lines = [
    'Fixture Recap',
    '',
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

app.post('/api/fixtures', async (req, res) => {
  try {
    const fixture = await Fixture.create(req.body);
    res.status(201).json(fixture);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/fixtures', async (req, res) => {
  const fixtures = await Fixture.find().sort({ createdAt: -1 }).lean();
  res.json(fixtures);
});

app.get('/api/fixtures/:id', async (req, res) => {
  try {
    const fixture = await Fixture.findById(req.params.id).lean();
    if (!fixture) return res.status(404).json({ error: 'Not found' });
    res.json(fixture);
  } catch (err) {
    res.status(400).json({ error: 'Invalid id' });
  }
});

app.get('/api/fixtures/:id/recap', async (req, res) => {
  try {
    const fixture = await Fixture.findById(req.params.id).lean();
    if (!fixture) return res.status(404).send('Not found');
    res.type('text/plain').send(recapFromDoc(fixture));
  } catch (err) {
    res.status(400).send('Invalid id');
  }
});

// In production, serve frontend build
if (process.env.NODE_ENV === 'production') {
  const clientDist = path.resolve(__dirname, '../../client/dist');
  app.use(express.static(clientDist));
  app.get('*', (_, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
