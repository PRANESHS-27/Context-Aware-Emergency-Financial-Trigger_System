"use client";

import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  const stats = [
    { label: "Active Monitors", value: "12", icon: "📡", trend: "+2 this week", color: "blue" },
    { label: "Emergency Alerts", value: "0", icon: "🚨", trend: "All clear", color: "green" },
    { label: "Pending Claims", value: "2", icon: "📋", trend: "Awaiting review", color: "yellow" },
    { label: "Auto Transfers", value: "$15K", icon: "💰", trend: "This month", color: "purple" },
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
    <div className="min-h-screen bg-slate-950 pb-20 xl:pb-8">
      <Sidebar />
      <main className="xl:ml-64 pt-16">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-400">Overview of your emergency financial protection</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full self-start">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-400">System Normal</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className={`text-xs px-2 py-1 rounded-full bg-${stat.color}-500/20 text-${stat.color}-400`}>
                    Live
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.trend}</div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.status === "success" ? "bg-green-500/20" : "bg-red-500/20"
                    }`}>
                      <span className="text-sm sm:text-lg">{activity.status === "success" ? "✓" : "!"}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium text-sm sm:text-base truncate">{activity.title}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{activity.time}</div>
                    </div>
                    <span className="text-xs sm:text-sm text-green-400 flex-shrink-0">Done</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connected Services */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Connected Services</h2>
              <div className="space-y-3">
                {connectedServices.map((service) => (
                  <div key={service.name} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-xl sm:text-2xl">{service.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium text-sm truncate">{service.name}</div>
                      <div className="text-xs text-gray-400">{service.type}</div>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                      {service.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Response Config */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">Emergency Response Ready</h2>
                <p className="text-blue-200 text-sm">Your autonomous financial triggers are configured and active</p>
              </div>
              <button className="px-4 sm:px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition text-sm sm:text-base">
                Configure Triggers
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
