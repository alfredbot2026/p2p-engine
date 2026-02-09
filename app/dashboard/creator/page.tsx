'use client';

import React, { useState } from 'react';
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
  Check: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  ),
  Play: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  ),
  Sparkles: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  ),
  Video: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m22 8-6 4 6 4V8Z"/>
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
    </svg>
  ),
  ArrowLeft: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 19-7-7 7-7"/>
      <path d="M19 12H5"/>
    </svg>
  )
};

export default function CreatorDashboardPage() {
  const [url, setUrl] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setAnalyzing(true);
    setResult(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error('Error analyzing URL:', error);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-emerald-500/30">
      
      {/* Top Navigation */}
      <nav className="border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="p-2 -ml-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
              <Icons.ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-900/20">
              <Icons.Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">Creator <span className="text-emerald-500">Dashboard</span></span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-white">Grace</div>
                <div className="text-xs text-zinc-500">Content Creator</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
                G
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Content Analyzer</h1>
            <p className="text-zinc-400">Turn any URL into a viral content strategy.</p>
          </div>
        </div>

        {/* Watchlist Input */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl shadow-black/20 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-800 rounded-lg">
                <Icons.Link className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Analyze Content</h2>
                <p className="text-zinc-500 text-sm">Paste a URL to generate a script and visual brief.</p>
              </div>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleAnalyze}>
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-zinc-500">https://</span>
                </div>
                <input 
                  type="url" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="example.com/article-or-video"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg pl-16 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all hover:border-zinc-600"
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={analyzing}
                className={`bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 active:scale-95 transform duration-100 ${analyzing ? 'opacity-70 cursor-wait' : ''}`}
              >
                {analyzing ? (
                   <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                ) : (
                  <Icons.Sparkles className="w-4 h-4" />
                )}
                {analyzing ? 'Analyzing...' : 'Generate Brief'}
              </button>
            </form>
          </div>
        </section>

        {/* Results Area */}
        {result && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Left Column: Script & Hook */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Viral Score */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-zinc-400 font-medium text-sm uppercase tracking-wider mb-1">Viral Potential</h3>
                  <div className="text-3xl font-bold text-white">{result.viral_score}/100</div>
                </div>
                <div className="h-16 w-16 relative flex items-center justify-center">
                   <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-zinc-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                      <path className="text-emerald-500" strokeDasharray={`${result.viral_score}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                   </svg>
                   <Icons.Activity className="w-6 h-6 text-emerald-500 absolute" />
                </div>
              </div>

              {/* The Hook */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-zinc-400 font-medium text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Icons.Check className="w-4 h-4 text-emerald-500" />
                  Recommended Hook
                </h3>
                <div className="text-xl font-medium text-white p-4 bg-zinc-950/50 border border-zinc-800 rounded-lg italic">
                  "{result.hook}"
                </div>
              </div>

              {/* The Script */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                 <h3 className="text-zinc-400 font-medium text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Icons.Play className="w-4 h-4 text-emerald-500" />
                  Video Script
                </h3>
                <div className="whitespace-pre-wrap font-mono text-sm text-zinc-300 bg-zinc-950 p-4 rounded-lg border border-zinc-800 leading-relaxed">
                  {result.script}
                </div>
              </div>

            </div>

            {/* Right Column: Visual Brief */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-full">
                <h3 className="text-zinc-400 font-medium text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Icons.Video className="w-4 h-4 text-emerald-500" />
                  Visual Brief
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-zinc-500 mb-1">Visual Style</div>
                    <div className="text-white font-medium">{result.visual_brief.style}</div>
                  </div>

                  <div>
                    <div className="text-xs text-zinc-500 mb-2">Color Palette</div>
                    <div className="flex gap-2">
                      {result.visual_brief.color_palette.map((color: string, i: number) => (
                        <div key={i} className="w-8 h-8 rounded-full border border-zinc-700 shadow-sm" style={{ backgroundColor: color }} title={color}></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-zinc-500 mb-3">Scene Breakdown</div>
                    <div className="space-y-3 relative">
                      <div className="absolute left-1.5 top-2 bottom-2 w-px bg-zinc-800"></div>
                      {result.visual_brief.scenes.map((scene: any, i: number) => (
                        <div key={i} className="relative pl-6">
                          <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600 z-10"></div>
                          <div className="text-sm text-white font-medium">{scene.description}</div>
                          <div className="text-xs text-zinc-500">{scene.duration}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
}
