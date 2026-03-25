"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

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
    <div className="min-h-screen bg-slate-900 pb-20">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Emergency Detection Demo</h1>
            <p className="text-gray-400">Test the emergency detection system with different scenarios</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input Panel */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4">Sensor Data Input</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Heart Rate (bpm)</label>
                  <input
                    type="number"
                    value={sensorData.heartRate}
                    onChange={(e) => setSensorData({ ...sensorData, heartRate: +e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700 rounded-lg border border-slate-600 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <input
                    type="checkbox"
                    id="fall"
                    checked={sensorData.fallDetected}
                    onChange={(e) => setSensorData({ ...sensorData, fallDetected: e.target.checked })}
                    className="w-5 h-5"
                  />
                  <label htmlFor="fall" className="text-white">Fall Detected</label>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
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
                    className="w-5 h-5"
                  />
                  <label htmlFor="disaster" className="text-white">In Disaster Zone</label>
                </div>

                <button
                  onClick={handleDetect}
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold disabled:opacity-50 transition shadow-lg shadow-blue-600/25"
                >
                  {loading ? "Detecting..." : "Run Detection"}
                </button>
              </div>
            </div>

            {/* Result Panel */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4">Detection Result</h2>

              {result ? (
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${result.isEmergency ? "bg-red-500/20 border border-red-500" : "bg-green-500/20 border border-green-500"}`}>
                    <div className="text-lg font-semibold">
                      {result.isEmergency ? "🚨 EMERGENCY DETECTED" : "✓ No Emergency"}
                    </div>
                    {result.type && <div className="text-sm mt-2 text-gray-300">Type: {result.type}</div>}
                    {result.severity && <div className="text-sm text-gray-300">Severity: {result.severity}</div>}
                    {result.confidence && <div className="text-sm text-gray-300">Confidence: {(result.confidence * 100).toFixed(0)}%</div>}
                  </div>

                  {result.actionsTriggered && result.actionsTriggered.length > 0 && (
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Actions Triggered:</div>
                      <ul className="space-y-1">
                        {result.actionsTriggered.map((action: string) => (
                          <li key={action} className="text-sm text-blue-400 flex items-center gap-2">
                            <span>→</span>
                            {action}
                          </li>
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

          {/* Test Scenarios */}
          <div className="mt-8 bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="font-semibold text-white mb-4">Quick Test Scenarios</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setSensorData({ ...sensorData, heartRate: 200, fallDetected: false, location: { ...sensorData.location, disasterZone: false } });
                }}
                className="px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition"
              >
                🫀 Cardiac Emergency (HR: 200)
              </button>
              <button
                onClick={() => {
                  setSensorData({ ...sensorData, heartRate: 72, fallDetected: true, location: { ...sensorData.location, disasterZone: false } });
                }}
                className="px-4 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-medium transition"
              >
                🩹 Fall Detected
              </button>
              <button
                onClick={() => {
                  setSensorData({ ...sensorData, heartRate: 72, fallDetected: false, location: { ...sensorData.location, disasterZone: true } });
                }}
                className="px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition"
              >
                🌪️ Natural Disaster
              </button>
              <button
                onClick={() => {
                  setSensorData({ ...sensorData, heartRate: 72, fallDetected: false, location: { ...sensorData.location, disasterZone: false } });
                }}
                className="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition"
              >
                ✓ Normal State
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
