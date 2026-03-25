"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/alerts", label: "Alerts", icon: "🚨" },
    { href: "/triggers", label: "Smart Triggers", icon: "⚡" },
    { href: "/demo", label: "Demo", icon: "🧪" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CA</span>
            </div>
            <span className="text-xl font-bold text-white">CAEFTS</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition flex items-center gap-2">
              <span>🚨</span>
              <span className="hidden sm:inline">SOS</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
