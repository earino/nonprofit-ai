# Nonprofit.ai

A free, open-source repository of AI prompts designed specifically for nonprofit professionals.

**Live Site:** [https://nonprofit.ai](https://nonprofit.ai)

## What is This?

Nonprofit.ai provides 80+ tested, ready-to-use AI prompts for nonprofit staff across 6 categories:
- Fundraising & Development (donor letters, grants, appeals)
- Communications & Marketing (social media, newsletters, press releases)
- Program Management (impact reports, evaluations)
- Event Planning (invitations, sponsorships, marketing)
- Board & Leadership (governance, strategic planning)
- Operations & HR (policies, job descriptions, procedures)

Every prompt is:
- Designed for nonprofit contexts and audiences
- Tested with real AI models (GPT-5, Claude Sonnet 4.5, Gemini 2.5 Flash)
- Validated with 3 realistic nonprofit scenarios
- Scored for quality (8.0+ average across all outputs)
- Free forever with no paywalls or accounts required

## How to Use (End Users)

1. Visit [nonprofit.ai](https://nonprofit.ai)
2. Browse prompts by category or search
3. Click a prompt to view details and example outputs
4. Copy the prompt and replace [BRACKETS] with your details
5. Paste into ChatGPT, Claude, or your AI tool of choice

## For Developers

### Tech Stack

- **Astro 5.x** - Static site generator with content collections
- **Tailwind CSS v4** - Utility-first styling via Vite plugin
- **React 19** - Interactive components (copy button, scenario viewer)
- **TypeScript** - Strict type checking
- **Pagefind** - Client-side search
- **GitHub Pages** - Free hosting with custom domain

### Local Development

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npx astro check
```

### Project Structure

```
nonprofit.ai/
├── src/
│   ├── content/
│   │   └── prompts/          # Markdown prompt files with frontmatter
│   ├── pages/
│   │   ├── prompts/[slug].astro   # Dynamic prompt detail pages
│   │   ├── category/[category].astro
│   │   └── index.astro            # Homepage
│   ├── components/
│   │   ├── CopyButton.tsx         # React copy-to-clipboard button
│   │   └── ScenarioModelViewer.tsx # React component for test results
│   └── layouts/
│       └── BaseLayout.astro       # Shared layout with nav/footer
├── data/outputs/              # AI test result JSONs (80 files)
├── public/                    # Static assets
└── astro.config.mjs          # Astro configuration
```

### Adding a New Prompt

1. Create a markdown file in `src/content/prompts/your-prompt-name.md`
2. Use this frontmatter structure:

```yaml
---
title: "Your Prompt Title"
description: "One-line description"
category: "fundraising" # or communications, programs, events, board, operations
subcategory: "Donor Communications"
tags: ["tag1", "tag2"]
role: ["Development Director"] # Must match schema enums
difficulty: "Beginner" # or Intermediate, Advanced
updated: 2025-11-02
---
```

3. Follow the standard prompt structure (see CLAUDE.md for details)
4. Test the prompt using the [prompt-harness](https://github.com/earino/prompt-harness)
5. Submit a pull request

### Testing Prompts

We use an automated testing harness to validate every prompt with AI models:

```bash
# Clone the harness repo
git clone https://github.com/earino/prompt-harness.git

# Set up environment
cd prompt-harness
pip install -r requirements.txt
cp .env.example .env
# Add your OPENROUTER_API_KEY to .env

# Test a single prompt
python harness.py --nonprofit-ai-path ../nonprofit.ai --prompt your-prompt-slug

# Test all prompts (with parallelization)
python harness.py --nonprofit-ai-path ../nonprofit.ai --all --parallel 10
```

Results are saved to `data/outputs/{slug}.json` and automatically displayed on the site.

## Licensing

**Code:** MIT License (see `LICENSE`)
**Prompt Content:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (see `LICENSE-CONTENT`)

This means:
- Code is freely usable for any purpose
- Prompts can be shared and adapted for non-commercial use with attribution
- Commercial use of prompts requires permission

## Contributing

We welcome contributions! See full guidelines in CLAUDE.md.

**Quick contribution guide:**
1. Fork the repository
2. Create a feature branch
3. Add your prompt following the structure above
4. Test it with the harness
5. Submit a pull request

**Content Guidelines:**
- Prompts must be nonprofit-specific (not generic business)
- Use [BRACKETS] for customizable fields
- Include clear customization instructions
- Provide example outputs
- Test with multiple AI models before submitting

## Deployment

The site deploys automatically via GitHub Actions:
- Push to `main` triggers build
- Astro builds static HTML
- Pagefind generates search index
- Deploys to GitHub Pages
- Live at https://nonprofit.ai

## Documentation

- **CLAUDE.md** - Full development guide for Claude Code
- **PROJECT_PLAN.md** - Implementation roadmap and progress tracking

## Credits

Created by [Eduardo Ariño de la Rubia](https://www.linkedin.com/in/earino/) and [Leigh S. Ariño de la Rubia](https://www.linkedin.com/in/leigharino/).

## Support

Questions or feedback? Email [leigh@ppm.io](mailto:leigh@ppm.io)

---

**Built by Nonprofit and AI professionals for Nonprofit AI professionals.**
