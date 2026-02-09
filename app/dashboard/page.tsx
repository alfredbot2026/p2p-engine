'use client';

import React from 'react';

// --- Icons (Lucide-style SVGs) ---
const Icons = {
  Activity: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  ),
  Users: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Zap: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  Target: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  ),
  MessageCircle: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
  ),
  RefreshCw: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
  ),
  Search: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  ArrowUpRight: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
  ),
  TrendingUp: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
  ),
  MoreHorizontal: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
  ),
};

// --- Components ---

const GlassCard = ({ children, className = "", noPadding = false }: { children: React.ReactNode, className?: string, noPadding?: boolean }) => (
  <div className={`bg-zinc-900/50 backdrop-blur-md border border-zinc-800/60 rounded-2xl hover:border-zinc-700/80 transition-all duration-300 shadow-xl shadow-black/20 ${noPadding ? '' : 'p-6'} ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-2 mb-4">
    <Icon className="w-5 h-5 text-indigo-500" />
    <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">{title}</h2>
  </div>
);

const Metric = ({ label, value, trend, trendUp, glow = false }: { label: string, value: string, trend?: string, trendUp?: boolean, glow?: boolean }) => (
  <div className="flex flex-col gap-1">
    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">{label}</span>
    <div className={`text-2xl font-bold tracking-tight text-zinc-100 ${glow ? 'drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]' : ''}`}>
      {value}
    </div>
    {trend && (
      <div className={`flex items-center gap-1 text-xs font-medium ${trendUp ? 'text-emerald-400' : 'text-rose-400'}`}>
        {trendUp ? <Icons.TrendingUp className="w-3 h-3" /> : <Icons.TrendingUp className="w-3 h-3 rotate-180" />}
        {trend}
      </div>
    )}
  </div>
);

const ProgressBar = ({ value, color = "bg-indigo-500" }: { value: number, color?: string }) => (
  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mt-2">
    <div className={`h-full ${color} rounded-full`} style={{ width: `${value}%` }}></div>
  </div>
);

// --- Data ---

const FUNNELS = [
  {
    id: 'direct',
    title: 'Direct Traffic',
    icon: Icons.Zap,
    metrics: [
      { label: 'Visitors', value: '12.5k', trend: '+12%', up: true },
      { label: 'Conv. Rate', value: '4.2%', trend: '-1.1%', up: false },
    ],
    progress: 75,
    color: 'bg-indigo-500'
  },
  {
    id: 'chatbot',
    title: 'AI Chatbot',
    icon: Icons.MessageCircle,
    metrics: [
      { label: 'Engaged', value: '3,840', trend: '+24%', up: true },
      { label: 'Resolved', value: '92%', trend: '+5%', up: true },
    ],
    progress: 60,
    color: 'bg-emerald-500'
  },
  {
    id: 'recovery',
    title: 'Recovery',
    icon: Icons.RefreshCw,
    metrics: [
      { label: 'Retargeted', value: '1,205', trend: '+8%', up: true },
      { label: 'Recovered', value: '340', trend: '+15%', up: true },
    ],
    progress: 45,
    color: 'bg-amber-500'
  },
  {
    id: 'organic',
    title: 'Organic',
    icon: Icons.Search,
    metrics: [
      { label: 'SEO Hits', value: '45.2k', trend: '+3%', up: true },
      { label: 'Rank #1', value: '12', trend: '0%', up: true },
    ],
    progress: 80,
    color: 'bg-purple-500'
  },
];

const RECENT_ACTIVITY = [
  { id: 1, user: 'User_9281', action: 'Upgraded to Pro', time: '2m ago', amount: '+$49', icon: Icons.Zap },
  { id: 2, user: 'User_1102', action: 'Chatbot Session', time: '5m ago', amount: 'Active', icon: Icons.MessageCircle },
  { id: 3, user: 'User_5593', action: 'Cart Abandoned', time: '12m ago', amount: 'Recovering', icon: Icons.RefreshCw },
  { id: 4, user: 'User_3321', action: 'Organic Sign-up', time: '18m ago', amount: 'Free', icon: Icons.Search },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 space-y-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800/50 pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Engine</span>
          </h1>
          <p className="text-zinc-400 font-light text-lg">Real-time surveillance of P2P ecosystem.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 flex items-center gap-2 text-zinc-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Operational
          </div>
          <button className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-lg shadow-indigo-900/20">
            <Icons.ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 grid-rows-[auto_auto]">
        
        {/* Main Stat Card - Large (Span 2) */}
        <GlassCard className="md:col-span-2 lg:col-span-2 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-600/20 transition-all duration-500"></div>
          <div>
            <SectionTitle title="Total Revenue" icon={Icons.Activity} />
            <div className="mt-4">
              <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter drop-shadow-[0_0_25px_rgba(99,102,241,0.3)]">
                $124,592
              </span>
              <div className="flex items-center gap-3 mt-4">
                <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 flex items-center gap-1">
                  <Icons.TrendingUp className="w-3 h-3" /> +14.2%
                </span>
                <span className="text-zinc-500 text-sm">vs last month</span>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-zinc-800/50 pt-6">
            <Metric label="Active Users" value="14.2k" trend="+5%" trendUp={true} />
            <Metric label="Churn Rate" value="1.8%" trend="-0.2%" trendUp={true} />
            <Metric label="LTV" value="$340" trend="+12" trendUp={true} />
          </div>
        </GlassCard>

        {/* Secondary Stat Card - Medium (Span 1) */}
        <GlassCard className="md:col-span-1 lg:col-span-1 flex flex-col justify-between relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
           <div>
             <SectionTitle title="Conversion Rate" icon={Icons.Target} />
             <div className="mt-2">
               <span className="text-4xl font-bold text-white tracking-tight">3.8%</span>
             </div>
           </div>
           <div className="mt-4 space-y-3">
             <div className="flex justify-between text-xs text-zinc-400">
               <span>Target: 4.0%</span>
               <span>95%</span>
             </div>
             <ProgressBar value={95} color="bg-emerald-500" />
           </div>
        </GlassCard>

        {/* Alerts / Notifications (Span 1) */}
        <GlassCard className="md:col-span-1 lg:col-span-1 flex flex-col" noPadding>
          <div className="p-6 border-b border-zinc-800/60 flex justify-between items-center">
             <SectionTitle title="Live Feed" icon={Icons.Zap} />
             <Icons.MoreHorizontal className="w-5 h-5 text-zinc-600" />
          </div>
          <div className="p-4 space-y-4 overflow-y-auto max-h-[200px] custom-scrollbar">
            {RECENT_ACTIVITY.map((item) => (
              <div key={item.id} className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors text-zinc-400 group-hover:text-indigo-400">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-300 truncate">{item.action}</p>
                  <p className="text-xs text-zinc-500">{item.time}</p>
                </div>
                <span className="text-xs font-mono text-zinc-500">{item.amount}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* 4-Funnel Strategy Row */}
        <div className="col-span-1 md:col-span-4 lg:col-span-4 mt-4">
           <h3 className="text-lg font-semibold text-zinc-200 mb-6 flex items-center gap-2">
             <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
             Funnel Performance
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {FUNNELS.map((funnel) => (
               <GlassCard key={funnel.id} className="relative group hover:-translate-y-1 transition-transform duration-300">
                 <div className="flex items-center gap-3 mb-4">
                   <div className={`p-2.5 rounded-xl ${funnel.color} bg-opacity-20 text-white border border-white/10 shadow-inner`}>
                     <funnel.icon className="w-5 h-5" />
                   </div>
                   <h4 className="font-medium text-zinc-200">{funnel.title}</h4>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-2">
                     {funnel.metrics.map((m, i) => (
                       <div key={i} className="bg-zinc-950/50 rounded-lg p-2 border border-zinc-800/50">
                         <p className="text-[10px] text-zinc-500 uppercase">{m.label}</p>
                         <p className="text-lg font-bold text-white">{m.value}</p>
                         <p className={`text-[10px] ${m.up ? 'text-emerald-400' : 'text-rose-400'}`}>{m.trend}</p>
                       </div>
                     ))}
                   </div>
                   
                   <div>
                     <div className="flex justify-between text-xs text-zinc-500 mb-1">
                       <span>Efficiency</span>
                       <span>{funnel.progress}%</span>
                     </div>
                     <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div className={`h-full ${funnel.color} rounded-full`} style={{ width: `${funnel.progress}%` }}></div>
                     </div>
                   </div>
                 </div>
               </GlassCard>
             ))}
           </div>
        </div>

      </div>
    </main>
  );
}
