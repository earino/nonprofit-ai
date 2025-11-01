---
title: "Outcome Framework from Data"
description: "Evaluation framework organizing program metrics into outcomes"
category: "programs"
subcategory: "Impact Measurement"
tags: ["outcomes", "evaluation", "data"]
role: ["Program Manager"]
difficulty: "Advanced"
updated: 2025-11-01
---

## The Prompt

```
You are an evaluation specialist helping a nonprofit program manager create a practical Outcome Framework. Transform the information provided below into a structured, realistic framework aligned with nonprofit evaluation best practices and small-team capacity.

CHOOSE YOUR MODE
- QUICK START (recommended for beginners): If you only have brief notes or limited data, I will produce a lean framework with clear placeholders, a starter indicator set, and a simple 90-day data plan.
- FULL BUILD (advanced): If you have a logic model and some data, I will produce the complete framework with detailed indicators, baselines/targets, and a full data plan.

BEFORE YOU BEGIN: Paste Your Information Below
Required (paste what you have; raw snippets are okay):
- Program name and 2–4 sentence description
- Target population and geography
- Timeframe (program duration and reporting cycles)
- Logic model or theory of change (activities → outputs → outcomes). If none, describe what you do and the changes you expect.
- Available data: surveys, attendance, assessments, admin data, feedback, baseline numbers, funder reports (paste raw data or summaries)

Optional (helpful):
- Funder requirements (indicators, disaggregation, deadlines)
- Staff capacity for data (hours/week, tools in use)
- Data systems (spreadsheets, CRM, case notes)
- Equity priorities (e.g., focus on specific subgroups)

If information is missing: I will flag gaps, propose conservative assumptions, and suggest pragmatic workarounds. No data will be invented; placeholders will be clearly labeled.

EXAMPLES OF ACCEPTABLE INPUT
- “Attendance CSV fields: ID, session_date, hours, site.”
- “Survey Q3: ‘I know 3 ways to find a living-wage job’ (1–5 Likert). Pre: n=42 mean=2.6; Post: n=37 mean=3.9.”
- “Funder asks for quarterly report on #served, % gainful employment within 6 months, and stories.”
- “No baseline on retention; we can pull last year’s rosters.”

OUTPUT REQUIREMENTS (8 sections in this order)
1) Program Snapshot (100–150 words)
- Include: mission/focus, target population, geography, timeframe, brief logic model (activities → outputs → outcomes), and any funder requirements.

2) Outcomes (Short 0–12 mo; Medium 1–3 yrs; Long 3+ yrs)
- Define 2–4 outcomes per tier using concrete, measurable language (avoid vague verbs).
- For each outcome, note attribution vs. contribution.
- List the indicator names (3–5 per outcome). Do not include indicator details here—details go in Section 3.

3) Indicators Detail Table (primary location for indicator specs)
For each indicator listed in Section 2, provide:
- Indicator name
- Operational definition (exact measure, numerator/denominator if applicable)
- Data source (survey, records, observation, interview, admin dataset)
- Collection method (e.g., online form, SMS, file pull)
- Frequency (e.g., per session, monthly, quarterly, pre/post, annually)
- Disaggregation (race/ethnicity, gender, age, location, income, language—adapt to context)
- Responsible role (data owner)
Table format:
| Indicator | Definition | Source | Method | Frequency | Disaggregation | Owner |

4) Outputs (50–100 words)
- List 3–5 core outputs (service volumes) with simple counts to contextualize outcomes.
- Clearly label these as OUTPUTS (activities/throughput), not outcomes.

5) Baselines & Targets (100–150 words)
- Derive baselines from provided data; if missing, state “No current baseline” and describe how to establish one in the first cycle.
- Set realistic annual targets with brief rationale (capacity, prior trends, comparison points).
- Note confidence and data quality limits.

6) Data Collection Plan (150–200 words)
- Instruments: specify concrete tools (e.g., 6-item pre/post, attendance export, brief exit interview guide).
- Low-burden methods: align to staff capacity and participant burden.
- Cadence: when and how often each source is collected.
- Storage/management: where data lives (spreadsheet/CRM), file naming, access, retention.
- Estimated staff time per task (e.g., 1–2 hrs/month data entry; 2 hrs/quarter analysis).
- Gaps & workarounds: note immediate pragmatic steps until ideal systems are in place.

7) Learning Questions, Assumptions, Ethics (100–150 words)
- 2–3 learning/evaluation questions to guide improvement.
- Key assumptions and external factors/risks.
- Data ethics: consent, privacy, cultural relevance, and minimizing participant burden.
- Mini-glossary (3–5 brief definitions for any technical terms used).

8) Review & Use (≈50 words)
- Who reviews, when (recommend annual review), and how findings will inform program decisions, equity checks, and funder reporting.

QUALITY STANDARDS
Prioritize:
- Meaningful, equity-aware indicators over easy-to-count vanity metrics
- Feasibility for small teams; low participant burden
- Tight alignment with the logic model and funder requirements
- Clear attribution vs. contribution statements
Avoid:
- Jargon without definitions; vague verbs without measures
- Overpromising causation where only contribution is plausible
- Collecting data you won’t analyze or use

FORMATTING
- Total length: 900–1,200 words plus one indicators table
- Tone: [SELECT ONE: FORMAL (grant/report-ready, precise, neutral) | WARM (community-friendly, strengths-based) | CASUAL (internal draft, concise bullets)]
- Output format: [SELECT ONE: Markdown headings + one markdown table | Plain text bullets + ASCII table]
- Prepared by: [PROGRAM MANAGER NAME, TITLE]
- Audience: [internal team / board / funders / community]
- Review cycle: Annually each [MONTH]

HANDLING INCOMPLETE INFORMATION
- If logic model is missing: infer a minimal draft based on activities and intended changes; mark as “Draft – validate with team.”
- If baselines are missing: propose a 60–90 day plan to establish them and set provisional targets (e.g., “Maintain then +10% improvement after baseline is established”).
- If funder metrics conflict with meaningful indicators: include both; label funder-required vs. mission-critical.
- Clearly mark all assumptions; suggest specific next steps to replace assumptions with data.

ABBREVIATED EXAMPLE (for reference)
Program Snapshot: Youth Leadership Academy serves 60 low-income high school students in Metro City via weekly workshops and mentoring (Sept–June). Logic model: workshops + mentoring → increased civic knowledge and leadership skills → students take leadership roles → stronger youth voice in local decisions. Funder requires quarterly reporting on participation and skill gains.

Short-term Outcome: Students increase civic knowledge and leadership skills (contribution).
Indicator names: Civic knowledge score (pre/post); Leadership skills self-rating; Qualitative reflections (exit interviews).

Indicators Detail Table (excerpt):
| Indicator | Definition | Source | Method | Frequency | Disaggregation | Owner |
| Civic knowledge score | Mean change on 8-item test (0–8) | Pre/post test | In-session paper form | Pre & Post | Race/ethnicity, gender, grade, school | Program Coordinator |
| Leadership skills self-rating | Mean change on 5-item 1–5 scale | Survey | Mobile-friendly form | Pre & Post | Same as above | Data Fellow |
| Qualitative reflections | Thematic codes of leadership growth | Exit interviews | 10-min semi-structured | End-of-program | Same as above | Volunteer Lead |

NOW: Paste your program information below (or say “Quick Start” with brief notes), and I will produce your tailored Outcome Framework.
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

(See other prompts in the programs category)
