# AI Spend Audit Tool

A web application that helps startups analyze and optimize their AI tool spending.

## Features

- AI spending audit
- Savings recommendations
- Shareable audit reports
- AI-generated summaries

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Supabase

## Run Locally

```bash
npm install
npm run dev

Save.

---

# STEP 18 — Create DEVLOG.md

Create:

```txt id="nhx03y"
DEVLOG.md
## Day 1 — 2026-05-07

**Hours worked:** 5

**What I did:**
- Initialized Next.js project
- Configured Tailwind CSS
- Structured folders
- Connected GitHub repository
- Setup Supabase
- Created initial project files

**What I learned:**
- Better understanding of Next.js App Router
- Learned Supabase project setup

**Blockers / what I'm stuck on:**
- Thinking about best structure for audit engine logic

**Plan for tomorrow:**
- Build AI spend input form

## Day 2 — 2026-05-08

**Hours worked:** 5

**What I did:**
- Built AI spend audit form
- Added AI tool selection dropdowns
- Added plan and use case selectors
- Implemented localStorage persistence
- Improved landing page UI

**What I learned:**
- Better understanding of React state management
- Learned how localStorage persistence works

**Blockers / what I'm stuck on:**
- Thinking about scalable audit engine logic

**Plan for tomorrow:**
- Build audit recommendation engine
- Add savings calculations

# AI Spend Audit Tool

A modern SaaS-style web application that helps startups analyze and optimize their AI infrastructure spending across tools like ChatGPT, Claude, Cursor, Gemini, and GitHub Copilot.

Built for the Credex Web Development Internship Round 1 assignment.

---

# Features

## Current Features

- Modern responsive landing page
- AI spend audit form
- AI tool selection
- Pricing plan selection
- Team size & monthly spend inputs
- Primary use case selection
- LocalStorage persistence
- Dynamic audit recommendation engine
- Savings estimation logic
- Real-time audit result generation

---

# Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React
- Supabase
- Vercel

---

# How It Works

1. User selects their AI tool
2. Chooses current pricing plan
3. Enters team size and monthly spend
4. Audit engine analyzes spending
5. App generates optimization recommendations and savings estimates

---

# Project Structure

```txt
src/
 ├── app/
 ├── components/
 │    ├── form/
 │    ├── layout/
 │    └── sections/
 ├── lib/
 ├── tests/
 ├── types/
 └── utils/
 ## Day 4 — 2026-05-10

**Hours worked:** 5

**What I did:**
- Improved audit engine logic
- Added premium audit report UI
- Added annual savings calculations
- Built recommendation cards
- Added optimized and high-savings states

**What I learned:**
- Better understanding of SaaS dashboard UI patterns
- Learned how to structure audit recommendation systems

**Blockers / what I'm stuck on:**
- Thinking about scalable multi-tool audit architecture

**Plan for tomorrow:**
- Add Supabase integration
- Build shareable audit URLs
- Implement email capture
