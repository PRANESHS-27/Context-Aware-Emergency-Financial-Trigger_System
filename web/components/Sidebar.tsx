"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: "📊", subitems: [] },
    { href: "/alerts", label: "Emergency Alerts", icon: "🚨", subitems: [
      { href: "/alerts#active", label: "Active" },
      { href: "/alerts#history", label: "History" },
      { href: "/alerts#settings", label: "Settings" },
    ]},
    { href: "/triggers", label: "Smart Triggers", icon: "⚡", subitems: [
      { href: "/triggers#medical", label: "Medical" },
      { href: "/triggers#disaster", label: "Disaster" },
      { href: "/triggers#travel", label: "Travel" },
    ]},
    { href: "/transactions", label: "Transactions", icon: "💰", subitems: [] },
    { href: "/policies", label: "Insurance Policies", icon: "📋", subitems: [] },
    { href: "/contacts", label: "Emergency Contacts", icon: "👥", subitems: [] },
    { href: "/settings", label: "Settings", icon: "⚙️", subitems: [] },
  ];

  return (
    <aside className="hidden xl:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-slate-900 border-r border-slate-700 overflow-y-auto">
      <div className="p-4 space-y-4">
        {/* Status Card */}
        <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">System Online</span>
          </div>
          <div className="text-2xl font-bold text-white">99.9%</div>
          <div className="text-xs text-gray-400">Uptime this month</div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  pathname === item.href
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "text-gray-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
              {item.subitems && item.subitems.length > 0 && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.subitems.map((subitem) => (
                    <Link
                      key={subitem.href}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-300 transition"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Help Card */}
        <div className="bg-slate-800 rounded-xl p-4">
          <div className="text-sm font-medium text-white mb-1">Need Help?</div>
          <div className="text-xs text-gray-400 mb-3">24/7 support available</div>
          <Link href="/contact" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
            Contact Support
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
}
