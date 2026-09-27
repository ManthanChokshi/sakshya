"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, ShieldAlert, ArrowRight } from "lucide-react";
import { Hero } from "@/components/ui/tailwind-css-background-snippet";

export default function LoginPage() {
  const router = useRouter();
  const [badgeId, setBadgeId] = useState("IO-0142");
  const [role, setRole] = useState("IO");
  const [name, setName] = useState("Inspr. Rajesh Kumar");

  const roleLabel = (r: string) =>
    r === "IO" ? "Investigating Officer" : r === "EXPERT" ? "Forensic Expert" : "System Admin";

  const persist = (badge: string, fullName: string, r: string) => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("sakshya_officer", JSON.stringify({ badge, name: fullName, role: roleLabel(r) }));
      }
    } catch (e) {}
    router.push("/dashboard");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    persist(badgeId, name, role);
  };

  const selectPreset = (presetBadge: string, presetName: string, presetRole: string) => {
    setBadgeId(presetBadge);
    setName(presetName);
    setRole(presetRole);
    persist(presetBadge, presetName, presetRole);
  };

  const presets = [
    { badge: "IO-0142", name: "Inspr. Rajesh Kumar", role: "IO", label: "Investigating Officer" },
    { badge: "EXPERT-901", name: "Dr. Ananya Sharma", role: "EXPERT", label: "Forensic Expert" },
    { badge: "ADMIN-001", name: "Admin Controller", role: "ADMIN", label: "System Administrator" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-5 py-10">
      <div className="fixed inset-0 -z-10">
        <Hero />
      </div>

      <div className="relative w-full max-w-[420px]">
        <div className="flex items-center gap-2.5 justify-center mb-6">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-forensic-violet to-forensic-blue flex items-center justify-center">
            <Shield className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[17px] font-semibold tracking-tight text-white">Sakshya</span>
        </div>

        <div className="p-7 rounded-md border border-white/10 bg-obsidian-900/95">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-forensic-amber/35 bg-forensic-amber/10 text-forensic-amber text-[11px] font-medium mb-4">
            <ShieldAlert className="w-3 h-3" />
            Demo mode — sign-in is simulated
          </div>

          <h2 className="text-[22px] font-semibold tracking-tight text-white mb-1.5">Sign in</h2>
          <p className="text-[13px] text-slate-400 mb-5">Officer identification &amp; role login</p>

          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <label className="block text-xs text-slate-300 mb-1.5">Badge ID</label>
              <input
                type="text"
                value={badgeId}
                onChange={(e) => setBadgeId(e.target.value)}
                className="w-full px-3 py-2.5 rounded-md border border-white/10 bg-white/[0.03] text-white font-mono text-[13px] focus:outline-none focus:border-forensic-cyan"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1.5">Officer full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-md border border-white/10 bg-white/[0.03] text-white text-[13px] focus:outline-none focus:border-forensic-cyan"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1.5">Assigned statutory role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2.5 rounded-md border border-white/10 bg-white/[0.03] text-white text-[13px] focus:outline-none focus:border-forensic-cyan"
              >
                <option value="IO">Investigating Officer — BSA 63(4) Part A Signatory</option>
                <option value="EXPERT">Forensic Technical Expert — BSA 63(4) Part B Signatory</option>
                <option value="ADMIN">System Administrator — Hardware Trust Config</option>
              </select>
            </div>

            <div className="spin-border-wrap w-full mt-1">
              <button
                type="submit"
                className="relative w-full py-2.5 rounded-full bg-obsidian-950 text-white text-sm font-medium flex items-center justify-center gap-2"
              >
                Sign in
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-2.5 my-5">
            <span className="flex-1 h-px bg-white/10" />
            <span className="text-[11px] text-slate-500">Demo sign-in for judges</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex flex-col gap-2">
            {presets.map((p) => (
              <button
                key={p.badge}
                type="button"
                onClick={() => selectPreset(p.badge, p.name, p.role)}
                className="flex items-center justify-between gap-2.5 w-full px-3.5 py-2.5 rounded-md border border-white/10 bg-white/[0.02] text-left transition hover:bg-white/[0.06] hover:border-forensic-cyan/35"
              >
                <span className="text-[13px] text-white">{p.name} <span className="text-slate-500 font-normal">· {p.label}</span></span>
                <span className="text-[11px] text-slate-500 font-mono">{p.badge}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-500 mt-5 font-mono">
          Cryptographically logged session under Bharatiya Sakshya Adhiniyam 2023
        </p>
      </div>
    </div>
  );
}
