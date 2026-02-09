export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8 bg-gray-50 dark:bg-zinc-900">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Growth Engine Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* KPI Cards */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</h3>
          <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">$0.00</p>
          <span className="text-xs text-green-500 mt-1 block">+0% from last week</span>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Leads</h3>
          <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">0</p>
          <span className="text-xs text-gray-400 mt-1 block">Updated just now</span>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Conversion Rate</h3>
          <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">0.0%</p>
          <span className="text-xs text-gray-400 mt-1 block">Target: 2.5%</span>
        </div>
      </div>

      <div className="mt-8 w-full max-w-6xl">
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700">
           <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Events</h2>
           <div className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">
             No events received yet. Waiting for webhook ingestion...
           </div>
        </div>
      </div>
    </div>
  );
}
