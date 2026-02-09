'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// --- Icons ---
const Icons = {
  Brain: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
      <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
      <path d="M6 18a4 4 0 0 1-1.97-1.364"/>
      <path d="M19.97 16.636A4 4 0 0 1 18 18"/>
    </svg>
  ),
  AlertTriangle: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <path d="M12 9v4"/>
      <path d="M12 17h.01"/>
    </svg>
  ),
  TrendingUp: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  Users: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  DollarSign: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  Activity: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  ArrowRight: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  Settings: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
};

// --- Mock Data ---

const NORTH_STAR = [
  { label: "Total Revenue", value: "$42,850", trend: "+12.5%", icon: Icons.DollarSign, color: "text-emerald-400" },
  { label: "Blended ROAS", value: "3.8x", trend: "+0.4", icon: Icons.Activity, color: "text-blue-400" },
  { label: "Total Leads", value: "2,405", trend: "+8.2%", icon: Icons.Users, color: "text-purple-400" },
];

const FUNNEL_METRICS = {
  acquisition: [
    { label: "Ad Spend", value: "$11,250" },
    { label: "Impressions", value: "850k" },
    { label: "CPM", value: "$13.20" },
  ],
  engagement: [
    { label: "LP Views", value: "42,000" },
    { label: "Chat Starts", value: "8,500" },
    { label: "Engage Rate", value: "20.2%" },
  ],
  conversion: [
    { label: "Sales", value: "580" },
    { label: "Avg Order Val", value: "$74.00" },
    { label: "Conv Rate", value: "1.4%" },
  ],
};

const SOURCE_DATA = [
  { source: "Direct Traffic", visitors: "12,500", leads: "850", conv: "6.8%", revenue: "$15,200", status: "Stable" },
  { source: "AI Chatbot", visitors: "8,200", leads: "1,240", conv: "15.1%", revenue: "$18,400", status: "Trending" },
  { source: "Email Recovery", visitors: "3,400", leads: "315", conv: "9.2%", revenue: "$9,250", status: "Review" },
];

const ANOMALIES = [
  { id: 1, message: "Chatbot conversion dropped 15% in last 4 hours", severity: "high" },
  { id: 2, message: "CPC spike in Ad Set #4 (Acquisition)", severity: "medium" },
];

// --- Components ---

const MetricCard = ({ item }: { item: typeof NORTH_STAR[0] }) => (
  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors ${item.color}`}>
        <item.icon className="w-6 h-6" />
      </div>
      <div className={`text-sm font-medium px-2 py-1 rounded-full bg-zinc-950 border border-zinc-800 ${item.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
        {item.trend}
      </div>
    </div>
    <div>
      <h3 className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-1">{item.label}</h3>
      <p className="text-3xl font-bold text-white tracking-tight">{item.value}</p>
    </div>
  </div>
);

const FunnelColumn = ({ title, metrics, isLast }: { title: string, metrics: { label: string, value: string }[], isLast?: boolean }) => (
  <div className="flex-1 min-w-[250px] relative">
    <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">{title}</h4>
    <div className="space-y-4">
      {metrics.map((m, i) => (
        <div key={i} className="flex justify-between items-center group">
          <span className="text-zinc-500 text-sm group-hover:text-zinc-400 transition-colors">{m.label}</span>
          <span className="text-white font-mono font-medium">{m.value}</span>
        </div>
      ))}
    </div>
    {!isLast && (
      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 text-zinc-800 z-10">
        <Icons.ArrowRight className="w-6 h-6" />
      </div>
    )}
  </div>
);

const AlertBanner = ({ anomaly }: { anomaly: typeof ANOMALIES[0] }) => (
  <div className={`flex items-center gap-3 p-3 rounded-lg border ${anomaly.severity === 'high' ? 'bg-rose-950/20 border-rose-900/50 text-rose-200' : 'bg-amber-950/20 border-amber-900/50 text-amber-200'}`}>
    <Icons.AlertTriangle className="w-5 h-5 shrink-0" />
    <span className="text-sm font-medium">{anomaly.message}</span>
  </div>
);

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview'|'details'>('overview');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-emerald-500/30">
      
      {/* Navbar */}
      <nav className="border-b border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-900/20">
                <Icons.Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">P2P <span className="text-emerald-500">Engine</span></span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden sm:flex text-xs text-zinc-500 font-mono gap-4">
                <span>SYSTEM: ONLINE</span>
                <span>V2.4.0</span>
             </div>
             <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
               <Icons.Settings className="w-5 h-5" />
             </button>
             <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 text-sm font-medium">
               XO
             </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Executive Command Center</h1>
            <p className="text-zinc-400 text-sm">Real-time performance monitoring across all channels.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-sm font-medium">
              Export Report
            </button>
          </div>
        </div>

        {/* 2. Red Flag Alerts (Anomalies) */}
        {ANOMALIES.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Active Anomalies</h3>
            <div className="grid gap-2">
              {ANOMALIES.map((anomaly) => (
                <AlertBanner key={anomaly.id} anomaly={anomaly} />
              ))}
            </div>
          </div>
        )}

        {/* 1. Top Row: North Star Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NORTH_STAR.map((metric, i) => (
            <MetricCard key={i} item={metric} />
          ))}
        </div>

        {/* 1. Middle Row: The Funnel Flow */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8">
           <h3 className="text-lg font-semibold text-white mb-6">Funnel Performance</h3>
           <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
             <FunnelColumn title="Acquisition" metrics={FUNNEL_METRICS.acquisition} />
             <div className="w-full h-px bg-zinc-800 lg:hidden"></div> {/* Mobile Divider */}
             <FunnelColumn title="Engagement" metrics={FUNNEL_METRICS.engagement} />
             <div className="w-full h-px bg-zinc-800 lg:hidden"></div> {/* Mobile Divider */}
             <FunnelColumn title="Conversion" metrics={FUNNEL_METRICS.conversion} isLast />
           </div>
        </div>

        {/* 1. Bottom Row: Source Breakdown */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Source Breakdown</h3>
            <div className="flex gap-2 p-1 bg-zinc-900 rounded-lg border border-zinc-800">
               <button 
                 onClick={() => setActiveTab('overview')}
                 className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'overview' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 Overview
               </button>
               <button 
                 onClick={() => setActiveTab('details')}
                 className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'details' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 Detailed View
               </button>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-900/50 text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="px-6 py-4 font-medium">Channel Source</th>
                  <th className="px-6 py-4 font-medium text-right">Visitors</th>
                  <th className="px-6 py-4 font-medium text-right">Leads</th>
                  <th className="px-6 py-4 font-medium text-right">Conv. Rate</th>
                  <th className="px-6 py-4 font-medium text-right">Revenue</th>
                  <th className="px-6 py-4 font-medium text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {SOURCE_DATA.map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-900/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{row.source}</td>
                    <td className="px-6 py-4 text-right text-zinc-300">{row.visitors}</td>
                    <td className="px-6 py-4 text-right text-zinc-300">{row.leads}</td>
                    <td className="px-6 py-4 text-right text-emerald-400">{row.conv}</td>
                    <td className="px-6 py-4 text-right text-white font-mono">{row.revenue}</td>
                    <td className="px-6 py-4 text-center">
                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                         row.status === 'Trending' ? 'bg-emerald-500/10 text-emerald-500' :
                         row.status === 'Review' ? 'bg-rose-500/10 text-rose-500' :
                         'bg-zinc-500/10 text-zinc-500'
                       }`}>
                         {row.status}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
