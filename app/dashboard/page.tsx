'use client';

import React from 'react';
import Link from 'next/link';

// Simple SVG Icons
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
  Link: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  Activity: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  Plus: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14"/>
      <path d="M12 5v14"/>
    </svg>
  ),
  Zap: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
};

// Components
const StatCard = ({ title, value, subtext }: { title: string, value: string, subtext?: string }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm hover:border-zinc-700 transition-all cursor-default group">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-zinc-500 font-medium text-sm uppercase tracking-wider">{title}</h3>
      <div className="w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors"></div>
    </div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    {subtext && <div className="text-xs text-zinc-500">{subtext}</div>}
  </div>
);

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-emerald-500/30">
      
      {/* Top Navigation */}
      <nav className="border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-900/20">
              <Icons.Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">P2P <span className="text-emerald-500">Growth</span> Engine</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
              <Icons.Activity className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
              <Icons.Settings className="w-5 h-5" />
            </button>
            <div className="h-8 w-px bg-zinc-800 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-white">Admin User</div>
                <div className="text-xs text-zinc-500">System Operator</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
                A
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Command Center</h1>
            <p className="text-zinc-400">System operational. Monitoring growth vectors across all channels.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live Updates Active
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Total Outreach" 
            value="12,450" 
            subtext="+12% from last week"
          />
          <StatCard 
            title="Active Campaigns" 
            value="8" 
            subtext="3 ending soon"
          />
          <StatCard 
            title="Conversion Rate" 
            value="4.2%" 
            subtext="Above industry average (2.1%)"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Creator Dashboard Promo */}
            <section className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl shadow-black/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-zinc-800 rounded-lg">
                    <Icons.Zap className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">New: Creator Dashboard</h2>
                    <p className="text-zinc-500 text-sm">Analyze URLs, generate viral scripts, and manage your watchlist.</p>
                  </div>
                </div>
                
                <div className="bg-zinc-950/50 rounded-lg p-6 border border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                   <div className="text-sm text-zinc-400">
                      <p>Access the new AI-powered content analysis tools designed for Grace.</p>
                   </div>
                   <Link 
                    href="/dashboard/creator"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 active:scale-95 transform duration-100 whitespace-nowrap"
                  >
                    Open Creator Dashboard
                    <Icons.Link className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-zinc-950/50 px-6 py-3 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
                <span>Features: Viral Score, Hook Generator, Visual Briefs</span>
                <span className="flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                   Live
                </span>
              </div>
            </section>

            {/* Recent Activity Table Placeholder */}
            <section className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <Icons.Activity className="w-4 h-4 text-zinc-500" />
                  Recent Activity
                </h3>
                <button className="text-xs font-medium text-emerald-500 hover:text-emerald-400 transition-colors">View All History</button>
              </div>
              <div className="divide-y divide-zinc-800">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 hover:bg-zinc-800/50 transition-colors flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-emerald-500 transition-colors"></div>
                      <div>
                        <div className="text-sm font-medium text-white">Analyzed Competitor Profile #{i}</div>
                        <div className="text-xs text-zinc-500">Completed 2 hours ago via Automated Scan</div>
                      </div>
                    </div>
                    <div className="text-xs text-zinc-600 font-mono">ID: 8X29-{i}9</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar Widgets */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Quick Actions</h3>
              <div className="space-y-2">
                 <Link href="/dashboard/creator" className="w-full text-left px-4 py-3 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-zinc-300 text-sm transition-colors flex items-center justify-between group">
                  <span className="text-emerald-500 font-medium">Open Creator Tools</span>
                  <Icons.Zap className="w-4 h-4 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <button className="w-full text-left px-4 py-3 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-zinc-300 text-sm transition-colors flex items-center justify-between group">
                  <span>Start New Campaign</span>
                  <Icons.Plus className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                </button>
                <button className="w-full text-left px-4 py-3 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-zinc-300 text-sm transition-colors flex items-center justify-between group">
                  <span>Export Report (PDF)</span>
                  <Icons.Chart className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                </button>
                <button className="w-full text-left px-4 py-3 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-zinc-300 text-sm transition-colors flex items-center justify-between group">
                  <span>System Settings</span>
                  <Icons.Settings className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                </button>
              </div>
            </section>

            {/* System Status */}
            <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">System Status</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-zinc-400 mb-1">
                    <span>API Usage</span>
                    <span className="text-white">85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[85%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-zinc-400 mb-1">
                    <span>Database Load</span>
                    <span className="text-white">42%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 w-[42%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-zinc-400 mb-1">
                    <span>Brain Indexing</span>
                    <span className="text-white">98%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[98%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
