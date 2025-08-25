import React, { useEffect, useMemo, useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';
const N8N_FORWARD = import.meta.env.VITE_N8N_FORWARD === 'true';

function Label({ children }) {
  return <div className="label">{children}</div>;
}

function Field({ label, children }) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

export default function Fixture() {
  const [form, setForm] = useState({
    shipperName: '',
    chartererName: '',
    charterType: 'Voyage',
    vesselName: '',
    dwt: '',
    builtYear: '',
    flag: '',
    vesselClass: '',
    imoNumber: '',
    cargoNature: 'BulkDry',
    cargoType: '',
    cargoQtyMt: '',
    cargoPctTolerance: '',
    stowageFactor: '',
    loadPorts: '',
    dischargePorts: '',
    laycanStart: '',
    laycanEnd: '',
    cancelingDate: '',
    freightType: 'per_mt',
    freightAmount: '',
    freightTerms: 'FIOT',
    paymentTerms: '',
    loadingRate: '',
    dischargeRate: '',
    loadingTerms: '',
    dischargeTerms: '',
    demurragePerDay: '',
    despatchPerDay: '',
    commissionPct: '2.5',
    arbitrationPlace: 'London',
    governingLaw: 'English',
    bunkerType: '',
    costResponsibility: '',
    tradingLimits: '',
    specialClauses: '',
    otherClauses: `1 Safe Port / 1 Safe Berth each, Always Accessible\nNOR to be tendered whether in berth or not (WIBON)\nWeather Working Days (WWD)`,
    cpBaseForm: '',
  });

  // Track whether broker manually chose CP to avoid auto-overwrite
  const [cpTouched, setCpTouched] = useState(false);

  // Suggest CP template based on rules
  const { cpSuggested, cpReason } = useMemo(() => {
    const t = form.charterType;
    const n = form.cargoNature;
    let name = 'GENCON';
    let reason = 'Fallback to GENCON (general dry bulk voyage).';
    if (n === 'HeavyLift') {
      name = 'HEAVYCON';
      reason = 'Heavy lift/project cargo.';
    } else if (t === 'Bareboat') {
      name = 'BARECON';
      reason = 'Bareboat charter (demise).';
    } else if (t === 'Voyage' && n === 'BulkDry') {
      name = 'GENCON';
      reason = 'Voyage + dry bulk cargo.';
    } else if (t === 'Voyage' && n === 'LiquidTanker') {
      name = 'ASBATANKVOY';
      reason = 'Voyage + liquid/tanker cargo.';
    } else if (t === 'Time' && n === 'BulkDry') {
      name = 'NYPE';
      reason = 'Time charter + dry bulk.';
    } else if (t === 'Time' && n === 'LiquidTanker') {
      name = 'SHELLTIME';
      reason = 'Time charter + tanker.';
    }
    return { cpSuggested: name, cpReason: reason };
  }, [form.charterType, form.cargoNature]);

  // Auto-set cpBaseForm to suggestion unless broker already changed it
  useEffect(() => {
    if (!cpTouched) {
      setForm((prev) => ({ ...prev, cpBaseForm: cpSuggested }));
    }
  }, [cpSuggested, cpTouched]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const recap = useMemo(() => {
    const num = (v, d = 0) =>
      v !== '' && !Number.isNaN(+v) ? Number(v).toLocaleString(undefined, { maximumFractionDigits: d, minimumFractionDigits: d }) : '';
    const date = (v) => (v ? new Date(v + 'T00:00:00').toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' }) : '');
    const qty = form.cargoQtyMt ? `${num(form.cargoQtyMt)} MT${form.cargoPctTolerance ? ` (+/- ${num(form.cargoPctTolerance)}%)` : ''}` : '';
    const freight =
      form.freightType === 'lumpsum'
        ? `USD ${num(form.freightAmount)} lumpsum${form.freightTerms ? `, ${form.freightTerms}` : ''}`
        : `USD ${num(form.freightAmount)} per MT${form.freightTerms ? `, ${form.freightTerms}` : ''}`;
    const lines = [
      'Fixture Recap',
      '',
    `Charter Type: ${form.charterType || ''} | Cargo Category: ${form.cargoNature || ''}`,
      form.shipperName || form.chartererName ? `Parties: Shipper ${form.shipperName}; Charterer ${form.chartererName}` : null,
      `Vessel: ${form.vesselName} – ${num(form.dwt)} DWT – Built ${form.builtYear} – ${form.flag} Flag – Class ${form.vesselClass}`,
      form.imoNumber ? `IMO: ${form.imoNumber}` : null,
      `Cargo: ${qty} ${form.cargoType}`.trim(),
      `Load Port: ${form.loadPorts}`,
      `Discharge Port: ${form.dischargePorts}`,
      `Laycan: ${date(form.laycanStart)} – ${date(form.laycanEnd)}`,
      form.cancelingDate ? `Canceling Date: ${date(form.cancelingDate)}` : null,
      `Freight: ${freight}`,
      form.paymentTerms ? `Payment: ${form.paymentTerms}` : null,
      form.stowageFactor ? `Stowage Factor: ${form.stowageFactor}` : null,
      form.loadingRate ? `Loading Rate/Terms: ${form.loadingRate}${form.loadingTerms ? `, ${form.loadingTerms}` : ''}` : null,
      form.dischargeRate ? `Discharge Rate/Terms: ${form.dischargeRate}${form.dischargeTerms ? `, ${form.dischargeTerms}` : ''}` : null,
      `Demurrage: USD ${num(form.demurragePerDay)} per day`,
      `Despatch: USD ${num(form.despatchPerDay)} per day${form.despatchPerDay && form.demurragePerDay && +form.despatchPerDay === +form.demurragePerDay / 2 ? ' (half demurrage)' : ''}`,
      `Commission: ${form.commissionPct}% to Brokers`,
      `Arbitration: ${form.arbitrationPlace}, ${form.governingLaw} Law`,
      form.bunkerType ? `Bunkers: ${form.bunkerType}` : null,
      form.costResponsibility ? `Costs: ${form.costResponsibility}` : null,
      form.tradingLimits ? `Trading Limits: ${form.tradingLimits}` : null,
    '',
    `Base CP Template: ${form.cpBaseForm || cpSuggested} — ${cpReason}`,
      '',
      'Other terms:',
    ];
    const clauses = [...(form.specialClauses?.split(/\n+/).filter(Boolean) || []), ...(form.otherClauses?.split(/\n+/).filter(Boolean) || [])].map((c) => `- ${c}`);
    return lines.filter(Boolean).concat(clauses).join('\n');
  }, [form, cpSuggested, cpReason]);

  const handleSave = async () => {
    try {
      const payload = {
        ...form,
  cpSuggested,
  cpReason,
        dwt: form.dwt ? Number(form.dwt) : undefined,
        builtYear: form.builtYear ? Number(form.builtYear) : undefined,
        cargoQtyMt: form.cargoQtyMt ? Number(form.cargoQtyMt) : undefined,
        cargoPctTolerance: form.cargoPctTolerance ? Number(form.cargoPctTolerance) : undefined,
        loadPorts: form.loadPorts ? form.loadPorts.split(/,\s*/).filter(Boolean) : [],
        dischargePorts: form.dischargePorts ? form.dischargePorts.split(/,\s*/).filter(Boolean) : [],
        laycanStart: form.laycanStart || undefined,
        laycanEnd: form.laycanEnd || undefined,
        cancelingDate: form.cancelingDate || undefined,
        freightAmount: form.freightAmount ? Number(form.freightAmount) : undefined,
        demurragePerDay: form.demurragePerDay ? Number(form.demurragePerDay) : undefined,
        despatchPerDay: form.despatchPerDay ? Number(form.despatchPerDay) : undefined,
        commissionPct: form.commissionPct ? Number(form.commissionPct) : undefined,
        specialClauses: form.specialClauses ? form.specialClauses.split(/\n+/).filter(Boolean) : [],
        otherClauses: form.otherClauses ? form.otherClauses.split(/\n+/).filter(Boolean) : [],
        recap: recap, // Include recap text in payload
      };
      console.log('Saving payload:', payload); // Debug payload
      const res = await fetch(`${API_BASE}/api/fixtures`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        // Optionally forward to n8n webhook via server proxy
        if (N8N_FORWARD) {
          try {
            await fetch(`${API_BASE}/api/n8n/webhook`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ fixtureId: data._id, payload }),
            });
          } catch (e) {
            console.warn('n8n forward failed:', e.message);
          }
        }
        alert('Saved! ID: ' + data._id);
      } else {
        console.error('Server response:', data);
        alert('Error: ' + (data.error || 'Unknown server error'));
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
      alert('Error: Failed to connect to server');
    }
  };

  const copyRecap = async () => {
    try {
      await navigator.clipboard.writeText(recap);
      alert('Recap copied to clipboard');
    } catch (error) {
      console.error('Clipboard error:', error.message);
      alert('Error: Failed to copy recap');
    }
  };

  const handleGenerateCP = async () => {
    try {
      const payload = {
        ...form,
        cpSuggested,
        cpReason,
        recap,
      };
      const res = await fetch(`${API_BASE}/api/generate-cp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const contentType = res.headers.get('content-type') || 'application/octet-stream';
      const disposition = res.headers.get('content-disposition') || '';
      const blob = await res.blob();
      if (!res.ok) {
        const text = await blob.text();
        throw new Error(text || 'Failed to generate CP');
      }
      // Determine filename
      let filename = 'CharterParty.pdf';
      const match = /filename="?([^";]+)"?/i.exec(disposition);
      if (match && match[1]) filename = match[1];
      // Download
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Generate CP error:', err.message);
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="container">
      <div className="panel">
        <h1 className="h1">Fixture Input</h1>
        <div className="row">
          <Field label="Charter Type">
            <select name="charterType" value={form.charterType} onChange={onChange}>
              <option value="Voyage">Voyage</option>
              <option value="Time">Time</option>
              <option value="Bareboat">Bareboat</option>
            </select>
          </Field>
          <Field label="Cargo Category">
            <select name="cargoNature" value={form.cargoNature} onChange={onChange}>
              <option value="BulkDry">Bulk Dry</option>
              <option value="LiquidTanker">Liquid/Tanker</option>
              <option value="HeavyLift">Heavy Lift</option>
            </select>
          </Field>
        </div>
        <div className="row">
          <Field label="Shipper Name">
            <input className="input" name="shipperName" value={form.shipperName} onChange={onChange} placeholder="ABC Shipping" />
          </Field>
          <Field label="Charterer Name">
            <input className="input" name="chartererName" value={form.chartererName} onChange={onChange} placeholder="XYZ Trading" />
          </Field>
        </div>
        <div className="row">
          <Field label="Base CP Template (suggested)">
            <select
              name="cpBaseForm"
              value={form.cpBaseForm || cpSuggested}
              onChange={(e) => {
                setCpTouched(true);
                onChange(e);
              }}
            >
              <option value="GENCON">GENCON</option>
              <option value="ASBATANKVOY">ASBATANKVOY</option>
              <option value="NYPE">NYPE</option>
              <option value="SHELLTIME">SHELLTIME</option>
              <option value="BARECON">BARECON</option>
              <option value="HEAVYCON">HEAVYCON</option>
            </select>
          </Field>
          <div>
            <Label>Why suggested</Label>
            <div className="input" style={{ padding: 10 }}>{cpReason}</div>
          </div>
        </div>
        <div className="row">
          <Field label="Vessel Name">
            <input className="input" name="vesselName" value={form.vesselName} onChange={onChange} placeholder="MV Ocean Star" />
          </Field>
          <Field label="DWT">
            <input className="input" name="dwt" value={form.dwt} onChange={onChange} type="number" placeholder="55000" />
          </Field>
        </div>
        <div className="row">
          <Field label="Built Year">
            <input className="input" name="builtYear" value={form.builtYear} onChange={onChange} type="number" placeholder="2010" />
          </Field>
          <Field label="Flag">
            <input className="input" name="flag" value={form.flag} onChange={onChange} placeholder="Panama" />
          </Field>
        </div>
        <div className="row">
          <Field label="Class">
            <input className="input" name="vesselClass" value={form.vesselClass} onChange={onChange} placeholder="NK/DNV/LR" />
          </Field>
          <Field label="IMO Number">
            <input className="input" name="imoNumber" value={form.imoNumber} onChange={onChange} placeholder="IMO 1234567" />
          </Field>
        </div>
        <div className="row" style={{ marginTop: 8 }}>
          <Field label="Cargo Type">
            <input className="input" name="cargoType" value={form.cargoType} onChange={onChange} placeholder="Wheat" />
          </Field>
          <Field label="Quantity MT">
            <input className="input" name="cargoQtyMt" value={form.cargoQtyMt} onChange={onChange} type="number" placeholder="50000" />
          </Field>
        </div>
        <div className="row">
          <Field label="Tolerance %">
            <input className="input" name="cargoPctTolerance" value={form.cargoPctTolerance} onChange={onChange} type="number" placeholder="10" />
          </Field>
          <Field label="Stowage Factor">
            <input className="input" name="stowageFactor" value={form.stowageFactor} onChange={onChange} placeholder="e.g., 1.15 m³/mt" />
          </Field>
        </div>
        <div className="row">
          <Field label="Load Port(s) (comma separated)">
            <input className="input" name="loadPorts" value={form.loadPorts} onChange={onChange} placeholder="Kandla, India" />
          </Field>
          <Field label="Discharge Port(s) (comma separated)">
            <input className="input" name="dischargePorts" value={form.dischargePorts} onChange={onChange} placeholder="Houston, USA" />
          </Field>
        </div>
        <div className="row">
          <Field label="Laycan Start">
            <input className="input" name="laycanStart" value={form.laycanStart} onChange={onChange} type="date" />
          </Field>
          <Field label="Laycan End">
            <input className="input" name="laycanEnd" value={form.laycanEnd} onChange={onChange} type="date" />
          </Field>
        </div>
        <div className="row">
          <Field label="Canceling Date">
            <input className="input" name="cancelingDate" value={form.cancelingDate} onChange={onChange} type="date" />
          </Field>
          <div></div>
        </div>
        <div className="row">
          <Field label="Freight Type">
            <select name="freightType" value={form.freightType} onChange={onChange}>
              <option value="per_mt">USD per MT</option>
              <option value="lumpsum">USD lumpsum</option>
            </select>
          </Field>
          <Field label="Freight Amount">
            <input className="input" name="freightAmount" value={form.freightAmount} onChange={onChange} type="number" placeholder="42" />
          </Field>
        </div>
        <div className="row">
          <Field label="Freight Terms">
            <input className="input" name="freightTerms" value={form.freightTerms} onChange={onChange} placeholder="FIOT" />
          </Field>
          <Field label="Payment Terms">
            <input className="input" name="paymentTerms" value={form.paymentTerms} onChange={onChange} placeholder="e.g., 95% payable within 3 banking days" />
          </Field>
        </div>
        <div className="row">
          <Field label="Loading Rate">
            <input className="input" name="loadingRate" value={form.loadingRate} onChange={onChange} placeholder="e.g., 10,000 MT/day" />
          </Field>
          <Field label="Discharge Rate">
            <input className="input" name="dischargeRate" value={form.dischargeRate} onChange={onChange} placeholder="e.g., 12,000 MT/day" />
          </Field>
        </div>
        <div className="row">
          <Field label="Loading Terms">
            <input className="input" name="loadingTerms" value={form.loadingTerms} onChange={onChange} placeholder="e.g., SSHEXUU" />
          </Field>
          <Field label="Discharge Terms">
            <input className="input" name="dischargeTerms" value={form.dischargeTerms} onChange={onChange} placeholder="e.g., WWD" />
          </Field>
        </div>
        <div className="row">
          <Field label="Demurrage (USD/day)">
            <input className="input" name="demurragePerDay" value={form.demurragePerDay} onChange={onChange} type="number" placeholder="15000" />
          </Field>
          <Field label="Despatch (USD/day)">
            <input className="input" name="despatchPerDay" value={form.despatchPerDay} onChange={onChange} type="number" placeholder="7500" />
          </Field>
        </div>
        <div className="row">
          <Field label="Commission %">
            <input className="input" name="commissionPct" value={form.commissionPct} onChange={onChange} type="number" step="0.1" placeholder="2.5" />
          </Field>
          <div></div>
        </div>
        <div className="row">
          <Field label="Arbitration Place">
            <input className="input" name="arbitrationPlace" value={form.arbitrationPlace} onChange={onChange} placeholder="London" />
          </Field>
          <Field label="Governing Law">
            <input className="input" name="governingLaw" value={form.governingLaw} onChange={onChange} placeholder="English" />
          </Field>
        </div>
        <div className="row">
          <Field label="Bunkers">
            <input className="input" name="bunkerType" value={form.bunkerType} onChange={onChange} placeholder="e.g., VLSFO/MGO, ROB on delivery/redelivery" />
          </Field>
          <Field label="Costs Responsibility">
            <input className="input" name="costResponsibility" value={form.costResponsibility} onChange={onChange} placeholder="e.g., port charges/dues for charterers" />
          </Field>
        </div>
        <div className="row">
          <Field label="Trading Limits">
            <input className="input" name="tradingLimits" value={form.tradingLimits} onChange={onChange} placeholder="e.g., Worldwide excl. war risk areas" />
          </Field>
          <div></div>
        </div>
        <Field label={<span>Other Key Clauses <span className="badge">one per line</span></span>}>
          <textarea className="input" rows={6} name="otherClauses" value={form.otherClauses} onChange={onChange} />
        </Field>
        <Field label={<span>Special Clauses <span className="badge">one per line</span></span>}>
          <textarea className="input" rows={4} name="specialClauses" value={form.specialClauses} onChange={onChange} placeholder="e.g., NOR: WIBON; WCCON; WIFPON" />
        </Field>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button className="btn" onClick={copyRecap}>
            Copy Recap
          </button>
          <button className="btn" onClick={handleSave}>
            Save
          </button>
          <button className="btn" onClick={handleGenerateCP}>
            Generate CP
          </button>
        </div>
      </div>
      <div className="panel">
        <h1 className="h1">Recap Preview</h1>
        <pre className="pre">{recap}</pre>
      </div>
    </div>
  );
}