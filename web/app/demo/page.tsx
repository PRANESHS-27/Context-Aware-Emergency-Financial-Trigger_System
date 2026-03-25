"use client";

import { useState } from "react";

export default function DemoPage() {
  const [sensorData, setSensorData] = useState({
    heartRate: 72,
    fallDetected: false,
    location: { lat: 40.7128, lng: -74.006, disasterZone: false },
    accelerometer: [0, 0, -9.8],
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleDetect = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/emergency/detect", {
        method: "POST",
        body: JSON.stringify({ userId: "demo-user", sensorData }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: "Detection failed" });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Emergency Detection Demo</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Sensor Data Input</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Heart Rate (bpm)</label>
                <input
                  type="number"
                  value={sensorData.heartRate}
                  onChange={(e) => setSensorData({ ...sensorData, heartRate: +e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="fall"
                  checked={sensorData.fallDetected}
                  onChange={(e) => setSensorData({ ...sensorData, fallDetected: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="fall">Fall Detected</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="disaster"
                  checked={sensorData.location.disasterZone}
                  onChange={(e) =>
                    setSensorData({
                      ...sensorData,
                      location: { ...sensorData.location, disasterZone: e.target.checked },
                    })
                  }
                  className="w-4 h-4"
                />
                <label htmlFor="disaster">In Disaster Zone</label>
              </div>

              <button
                onClick={handleDetect}
                disabled={loading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Detecting..." : "Run Detection"}
              </button>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Detection Result</h2>

            {result ? (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${result.isEmergency ? "bg-red-500/20 border border-red-500" : "bg-green-500/20 border border-green-500"}`}>
                  <div className="text-lg font-semibold">
                    {result.isEmergency ? "🚨 EMERGENCY DETECTED" : "✓ No Emergency"}
                  </div>
                  {result.type && <div className="text-sm mt-2">Type: {result.type}</div>}
                  {result.severity && <div className="text-sm">Severity: {result.severity}</div>}
                  {result.confidence && <div className="text-sm">Confidence: {(result.confidence * 100).toFixed(0)}%</div>}
                </div>

                {result.actionsTriggered && result.actionsTriggered.length > 0 && (
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Actions Triggered:</div>
                    <ul className="space-y-1">
                      {result.actionsTriggered.map((action: string) => (
                        <li key={action} className="text-sm text-blue-400">→ {action}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-400">Click "Run Detection" to test the emergency detection system.</p>
            )}
          </div>
        </div>

        <div className="mt-8 p-6 bg-slate-800 rounded-xl">
          <h3 className="font-semibold mb-4">Test Scenarios</h3>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                setSensorData({ ...sensorData, heartRate: 200, fallDetected: false, location: { ...sensorData.location, disasterZone: false } });
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
            >
              Cardiac Emergency (HR: 200)
            </button>
            <button
              onClick={() => {
                setSensorData({ ...sensorData, heartRate: 72, fallDetected: true, location: { ...sensorData.location, disasterZone: false } });
              }}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm"
            >
              Fall Detected
            </button>
            <button
              onClick={() => {
                setSensorData({ ...sensorData, heartRate: 72, fallDetected: false, location: { ...sensorData.location, disasterZone: true } });
              }}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm"
            >
              Natural Disaster
            </button>
            <button
              onClick={() => {
                setSensorData({ ...sensorData, heartRate: 72, fallDetected: false, location: { ...sensorData.location, disasterZone: false } });
              }}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm"
            >
              Normal State
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
