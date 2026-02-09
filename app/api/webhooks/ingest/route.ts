import { NextRequest, NextResponse } from 'next/server';

const P2P_INGEST_SECRET = process.env.P2P_INGEST_SECRET;

export async function POST(req: NextRequest) {
  // 1. Auth Check
  const secretHeader = req.headers.get('x-p2p-secret');
  
  if (secretHeader !== P2P_INGEST_SECRET) {
    console.error(`[P2P Ingest] Unauthorized attempt. Header: ${secretHeader}`);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    
    // Handle both single event and batch (array)
    const events = Array.isArray(body) ? body : [body];

    console.log(`[P2P Ingest] Received ${events.length} events.`);

    for (const event of events) {
        await processEvent(event);
    }

    return NextResponse.json({ received: true, count: events.length }, { status: 200 });

  } catch (error) {
    console.error('[P2P Ingest] Error processing webhook:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

async function processEvent(payload: any) {
    const { event, data, timestamp } = payload;
    
    console.log(`[Processing] ${event} at ${timestamp || new Date().toISOString()}`, data);

    // TODO: Store in Database (Supabase / Postgres)
    switch (event) {
        case 'sale':
            // Handle sale logic (update revenue, notify team)
            break;
        case 'funnel_step':
        case 'funnel_update':
            // Handle funnel progression (update user state)
            break;
        case 'daily_ad_stats':
            // Store ad spend metrics
            break;
        default:
            console.warn(`[P2P Ingest] Unknown event type: ${event}`);
    }
}
