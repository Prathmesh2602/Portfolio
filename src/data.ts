export interface Project {
  id: string;
  featured: boolean;
  meta: string;
  title: string;
  time: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  bgColor: string;
  imageSrc: string;
  imageAlt: string;
  linkUrl: string;
  linkText: string;
  // Case Study Details
  heroTitle: string;
  heroTitle2: string;
  role: string;
  projectType: string;
  duration: string;
  context: string;
  problemTitle: string;
  problemDesc: string;
  problemMetric: { value: string; label: string };
  solutionTitle: string;
  solutionDesc: string;
  solutionHighlight: string;
  keyFeatures: { title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
}

export const PROJECTS: Project[] = [

  {
    id: "portzero-ai",
    featured: false,
    meta: "PortZero AI",
    time: "2025 – Present",
    title: "AI-native developer tunnel platform — inspect, replay, and debug API traffic with LLM root-cause analysis",
    tags: ["Go", "Next.js", "WebSockets", "PostgreSQL", "OpenAI API", "gRPC"],
    metrics: [
      { value: "1 Command", label: "Localhost exposed to public internet" },
      { value: "AI", label: "Instant root-cause debugging" },
    ],
    bgColor: "bg-[#090e1a] dark:bg-[#050a12]",
    imageSrc: "/images/p8.png",
    imageAlt: "PortZero AI developer tunnel and debugging platform",
    linkUrl: "#",
    linkText: "In Development",
    heroTitle: "Postman + Ngrok + AI Debugging — built for developers tired of guessing why their API failed.",
    heroTitle2: "Tunnel. Inspect. Replay. Debug with AI.",
    role: "Systems & Full Stack Engineer",
    projectType: "Developer Infrastructure / AI Tooling",
    duration: "2025 – Present",
    context: "An AI-native developer tunneling and debugging platform. Not another ngrok clone — the real problem is debugging and collaborating around API traffic. PortZero combines localhost exposure, real-time request inspection, exact-fidelity replay, and LLM-powered root-cause analysis in one platform.",
    problemTitle: "Debugging API failures collaboratively is still broken despite every tool available.",
    problemDesc: "Developers stitch together ngrok for tunneling, Postman for request history, webhook.site for inspection, and Slack screenshots for team collaboration — four tools to debug one API failure. Replaying a failed webhook means manually reconstructing headers and body from logs. Sharing debugging context with a teammate requires screen sharing or copy-pasting curl commands. When an intermittent production issue appears, reproducing it locally is guesswork. Each tool solves one slice of the problem and none of them talk to each other.",
    problemMetric: { value: "4+ Tools", label: "Developers currently stitch together to debug one API failure" },
    solutionTitle: "A single platform: expose → inspect → replay → AI-debug → share with team.",
    solutionDesc: "Built a reverse-tunnel architecture in Go where the local agent initiates a persistent outbound WebSocket connection to the gateway — all inbound public traffic rides that connection back to the local machine with no firewall rules or port forwarding. Every request transiting the tunnel is captured in full (headers, body, timing, status) and surfaced in a real-time Next.js dashboard. The replay engine stores requests byte-for-byte and can fire them against any target with exact fidelity — making intermittent failure reproduction deterministic. An OpenAI/Gemini-powered AI layer analyzes failed requests, reads headers, response codes, timing patterns, and log context to generate instant root-cause explanations. Collaborative sessions let teams share a live debugging workspace via link — no screen sharing, with inline annotations and shared replay controls.",
    solutionHighlight: "By collapsing tunnel, inspector, replay, and AI debugging into one platform, PortZero eliminates the tool-switching overhead that turns a 5-minute debugging session into a 45-minute investigation.",
    keyFeatures: [
      {
        title: "Reverse Tunnel with Persistent Socket",
        desc: "The local Go agent initiates an outbound persistent WebSocket/gRPC connection to the gateway — bypassing NAT, firewalls, and private IP constraints entirely. All inbound public traffic rides the existing connection back to localhost. Handles reconnection, request multiplexing across the single socket, and large payload streaming without memory buffering. One command: `portzero expose 3000` → public HTTPS URL."
      },
      {
        title: "Real-Time Request Inspector + Replay Engine",
        desc: "Every request transiting the tunnel is captured byte-for-byte — full headers, body, response, latency breakdown, and timeline — and surfaced in a live dashboard. The replay engine stores the complete request snapshot and can re-fire it against any target with exact fidelity: same headers, same body, same timing characteristics. Designed for reproducing intermittent failures and testing fixes against real captured webhook payloads."
      },
      {
        title: "AI Root-Cause Debugging Layer",
        desc: "An LLM-powered analysis layer reads failed request metadata — response codes, headers, timing patterns, error messages, and sequential request history — and generates structured root-cause explanations. Output: specific failure reason (expired JWT, upstream timeout, idempotency conflict), the evidence chain, and a suggested fix. Built to handle the class of failures that are obvious in hindsight but take 30 minutes to locate manually."
      },
      {
        title: "Collaborative Live Debugging Sessions",
        desc: "Share a debugging session via link — teammates join and see the same live traffic feed, can annotate individual requests inline, trigger replays, and view AI analysis outputs together. Persistent workspace means the session history survives beyond the call. Designed to replace 'share your screen and describe what you're seeing' with structured, navigable debugging context."
      },
    ],
    outcomes: [
      { value: "1 Command", label: "Localhost exposed with HTTPS public URL" },
      { value: "Byte-exact", label: "Request replay fidelity for failure reproduction" },
      { value: "AI", label: "Instant structured root-cause analysis" },
      { value: "Zero", label: "Screen sharing needed for team debugging" },
    ],
  },

  {
    id: "velfresh",
    featured: true,
    meta: "Velfresh",
    time: "2025 - Present",
    title:
      "HoReCa ERP platform eliminating 4hrs/day of manual kitchen paperwork",
    tags: ["MERN", "Next.js", "PostgreSQL", "Redis", "AWS"],
    metrics: [
      { value: "99.8%", label: "Order fulfillment accuracy" },
      { value: "-4 Hrs", label: "Daily kitchen paperwork eliminated" },
    ],
    bgColor: "bg-[#112a1d] dark:bg-[#0c1e15]",
    imageSrc: "/images/p1.png",
    imageAlt: "Velfresh HoReCa ERP App Mockup",
    linkUrl: "https://velfresh.com",
    linkText: "Visit velfresh.com",
    heroTitle: "Automating procurement and inventory for 100+ HoReCa brands.",
    heroTitle2:
      "Eliminating kitchen paperwork with intelligent ERP automation.",
    role: "Senior Full Stack Engineer",
    projectType: "B2B SaaS / ERP Operations",
    duration: "2025 – Present",
    context:
      "Full-stack B2B SaaS platform serving 100+ HoReCa brands across Pune and Mumbai — integrating procurement, inventory ERP, POS sync, and compliance management.",
    problemTitle:
      "Kitchens were drowning in 4 hours of daily manual stock work.",
    problemDesc:
      "Kitchen managers at restaurants and cloud kitchens ran daily inventory audits entirely on paper — walking the floor, counting stock, filling spreadsheets, then manually composing and emailing purchase orders to suppliers. This cycle consumed 4+ hours every morning before service even started. Without real-time inventory data, stockouts happened regularly during peak hours — kitchen staff discovered missing ingredients only when a dish couldn't be made, directly hitting revenue and customer ratings. Compliance documents (FSSAI, Fire NOC, GST) were tracked across disconnected files.",
    problemMetric: {
      value: "4 Hrs",
      label: "Spent daily on manual stock audits per kitchen",
    },
    solutionTitle:
      "Smart threshold reordering with real-time inventory ledgers.",
    solutionDesc:
      "Built a centralized multi-surface ERP — Customer Portal, Vendor Dashboard, Admin Panel, and Marketing Site — around an automated procurement core. Every ingredient has a configurable safety stock threshold. When stock drops below it, the system automatically drafts and dispatches a PO to the authorized supplier with zero human involvement. A live warehouse logging dashboard gives kitchen managers real-time visibility across all stock positions with full transaction history. A multi-warehouse sync engine aggregates inventory states across regional hubs, enabling split-routing of orders to the nearest supplier. Compliance workflows for FSSAI, Health Trade License, Fire NOC, GST Filing, and Labour Law are centralized in a dedicated module, reducing manual paperwork by 4+ hours per kitchen daily.",
    solutionHighlight:
      "Replacing the paper audit loop with threshold-triggered automation saved kitchens 4 hours of daily paperwork, near-eliminated stockouts, and pushed fulfillment accuracy to 99.8%.",
    keyFeatures: [
      {
        title: "Smart Threshold Reordering",
        desc: "Each ingredient has a configurable depletion curve and safety stock level. The system models daily consumption patterns and triggers automated PO emails to authorized suppliers before stock hits zero — eliminating the stockout-during-service problem entirely.",
      },
      {
        title: "Event-Sourced Inventory Ledger",
        desc: "Every stock movement — additions, utilization, wastage, returns — is logged as an immutable event. Managers get full transaction history per ingredient, real-time running totals, and automatic variance detection. Supports multi-warehouse aggregation across regional hubs.",
      },
      {
        title: "Compliance Management Module",
        desc: "Centralizes FSSAI, Health Trade License, Fire NOC, GST Filing, and Labour Law documentation. Tracks expiry dates, sends renewal reminders, and generates pre-filled compliance reports — cutting the daily compliance admin burden from hours to minutes.",
      },
    ],
    outcomes: [
      { value: "99.8%", label: "Order fulfillment accuracy" },
      { value: "–4 Hrs", label: "Daily paperwork eliminated per kitchen" },
      { value: "~Zero", label: "Ingredient stockouts during peak service" },
      { value: "100+", label: "HoReCa brands live on platform" },
    ],
  },
  {
    id: "wagebliss",
    featured: true,
    meta: "WageBliss",
    time: "2025 - 2026",
    title:
      "Industrial HRMS automating payroll compliance for 60,000+ field workers",
    tags: ["React Native", "Next.js", "PostgreSQL", "Redis", "AWS"],
    metrics: [
      { value: "60k+", label: "Field workers managed" },
      { value: "15 Days → 5 Min", label: "Payroll computation cycle" },
    ],
    bgColor: "bg-[#122238] dark:bg-[#0d1929]",
    imageSrc: "/images/p2.png",
    imageAlt: "WageBliss Industrial HRMS App Mockup",
    linkUrl: "https://wagebliss.com/",
    linkText: "Visit WageBliss",
    heroTitle:
      "A 1-click payroll engine for 60,000+ industrial field workers across MIDC sites.",
    heroTitle2:
      "From 15-day payroll cycles to 5 minutes with zero compliance errors.",
    role: "Lead Full Stack Engineer",
    projectType: "Enterprise HRMS / Compliance Engine",
    duration: "2025 – 2026",
    context:
      "Multi-tenant SaaS HRMS serving 200+ MIDC contractor firms — managing attendance, payroll, and statutory compliance for 60,000+ industrial field workers. Built independently from personal project to commercial product.",
    problemTitle:
      "A 15-day manual payroll cycle was burying contractor firms in errors and legal risk.",
    problemDesc:
      "Industrial contractor firms managing hundreds of field workers across construction sites had no reliable digital infrastructure. Daily attendance was collected on paper at dispersed worksites, payroll was computed manually by HR staff over 15 days, and statutory deductions — PF, ESIC, PT — were calculated by hand from wage registers. Errors were frequent and expensive: incorrect deduction filings triggered legal notices, missed deadlines resulted in penalties, and worker disputes over wage calculations created operational chaos. There was no way to track attendance across multiple sites without a physical presence.",
    problemMetric: {
      value: "15 Days",
      label: "Manual payroll cycle per 100 workers",
    },
    solutionTitle:
      "Biometric IoT sync feeding a multi-tenant statutory payroll engine.",
    solutionDesc:
      "Built the entire platform independently — from architecture to deployment — as a personal project that became commercially active with paying clients. The platform integrates biometric hardware at construction sites via an IoT gateway that streams punch-in/out events to the cloud in real time. Geo-fencing validates attendance location, preventing proxy punching. The 1-click payroll engine reads attendance data, applies shift-based wage policies per contractor, calculates overtime differentials, and runs all statutory deductions (PF at 12%, ESIC at 0.75%, PT by state) in a single automated pass — reducing a 15-day cycle to under 5 minutes. Government-compliant wage registers and statutory forms are generated automatically.",
    solutionHighlight:
      "Connecting biometric hardware to a multi-tenant compliance engine compressed the 15-day manual payroll cycle to under 5 minutes, with zero statutory filing errors across 200+ contractor firms.",
    keyFeatures: [
      {
        title: "Biometric IoT Attendance Gateway",
        desc: "An ingestion pipeline reads raw punch-in events from biometric devices across distributed construction sites. Geo-fence validation confirms worker location at the time of check-in. Attendance data is aggregated per worker, per site, per shift — with full audit trail — and fed directly into the payroll engine.",
      },
      {
        title: "1-Click Statutory Payroll Engine",
        desc: "Processes multi-tenant wage policies simultaneously — basic wage structures, overtime multipliers, night shift differentials, and contractor-specific allowances. Calculates PF (12%), ESIC (0.75%), and state-wise Professional Tax automatically, then compiles statutory deduction registers and payslips in a single pass.",
      },
      {
        title: "Government-Compliant Form Generator",
        desc: "Automatically compiles Form 16A, EPF ECR, ESIC contribution statements, and state-specific labour law registers in the exact format required for government submission. Eliminates manual form-filling entirely — the same data that runs payroll produces the compliance output.",
      },
    ],
    outcomes: [
      { value: "60k+", label: "Field workers under active management" },
      { value: "15 Days → 5 Min", label: "Payroll computation cycle" },
      { value: "200+", label: "MIDC contractor firms on platform" },
      { value: "Zero", label: "Compliance filing errors post-launch" },
    ],
  },
  {
    id: "sundaymalls",
    featured: true,
    meta: "SundayMalls",
    time: "2026 - Present",
    title:
      "B2B wholesale marketplace with AI catalog ingestion and distributed lot locking",
    tags: ["MERN", "Next.js", "Gemini AI", "Redis", "PostgreSQL", "AWS"],
    metrics: [
      { value: "0", label: "Manual catalog entry (AI pipeline)" },
      { value: "3 Days → Sec", label: "Vendor onboarding time" },
    ],
    bgColor: "bg-[#6c2813] dark:bg-[#4d1d0e]",
    imageSrc: "/images/p3.png",
    imageAlt: "SundayMalls B2B wholesale marketplace mockup",
    linkUrl: "https://www.sundaymalls.com/",
    linkText: "Visit SundayMalls",
    heroTitle:
      "A B2B wholesale marketplace with AI catalog ingestion and Redis lot locking.",
    heroTitle2: "AI-powered catalog pipelines and zero over-sells at scale.",
    role: "Full Stack Engineer",
    projectType: "B2B Wholesale / Catalog AI",
    duration: "Jan 2026 – Present",
    context:
      "Full-stack B2B marketplace across 4 surfaces — Customer App, Vendor App, Admin Panel, and Marketing Site — handling lot-based wholesale inventory with AI-powered bulk catalog ingestion.",
    problemTitle:
      "Three-day vendor onboarding and over-selling during flash sales were blocking growth.",
    problemDesc:
      "Wholesale merchants manage inventory in bulk 'lots' — each with quantity, size breakdowns, pricing tiers, images, and GST/HSN codes. Listing a single supplier catalog manually required a team member spending 3 full days entering data. With vendors unable to onboard fast enough, the platform couldn't scale. During high-demand flash sales, multiple buyers would simultaneously select the same lot — the system had no concurrency protection, resulting in over-sells, cancellations, and merchant trust erosion. There was no automation anywhere in the catalog or inventory pipeline.",
    problemMetric: {
      value: "3 Days",
      label: "To manually list one supplier catalog",
    },
    solutionTitle:
      "Gemini AI invoice parsing with Redis-based distributed lot reservation locks.",
    solutionDesc:
      "Engineered a 4-surface marketplace (Customer App, Vendor App, Admin Panel, Marketing Site) with an AI-powered catalog core. Vendors now upload raw Excel or PDF price sheets — a Gemini AI pipeline reads the unstructured data, infers product categories, maps sizes and quantities to the platform schema, and creates fully structured lot listings with pricing, GST/HSN codes, and categorization automatically. What took 3 days now completes in seconds. For concurrency, Redis-based distributed locks are applied at the lot-reservation layer during checkout — when a buyer claims a lot, a lock is acquired for a configurable TTL. No concurrent buyer can claim the same units during that window, even under peak traffic, guaranteeing inventory integrity.",
    solutionHighlight:
      "AI invoice parsing compressed 3-day manual onboarding to seconds, while Redis lot-reservation locks eliminated over-selling entirely — enabling flash sales at scale with zero cancellation conflicts.",
    keyFeatures: [
      {
        title: "Gemini AI Catalog Pipeline",
        desc: "Vendors upload raw PDF or Excel supplier price lists. The Gemini-powered parser extracts product names, SKUs, quantities, sizes, pricing, and HSN codes from unstructured data, then maps them to the platform taxonomy automatically. Full catalog creation — including sub-category classification — completes in seconds with zero manual input.",
      },
      {
        title: "Redis Distributed Lot Locking",
        desc: "At checkout initiation, a Redis lock is acquired on each selected lot with a configurable TTL (typically 10 minutes). Concurrent buyers attempting to claim the same lot receive an 'unavailable' response immediately. Lock release is handled automatically on checkout completion, abandonment, or TTL expiry — guaranteeing inventory consistency under any concurrency level.",
      },
      {
        title: "Multi-Godown Vendor Management",
        desc: "Vendors with inventory across multiple storage locations get per-godown stock tracking, cross-godown transfer logging, and consolidated dashboard views. Audit logs capture every inventory movement with timestamps. RBAC controls which staff can view, transfer, or modify stock per location.",
      },
    ],
    outcomes: [
      { value: "3 Days → Sec", label: "Vendor catalog onboarding time" },
      { value: "0%", label: "Over-sell rate under concurrent traffic" },
      { value: "0", label: "Manual catalog entry per listing" },
      { value: "4 Surfaces", label: "Customer, Vendor, Admin, Marketing" },
    ],
  },
    {
    id: "citycentermall",
    featured: false,
    meta: "CityCenterMall",
    time: "2025 - Present",
    title:
      "AI-powered hyper-local retail marketplace with real-time order dispatch",
    tags: ["Next.js", "Node.js", "WebSockets", "PostgreSQL", "Gemini AI"],
    metrics: [
      { value: "< 200ms", label: "Merchant notification latency" },
      { value: "AI-Powered", label: "Zero-touch catalog ingestion" },
    ],
    bgColor: "bg-[#2b1f3d] dark:bg-[#2b1f3d]",
    imageSrc: "/images/p4.png",
    imageAlt: "CityCenterMall retail marketplace mockup",
    linkUrl: "https://citycentermall.com/",
    linkText: "Visit CityCenterMall",
    heroTitle:
      "India's first AI-powered hyper-local retail marketplace for mall vendors.",
    heroTitle2: "Connecting mall retailers to customers at hyper-local speed.",
    role: "Lead Full Stack Engineer",
    projectType: "SaaS Marketplace / Real-time Platform",
    duration: "Jan 2026 – Present",
    context:
      "India's first AI-powered hyper-local retail marketplace connecting local mall retailers with customers across 20+ product categories and three delivery modes.",
    problemTitle:
      "Mall retailers had no digital presence and orders were pure chaos.",
    problemDesc:
      "Local mall retailers operated in complete isolation — no unified storefront, no real-time order system, no delivery coordination. Orders came in via WhatsApp calls and were manually logged by store staff. When items sold in-store, digital listings stayed unchanged, causing double-sells. Delivery assignments were handed out manually, creating 15–20 minute matching delays and a 22% order cancellation rate that was destroying merchant trust.",
    problemMetric: {
      value: "22%",
      label: "Order cancellation rate before platform",
    },
    solutionTitle:
      "An event-driven WebSocket pipeline with AI-powered catalog management.",
    solutionDesc:
      "Built the full platform from scratch — a persistent WebSocket gateway keeps all three parties (buyer, merchant, delivery partner) in sync with sub-second latency. When an order is placed, a broadcast fires to the merchant in under 200ms. A geo-indexed PostgreSQL engine calculates the nearest available rider automatically, cutting matching time from minutes to seconds. For catalog management, a Gemini-powered PDF parser lets vendors upload raw supplier sheets — it reads, classifies, and creates structured listings across 20+ product categories with zero manual entry. Three delivery modes (Express 60-min, Scheduled, Self-Pickup) run off the same order state machine.",
    solutionHighlight:
      "By wiring buyers, merchants, and delivery partners into a shared real-time state, the platform eliminated the entire manual coordination layer that was causing a 22% cancellation rate.",
    keyFeatures: [
      {
        title: "Persistent WebSocket Gateway",
        desc: "Maintains live socket channels across all platform surfaces with automatic reconnection logic. Order lifecycle events — placed, accepted, dispatched, delivered — broadcast to all relevant parties in under 200ms, replacing the manual WhatsApp coordination entirely.",
      },
      {
        title: "Geo-Proximity Dispatch Engine",
        desc: "A PostgreSQL PostGIS query engine ranks nearby active delivery partners by proximity, current queue depth, and delivery mode. The top match is automatically assigned and notified — no manual dispatcher required. Average rider-assignment time dropped from 15 minutes to under 40 seconds.",
      },
      {
        title: "Gemini AI Catalog Pipeline",
        desc: "Vendors upload raw supplier PDF price lists. The Gemini LLM pipeline parses unstructured data, infers product categories, maps to the platform taxonomy, and creates structured lot listings with pricing, GST codes, and images — completely eliminating the 3-day manual onboarding process.",
      },
    ],
    outcomes: [
      { value: "80%", label: "Reduction in order lifecycle latency" },
      { value: "< 200ms", label: "Merchant notification time" },
      { value: "0", label: "Manual catalog entry via AI pipeline" },
      { value: "3 Modes", label: "Express, Scheduled, Self-Pickup" },
    ],
  },
  {
    id: "platz-halter",
    featured: false,
    meta: "Platz-Halter",
    time: "2025 - Present",
    title: "Restaurant floor intelligence — auto-resolving table conflicts and optimizing capacity in real time",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL"],
    metrics: [
      { value: "+40%", label: "Average revenue improvement" },
      { value: "0", label: "Double-bookings after launch" },
    ],
    bgColor: "bg-[#0b1120] dark:bg-[#060c18]",
    imageSrc: "/images/p5.png",
    imageAlt: "Platz-Halter restaurant floor management dashboard",
    linkUrl: "https://www.platz-halter.com",
    linkText: "Visit platz-halter.com",
    heroTitle: "The intelligence layer for modern hospitality — resolving table conflicts before staff even notice.",
    heroTitle2: "Zero conflicts. 94% capacity. Automatic.",
    role: "Lead Full Stack Engineer",
    projectType: "SaaS / Restaurant Operations",
    duration: "2025 – Present",
    context: "Platz-Halter is a restaurant floor management SaaS that auto-detects table conflicts, merges large group bookings, and optimizes seating capacity — eliminating manual floor coordination entirely.",
    problemTitle: "Restaurants were losing revenue to conflicts, wasted tables, and missed calls.",
    problemDesc: "Restaurant floor managers were running their evening service on spreadsheets and instinct. Double-bookings from mixed online and walk-in reservations created embarrassing conflicts in front of guests. Tables sat partially empty while large walk-in groups were turned away because no staff could quickly figure out which tables could be merged. During peak service, phone reservations went unanswered — every missed call was a booking lost. Manual 'table tetris' consumed manager attention that should have been on guests.",
    problemMetric: { value: "4+", label: "Booking conflicts per evening service (pre-platform)" },
    solutionTitle: "An autonomous conflict resolution engine with real-time capacity optimization.",
    solutionDesc: "Built a real-time floor intelligence platform with three core layers. A conflict detection engine continuously monitors all incoming reservations — online and walk-in — against the live floor state, flagging overlaps the moment they occur. An auto-merge algorithm evaluates available table combinations and instantly seats large groups by combining adjacent tables, broadcasting the resolution to all devices in under 150ms. A predictive capacity engine runs scenario simulations in the background, maintaining occupancy at 94%+ without overbooking. The visual floor planner lets owners drag-and-drop their exact room layout — table shapes, groupings, and capacities — with changes reflecting live across all staff devices via WebSocket sync.",
    solutionHighlight: "By treating the floor as a live data problem rather than a manual coordination task, Platz-Halter eliminated the entire class of human errors that cost restaurants covers every service.",
    keyFeatures: [
      {
        title: "Real-Time Conflict Resolution Engine",
        desc: "Monitors all reservation channels (online bookings, walk-ins, phone) against the live floor state simultaneously. When a conflict is detected — two parties assigned the same table at overlapping times — the engine evaluates alternatives and auto-resolves by reassigning or merging tables, logging the resolution with zero staff intervention required."
      },
      {
        title: "Intelligent Auto-Merge for Large Groups",
        desc: "When a walk-in group exceeds any single table's capacity, the system evaluates every viable table combination in real time, selects the optimal merge (by proximity, current booking state, and turnaround time), and assigns the combined table automatically. The resolution — 'T4 + T5 merged, party of 8 seated' — appears on all devices in under 150ms."
      },
      {
        title: "Visual Drag-and-Drop Floor Planner",
        desc: "Owners map their exact room layout once — table shapes (round, rectangular), groupings, indoor/outdoor zones, and per-table capacity. The layout drives all conflict logic. Any change to the floor plan propagates to the live system instantly, with zero manual reconfiguration of booking rules required."
      },
    ],
    outcomes: [
      { value: "+40%", label: "Average revenue improvement per venue" },
      { value: "0", label: "Double-bookings post-launch" },
      { value: "94%", label: "Average floor capacity utilization" },
      { value: "< 150ms", label: "Cross-device sync latency" },
    ],
  },
  {
    id: "loknidhi-transparency-system",
    featured: false,
    meta: "LokNidhi",
    time: "2024 – Present",
    title: "Hardware-verified donation governance system for Mandir Trusts",
    tags: ["IoT", "Embedded Systems", "React", "Node.js", "MongoDB", "AWS"],
    metrics: [
      { value: "Zero", label: "Cash leakage via automated validation" },
      { value: "Public", label: "Real-time fund transparency dashboard" },
    ],
    bgColor: "bg-[#1a0d3d] dark:bg-[#110828]",
    imageSrc: "/images/p6.png",
    imageAlt: "LokNidhi temple donation transparency system",
    linkUrl: "#",
    linkText: "In Development",
    heroTitle: "India's first hardware-verified donation governance system for Mandir Trusts.",
    heroTitle2: "Where every rupee is tracked, verified, and publicly accounted for.",
    role: "Full Stack Engineer & System Architect",
    projectType: "IoT + SaaS / Civic Governance",
    duration: "2024 – Present",
    context: "A hardware + software ecosystem bringing full financial transparency to Mandir Trusts — smart cash acceptance machine, digital multi-level approvals, geo-tagged expense proofs, and a public fund audit ledger.",
    problemTitle: "Temple donation cash was leaking with zero accountability or public visibility.",
    problemDesc: "Manual donation boxes across Mandir Trusts had no verification layer — cash could be skimmed before counting, manual registers were easily manipulated, and fake invoices were used to siphon development funds. Devotees had no way to know whether their donations were reaching the intended projects. With no public ledger and no multi-party approval on expenses, trust in temple fund management had eroded significantly across communities.",
    problemMetric: { value: "0%", label: "Public visibility into temple fund usage (pre-system)" },
    solutionTitle: "Smart cash machine + immutable public ledger with multi-role approval workflow.",
    solutionDesc: "Built a two-layer system: hardware and software working in lockstep. The smart cash acceptance machine validates currency (counterfeit detection), logs every note deposited with a timestamp and session ID, generates QR-coded receipts, and syncs to AWS IoT Core in real time. On the software side, a multi-role approval workflow (Manager → Committee → Auditor) governs every expense — each requires invoice upload, geo-tagged photo proof, and sequential sign-offs before funds are released. A public transparency dashboard lets any devotee view the live fund balance, all approved expenses, and a 'Where did my ₹1 go?' breakdown. Daily automated reconciliation tallies hardware logs against bank deposits, flagging any discrepancy.",
    solutionHighlight: "Hardware-verified cash intake combined with an immutable public ledger closes every gap where temple funds could disappear — from donation box to development project completion.",
    keyFeatures: [
      {
        title: "Smart Cash Acceptance Machine",
        desc: "Validates currency via counterfeit detection sensors, logs each deposit with timestamp and session metadata, and generates QR-coded receipts instantly. All data syncs to AWS IoT Core in real time — zero manual counting required and no window for cash leakage between deposit and logging."
      },
      {
        title: "Multi-Level Expense Approval Workflow",
        desc: "Every expense request requires digital invoice upload, geo-tagged photo proof from the site, and sequential approvals from Manager, Committee, and Auditor roles before any funds are released. No single person can approve their own expense — the workflow enforces separation of duties by design."
      },
      {
        title: "Public Fund Transparency Dashboard",
        desc: "A publicly accessible real-time dashboard showing total donations collected, all approved expenses with proof links, ongoing project fund utilization, and a devotee-facing 'Where did my ₹1 go?' breakdown. Designed to restore community confidence through radical transparency rather than just internal accountability."
      },
      {
        title: "Automated Daily Reconciliation",
        desc: "Nightly reconciliation job compares hardware session logs against bank deposit confirmations, flagging any mismatch automatically. Discrepancy alerts are sent to all Auditor-role users with a detailed variance report — making irregularities impossible to hide and easy to investigate."
      },
    ],
    outcomes: [
      { value: "Zero", label: "Cash leakage through hardware validation" },
      { value: "3-Level", label: "Multi-party expense approval chain" },
      { value: "Public", label: "Real-time donation audit ledger" },
      { value: "AES-256", label: "End-to-end transaction encryption" },
    ],
  },
  {
    id: "community-food-waste-tracker",
    featured: false,
    meta: "FoodRescue",
    time: "2023",
    title: "Real-time food rescue network connecting restaurants with NGOs and shelters",
    tags: ["React.js", "Node.js", "MongoDB", "Firebase", "Google Maps API"],
    metrics: [
      { value: "Real-time", label: "NGO alerts for nearby donations" },
      { value: "Route-optimized", label: "Multi-pickup coordination" },
    ],
    bgColor: "bg-[#3d1f00] dark:bg-[#2b1500]",
    imageSrc: "/images/p10.png",
    imageAlt: "FoodRescue community food donation platform",
    linkUrl: "#",
    linkText: "In Development",
    heroTitle: "A real-time food rescue network eliminating the coordination gap between donors and NGOs.",
    heroTitle2: "Surplus food posted. NGOs notified. Pickup routed. Waste eliminated.",
    role: "Full Stack Developer",
    projectType: "Community Platform / Social Impact",
    duration: "2023",
    context: "A digital platform where restaurants and households post surplus food and nearby NGOs and volunteers receive instant geo-targeted notifications with route-optimized pickup coordination.",
    problemTitle: "Surplus food was going to waste because donors and NGOs couldn't coordinate in real time.",
    problemDesc: "Restaurants and households with surplus food had no reliable way to alert nearby NGOs before the food spoiled. Existing donation processes required phone calls, WhatsApp messages, and manual coordination — by the time an NGO confirmed availability and arranged pickup, the food was often no longer safe to distribute. NGOs wasted hours tracking down viable donations instead of focusing on distribution. The result was avoidable food waste alongside unsatisfied demand from shelters that needed it.",
    problemMetric: { value: "Hours", label: "Lost per NGO per day on manual donation coordination" },
    solutionTitle: "Geo-targeted instant alerts with route-optimized multi-pickup coordination.",
    solutionDesc: "Built a two-sided platform: donors post surplus food with type, quantity, pickup window, and GPS location — the post goes live immediately. Nearby NGOs and volunteers receive instant push notifications filtered by distance and food type. Volunteers can claim a pickup from their phone, and the system generates a Google Maps-optimized route if they have multiple pickups in the same window. An AI trend module analyzes historical donation patterns to help restaurants predict surplus in advance and pre-schedule NGO pickups, reducing same-day coordination overhead. Impact tracking gives donors a feed of where their food went.",
    solutionHighlight: "Replacing WhatsApp coordination chains with instant geo-targeted alerts and route optimization collapsed the time between surplus food available and NGO pickup confirmed from hours to minutes.",
    keyFeatures: [
      {
        title: "Instant Geo-Targeted NGO Alerts",
        desc: "When a donor posts surplus food, the system immediately pushes notifications to all registered NGOs and volunteers within a configurable radius. Alerts include food type, quantity, pickup window, and mapped location — giving NGOs everything needed to claim and confirm without a single phone call."
      },
      {
        title: "Route-Optimized Multi-Pickup",
        desc: "Volunteers with multiple pickups in a single run get a Google Maps-optimized route covering all stops in the minimum time. The system handles pickup sequencing based on food perishability windows — most time-sensitive items are always first in the route."
      },
      {
        title: "Predictive Surplus Scheduling",
        desc: "An AI module analyzes each donor's historical surplus patterns (day of week, meal type, typical quantities) and suggests pre-scheduled NGO pickups before surplus even occurs — reducing same-day emergency coordination and giving NGOs predictable supply."
      },
    ],
    outcomes: [
      { value: "Minutes", label: "Donor-to-NGO confirmation (was hours)" },
      { value: "Real-time", label: "Geo-targeted NGO notifications" },
      { value: "Route-Opt.", label: "Multi-stop pickup coordination" },
      { value: "Predictive", label: "AI-based surplus scheduling" },
    ],
  },
  
];
