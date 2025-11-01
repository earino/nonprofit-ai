---
title: "Email Subject Line Generator"
description: "Compelling subject lines for fundraising/program emails"
category: "communications"
subcategory: "Email Marketing"
tags: ["email", "subject lines", "open rates"]
role: ["Communications Manager", "Development Director"]
difficulty: "Beginner"
updated: 2025-11-01
---

## The Prompt

```
Generate 7 high-performing email subject lines for [ORGANIZATION NAME]’s [CAMPAIGN TYPE] campaign.

REQUIRED INPUTS
- Organization name: [ORGANIZATION NAME]
- Campaign type: [CAMPAIGN TYPE]
  Examples: year-end appeal, Giving Tuesday, event invitation, volunteer recruitment, advocacy alert, monthly newsletter
- Primary goal/CTA: [GOAL/CTA]
  Examples: donate $50, sign petition, register for gala, volunteer sign-up
- Tone: [TONE: WARM/FORMAL/CASUAL]
  - WARM: friendly, mission-centered (most donors/volunteers)
  - FORMAL: clear, respectful (funders/institutions)
  - CASUAL: upbeat, conversational (peers/younger audiences)

OPTIONAL INPUTS (use any; defaults apply if blank)
- Audience segment: [AUDIENCE SEGMENT] (default: general supporters)
- Key benefit/impact: [BENEFIT/IMPACT] (example: “$50 provides 100 meals”)
- Deadline: [DEADLINE DATE] (if time-sensitive)
- Location: [CITY/REGION] (for local relevance)
- Email platform: [EMAIL PLATFORM] (Mailchimp, Constant Contact, Campaign Monitor, HubSpot)
- Emoji policy: [EMOJI POLICY: NONE/LIMITED/OK] (default: LIMITED)
- Personalization: [YES/NO] (default: YES)
  - First name tag: [FIRST NAME TAG] (examples: Mailchimp {{FirstName}}, Constant Contact [First Name], Campaign Monitor [firstname], HubSpot {{contact.firstname}})
  - City tag (optional): [CITY TAG] (examples: {{City}}, [City])
  - Fallback term if name/city missing: [FALLBACK: friend/supporter/neighbor] (default: friend)
- From-name preference: [FROM NAME PREFERENCE: ORG/STAFF/CEO] (default: STAFF for appeals; ORG for updates)

OUTPUT FORMAT
SECTION 1: TOP 2 SUBJECT LINES (Ready to A/B test)
For each option provide:
- Subject line (40–60 characters ideal; up to 70 if needed). Include character count.
- Brief rationale (one sentence on benefit or curiosity hook)
- Complementary preheader (50–90 characters; adds context; does not repeat the subject). Include character count.
- Two versions: with emoji and without emoji (only if allowed by Emoji policy). Recommend specific emoji only if policy is LIMITED/OK.

SECTION 2: 5 ADDITIONAL OPTIONS
- Provide 5 more subject lines with character counts and one-sentence rationales.
- Label each with its type: curiosity-led, benefit-led, action-led, or personalized.
- Mix across all 7 total: 2 curiosity-led, 2 benefit-led, 2 action-led, 1 personalized (uses [FIRST NAME TAG] or [CITY TAG] with fallback).

SECTION 3: PREHEADERS FOR THE 5 ADDITIONAL OPTIONS
- Provide a matching preheader for each (50–90 characters; add context; no repetition of the subject). Include character counts.

SECTION 4: SPAM & DELIVERABILITY CHECK
- Flag any potential triggers (FREE, URGENT, ACT NOW, $$$, ALL CAPS, excessive punctuation like !!! or ???).
- If any appear, provide a clean rewrite immediately below.
- Note any risky phrasing and how you mitigated it.

SECTION 5: A/B TEST RECOMMENDATION
- Choose two subject lines to test.
- Select ONE variable: emoji vs none, benefit vs curiosity, personalized vs generic, or short vs long.
- Hypothesis: “We predict [VERSION A] will perform better because [REASON].”
- Success metric: open rate (nonprofit benchmark ~20–25%). Note any list-specific considerations.

SECTION 6: FROM NAME RECOMMENDATION
- Recommend 1–2 “From name” options aligned to [FROM NAME PREFERENCE] and campaign type.
  Examples:
  - Personal appeals/stories: “[STAFF/CEO NAME] at [ORG NAME]”
  - Organizational updates: “[ORG NAME]”
  - Peer-to-peer/grassroots: “[Staff First Name], [ORG NAME]”
- Include a brief note on why this format fits the audience and goal.

QUALITY STANDARDS
- Character length: 40–60 characters ideal for mobile; 60–70 acceptable for desktop-heavy audiences.
  Mobile inboxes often truncate around 30–40 characters—front-load key words.
- Reading level: 6th–8th grade; short, clear sentences; nonprofit voice.
- Lead with benefit or thoughtful curiosity; avoid clever-but-unclear wording.
- Action-oriented verbs; highlight real impact (e.g., “your gift provides [IMPACT/UNIT]”).
- Avoid guilt trips, bait-and-switch, ALL CAPS, excessive punctuation, spammy language.
- Personalization: include merge tags only when they add value; always include a fallback term.
- Accessibility: do not rely on emoji alone; ensure meaning stands without emoji.
- Paste-ready for small teams using [EMAIL PLATFORM]; keep formatting simple.
- Test one variable at a time; document outcomes for learning.

NOTES ON CHARACTER COUNTS AND PREVIEWS
- 40–60 characters generally shows well on mobile and most inboxes.
- 60–70 characters can work for desktop-heavy audiences or when clarity needs a few extra words.
- Always put the most important words first to survive truncation.

EXAMPLE INPUT (for reference)
- Organization name: City Food Bank
- Campaign type: Year-end giving appeal
- Primary goal/CTA: Donate $50 to provide holiday meals
- Tone: WARM
- Audience segment: Lapsed donors (gave 12–24 months ago)
- Key benefit/impact: $50 provides 100 meals
- Deadline: December 31
- Email platform: Mailchimp
- Emoji policy: LIMITED
- Personalization: YES (First name tag {{FirstName}}, fallback: friend)
- From-name preference: STAFF

EXAMPLE OUTPUT (abbreviated)
SECTION 1: TOP 2
Option A
- Subject: {{FirstName}}, 100 meals start with you (39)
- Rationale: Personalization plus concrete impact builds ownership and clarity.
- Preheader: Your $50 puts holiday meals on neighbors’ tables before Dec 31. (78)
- With emoji: {{FirstName}}, 100 meals start with you 🍽️ (41)
- Without emoji: {{FirstName}}, 100 meals start with you (39)

Option B
- Subject: The holiday gift that feeds 100 neighbors (45)
- Rationale: Benefit-forward with community connection and seasonal relevance.
- Preheader: Make your year-end gift to City Food Bank by December 31. (73)
- With emoji: The holiday gift that feeds 100 neighbors ❤️ (47)
- Without emoji: The holiday gift that feeds 100 neighbors (45)

[Sections 2–6 would continue in the same format.]

NEXT STEPS AFTER GENERATION
1) Review the top 2 with your team and confirm tone/fit.
2) Load both into [EMAIL PLATFORM] as A/B variants; split audience 50/50 or use automatic winner.
3) If your list is large, send to 10–20% first; wait 2–4 hours.
4) Declare winner by open rate; send the winner to the remainder.
5) Log results (winning variant, variable tested, open rate) to inform future campaigns.

If unsure about any input, start with only the 4 required fields. Reasonable defaults will be applied for optional items based on nonprofit best practices.
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

(See other prompts in the communications category)
