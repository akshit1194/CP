import React, { useEffect, useMemo, useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';
const N8N_FORWARD = import.meta.env.VITE_N8N_FORWARD === 'true';

function Label({ children }) {
  return <label className="block text-sm font-medium text-gray-700 mb-1">{children}</label>;
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col">
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

  const [cpTouched, setCpTouched] = useState(false);

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
        recap,
      };
      const res = await fetch(`${API_BASE}/api/fixtures`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
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
      const payload = { ...form, cpSuggested, cpReason, recap };
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
      let filename = 'CharterParty.pdf';
      const match = /filename="?([^";]+)"?/i.exec(disposition);
      if (match && match[1]) filename = match[1];
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form Panel */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-blue-800 mb-6">Fixture Input</h1>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Charter Type">
                <select
                  name="charterType"
                  value={form.charterType}
                  onChange={onChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Voyage">Voyage</option>
                  <option value="Time">Time</option>
                  <option value="Bareboat">Bareboat</option>
                </select>
              </Field>
              <Field label="Cargo Category">
                <select
                  name="cargoNature"
                  value={form.cargoNature}
                  onChange={onChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="BulkDry">Bulk Dry</option>
                  <option value="LiquidTanker">Liquid/Tanker</option>
                  <option value="HeavyLift">Heavy Lift</option>
                </select>
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Shipper Name">
                <input
                  name="shipperName"
                  value={form.shipperName}
                  onChange={onChange}
                  placeholder="ABC Shipping"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Charterer Name">
                <input
                  name="chartererName"
                  value={form.chartererName}
                  onChange={onChange}
                  placeholder="XYZ Trading"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Base CP Template (suggested)">
                <select
                  name="cpBaseForm"
                  value={form.cpBaseForm || cpSuggested}
                  onChange={(e) => {
                    setCpTouched(true);
                    onChange(e);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="GENCON">GENCON</option>
                  <option value="ASBATANKVOY">ASBATANKVOY</option>
                  <option value="NYPE">NYPE</option>
                  <option value="SHELLTIME">SHELLTIME</option>
                  <option value="BARECON">BARECON</option>
                  <option value="HEAVYCON">HEAVYCON</option>
                </select>
              </Field>
              <Field label="Why suggested">
                <div className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md">{cpReason}</div>
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Vessel Name">
                <input
                  name="vesselName"
                  value={form.vesselName}
                  onChange={onChange}
                  placeholder="MV Ocean Star"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="DWT">
                <input
                  name="dwt"
                  value={form.dwt}
                  onChange={onChange}
                  type="number"
                  placeholder="55000"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Built Year">
                <input
                  name="builtYear"
                  value={form.builtYear}
                  onChange={onChange}
                  type="number"
                  placeholder="2010"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Flag">
                <input
                  name="flag"
                  value={form.flag}
                  onChange={onChange}
                  placeholder="Panama"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Class">
                <input
                  name="vesselClass"
                  value={form.vesselClass}
                  onChange={onChange}
                  placeholder="NK/DNV/LR"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="IMO Number">
                <input
                  name="imoNumber"
                  value={form.imoNumber}
                  onChange={onChange}
                  placeholder="IMO 1234567"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Cargo Type">
                <input
                  name="cargoType"
                  value={form.cargoType}
                  onChange={onChange}
                  placeholder="Wheat"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Quantity MT">
                <input
                  name="cargoQtyMt"
                  value={form.cargoQtyMt}
                  onChange={onChange}
                  type="number"
                  placeholder="50000"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Tolerance %">
                <input
                  name="cargoPctTolerance"
                  value={form.cargoPctTolerance}
                  onChange={onChange}
                  type="number"
                  placeholder="10"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Stowage Factor">
                <input
                  name="stowageFactor"
                  value={form.stowageFactor}
                  onChange={onChange}
                  placeholder="e.g., 1.15 m³/mt"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Load Port(s) (comma separated)">
                <input
                  name="loadPorts"
                  value={form.loadPorts}
                  onChange={onChange}
                  placeholder="Kandla, India"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Discharge Port(s) (comma separated)">
                <input
                  name="dischargePorts"
                  value={form.dischargePorts}
                  onChange={onChange}
                  placeholder="Houston, USA"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Laycan Start">
                <input
                  name="laycanStart"
                  value={form.laycanStart}
                  onChange={onChange}
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Laycan End">
                <input
                  name="laycanEnd"
                  value={form.laycanEnd}
                  onChange={onChange}
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Canceling Date">
                <input
                  name="cancelingDate"
                  value={form.cancelingDate}
                  onChange={onChange}
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <div></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Freight Type">
                <select
                  name="freightType"
                  value={form.freightType}
                  onChange={onChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="per_mt">USD per MT</option>
                  <option value="lumpsum">USD lumpsum</option>
                </select>
              </Field>
              <Field label="Freight Amount">
                <input
                  name="freightAmount"
                  value={form.freightAmount}
                  onChange={onChange}
                  type="number"
                  placeholder="42"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Freight Terms">
                <input
                  name="freightTerms"
                  value={form.freightTerms}
                  onChange={onChange}
                  placeholder="FIOT"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Payment Terms">
                <input
                  name="paymentTerms"
                  value={form.paymentTerms}
                  onChange={onChange}
                  placeholder="e.g., 95% payable within 3 banking days"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Loading Rate">
                <input
                  name="loadingRate"
                  value={form.loadingRate}
                  onChange={onChange}
                  placeholder="e.g., 10,000 MT/day"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Discharge Rate">
                <input
                  name="dischargeRate"
                  value={form.dischargeRate}
                  onChange={onChange}
                  placeholder="e.g., 12,000 MT/day"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Loading Terms">
                <input
                  name="loadingTerms"
                  value={form.loadingTerms}
                  onChange={onChange}
                  placeholder="e.g., SSHEXUU"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Discharge Terms">
                <input
                  name="dischargeTerms"
                  value={form.dischargeTerms}
                  onChange={onChange}
                  placeholder="e.g., WWD"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Demurrage (USD/day)">
                <input
                  name="demurragePerDay"
                  value={form.demurragePerDay}
                  onChange={onChange}
                  type="number"
                  placeholder="15000"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Despatch (USD/day)">
                <input
                  name="despatchPerDay"
                  value={form.despatchPerDay}
                  onChange={onChange}
                  type="number"
                  placeholder="7500"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Commission %">
                <input
                  name="commissionPct"
                  value={form.commissionPct}
                  onChange={onChange}
                  type="number"
                  step="0.1"
                  placeholder="2.5"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <div></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Arbitration Place">
                <input
                  name="arbitrationPlace"
                  value={form.arbitrationPlace}
                  onChange={onChange}
                  placeholder="London"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Governing Law">
                <input
                  name="governingLaw"
                  value={form.governingLaw}
                  onChange={onChange}
                  placeholder="English"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Bunkers">
                <input
                  name="bunkerType"
                  value={form.bunkerType}
                  onChange={onChange}
                  placeholder="e.g., VLSFO/MGO, ROB on delivery/redelivery"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <Field label="Costs Responsibility">
                <input
                  name="costResponsibility"
                  value={form.costResponsibility}
                  onChange={onChange}
                  placeholder="e.g., port charges/dues for charterers"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Trading Limits">
                <input
                  name="tradingLimits"
                  value={form.tradingLimits}
                  onChange={onChange}
                  placeholder="e.g., Worldwide excl. war risk areas"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </Field>
              <div></div>
            </div>
            <Field label={<span>Other Key Clauses <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">one per line</span></span>}>
              <textarea
                name="otherClauses"
                value={form.otherClauses}
                onChange={onChange}
                rows={6}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </Field>
            <Field label={<span>Special Clauses <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">one per line</span></span>}>
              <textarea
                name="specialClauses"
                value={form.specialClauses}
                onChange={onChange}
                rows={4}
                placeholder="e.g., NOR: WIBON; WCCON; WIFPON"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </Field>
            <div className="flex gap-4 mt-6">
              <button
                onClick={copyRecap}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Copy Recap
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save
              </button>
              <button
                onClick={handleGenerateCP}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Generate CP
              </button>
            </div>
          </div>
        </div>
        {/* Recap Preview Panel */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-blue-800 mb-6">Recap Preview</h1>
          <pre className="bg-gray-50 p-4 rounded-md text-sm text-gray-800 whitespace-pre-wrap border border-gray-200">{recap}</pre>
        </div>
      </div>
    </div>
  );
}