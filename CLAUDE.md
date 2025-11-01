# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nonprofit.ai is a static website that serves as a comprehensive repository of AI prompts for nonprofit professionals. It's built with Astro, styled with Tailwind CSS, and deployed to GitHub Pages at https://nonprofit.ai.

**Key Goal**: Provide 60-80 high-quality, tested AI prompts across 6 categories (fundraising, communications, programs, events, board, operations) to help nonprofit staff save time and increase impact.

## Development Commands

```bash
# Start development server (runs on localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npx astro check
```

## Architecture

### Content Collections System

This project uses Astro's Content Collections for managing prompts. All prompts are markdown files in `src/content/prompts/` with strictly typed frontmatter.

**Schema** (`src/content/config.ts`):
- `category`: One of 6 categories (fundraising, communications, programs, events, board, operations)
- `role`: Array of nonprofit roles (Development Director, Communications Manager, Program Manager, Executive Director, Operations Coordinator)
- `difficulty`: Beginner, Intermediate, or Advanced
- `tags`: Array of searchable keywords
- `updated`: Date for tracking freshness

**Critical**: The schema is strict - adding new categories or roles requires updating `src/content/config.ts` enums.

### Prompt File Structure

Every prompt must be a markdown file with this exact structure:

```markdown
---
title: "Descriptive Title"
description: "One-line description"
category: "fundraising"
subcategory: "Donor Communications"
tags: ["tag1", "tag2"]
role: ["Development Director"]
difficulty: "Beginner"
updated: 2025-11-01
---

## The Prompt

\`\`\`
The actual AI prompt text goes here in a code block.
Use [BRACKETS] for customizable fields.
\`\`\`

## How to Customize

1. Step-by-step instructions
2. For replacing [BRACKETS]

## Example Output

Show what the AI generates...

## Pro Tips

1. Advanced usage tips
2. Best practices

## Related Prompts

- Link to related prompts
```

**Why code blocks?**: The first code block after "## The Prompt" gets special CSS styling (blue gradient background, contained box). This ensures the entire prompt (including lists) stays within the styled container.

### Page Routing

- **Homepage**: `src/pages/index.astro` - Category cards, featured prompts, hero section
- **Prompt detail pages**: `src/pages/prompts/[slug].astro` - Dynamic route using `getStaticPaths()`
- **Category pages**: Not yet implemented (planned: `/category/[category].astro`)

### Styling Strategy

- **Global styles**: `src/styles/global.css` imports Tailwind v4 and defines prose styles
- **Prompt styling**: CSS targets `.prose h2:first-of-type + pre` to style the prompt code block specially
- **Color scheme**: Warm/friendly blue primary (`blue-600`), with accent colors for categories
- **Typography**: System fonts for speed, prose plugin for markdown content

### Layout System

`BaseLayout.astro` provides:
- Header with navigation
- Footer with links to policies
- SEO meta tags (title, description)
- Tailwind CSS import

All pages should use this layout for consistency.

## Deployment

**Automated via GitHub Actions** (`.github/workflows/deploy.yml`):
1. Push to `main` branch triggers build
2. Workflow runs `npm ci && npm run build`
3. Deploys `dist/` folder to GitHub Pages
4. Custom domain (nonprofit.ai) configured via `public/CNAME`

**Important**: Only the repo owner can push to `main` or merge PRs. Community contributions come via Pull Requests.

## Progress Tracking

See `PROJECT_PLAN.md` for the complete implementation roadmap with checkboxes. This is the source of truth for what's done and what's remaining.

**Current Status** (as of initial development):
- ✅ Basic site structure and content collections
- ✅ Homepage with category cards
- ✅ Prompt detail pages with proper styling
- ❌ Copy button component (React, needs implementation)
- ❌ Search functionality (Pagefind integration)
- ❌ Category browsing pages
- ❌ 60-80 prompts (only 1 sample exists)
- ❌ Supporting pages (Getting Started, About, Contribute)
- ❌ Google Analytics + GDPR cookie consent

## Key Design Decisions

1. **Static over dynamic**: No database, no API, just markdown files compiled to HTML. Fast, free hosting, version-controlled content.

2. **Warm/friendly tone**: Not corporate, not hokey. Blues and rounded corners, emoji in category cards, approachable language.

3. **GitHub-based contributions**: Users submit prompts via PRs, not a web form. Maintains quality control and gives contributors GitHub credit.

4. **Mobile-first**: Nonprofit staff often work from phones/tablets at events or in the field. Design and test mobile experience first.

5. **Beginner-friendly**: Target audience may not be AI-savvy. Clear instructions, examples, and a "Getting Started" guide are critical.

6. **Free forever**: No paywalls, no accounts, no premium tiers. This is for under-resourced nonprofits.

## Content Guidelines

When adding new prompts:

1. **Test them first**: Run through ChatGPT and Claude, capture example outputs
2. **Use [BRACKETS]** for customizable fields consistently
3. **Write for beginners**: Assume low AI literacy, explain what to replace
4. **Include examples**: Show the actual AI output so users know what to expect
5. **Pro tips matter**: These differentiate good prompts from great ones
6. **Mobile-friendly**: Keep prompts scannable, use lists, short paragraphs

## Tech Stack

- **Astro 5.x**: Static site generator, content collections, zero JS by default
- **Tailwind CSS v4**: Via Vite plugin, with typography plugin for prose styles
- **React 19**: Only for interactive components (copy button, future search UI)
- **TypeScript**: Strict mode for type safety
- **GitHub Pages**: Free hosting with custom domain support
- **GitHub Actions**: CI/CD for automated deployment

## Common Gotchas

1. **Content collection changes require dev server restart**: Adding new prompts is hot-reloaded, but schema changes need a restart.

2. **Tailwind v4 uses Vite plugin**: Not the old `@astrojs/tailwind` integration. Config is in `tailwind.config.js`, not Astro config.

3. **Code block styling is fragile**: The CSS selector `.prose h2:first-of-type + pre` assumes "## The Prompt" is the first h2 and is followed directly by a code block. Don't break this pattern.

4. **Date format in frontmatter**: Must be `YYYY-MM-DD` format, TypeScript will error otherwise.

5. **GitHub Actions needs permissions**: The workflow requires `pages: write` and `id-token: write` permissions to deploy.

## Future Enhancements (Planned)

Reference `PROJECT_PLAN.md` Phase 9 for the full backlog. Key items:
- User accounts for saving favorite prompts
- Rating/voting system
- Comments on prompts
- AI-powered prompt customizer (fill form → get customized prompt)
- Multi-language support
- Mobile app or PWA
