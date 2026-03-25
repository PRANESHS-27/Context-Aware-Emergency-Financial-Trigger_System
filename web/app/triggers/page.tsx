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
    <div className="min-h-screen bg-slate-950">
      <Sidebar />
      <main className="ml-64 pt-16">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Smart Financial Triggers</h1>
              <p className="text-gray-400">Configure autonomous financial actions for emergencies</p>
            </div>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
              + Add New Trigger
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-4 mb-8 border-b border-slate-700">
            <button
              onClick={() => setActiveTab("medical")}
              className={`px-6 py-4 font-medium transition border-b-2 ${
                activeTab === "medical" ? "text-red-400 border-red-400" : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              🏥 Medical
            </button>
            <button
              onClick={() => setActiveTab("disaster")}
              className={`px-6 py-4 font-medium transition border-b-2 ${
                activeTab === "disaster" ? "text-orange-400 border-orange-400" : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              🌪️ Disaster
            </button>
            <button
              onClick={() => setActiveTab("travel")}
              className={`px-6 py-4 font-medium transition border-b-2 ${
                activeTab === "travel" ? "text-purple-400 border-purple-400" : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              ✈️ Travel
            </button>
          </div>

          {/* Triggers List */}
          <div className="space-y-6">
            {currentTriggers.map((trigger) => (
              <div key={trigger.id} className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      trigger.enabled ? "bg-green-500/20" : "bg-gray-500/20"
                    }`}>
                      <span className="text-2xl">{trigger.enabled ? "✓" : "○"}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{trigger.name}</h3>
                      <p className="text-gray-400 text-sm font-mono">{trigger.id}</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={trigger.enabled} onChange={() => {}} className="sr-only peer" />
                    <div className="w-14 h-7 bg-slate-700 peer-checked:bg-blue-600 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full relative transition">
                    </div>
                  </label>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Trigger Threshold</h4>
                    <div className="bg-slate-800 rounded-lg p-3 font-mono text-sm text-white">
                      {trigger.threshold}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Auto Transfer Limit</h4>
                    <div className="bg-slate-800 rounded-lg p-3 text-white">
                      {trigger.limit}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Actions</h4>
                    <ul className="space-y-1">
                      {trigger.actions.map((action, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                          <span className="text-blue-400">→</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 mt-6 pt-6 border-t border-slate-800">
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
          <div className="mt-8 bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Global Trigger Settings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Maximum Autonomous Transfer</label>
                <input type="text" defaultValue="$100,000" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Emergency Fund Reserve</label>
                <input type="text" defaultValue="$50,000" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Reversal Window</label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
                  <option>24 hours</option>
                  <option>48 hours</option>
                  <option selected>72 hours</option>
                  <option>7 days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Confidence Threshold</label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
                  <option>80%</option>
                  <option selected>85%</option>
                  <option>90%</option>
                  <option>95%</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-6">
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
