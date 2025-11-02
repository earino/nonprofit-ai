---
title: "Event Planning Timeline"
description: "Month-by-month planning checklist with deadlines"
category: "events"
subcategory: "Event Planning"
tags: ["events", "timeline", "project management"]
role: ["Development Director", "Program Manager"]
difficulty: "Intermediate"
updated: 2025-11-01
---

## The Prompt

```
Create a backward-planned Event Planning Timeline for [ORGANIZATION NAME]’s [EVENT NAME] on [EVENT DATE].

REQUIRED INPUTS (fill these in):
- [ORGANIZATION NAME]: Your nonprofit’s name
- [EVENT NAME]: e.g., “Annual Spring Gala,” “Community Health Fair,” “Donor Breakfast”
- [EVENT DATE]: MM/DD/YYYY
- [EVENT TYPE]: Select one: Gala/Fundraising Dinner | Conference/Summit | Community Festival | Donor Cultivation Event | Auction | Walk/Run | Other: ______
- [EXPECTED ATTENDANCE]: Number (e.g., 75, 250, 500)

OPTIONAL INPUTS (include if relevant):
- [BUDGET RANGE]: e.g., “$5K–10K,” “$25K–50K,” “$100K+” (total event budget)
- [REVENUE TARGET]: e.g., “Net $50K,” “Gross $100K,” “N/A (friend-raising)”
- [SPONSORSHIP GOAL]: e.g., “$30K from 6 sponsors,” “3 x $10K presenting,” “N/A”
- [VENUE TYPE]: e.g., “Hotel ballroom,” “Outdoor park (rain plan),” “Community center,” “Virtual/Hybrid”
- [TEAM SIZE]: e.g., “2 FT + 5 volunteers,” “Solo ED + board committee,” “3-person dev team”
- [AUDIENCE]: e.g., “Major donors,” “Families,” “Corporate partners,” “Alumni”
- [KEY CONSTRAINTS]: e.g., “First-time event,” “Venue must be booked by X,” “Limited AV,” “Board approval >$5K”
- [SPECIAL REQUIREMENTS]: e.g., “Bilingual Spanish/English,” “Kosher,” “ASL,” “Live + silent auction,” “Hybrid”
- [TONE] (applies to entire output; defaults to WARM if not provided): FORMAL | WARM | CASUAL

OUTPUT FORMAT (deliver in two parts):
- PART 1: Executive Summary (200–300 words)
  - Event overview and goals
  - Critical path (top 5–7 must-hit milestones with rationale)
  - Key risks + mitigations (vendor timelines, approvals, weather/tech, budget)
  - Resource summary (team/volunteers/vendors; highlight gaps)
- PART 2: Detailed Timeline Table
  - Columns: Milestone Phase | Task | Owner | Due Date (calendar) | Lead Time | Duration | Dependencies | Priority (P1/P2/P3) | Status (Not Started/In Progress/Blocked/Done) | Notes/Risks (include mitigation) | Cost/Revenue Impact
  - Owner options: Development/Programs/Comms/Finance/ED/Board/Volunteer Lead/Vendor (or specific titles)

TIMELINE ANCHORS (compute actual calendar dates from [EVENT DATE] and show both anchor and date):
- T-6m | T-4m | T-3m | T-2m | T-1m | T-2w | T-1w | Event Day | T+1d | T+1w | T+1m

CONTENT REQUIREMENTS BY PHASE (adapt to event type; keep scope realistic for small teams):
- T-6m (include if [EXPECTED ATTENDANCE] > 150 or [BUDGET RANGE] > $25K; otherwise, condense into T-4m)
  - Venue short-list, site visits, contract signed, deposit paid; insurance/COI requirements noted [LEAD-TIME FLAG]
  - Draft budget + revenue model; approval path (board/finance)
  - Event committee formed; meeting cadence set
  - Save-the-date strategy (channels, list segments); design brief opened [TEMPLATE]
- T-4m
  - Sponsorship track begins: prospect list (20–30), benefits matrix/deck, outreach cadence (email + call every 2 weeks), meeting schedule; goal tracking
  - Vendor RFPs: catering, AV, rentals, printing; compare bids; select vendors; contracts [LEAD-TIME FLAG; add 10–15% buffer] 
  - Permits/licensing (alcohol, park/street use); security if needed [LEAD-TIME FLAG]
- T-3m
  - Marketing/registration launch: platform setup (Eventbrite/Classy/etc.), event page (accessible: alt text, contrast, keyboard nav), email/social/web/partner plan with cadence; conversion checkpoints (25% by T-2m; 60% by T-1m; 85% by T-2w)
  - Sponsorship agreements executed; invoices sent; W-9/ACH details; benefits tracker
  - Program outline: theme, speakers/emcee/honorees holds; initial run-of-show
- T-2m
  - Volunteer roles/descriptions posted; recruitment sources; captain assignments; background checks (2–3 weeks if required)
  - Auction procurement (if applicable): solicitation list, intake form, item descriptions/photos, FMV; tracking sheet [TEMPLATE]
  - Creative/printing briefs (invites, signage, program); sponsor logo/asset deadlines for print/slide inclusion [LEAD-TIME FLAG; add 10–15% buffer]
  - Accessibility plan locked: ASL/interpretation holds; dietary accommodation flow; ADA seating; SSV duty
  - Schedule an Accessibility Audit checkpoint at T-6w (venue ADA, registration form accessibility, wayfinding, sensory considerations)
- T-1m
  - Marketing push: reminder emails, social countdown, partner boosts; press/community calendars
  - Mobile bidding/payment tools configured and tested; merchant account/PCI; backup manual forms
  - Program ad final deadline; slides template to speakers; collect bios/headshots
  - Draft run-of-show v2 with cues; rehearsal date set
- T-2w
  - Final attendance push; catering guarantee submitted (set internal deadline 3–5 days earlier) [LEAD-TIME FLAG]
  - Run-of-show final: scripts, AV cues, fundraising moments (live auction lots, paddle raise levels, pledge text)
  - Volunteer training conducted; comms tree and arrival logistics distributed
  - Signage and printed materials to printer; proof approvals [LEAD-TIME FLAG; 10–15% buffer]
  - Sponsor recognition assets finalized (banners, step-and-repeat, slides, program listings)
- T-1w
  - Logistics lock: floorplan, rentals delivery/pickup windows, load-in/out schedule; parking/transportation plan; coat check
  - Full tech/payment rehearsal; backup hotspots; spare card readers; charging kits
  - Emergency plan (medical/weather/evacuation/tech failure); roles and contacts; incident log template [TEMPLATE]
  - Dietary needs to caterer; seating chart finalized
- Event Day
  - Load-in timeline by vendor; check-in setup; signage placement; brief volunteers; green room/speaker check
  - Execute run-of-show; real-time issue tracker; photo/video capture plan
  - On-site sponsor stewardship; pledge capture verification; end-of-night payment reconciliation start
- T+1d
  - Segmented thank-yous (attendees, donors, sponsors, volunteers, speakers) with photos/link to album
  - Staff/lead volunteer debrief (quick wins/issues); top 3 fixes documented
- T+1w
  - Pledge/AR follow-up; auction item delivery/certificates; expense/revenue reconciliation in progress
  - Sponsor thank-you calls; preliminary impact metrics; fulfillment steps/next touch scheduled
  - Upload CRM data; tag attendees; opt-outs honored [TEMPLATE]
- T+1m
  - Final revenue/expense report; KPIs (attendance vs goal, net, CPDR, sponsor retention, volunteer satisfaction)
  - Sponsor stewardship reports (photos, metrics, quotes); renewal prompts if appropriate
  - Board report; “Template for next year” notes (what worked, vendors, timeline tweaks) [TEMPLATE]

FUNDRAISING ELEMENTS (ensure included where applicable):
- Auction: procurement calendar, item intake/photo, packaging, mobile bidding setup, preview catalog, item pickup/delivery, unsold items plan
- Paddle raise: levels set, impact statements, pledge capture process, MC script, spotters, reconciliation steps
- Payment processing: merchant setup, reader inventory, fee modeling, nightly reconciliation, refund policy

VOLUNTEERS (start T-8–4w):
- Role descriptions, recruitment sources, screening/background checks, shifts, captains, training, comms plan, recognition

LOGISTICS:
- Rentals/floorplan/signage; transportation/parking; dietary needs; sustainability (digital programs, compostables, food donation); contingency/rain plan; emergency roles; COIs

RULES AND QUALITY BARS:
- Calculate and display actual calendar dates for every task based on [EVENT DATE]
- Build 10–15% buffer into external deliverables; flag vendor lead times (venue, catering guarantees, AV, printing, permits, COIs) clearly
- Mark recurring tasks with [TEMPLATE] to enable reuse next year
- Prioritize critical path with Priority levels (P1/P2/P3); note domino effects if delayed
- Tone: use the selected [TONE] (FORMAL/WARM/CASUAL) for the entire output; default is WARM and practical, with clear, jargon-free language

TASK FORMATTING EXAMPLES:
- DO: “Secure venue: tour 3 options, negotiate terms, sign, pay $2,500 deposit — Owner: Development — Due: 02/14/2025 — Lead Time: 6 weeks — Duration: 3 weeks — Dependencies: budget approval — P1 — Notes/Risks: hold expires 2/10; mitigation: internal deadline 2/7 — Cost Impact: $2,500 deposit”
- DO: “Sponsor outreach batch 1: 12 prospects, personalized asks — Owner: Development — Due: 03/01/2025 — Lead Time: 2 weeks — Duration: 5 days — Dependencies: deck approved — P1 — Revenue Impact: est. $15K pipeline”
- DON’T: “Plan logistics” or “Engage stakeholders”

COMPLEXITY ADJUSTMENTS (apply if [EXPECTED ATTENDANCE] > 200 OR [BUDGET RANGE] > $50K):
- Add: professional day-of coordinator, security plan/vendor, additional site visit/walkthrough, valet/traffic control, staging/lighting design, dedicated registration lead, backup internet, additional rehearsal, photo/video shot list, sponsor activation build-outs

DELIVERABLE:
- Provide the 200–300 word Executive Summary followed by a complete timeline table (40–60 specific, dated tasks across all phases). If optional inputs are missing, make reasonable assumptions and state them briefly in the Executive Summary. If any required input is missing, ask for it before proceeding.
```

## How to Customize

1. Replace all [BRACKETED] fields with your specific information
2. Adjust tone and length as needed for your audience
3. Review and personalize before using

## Pro Tips

1. Test this prompt with your preferred AI tool before using in production
2. Always review AI output for accuracy and appropriateness
3. Customize outputs to match your organization's voice and brand

## Related Prompts

(See other prompts in the events category)
