'use client';

import React from 'react';
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
  Chart: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3v18h18"/>
      <path d="m19 9-5 5-4-4-3 3"/>
    </svg>
  ),
  Settings: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Activity: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  Target: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Message: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Mail: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Leaf: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  ArrowUpRight: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 7h10v10"/>
      <path d="M7 17 17 7"/>
    </svg>
  ),
};

// --- Mock Data ---
const DATA = {
  funnelA: {
    title: "Direct",
    icon: Icons.Target,
    metrics: [
      { label: "Ad Spend", value: "$4,250", trend: "+12%" },
      { label: "ROAS", value: "3.4x", trend: "+0.2" },
      { label: "Sales", value: "$14,450", trend: "+15%" },
    ]
  },
  funnelB: {
    title: "Chatbot",
    icon: Icons.Message,
    metrics: [
      { label: "Conversations", value: "1,240", trend: "+8%" },
      { label: "Link Clicks", value: "856", trend: "+5%" },
      { label: "Sales", value: "$6,200", trend: "+10%" },
    ]
  },
  funnelC: {
    title: "Recovery",
    icon: Icons.Mail,
    metrics: [
      { label: "Emails Sent", value: "3,400", trend: "+2%" },
      { label: "Open Rate", value: "42%", trend: "-1%" },
      { label: "Recovered", value: "$2,850", trend: "+18%" },
    ]
  },
  funnelD: {
    title: "Organic",
    icon: Icons.Leaf,
    metrics: [
      { label: "Views", value: "45K", trend: "+22%" },
      { label: "Sales", value: "$1,100", trend: "+4%" },
    ]
  }
};

const REVENUE_DATA = [
  { name: 'Direct', value: 14450, color: 'bg-emerald-500' },
  { name: 'Chatbot', value: 6200, color: 'bg-emerald-600' },
  { name: 'Recovery', value: 2850, color: 'bg-emerald-700' },
  { name: 'Organic', value: 1100, color: 'bg-emerald-800' },
];

const TOTAL_REVENUE = REVENUE_DATA.reduce((acc, curr) => acc + curr.value, 0);

// --- Components ---

const FunnelCard = ({ data }: { data: typeof DATA.funnelA }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <data.icon className="w-24 h-24 text-emerald-500" />
    </div>
    
    <div className="flex items-center gap-3 mb-6 relative z-10">
      <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg group-hover:border-emerald-500/50 transition-colors">
        <data.icon className="w-5 h-5 text-emerald-500" />
      </div>
      <h3 className="font-semibold text-white text-lg">{data.title}</h3>
    </div>

    <div className="space-y-4 relative z-10">
      {data.metrics.map((metric, i) => (
        <div key={i} className="flex justify-between items-end border-b border-zinc-800/50 pb-2 last:border-0 last:pb-0">
          <span className="text-sm text-zinc-500">{metric.label}</span>
          <div className="text-right">
            <div className="text-white font-mono font-medium">{metric.value}</div>
            <div className={`text-[10px] ${metric.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
              {metric.trend}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RevenueComposition = () => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold text-white">Revenue Composition</h3>
      <div className="text-2xl font-bold text-white">${TOTAL_REVENUE.toLocaleString()}</div>
    </div>

    {/* Simple Stacked Bar */}
    <div className="h-4 w-full flex rounded-full overflow-hidden mb-6">
      {REVENUE_DATA.map((item, i) => (
        <div 
          key={i} 
          className={`${item.color} hover:brightness-110 transition-all relative group`} 
          style={{ width: `${(item.value / TOTAL_REVENUE) * 100}%` }}
        >
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-zinc-950 text-white text-xs px-2 py-1 rounded border border-zinc-800 whitespace-nowrap z-20">
            {item.name}: ${(item.value / 1000).toFixed(1)}k
          </div>
        </div>
      ))}
    </div>

    {/* Legend */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {REVENUE_DATA.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
          <div>
            <div className="text-xs text-zinc-400">{item.name}</div>
            <div className="text-sm font-medium text-white">{Math.round((item.value / TOTAL_REVENUE) * 100)}%</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-emerald-500/30">
      
      {/* Top Navigation */}
      <nav className="border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-900/20">
                <Icons.Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">P2P <span className="text-emerald-500">Engine</span></span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
             <Link href="/dashboard/creator" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Creator Tools
             </Link>
            <div className="h-6 w-px bg-zinc-800 mx-2"></div>
            <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
              <Icons.Settings className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 text-sm font-medium">
              R
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Command Center</h1>
            <p className="text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All systems nominal. Tracking 4 active funnels.
            </p>
          </div>
          <div className="flex gap-3">
             <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-sm font-medium">
               Customize View
             </button>
             <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all text-sm font-medium shadow-lg shadow-emerald-900/20 flex items-center gap-2">
               Generate Report
               <Icons.ArrowUpRight className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* 4-Funnel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FunnelCard data={DATA.funnelA} />
          <FunnelCard data={DATA.funnelB} />
          <FunnelCard data={DATA.funnelC} />
          <FunnelCard data={DATA.funnelD} />
        </div>

        {/* Lower Section: Charts & Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Revenue Composition (2/3 width) */}
          <div className="lg:col-span-2">
             <RevenueComposition />
          </div>

          {/* Quick Stats / Feed (1/3 width) */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
               <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Live Alerts</h3>
               <div className="space-y-4">
                 <div className="flex gap-3 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                   <div>
                     <p className="text-sm text-zinc-300">High ROAS detected in <span className="text-emerald-400">Direct Funnel</span>.</p>
                     <p className="text-xs text-zinc-500 mt-1">10 mins ago</p>
                   </div>
                 </div>
                 <div className="flex gap-3 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                   <div>
                     <p className="text-sm text-zinc-300">New Chatbot script deployed.</p>
                     <p className="text-xs text-zinc-500 mt-1">1 hour ago</p>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex items-center justify-between">
              <div>
                 <div className="text-sm text-zinc-400">Total Profit</div>
                 <div className="text-2xl font-bold text-white text-emerald-400">+$18,400</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                 <Icons.Activity className="w-5 h-5 text-emerald-500" />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
