# Nonprofit.ai - Implementation Plan

**Project Goal**: Create a comprehensive static website repository of AI prompts specifically designed for nonprofit professionals, hosted on GitHub Pages at nonprofit.ai

**Research Summary**: Based on extensive research, nonprofits need AI prompts for fundraising (25), communications (20), programs (12), events (8), board/leadership (8), and operations (7). The site will have a warm/friendly design, be mobile-optimized, with GitHub-based contributions and Google Analytics + GDPR compliance.

---

## Phase 0: Project Documentation ✅

### 0.1 Create Project Plan Document
- [x] Create `PROJECT_PLAN.md` in repository root
- [ ] Create `PROGRESS.md` for detailed progress tracking
- [ ] Review and refine plan based on initial setup

---

## Phase 1: Technical Setup

### 1.1 Choose & Initialize Static Site Generator
- [ ] Install Node.js (if not already installed)
- [ ] Initialize new Astro project: `npm create astro@latest`
- [ ] Choose template: Blog or Portfolio (we'll customize)
- [ ] Install Tailwind CSS: `npx astro add tailwind`
- [ ] Set up TypeScript configuration
- [ ] Install additional dependencies:
  - [ ] `@astrojs/react` (for interactive components)
  - [ ] `pagefind` (for search)
  - [ ] Other utilities as needed

### 1.2 Git & GitHub Repository Setup
- [ ] Initialize local git repository: `git init`
- [ ] Create initial commit with Astro scaffold
- [ ] Create GitHub repository: `nonprofit-ai`
- [ ] Connect local repo to GitHub remote
- [ ] Push initial code to GitHub
- [ ] Create `dev` branch for development work
- [ ] Set up branch protection rules for `main`
- [ ] Add comprehensive `README.md` with:
  - [ ] Project description
  - [ ] Tech stack
  - [ ] Getting started instructions
  - [ ] Contribution guidelines (link)
  - [ ] License information
- [ ] Add `LICENSE` file (MIT recommended)
- [ ] Create `CONTRIBUTING.md` with:
  - [ ] How to add a new prompt
  - [ ] Prompt quality standards
  - [ ] PR process
  - [ ] Code of conduct
- [ ] Set up `.gitignore` for Node/Astro (should be auto-generated)

### 1.3 GitHub Pages Deployment
- [ ] Create `.github/workflows/deploy.yml` for GitHub Actions
- [ ] Configure workflow to:
  - [ ] Build on push to `main`
  - [ ] Run `npm run build`
  - [ ] Deploy to `gh-pages` branch
- [ ] Enable GitHub Pages in repository settings
- [ ] Set source to `gh-pages` branch
- [ ] Test initial deployment

### 1.4 Domain Configuration
- [ ] Add `CNAME` file to `/public` directory with `nonprofit.ai`
- [ ] Update DNS A records to point to GitHub Pages IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- [ ] Configure www subdomain (CNAME to username.github.io)
- [ ] Wait for DNS propagation (can take 24-48 hours)
- [ ] Verify HTTPS/SSL is enabled
- [ ] Test site at nonprofit.ai

### 1.5 Analytics & GDPR Compliance
- [ ] Create Google Analytics 4 property
- [ ] Add GA4 tracking code to site layout
- [ ] Install cookie consent library (e.g., `vanilla-cookieconsent`)
- [ ] Implement cookie consent banner:
  - [ ] Show on first visit
  - [ ] Block GA until consent given
  - [ ] Save consent preference to localStorage
  - [ ] Provide "Manage cookies" link in footer
- [ ] Create Privacy Policy page
- [ ] Create Cookie Policy page
- [ ] Add links to policies in footer

---

## Phase 2: Site Architecture & Content Structure

### 2.1 Folder Structure Setup
- [ ] Create core folder structure:
  ```
  /src
    /pages (homepage, category pages, prompt detail pages)
    /components (reusable UI components)
    /layouts (page templates)
    /content
      /prompts (markdown files for prompts)
    /styles (global CSS, Tailwind config)
  /public (images, favicon, CNAME, robots.txt)
  ```
- [ ] Create placeholder files in each directory

### 2.2 Content Collections Configuration
- [ ] Configure Astro content collections in `src/content/config.ts`
- [ ] Define prompt schema with fields:
  - [ ] `title` (string, required)
  - [ ] `description` (string, required)
  - [ ] `category` (enum: fundraising, communications, programs, events, board, operations)
  - [ ] `subcategory` (string)
  - [ ] `tags` (array of strings)
  - [ ] `role` (array: Development Director, Comms Manager, Program Manager, ED, Operations)
  - [ ] `difficulty` (enum: Beginner, Intermediate, Advanced)
  - [ ] `updated` (date)
- [ ] Set up frontmatter validation
- [ ] Create types for TypeScript autocomplete

### 2.3 Navigation Structure Planning
- [ ] Map out all pages needed:
  - [ ] Homepage (`/`)
  - [ ] Browse by Role pages (`/role/[role-slug]`)
  - [ ] Browse by Task pages (`/task/[task-slug]`)
  - [ ] Browse by Use Case pages (`/use-case/[use-case-slug]`)
  - [ ] Individual prompt pages (`/prompts/[prompt-slug]`)
  - [ ] Getting Started (`/getting-started`)
  - [ ] About (`/about`)
  - [ ] Contribute (`/contribute`)
  - [ ] Privacy Policy (`/privacy`)
  - [ ] Cookie Policy (`/cookies`)
- [ ] Create placeholder pages for each route

---

## Phase 3: Design System

### 3.1 Visual Design (Warm/Friendly)
- [ ] Define color palette in Tailwind config:
  - [ ] Primary: Warm blue (e.g., `#4A90E2` or similar)
  - [ ] Secondary: Friendly orange or teal accent
  - [ ] Neutral grays for text and backgrounds
  - [ ] Success/warning/error colors
  - [ ] Ensure WCAG AA contrast ratios
- [ ] Choose typography:
  - [ ] Install Google Fonts (Inter or Open Sans)
  - [ ] Configure font families in Tailwind
  - [ ] Set up font size scale
  - [ ] Define line heights
- [ ] Define spacing/sizing scale (use Tailwind defaults or customize)
- [ ] Set border radius (rounded corners throughout)
- [ ] Define shadow styles (subtle, friendly)
- [ ] Choose icon library (Heroicons, Lucide, or similar)

### 3.2 Component Library Development
- [ ] **Navigation Component** (`Header.astro`)
  - [ ] Desktop horizontal nav
  - [ ] Mobile hamburger menu
  - [ ] Logo/site title
  - [ ] Search bar integration
  - [ ] Active page highlighting
- [ ] **Prompt Card Component** (`PromptCard.astro`)
  - [ ] Title and description
  - [ ] Category badge
  - [ ] Difficulty indicator
  - [ ] Link to full prompt
  - [ ] Hover effects
- [ ] **Copy Button Component** (`CopyButton.tsx` - React for interactivity)
  - [ ] One-click copy to clipboard
  - [ ] Success toast/confirmation
  - [ ] Icon change on copy
  - [ ] Fallback for unsupported browsers
- [ ] **Search Bar Component** (`SearchBar.astro`)
  - [ ] Input with icon
  - [ ] Placeholder text
  - [ ] Integration with Pagefind
  - [ ] Filter toggles
- [ ] **Category Badge Component** (`Badge.astro`)
  - [ ] Color-coded by category
  - [ ] Small, pill-shaped design
  - [ ] Used throughout site
- [ ] **Breadcrumb Component** (`Breadcrumb.astro`)
  - [ ] Show current path
  - [ ] Clickable parent pages
  - [ ] Schema.org markup
- [ ] **Footer Component** (`Footer.astro`)
  - [ ] Site links
  - [ ] Privacy/Cookie policy links
  - [ ] "Manage cookies" button
  - [ ] Social media links (optional)
  - [ ] Copyright notice
- [ ] **Cookie Consent Banner** (`CookieBanner.tsx`)
  - [ ] Modal/banner on first visit
  - [ ] Accept/Decline buttons
  - [ ] Link to cookie policy
  - [ ] Persistent until choice made

### 3.3 Responsive Design Implementation
- [ ] Set up mobile-first breakpoints in Tailwind config
- [ ] Test navigation on mobile (hamburger menu works)
- [ ] Ensure all components are touch-friendly (44px min button size)
- [ ] Test typography scales on mobile (16px+ body)
- [ ] Verify layout doesn't break at various screen sizes
- [ ] Test on actual devices:
  - [ ] iPhone (iOS Safari)
  - [ ] Android phone (Chrome)
  - [ ] iPad (tablet view)
  - [ ] Desktop (1920px+)

---

## Phase 4: Core Features Development

### 4.1 Search Implementation
- [ ] Install Pagefind: `npx pagefind`
- [ ] Configure Pagefind to index built site
- [ ] Add Pagefind to build process
- [ ] Create search UI component
- [ ] Style search results
- [ ] Add filter options (category, role, difficulty)
- [ ] Test search functionality
- [ ] Ensure search works on static site (client-side)

### 4.2 Prompt Pages Development
- [ ] Create prompt detail layout (`PromptLayout.astro`)
- [ ] Structure each prompt page with sections:
  - [ ] **Header**: Title, category badges, difficulty
  - [ ] **Copy Section**: One-click copy button + prompt text
  - [ ] **How to Customize**: Instructions for [BRACKETS]
  - [ ] **Example Output**: Sample AI-generated result
  - [ ] **Pro Tips**: Advanced usage tips
  - [ ] **Related Prompts**: 3-4 similar prompts
- [ ] Implement copy-to-clipboard functionality
- [ ] Add share button (optional - share URL)
- [ ] Create related prompts algorithm (same category/tags)
- [ ] Style prompt text (monospace font, background box)
- [ ] Highlight [BRACKETS] in prompt text visually

### 4.3 Browse/Filter Pages
- [ ] Create category landing page template
- [ ] Display filtered prompts based on category/role/task
- [ ] Add filter sidebar (desktop) / filter drawer (mobile)
- [ ] Implement sort options:
  - [ ] Popular (most viewed - future feature)
  - [ ] Newest (by updated date)
  - [ ] A-Z (alphabetical)
- [ ] Show prompt count per category
- [ ] Add grid/list view toggle (optional)
- [ ] Pagination if >30 prompts per page

### 4.4 Getting Started Guide
- [ ] Create `/getting-started` page
- [ ] Write content sections:
  - [ ] **What is AI/ChatGPT?** (Brief intro for beginners)
  - [ ] **How to Use These Prompts** (Step-by-step tutorial)
  - [ ] **Prompt Engineering Basics** (What to do with [BRACKETS])
  - [ ] **Customization Tips** (How to get better results)
  - [ ] **Responsible AI Guidance**:
    - [ ] Privacy considerations (don't paste donor data)
    - [ ] Accuracy checks (always review AI output)
    - [ ] Ethical use (transparency, attribution)
  - [ ] **FAQ Section** (Common questions)
- [ ] Add screenshots/examples
- [ ] Link to this page prominently from homepage

---

## Phase 5: Content Creation (60-80 Prompts)

### 5.1 Fundraising & Development (25 prompts)
#### Donor Communications (8 prompts)
- [ ] Thank-you letter - first-time donor under $100
- [ ] Thank-you letter - mid-level donor ($100-$999)
- [ ] Thank-you letter - major donor ($1,000+)
- [ ] Thank-you letter - recurring/monthly donor
- [ ] Thank-you letter - tribute/memorial gift
- [ ] Thank-you letter - in-kind donation
- [ ] Lapsed donor re-engagement email
- [ ] Donor upgrade ask (one-time to monthly)

#### Fundraising Appeals (6 prompts)
- [ ] Annual fund appeal letter
- [ ] GivingTuesday campaign email
- [ ] Year-end campaign email series (3-part)
- [ ] Emergency/urgent appeal
- [ ] Peer-to-peer fundraising template
- [ ] Monthly giving pitch

#### Grant Writing (7 prompts)
- [ ] Grant executive summary
- [ ] Needs statement
- [ ] Project description/narrative
- [ ] Budget narrative
- [ ] Letter of support request
- [ ] Grant prospect research summary
- [ ] Grant report/final report

#### Major Donor Relations (4 prompts)
- [ ] Donor prospect research brief
- [ ] Cultivation strategy plan
- [ ] Personalized proposal for major gift
- [ ] Major donor meeting prep notes

### 5.2 Communications & Marketing (20 prompts)
#### Social Media (8 prompts)
- [ ] LinkedIn post - program impact
- [ ] Facebook post - event announcement
- [ ] Instagram caption - behind-the-scenes
- [ ] X/Twitter thread - awareness campaign
- [ ] Social media content calendar (monthly)
- [ ] Hashtag strategy for campaign
- [ ] Awareness day post (International Day of...)
- [ ] Impact statistic visualization caption

#### Email Marketing (5 prompts)
- [ ] Newsletter - program updates
- [ ] Email subject line generator
- [ ] Welcome email series for new subscribers
- [ ] Event invitation email
- [ ] Impact report email

#### Content Creation (7 prompts)
- [ ] Blog post from program data
- [ ] Impact story/testimonial framework
- [ ] Press release - new program launch
- [ ] Annual report copy - executive summary
- [ ] Website homepage copy
- [ ] Case study template
- [ ] About page copy

### 5.3 Program Management & Impact (12 prompts)
#### Program Planning (3 prompts)
- [ ] Logic model framework
- [ ] Theory of change narrative
- [ ] Program description for grant

#### Impact Measurement & Reporting (5 prompts)
- [ ] Outcome framework from data
- [ ] Impact narrative from statistics
- [ ] Evaluation report template
- [ ] Success story from beneficiary data
- [ ] Donor impact report (what their gift accomplished)

#### Volunteer Management (4 prompts)
- [ ] Volunteer role description
- [ ] Volunteer recruitment messaging
- [ ] Volunteer onboarding checklist
- [ ] Volunteer thank-you letter

### 5.4 Event Planning (8 prompts)
- [ ] Event concept and theme brainstorm
- [ ] Event planning timeline
- [ ] Event invitation copy
- [ ] Sponsorship package description
- [ ] Event run-of-show script
- [ ] Post-event thank-you email
- [ ] Event marketing campaign plan
- [ ] Virtual event engagement strategy

### 5.5 Board & Leadership (8 prompts)
- [ ] Board meeting agenda
- [ ] Board meeting minutes template
- [ ] Board recruitment profile
- [ ] Board orientation guide outline
- [ ] Strategic planning framework
- [ ] Executive summary from long report
- [ ] Board presentation talking points
- [ ] Committee charter

### 5.6 Operations & HR (7 prompts)
- [ ] Job description template
- [ ] Employee handbook section
- [ ] Performance review template
- [ ] Remote work policy
- [ ] Standard operating procedure (SOP)
- [ ] New employee onboarding checklist
- [ ] Meeting agenda template

### 5.7 Test Each Prompt (Critical!)
For each of the 60-80 prompts above:
- [ ] Test with ChatGPT (GPT-4 if possible)
- [ ] Test with Claude
- [ ] Capture 1-2 example outputs (the good ones)
- [ ] Refine prompt wording for clarity
- [ ] Add specific customization instructions
- [ ] Write 2-3 pro tips for better results
- [ ] Add appropriate tags and metadata

### 5.8 Supporting Content
- [ ] Write Getting Started guide content (see 4.4)
- [ ] Create About page:
  - [ ] Mission statement
  - [ ] Why we built nonprofit.ai
  - [ ] Who it's for
  - [ ] Our values (open source, nonprofit-centric)
- [ ] Write Contribute page:
  - [ ] How to submit prompts via PR
  - [ ] Link to CONTRIBUTING.md
  - [ ] Prompt quality standards
  - [ ] What makes a good prompt
- [ ] Draft Privacy Policy (GDPR-compliant):
  - [ ] What data we collect (GA)
  - [ ] How we use it
  - [ ] Cookie usage
  - [ ] User rights
  - [ ] Contact info
- [ ] Create Cookie Policy:
  - [ ] What cookies we use (GA)
  - [ ] Why we use them
  - [ ] How to opt out
  - [ ] Third-party cookies (GA)

---

## Phase 6: GitHub Contribution System

### 6.1 Contribution Guidelines
- [ ] Create detailed `CONTRIBUTING.md`:
  - [ ] How to fork the repo
  - [ ] How to create a new prompt file
  - [ ] Prompt file template with frontmatter
  - [ ] Content structure requirements
  - [ ] How to test your prompt
  - [ ] How to submit a PR
  - [ ] PR review process
  - [ ] Response time expectations
- [ ] Create `.github/PULL_REQUEST_TEMPLATE.md`:
  - [ ] Checklist for new prompts:
    - [ ] Prompt tested with ChatGPT
    - [ ] Prompt tested with Claude
    - [ ] Example output included
    - [ ] Customization instructions added
    - [ ] Pro tips included
    - [ ] Frontmatter complete and valid
    - [ ] Related to nonprofit work
    - [ ] Original content (not copied)
- [ ] Create `CODE_OF_CONDUCT.md` (use Contributor Covenant or similar)
- [ ] Create `.github/ISSUE_TEMPLATE/` for bug reports and feature requests

### 6.2 Contribute Page
- [ ] Create `/contribute` page with:
  - [ ] Welcome message for potential contributors
  - [ ] Link to CONTRIBUTING.md (big, prominent button)
  - [ ] Step-by-step visual guide:
    - [ ] 1. Fork the repo
    - [ ] 2. Add your prompt (show file structure)
    - [ ] 3. Test it with AI tools
    - [ ] 4. Create a pull request
  - [ ] Prompt template example (code block)
  - [ ] Quality standards explanation
  - [ ] Benefits of contributing (help nonprofits, your name in credits)
  - [ ] Response time expectations (we'll review within X days)
  - [ ] Contact info for questions

---

## Phase 7: Performance & SEO

### 7.1 Performance Optimization
- [ ] Optimize images:
  - [ ] Convert to WebP format
  - [ ] Implement lazy loading
  - [ ] Use responsive images (srcset)
  - [ ] Add proper alt text
- [ ] Minimize JavaScript:
  - [ ] Code splitting (Astro does this automatically)
  - [ ] Defer non-critical JS
  - [ ] Use Astro components over React where possible
- [ ] Enable caching:
  - [ ] Set cache headers in GitHub Pages
  - [ ] Use Astro's built-in optimization
- [ ] Run Lighthouse audit:
  - [ ] Target: 90+ Performance score
  - [ ] Target: <2 second load time
  - [ ] Fix any identified issues
- [ ] Test Core Web Vitals:
  - [ ] Largest Contentful Paint (LCP) <2.5s
  - [ ] First Input Delay (FID) <100ms
  - [ ] Cumulative Layout Shift (CLS) <0.1

### 7.2 SEO Setup
- [ ] Add meta titles and descriptions to all pages
- [ ] Implement Open Graph tags:
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (create social share image)
  - [ ] og:url
  - [ ] og:type
- [ ] Add Twitter Card tags
- [ ] Generate sitemap.xml (Astro can do this automatically)
- [ ] Create robots.txt in `/public`
- [ ] Add structured data (schema.org):
  - [ ] Organization schema
  - [ ] WebSite schema
  - [ ] BreadcrumbList schema
- [ ] Target keywords in content:
  - [ ] "nonprofit AI prompts"
  - [ ] "ChatGPT for nonprofits"
  - [ ] "AI for fundraising"
  - [ ] "nonprofit ChatGPT prompts"
  - [ ] etc.
- [ ] Submit to Google Search Console:
  - [ ] Verify domain ownership
  - [ ] Submit sitemap
  - [ ] Monitor indexing

### 7.3 Accessibility (WCAG 2.1 AA)
- [ ] Use semantic HTML everywhere (`<nav>`, `<main>`, `<article>`, etc.)
- [ ] Add ARIA labels where needed:
  - [ ] Navigation landmarks
  - [ ] Search input
  - [ ] Buttons without text (icon buttons)
- [ ] Ensure keyboard navigation works:
  - [ ] Tab through all interactive elements
  - [ ] Skip to main content link
  - [ ] Focus indicators visible
  - [ ] Logical tab order
- [ ] Test with screen reader:
  - [ ] VoiceOver (Mac/iOS)
  - [ ] NVDA (Windows)
  - [ ] Ensure all content is readable
- [ ] Validate color contrast:
  - [ ] Use WebAIM Contrast Checker
  - [ ] Ensure 4.5:1 ratio for body text
  - [ ] Ensure 3:1 ratio for large text and UI elements
- [ ] Run automated accessibility audit:
  - [ ] Use axe DevTools browser extension
  - [ ] Fix all critical and serious issues
- [ ] Ensure text can resize to 200% without breaking layout
- [ ] Add alt text to all images
- [ ] Ensure form labels are properly associated

---

## Phase 8: Testing & Launch

### 8.1 Testing
#### Cross-Browser Testing
- [ ] Google Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Microsoft Edge (latest)
- [ ] Test all core functionality in each browser

#### Mobile Device Testing
- [ ] iPhone (iOS Safari):
  - [ ] Navigation works
  - [ ] Copy button works
  - [ ] Search works
  - [ ] All pages render correctly
- [ ] Android phone (Chrome):
  - [ ] Same tests as iPhone
- [ ] iPad / tablet view:
  - [ ] Layout adapts properly
  - [ ] Touch targets adequate

#### Functionality Testing
- [ ] All internal links work (no 404s)
- [ ] All external links work and open in new tab
- [ ] Search returns accurate results
- [ ] Filter/sort options work correctly
- [ ] Copy button copies correct text
- [ ] Cookie consent banner works:
  - [ ] Shows on first visit
  - [ ] Saves preference
  - [ ] Blocks GA until consent
- [ ] Form validation works (if any forms)
- [ ] Navigation works on mobile (hamburger menu)
- [ ] Breadcrumbs show correct path

#### Accessibility Testing
- [ ] Run axe DevTools scan on all page types
- [ ] Test keyboard navigation on all pages
- [ ] Test with screen reader (at least one page)
- [ ] Verify color contrast passes WCAG AA

#### Performance Testing
- [ ] Run Lighthouse on homepage
- [ ] Run Lighthouse on prompt detail page
- [ ] Run Lighthouse on category page
- [ ] Check load times on slow connection (throttling)
- [ ] Verify Core Web Vitals in PageSpeed Insights

### 8.2 Beta Testing
- [ ] Recruit 10-15 nonprofit professionals:
  - [ ] Development/fundraising staff (3-4)
  - [ ] Communications/marketing staff (3-4)
  - [ ] Program managers (2-3)
  - [ ] Executive directors (2-3)
- [ ] Send them private link to beta site
- [ ] Ask for feedback on:
  - [ ] Ease of navigation
  - [ ] Prompt quality and usefulness
  - [ ] Mobile experience
  - [ ] What's missing
  - [ ] What's confusing
- [ ] Create feedback form or survey (Google Form)
- [ ] Collect feedback for 1-2 weeks
- [ ] Prioritize and implement critical fixes
- [ ] Thank beta testers (mention in About page?)

### 8.3 Pre-Launch Checklist
- [ ] All prompts (60-80) are complete and tested
- [ ] All pages render correctly
- [ ] No broken links
- [ ] SEO metadata on all pages
- [ ] Analytics tracking works
- [ ] Cookie banner works and complies with GDPR
- [ ] Privacy and Cookie policies published
- [ ] Site is accessible (WCAG AA)
- [ ] Site is fast (90+ Lighthouse score)
- [ ] Mobile experience is excellent
- [ ] Domain (nonprofit.ai) is properly configured
- [ ] HTTPS is working
- [ ] Social share image created and working

### 8.4 Launch!
- [ ] Do final deployment to GitHub Pages
- [ ] Verify site is live at nonprofit.ai
- [ ] Test DNS propagation (check from multiple locations)
- [ ] Submit sitemap to Google Search Console
- [ ] Announce on social media:
  - [ ] LinkedIn (personal + nonprofit groups)
  - [ ] X/Twitter with #NonprofitTech hashtag
  - [ ] Facebook nonprofit groups
- [ ] Share in nonprofit communities:
  - [ ] NTEN Community
  - [ ] Nonprofit Happy Hour (Facebook)
  - [ ] r/nonprofit (Reddit)
  - [ ] Nonprofit Tech for Good community
- [ ] Submit to newsletters:
  - [ ] NTEN newsletter
  - [ ] TechSoup newsletter
  - [ ] Nonprofit Tech for Good newsletter
- [ ] Write launch blog post (post on LinkedIn, Medium)
- [ ] Monitor analytics for first week:
  - [ ] Traffic levels
  - [ ] Popular prompts
  - [ ] User journey
  - [ ] Any errors or issues
- [ ] Set up Google Alerts for "nonprofit.ai" mentions

---

## Phase 9: Post-Launch (Ongoing)

### 9.1 Content Maintenance
- [ ] Review all prompts quarterly for accuracy
- [ ] Update prompts as AI tools evolve
- [ ] Add new prompts monthly (goal: 10/month)
- [ ] Create "Prompt Collections" for specific campaigns (e.g., Year-End Bundle)
- [ ] Monitor which prompts are most popular (via analytics)

### 9.2 Community Management
- [ ] Review and merge community-contributed prompts
- [ ] Respond to issues and PRs within 5 business days
- [ ] Showcase "Prompt of the Month"
- [ ] Collect and publish success stories
- [ ] Create monthly newsletter (optional):
  - [ ] New prompts added
  - [ ] Tips and tricks
  - [ ] Success stories
  - [ ] AI news for nonprofits

### 9.3 Growth & Partnerships
- [ ] Reach out to nonprofit tech organizations (NTEN, TechSoup)
- [ ] Partner with nonprofit consultants and trainers
- [ ] Present at virtual nonprofit conferences
- [ ] Guest post on nonprofit blogs
- [ ] Build backlinks from nonprofit resource pages
- [ ] Consider creating workshops/training (future)

### 9.4 Future Enhancements (Backlog)
- [ ] User accounts (save favorite prompts)
- [ ] Rating system (upvote/downvote prompts)
- [ ] Comments section on prompts
- [ ] AI-powered prompt customizer (fill in form, generate custom prompt)
- [ ] Prompt collections/bundles downloadable as PDF
- [ ] Integration with ChatGPT (deep link to open in ChatGPT)
- [ ] Multi-language support (Spanish, French, etc.)
- [ ] Advanced prompt categories (advocacy, policy, research)

---

## Success Metrics to Track

### Usage Metrics
- [ ] Monthly active users
- [ ] Total prompts copied/downloaded
- [ ] Pages per session
- [ ] Return visitor rate
- [ ] Mobile vs desktop usage split

### Engagement Metrics
- [ ] Average time on site
- [ ] Search queries (what people look for)
- [ ] Most popular prompts
- [ ] Most popular categories
- [ ] User journey paths

### Impact Metrics
- [ ] User testimonials collected
- [ ] Success stories submitted
- [ ] Social media mentions
- [ ] Backlinks from nonprofit websites
- [ ] Newsletter subscribers (if applicable)
- [ ] GitHub stars/forks
- [ ] Community contributions (PRs merged)

### Quality Metrics
- [ ] Bounce rate (target: <60%)
- [ ] Pages per session (target: 3+)
- [ ] Average time on prompt pages (target: 2+ minutes)
- [ ] Lighthouse Performance score (target: 90+)
- [ ] Accessibility score (target: 100)

---

## Tech Stack Summary

- **Framework**: Astro (static site generator)
- **Styling**: Tailwind CSS
- **Content**: Markdown/MDX with Content Collections
- **Search**: Pagefind (client-side static search)
- **Interactive Components**: React (minimal, where needed)
- **Hosting**: GitHub Pages (free)
- **Analytics**: Google Analytics 4
- **Cookie Consent**: vanilla-cookieconsent or similar
- **Deployment**: GitHub Actions (automatic on push to main)
- **Domain**: nonprofit.ai
- **Version Control**: Git + GitHub

---

## Timeline Estimate

- **Week 1**: Project setup, Astro initialization, GitHub repo, folder structure (Phase 0-2)
- **Week 2**: Design system, component library, basic pages (Phase 3)
- **Week 3**: Core features (search, filtering, prompt pages) (Phase 4)
- **Week 4-5**: Content creation - write and test 60-80 prompts (Phase 5)
- **Week 6**: GitHub contribution system, documentation (Phase 6)
- **Week 7**: Performance optimization, SEO, accessibility (Phase 7)
- **Week 8**: Testing, beta testing, fixes (Phase 8)
- **Week 9**: Launch! (Phase 8.4)

**Total: ~9 weeks from start to launch**

---

## Notes & Decisions

### Why Astro?
- Fastest static site generator for content-heavy sites
- Zero JavaScript by default (better performance)
- Built-in content collections (perfect for our prompt library)
- Can add React/Vue components where needed (e.g., copy button)
- Excellent documentation and DX

### Why GitHub Pages?
- Free hosting for open-source projects
- Automatic HTTPS
- Custom domain support
- Integrated with GitHub (where our repo lives)
- Easy deployment via GitHub Actions
- Fast CDN

### Why Open Source?
- Aligns with nonprofit values (transparency, community)
- Allows community contributions (more prompts = more value)
- Builds trust with users
- Educational for others learning web development
- No vendor lock-in

---

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Pagefind Search](https://pagefind.app/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Google Analytics 4](https://support.google.com/analytics/)

---

**Last Updated**: 2025-11-01
**Status**: Phase 0 Complete - Ready to Begin Phase 1
