"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function TriggersPage() {
  const [activeTab, setActiveTab] = useState<"medical" | "disaster" | "travel">("medical");

  const triggers = {
    medical: [
      {
        id: "MED-001",
        name: "Cardiac Event Detection",
        enabled: true,
        threshold: "HR > 180 or HR < 40",
        actions: ["Authorize medical payment", "Transfer to emergency contact", "Initiate insurance claim"],
        limit: "$50,000",
      },
      {
        id: "MED-002",
        name: "Fall Detection",
        enabled: true,
        threshold: "Sudden impact + no movement",
        actions: ["Contact emergency contact", "Enable emergency funds"],
        limit: "$10,000",
      },
      {
        id: "MED-003",
        name: "Unconsciousness Detection",
        enabled: false,
        threshold: "No response + abnormal vitals",
        actions: ["Full emergency protocol"],
        limit: "$100,000",
      },
    ],
    disaster: [
      {
        id: "DIS-001",
        name: "Earthquake Response",
        enabled: true,
        threshold: "Location in disaster zone + official alert",
        actions: ["Defer payments", "File insurance claim", "FEMA application"],
        limit: "Unlimited",
      },
      {
        id: "DIS-002",
        name: "Flood Response",
        enabled: true,
        threshold: "Flood warning + home location",
        actions: ["Insurance claim", "Emergency loan"],
        limit: "$75,000",
      },
      {
        id: "DIS-003",
        name: "Hurricane Response",
        enabled: true,
        threshold: "Hurricane category 3+ in area",
        actions: ["Payment deferral", "Emergency funds"],
        limit: "$50,000",
      },
    ],
    travel: [
      {
        id: "TRV-001",
        name: "Stranded Detection",
        enabled: true,
        threshold: "Unusual location + distress pattern",
        actions: ["Cash advance", "Travel insurance claim"],
        limit: "$25,000",
      },
      {
        id: "TRV-002",
        name: "Medical Emergency Abroad",
        enabled: true,
        threshold: "Foreign location + medical alert",
        actions: ["Medical payment", "Embassy notification"],
        limit: "$100,000",
      },
      {
        id: "TRV-003",
        name: "Lost Document Response",
        enabled: false,
        threshold: "Reported lost + travel location",
        actions: ["Emergency funds", "Assistance request"],
        limit: "$5,000",
      },
    ],
  };

  const currentTriggers = triggers[activeTab];

  return (
    <div className="min-h-screen bg-slate-950 pb-20 xl:pb-8">
      <Sidebar />
      <main className="xl:ml-64 pt-16">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Smart Financial Triggers</h1>
              <p className="text-gray-400">Configure autonomous financial actions for emergencies</p>
            </div>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition text-sm sm:text-base">
              + Add New Trigger
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 mb-6 border-b border-slate-700 overflow-x-auto">
            <button
              onClick={() => setActiveTab("medical")}
              className={`px-4 sm:px-6 py-4 font-medium transition border-b-2 whitespace-nowrap ${
                activeTab === "medical" ? "text-red-400 border-red-400" : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              🏥 Medical
            </button>
            <button
              onClick={() => setActiveTab("disaster")}
              className={`px-4 sm:px-6 py-4 font-medium transition border-b-2 whitespace-nowrap ${
                activeTab === "disaster" ? "text-orange-400 border-orange-400" : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              🌪️ Disaster
            </button>
            <button
              onClick={() => setActiveTab("travel")}
              className={`px-4 sm:px-6 py-4 font-medium transition border-b-2 whitespace-nowrap ${
                activeTab === "travel" ? "text-purple-400 border-purple-400" : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              ✈️ Travel
            </button>
          </div>

          {/* Triggers List */}
          <div className="space-y-6">
            {currentTriggers.map((trigger) => (
              <div key={trigger.id} className="bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      trigger.enabled ? "bg-green-500/20" : "bg-gray-500/20"
                    }`}>
                      <span className="text-2xl">{trigger.enabled ? "✓" : "○"}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{trigger.name}</h3>
                      <p className="text-gray-400 text-sm font-mono">{trigger.id}</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={trigger.enabled} onChange={() => {}} className="sr-only peer" />
                    <div className="w-14 h-7 bg-slate-700 peer-checked:bg-blue-600 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all relative transition">
                    </div>
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Trigger Threshold</h4>
                    <div className="bg-slate-800 rounded-lg p-3 font-mono text-xs sm:text-sm text-white">
                      {trigger.threshold}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Auto Transfer Limit</h4>
                    <div className="bg-slate-800 rounded-lg p-3 text-white text-sm">
                      {trigger.limit}
                    </div>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Actions</h4>
                    <ul className="space-y-1">
                      {trigger.actions.map((action, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                          <span className="text-blue-400">→</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800">
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition">
                    Edit Configuration
                  </button>
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition">
                    Test Trigger
                  </button>
                  <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-medium transition">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Global Settings */}
          <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">Global Trigger Settings</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Max Transfer</label>
                <input type="text" defaultValue="$100,000" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Emergency Reserve</label>
                <input type="text" defaultValue="$50,000" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Reversal Window</label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500">
                  <option>24 hours</option>
                  <option>48 hours</option>
                  <option selected>72 hours</option>
                  <option>7 days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Confidence Threshold</label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500">
                  <option>80%</option>
                  <option selected>85%</option>
                  <option>90%</option>
                  <option>95%</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
