# P2P Growth Engine: Product Specification (v2)

**Project Goal:** Optimize the ecosystem to achieve 1,000 enrollees/month.
**Focus:** 4 Distinct Sales Funnels + Intelligent Optimization.
**Date:** 2026-02-09
**Status:** Approved for Build

---

## 1. The 4 Strategic Funnels
We are no longer treating traffic as a monolith. The system must track and optimize these four specific paths:

### Funnel A: Direct Conversion (The Sprinter)
*   **Path:** FB Ads (Conversion/Retargeting) -> Landing Page -> Sale.
*   **Key Metric:** ROAS (Return on Ad Spend) & Landing Page Conversion Rate.
*   **Optimization Levers:** Ad Creative, LP Hero Section, Offer Clarity.

### Funnel B: The Chatbot (The Conversationalist)
*   **Path:** FB Ads (Messaging) -> ManyChat (OpenAI Bot) -> Landing Page -> Sale.
*   **The Problem:** Attribution is a "Black Box" (Bot clicks are hard to track).
*   **The Solution:**
    *   ManyChat/OpenAI must append dynamic query params to the LP link: `?source=chatbot&ref_id={manychat_user_id}&campaign={campaign_name}`.
    *   Landing Page captures these params and stores them in the `session` and `purchase` event.
*   **Optimization Levers:** Bot Script quality, "Time to Link Drop", LP personalization based on chat context.

### Funnel C: Abandoned Cart (The Recovery)
*   **Path:** LP Visit (No Buy) -> Email Funnel -> LP -> Sale.
*   **Key Metrics:**
    *   Capture Rate (Visitors -> Email Leads).
    *   Email Open Rate (Step 1, 2, 3).
    *   CTR (Click Through Rate) back to Offer.
    *   Recovery Rate (Leads -> Sales).
*   **Optimization Levers:** Subject Lines, Email Timing, Discount Ladders.

### Funnel D: Organic / Unattributed (The Mystery)
*   **Path:** Direct traffic, Word of Mouth, Social Bio -> LP -> Sale.
*   **Goal:** Measure baseline lift that isn't tied to ad spend.

---

## 2. Rob's Dashboard (The General)
**Persona:** Captain America (Strategy) & Shuri (UX)
**Goal:** A "War Room" view of the 4 Funnels side-by-side.

### Core Features

#### A. Multi-Source Command Center
*   **Unified View:** A table/grid showing the 4 Funnels.
    *   *Row 1 (Direct):* Spend $X -> Visits Y -> Sales Z -> ROAS 3.0.
    *   *Row 2 (Chatbot):* Spend $A -> Conversations B -> LP Clicks C -> Sales D.
    *   *Row 3 (Recovery):* Leads captured -> Emails Sent -> Recovered Revenue.
*   **Visuals:** Stacked bar chart showing total revenue contribution by source.

#### B. Intelligent Suggestions (The Super Soldier Serum)
The system analyzes data *per funnel* and prescribes action.
*   **Examples:**
    *   *Chatbot Alert:* "High drop-off between 'Bot Link Click' and 'LP View'. Suggestion: Check page load speed or link validity."
    *   *Recovery Alert:* "Email #2 has 40% open rate but 0.5% CTR. Suggestion: The body copy isn't selling the click. Rewrite CTA."
    *   *Direct Alert:* "Ad Set C has high CTR but high bounce rate. Suggestion: Message mismatch."

#### C. A/B Testing Architecture
*   **Mechanism:** Middleware-based traffic splitting.
*   **Configuration:** Define variants in dashboard (Control vs. Variant A).
*   **Winner Declaration:** Auto-promote winning variants based on statistical significance.

---

## 3. Grace's Dashboard (The Creator)
**Persona:** Scarlet Witch (Workflow) & Shuri (UI)
**Goal:** High-velocity content production. Turn inputs into viral outputs effortlessly.

### Core Features

#### A. The Content Pipeline (Watchlist -> Script)
1.  **Ingestion:** Paste URL (YouTube, Blog, PDF) or raw text.
2.  **Analysis:** AI scans content against "Viral Library" patterns.
3.  **Script Generation:**
    *   Select Template: (e.g., "The Storyteller", "The Contrarian", "The How-To").
    *   Output: Draft script formatted for teleprompter.

#### B. Visual Brief Generation
*   Shot list generation (e.g., "0:00-0:05: Zoom in on face, text overlay 'Stop doing this'").

#### C. The Viral Library (Reference Database)
*   Curation interface for saving high-performing hooks and structures.

---

## 4. Data Architecture (The Brain)
**Persona:** Dr. Strange (Architecture)
**Stack:** Next.js, Supabase, pgvector.

### A. Data Ingestion (Webhooks)
Unified pipe for all signals (Email opens, Stripe purchases, Website clicks).

**Schema Update (Supabase):**
```sql
-- Unified Event Log
create table events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null, -- 'email_open', 'page_view', 'purchase', 'chat_link_click'
  source text not null, -- 'direct', 'chatbot', 'recovery', 'organic'
  payload jsonb, -- Raw webhook data (includes ref_ids)
  user_id uuid references auth.users,
  created_at timestamptz default now()
);

-- Aggregated Metrics (Materialized View for Dashboard Speed)
create materialized view funnel_stats as
select
  date_trunc('day', created_at) as day,
  source,
  count(*) filter (where event_type = 'page_view') as views,
  count(*) filter (where event_type = 'sign_up') as leads,
  count(*) filter (where event_type = 'purchase') as sales
from events
group by 1, 2;
```

### B. "The Brain" (Best Practices Storage)
Vector store for "What works" to inform Intelligent Suggestions and Script Generation.
