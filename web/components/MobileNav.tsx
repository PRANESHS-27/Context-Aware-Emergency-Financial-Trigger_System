"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Home", icon: "📊" },
    { href: "/alerts", label: "Alerts", icon: "🚨" },
    { href: "/triggers", label: "Triggers", icon: "⚡" },
    { href: "/demo", label: "Demo", icon: "🧪" },
  ];

  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
              pathname === item.href
                ? "text-blue-400 bg-blue-600/10"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
