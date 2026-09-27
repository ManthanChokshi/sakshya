"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, ShieldCheck, Key } from "lucide-react";
import { getTrustStatus } from "@/lib/api";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Navbar() {
  const [officer, setOfficer] = useState({ badge: "IO-0142", name: "Inspr. Rajesh Kumar", role: "Investigating Officer" });
  const [trustStatus, setTrustStatus] = useState<any>(null);

  useEffect(() => {
    // Check officer session or default
    try {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("sakshya_officer");
        if (stored) {
          setOfficer(JSON.parse(stored));
        }
      }
    } catch (e) {}
    getTrustStatus().then(setTrustStatus).catch(() => {});
  }, []);

  return (
    <header className="h-14 border-b border-white/10 bg-obsidian-950/80 px-5 flex items-center justify-between sticky top-0 z-40">
      {/* Brand & Platform Emblem */}
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-forensic-violet to-forensic-blue flex items-center justify-center shrink-0">
          <Shield className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-sm font-semibold tracking-tight text-white">Sakshya</span>
        <span className="text-forensic-cyan font-mono text-[11px] font-medium px-1.5 py-0.5 rounded bg-forensic-cyan/10 border border-forensic-cyan/30 hidden sm:inline">સાક્ષ્ય</span>
      </div>

      {/* Center Statutory Trust Badges */}
      <div className="hidden md:flex items-center gap-2 text-xs">
        <div className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-forensic-emerald" />
          <span className="text-slate-400">BSA 2023 Sec 63(4)</span>
        </div>
        <div className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] flex items-center gap-1.5">
          <Key className="w-3.5 h-3.5 text-forensic-cyan" />
          <span className="text-slate-400">NIST SP 800-88</span>
        </div>
      </div>

      {/* Right Officer Badge & Trust Status */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        {/* Hardware Trust Indicator */}
        <Link href="/settings/trust">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-forensic-emerald/30 bg-forensic-emerald/5 hover:bg-forensic-emerald/10 transition cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-forensic-emerald animate-pulse"></span>
            <span className="text-[11px] font-mono text-forensic-emerald font-medium hidden lg:inline">
              HW Trust: {trustStatus?.current_method || "STUB_HMAC_ED25519"}
            </span>
          </div>
        </Link>

        {/* Officer Badge Dropdown */}
        <Link href="/login">
          <div className="flex items-center gap-2.5 pl-3 border-l border-white/10 cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-forensic-violet/20 border border-forensic-cyan/30 flex items-center justify-center text-forensic-cyan text-[11px] font-semibold">
              {officer.badge.slice(0, 2)}
            </div>
            <div className="text-left leading-tight">
              <div className="text-[12.5px] font-medium text-slate-200">{officer.name}</div>
              <div className="text-slate-500 text-[11px]">{officer.role}</div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
