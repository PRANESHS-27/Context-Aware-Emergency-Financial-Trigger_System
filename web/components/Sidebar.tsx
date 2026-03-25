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
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-slate-900 border-r border-slate-700 overflow-y-auto">
      <div className="p-4">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">System Active</span>
          </div>
          <div className="text-2xl font-bold text-white">99.9%</div>
          <div className="text-xs text-blue-200">Uptime this month</div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  pathname === item.href
                    ? "bg-blue-600 text-white"
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

        <div className="mt-6 p-4 bg-slate-800 rounded-xl">
          <div className="text-sm font-medium text-gray-400 mb-2">Need Help?</div>
          <div className="text-xs text-gray-500 mb-3">Contact our 24/7 support team</div>
          <Link href="/contact" className="text-sm text-blue-400 hover:text-blue-300">
            Contact Support →
          </Link>
        </div>
      </div>
    </aside>
  );
}
