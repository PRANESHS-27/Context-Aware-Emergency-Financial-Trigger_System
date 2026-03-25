"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  const [emergencyStatus, setEmergencyStatus] = useState<"normal" | "warning" | "critical">("normal");

  const stats = [
    { label: "Active Monitors", value: "12", icon: "📡", color: "blue" },
    { label: "Emergency Alerts", value: "0", icon: "🚨", color: "green" },
    { label: "Pending Claims", value: "2", icon: "📋", color: "yellow" },
    { label: "Auto Transfers", value: "$15,000", icon: "💰", color: "purple" },
  ];

  const recentActivity = [
    { type: "monitor", title: "Wearable connected", time: "2 min ago", status: "success" },
    { type: "sync", title: "Insurance policy synced", time: "1 hour ago", status: "success" },
    { type: "check", title: "Wellness check passed", time: "3 hours ago", status: "success" },
    { type: "backup", title: "Emergency backup verified", time: "6 hours ago", status: "success" },
  ];

  const connectedServices = [
    { name: "Fitbit", type: "Wearable", status: "connected", icon: "⌚" },
    { name: "Chase Bank", type: "Banking", status: "connected", icon: "🏦" },
    { name: "State Farm", type: "Insurance", status: "connected", icon: "🛡️" },
    { name: "Google Maps", type: "Location", status: "connected", icon: "📍" },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar />
      <main className="ml-64 pt-16">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-400">Overview of your emergency financial protection</p>
            </div>
            <div className="flex items-center gap-4">
              <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                emergencyStatus === "normal" ? "bg-green-500/20 text-green-400" :
                emergencyStatus === "warning" ? "bg-yellow-500/20 text-yellow-400" :
                "bg-red-500/20 text-red-400"
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  emergencyStatus === "normal" ? "bg-green-500" :
                  emergencyStatus === "warning" ? "bg-yellow-500 animate-pulse" :
                  "bg-red-500 animate-pulse"
                }`}></div>
                <span className="font-medium capitalize">{emergencyStatus} Status</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className={`text-xs px-2 py-1 rounded-full bg-${stat.color}-500/20 text-${stat.color}-400`}>
                    Live
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-slate-900 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.status === "success" ? "bg-green-500/20" : "bg-red-500/20"
                    }`}>
                      <span className="text-lg">{activity.status === "success" ? "✓" : "!"}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{activity.title}</div>
                      <div className="text-sm text-gray-400">{activity.time}</div>
                    </div>
                    <span className="text-green-400 text-sm">Completed</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connected Services */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Connected Services</h2>
              <div className="space-y-4">
                {connectedServices.map((service) => (
                  <div key={service.name} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl">{service.icon}</div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{service.name}</div>
                      <div className="text-sm text-gray-400">{service.type}</div>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {service.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Response Config */}
          <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Emergency Response Configuration</h2>
                <p className="text-blue-200">Your autonomous financial triggers are configured and ready</p>
              </div>
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                Configure Triggers
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
