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
    <div className="min-h-screen bg-slate-950 pb-20 xl:pb-8">
      <Sidebar />
      <main className="xl:ml-64 pt-16">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Emergency Alerts</h1>
              <p className="text-gray-400">View and manage all emergency detections</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {(["all", "active", "resolved"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
                    filter === f ? "bg-blue-600 text-white" : "bg-slate-800 text-gray-400 hover:text-white"
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Alert Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-400 mb-1">
                {alerts.filter(a => a.status === "active").length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Active</div>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-orange-400 mb-1">
                {alerts.filter(a => a.severity === "HIGH").length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">High Severity</div>
            </div>
            <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {alerts.filter(a => a.status === "resolved").length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Resolved</div>
            </div>
          </div>

          {/* Alerts Table */}
          <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-slate-800 border-b border-slate-700">
                  <tr>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Alert ID</th>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Type</th>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Severity</th>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Status</th>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Time</th>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAlerts.map((alert) => (
                    <tr key={alert.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                      <td className="px-6 py-4 text-white font-mono text-sm">{alert.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">
                            {alert.type === "CARDIAC_EVENT" ? "🫀" :
                             alert.type === "FALL_DETECTED" ? "🩹" : "🌪️"}
                          </span>
                          <span className="text-white text-sm">{alert.type.replace(/_/g, " ")}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          alert.severity === "CRITICAL" ? "bg-red-500/20 text-red-400" :
                          alert.severity === "HIGH" ? "bg-orange-500/20 text-orange-400" :
                          "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {alert.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          alert.status === "active" ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                        }`}>
                          {alert.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{alert.timestamp}</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                          View →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Alert Detail Preview */}
          <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Alert Details Preview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-3">Alert Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-gray-400 text-sm">Alert ID</span>
                    <span className="text-white font-mono text-sm">ALT-001</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-gray-400 text-sm">Type</span>
                    <span className="text-white text-sm">Cardiac Event</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-gray-400 text-sm">Severity</span>
                    <span className="text-red-400 text-sm">CRITICAL</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-400 text-sm">Confidence</span>
                    <span className="text-white text-sm">94%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-3">Actions Taken</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-green-400">
                    <span>✓</span>
                    <span className="text-sm">Medical payment authorized - $50,000</span>
                  </li>
                  <li className="flex items-center gap-2 text-green-400">
                    <span>✓</span>
                    <span className="text-sm">Emergency contact notified - Jane Doe</span>
                  </li>
                  <li className="flex items-center gap-2 text-green-400">
                    <span>✓</span>
                    <span className="text-sm">Insurance claim initiated - POL-123456</span>
                  </li>
                  <li className="flex items-center gap-2 text-green-400">
                    <span>✓</span>
                    <span className="text-sm">Fund transfer - $10,000</span>
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
