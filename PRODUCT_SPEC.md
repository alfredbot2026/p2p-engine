# P2P Growth Engine: Product Specification

**Project Goal:** Scale "Papers to Profits" to 1000 enrollees/month.
**Date:** 2026-02-09
**Status:** Draft

---

## 1. Rob's Dashboard (The General)
**Persona:** Captain America (Strategy) & Shuri (UX)
**Goal:** Optimize the funnel ecosystem (Ads -> Landing Page -> Email -> Sale). Eliminate guessing.

### Core Features

#### A. Command Center (The HUD)
*   **Real-time Metrics:**
    *   Traffic Source breakdown (Organic vs. Paid).
    *   Current Conversion Rate (Landing Page -> Email -> Sale).
    *   CAC (Customer Acquisition Cost) vs. LTV (Lifetime Value).
*   **Funnel Visualization:**
    *   Sankey diagram showing user flow.
    *   Red zones indicating high drop-off points (e.g., "60% drop-off at Checkout").

#### B. Intelligent Suggestions (The Super Soldier Serum)
Instead of just showing data, the system analyzes it and prescribes action.
*   **Logic:** Compare current metrics against historical baselines or industry benchmarks.
*   **Examples:**
    *   *Alert:* "Email Sequence Step 3 ('The Offer') has an Open Rate of 15% (Target: 25%)." -> *Action:* "Generate 3 alternative subject lines focusing on 'Urgency'."
    *   *Alert:* "Landing Page conversion dropped by 2% since last deploy." -> *Action:* "Revert change or launch A/B test on Hero Section."
    *   *Alert:* "Ad Creative B has high CTR but low conversion." -> *Action:* "Check message match between Ad and Landing Page."

#### C. A/B Testing Architecture
*   **Mechanism:** Middleware-based traffic splitting (Next.js Middleware).
*   **Configuration:**
    *   Define variants in dashboard (Control vs. Variant A).
    *   Set traffic weight (e.g., 50/50).
*   **Tracking:**
    *   Auto-calculate statistical significance (P-value).
    *   "Winner Declaration": Auto-promote the winning variant after $N spend or N visits.

---

## 2. Grace's Dashboard (The Creator)
**Persona:** Scarlet Witch (Workflow) & Shuri (UI)
**Goal:** High-velocity content production. Turn inputs into viral outputs effortlessly.

### Core Features

#### A. The Content Pipeline (Watchlist -> Script)
1.  **Ingestion:**
    *   Simple input field: Paste URL (YouTube, Blog, PDF) or raw text.
    *   Tagging: "Topic", "Target Audience", "Format" (Short/Long).
2.  **Analysis (The Magic):**
    *   AI scans content against "Viral Library" patterns.
    *   Extracts: Core Idea, Counter-Intuitive Insight, Actionable Step.
3.  **Script Generation:**
    *   Select Template: (e.g., "The Storyteller", "The Contrarian", "The How-To").
    *   Output: Draft script formatted for teleprompter.

#### B. Visual Brief Generation
*   Alongside the script, generate a "Shot List":
    *   *0:00-0:05:* "Talking head, zoomed in. Text overlay: 'Stop doing this'."
    *   *0:05-0:15:* "B-Roll of [Concept]. Screen recording of X."
    *   *Mid-roll:* "Chart showing growth."

#### C. The Viral Library (Reference Database)
*   A curation interface where Grace can save high-performing hooks and structures.
*   Used as few-shot examples for the AI generation model.

---

## 3. Data Architecture (The Brain)
**Persona:** Dr. Strange (Architecture)
**Stack:** Next.js, Supabase, pgvector.

### A. Data Ingestion (Webhooks)
We need a unified pipe for all signals (Email opens, Stripe purchases, Website clicks).

**Schema Update (Supabase):**
```sql
-- Unified Event Log
create table events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null, -- 'email_open', 'page_view', 'purchase'
  source text not null, -- 'convertkit', 'google_ads', 'internal'
  payload jsonb, -- Raw webhook data
  user_id uuid references auth.users,
  created_at timestamptz default now()
);

-- Aggregated Metrics (Materialized View for Dashboard Speed)
create materialized view funnel_stats as
select
  date_trunc('day', created_at) as day,
  count(*) filter (where event_type = 'page_view') as views,
  count(*) filter (where event_type = 'sign_up') as leads,
  count(*) filter (where event_type = 'purchase') as sales
from events
group by 1;
```

### B. "The Brain" (Best Practices Storage)
Storing "What works" to inform the Intelligent Suggestions and Script Generation.

**Vector Store:**
*   **Table:** `viral_patterns`
*   **Columns:** `content_text`, `embedding` (vector), `performance_score` (0-100), `pattern_type` (Hook, CTA, Story).
*   **Usage:**
    *   When Grace writes a script, RAG (Retrieval Augmented Generation) pulls top-performing patterns.
    *   When Rob's funnel leaks, RAG pulls "Best High-Converting Email Templates."

### C. Implementation Plan (Next Steps)
1.  **Week 1:** Set up Supabase schema and Webhook endpoint listeners.
2.  **Week 2:** Build "The General" dashboard UI with dummy data.
3.  **Week 3:** Build "The Creator" pipeline with OpenAI API integration.
4.  **Week 4:** Connect real data pipes and refined prompts.
