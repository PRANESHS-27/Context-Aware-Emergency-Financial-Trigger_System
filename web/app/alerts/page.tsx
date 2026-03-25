"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function AlertsPage() {
  const [filter, setFilter] = useState<"all" | "active" | "resolved">("all");

  const alerts = [
    {
      id: "ALT-001",
      type: "CARDIAC_EVENT",
      severity: "CRITICAL",
      status: "active",
      timestamp: "2026-03-25 10:30 AM",
      location: "Home - 123 Main St",
      actions: ["Medical payment authorized", "Contact notified", "Insurance claim initiated"],
      confidence: "94%",
    },
    {
      id: "ALT-002",
      type: "FALL_DETECTED",
      severity: "HIGH",
      status: "resolved",
      timestamp: "2026-03-24 03:15 PM",
      location: "Office - 456 Business Ave",
      actions: ["Emergency contact called", "Transfer completed"],
      confidence: "87%",
    },
    {
      id: "ALT-003",
      type: "NATURAL_DISASTER",
      severity: "HIGH",
      status: "resolved",
      timestamp: "2026-03-20 08:00 AM",
      location: "Region - Earthquake Zone",
      actions: ["Payment deferred", "Insurance claim filed", "FEMA application submitted"],
      confidence: "99%",
    },
  ];

  const filteredAlerts = filter === "all" ? alerts : alerts.filter(a => a.status === filter);

  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar />
      <main className="ml-64 pt-16">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Emergency Alerts</h1>
              <p className="text-gray-400">View and manage all emergency detections</p>
            </div>
            <div className="flex gap-2">
              {(["all", "active", "resolved"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    filter === f ? "bg-blue-600 text-white" : "bg-slate-800 text-gray-400 hover:text-white"
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Alert Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-red-400 mb-1">
                {alerts.filter(a => a.status === "active").length}
              </div>
              <div className="text-gray-400">Active Alerts</div>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-400 mb-1">
                {alerts.filter(a => a.severity === "HIGH").length}
              </div>
              <div className="text-gray-400">High Severity</div>
            </div>
            <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-1">
                {alerts.filter(a => a.status === "resolved").length}
              </div>
              <div className="text-gray-400">Resolved</div>
            </div>
          </div>

          {/* Alerts List */}
          <div className="bg-slate-900 border border-slate-700 rounded-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800 border-b border-slate-700">
                  <tr>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Alert ID</th>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Type</th>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Severity</th>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Status</th>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Time</th>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAlerts.map((alert) => (
                    <tr key={alert.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                      <td className="px-6 py-4 text-white font-mono">{alert.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">
                            {alert.type === "CARDIAC_EVENT" ? "🫀" :
                             alert.type === "FALL_DETECTED" ? "🩹" : "🌪️"}
                          </span>
                          <span className="text-white">{alert.type.replace(/_/g, " ")}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          alert.severity === "CRITICAL" ? "bg-red-500/20 text-red-400" :
                          alert.severity === "HIGH" ? "bg-orange-500/20 text-orange-400" :
                          "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {alert.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          alert.status === "active" ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                        }`}>
                          {alert.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-400">{alert.timestamp}</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-400 hover:text-blue-300 font-medium">
                          View Details →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Alert Detail Preview */}
          <div className="mt-8 bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Alert Details Preview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-3">Alert Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-gray-400">Alert ID</span>
                    <span className="text-white font-mono">ALT-001</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-gray-400">Type</span>
                    <span className="text-white">Cardiac Event</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-gray-400">Severity</span>
                    <span className="text-red-400">CRITICAL</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-400">Confidence</span>
                    <span className="text-white">94%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-3">Actions Taken</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-green-400">
                    <span>✓</span>
                    <span>Medical payment authorized - $50,000</span>
                  </li>
                  <li className="flex items-center gap-2 text-green-400">
                    <span>✓</span>
                    <span>Emergency contact notified - Jane Doe</span>
                  </li>
                  <li className="flex items-center gap-2 text-green-400">
                    <span>✓</span>
                    <span>Insurance claim initiated - POL-123456</span>
                  </li>
                  <li className="flex items-center gap-2 text-green-400">
                    <span>✓</span>
                    <span>Fund transfer - $10,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
