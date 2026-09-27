"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusCircle, Trash2, HardDrive, FileText, History, KeyRound } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  // Extract case ID if currently inside /cases/[id]
  const caseMatch = pathname.match(/\/cases\/([^\/]+)/);
  const currentCaseId = caseMatch && caseMatch[1] !== "new" ? caseMatch[1] : "c1001-forensic-case-delhi";

  const navItems = [
    { label: "Cases", href: "/dashboard", icon: LayoutDashboard },
    { label: "Register case", href: "/cases/new", icon: PlusCircle, highlight: true },
    { label: "Drive eraser", href: `/cases/${currentCaseId}/sanitize`, icon: Trash2 },
    { label: "Recovery", href: `/cases/${currentCaseId}/recover`, icon: HardDrive },
    { label: "Certificates", href: `/cases/${currentCaseId}/certificates`, icon: FileText },
    { label: "Timeline", href: `/cases/${currentCaseId}/timeline`, icon: History },
    { label: "Settings", href: "/settings/trust", icon: KeyRound },
  ];

  return (
    <aside className="w-56 border-r border-white/10 bg-obsidian-900 flex flex-col justify-between p-3 shrink-0 min-h-[calc(100vh-3.5rem)]">
      <div className="space-y-4">
        <nav className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href.includes('/cases/') && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-medium transition ${
                    isActive
                      ? "bg-forensic-violet/15 text-forensic-cyan border border-forensic-cyan/30"
                      : item.highlight
                      ? "text-forensic-blue hover:bg-white/5"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-forensic-cyan" : "text-slate-500"}`} />
                  <span>{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Active Case Context Panel */}
        <div className="p-3 rounded-md bg-obsidian-850 border border-white/5">
          <div className="text-[10px] text-slate-500 font-mono">ACTIVE CASE SCOPE</div>
          <div className="text-xs font-bold text-slate-200 truncate mt-1">FIR-2026/0491-CYBER</div>
          <div className="text-[10px] text-forensic-emerald font-mono mt-0.5">STATUS: IN_PROGRESS</div>
        </div>
      </div>

      {/* Engine status footer — matches sandbox banner: everything here is simulated */}
      <div className="border-t border-white/5 pt-3 px-1 text-[11px]">
        <div className="text-slate-500 mb-1.5">Engine</div>
        <div className="flex items-center gap-1.5 text-forensic-amber">
          <span className="w-1.5 h-1.5 rounded-full bg-forensic-amber animate-pulse"></span>
          Simulated
        </div>
      </div>
    </aside>
  );
}
