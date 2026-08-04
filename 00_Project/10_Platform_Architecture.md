# Favorite Web EEE Learning Platform

# 10_Platform_Architecture.md

Document: 10_Platform_Architecture.md

Version: 1.0.0

Status: **Locked — Approved**

Project: EEE Career Masterbook

Publisher: Favorite Web

Website: https://favoriteweb.net

Last Updated: 2026-08-03

---

# Purpose

This document defines the official web platform architecture for the EEE Career Masterbook learning website. Version 1.0.0 is locked and approved. All implementation must follow this document unless explicitly revised in a future version.

---

# Core Principles

1. **Markdown is the single source of truth** — content lives in volume/chapter folders; the web app consumes it.
2. **Convention over configuration** — every chapter follows the same 6-file pattern.
3. **Build-time indexing, runtime rendering** — parse markdown at build; ship static pages.
4. **Content / presentation separation** — parsers produce typed data; components render data.
5. **Progressive enhancement** — core reading works without JS.
6. **Future-ready service boundaries** — AI, quiz, progress, bookmarks via defined interfaces.

---

# Tech Stack (v1.0)

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Markdown | react-markdown + remark-gfm + rehype-slug |
| Math | remark-math + rehype-katex (Phase 2+) |
| Search | Pagefind (Phase 7) |
| Theme | CSS variables + next-themes (Phase 2) |
| State | Zustand + localStorage (future phases) |

---

# Repository Layout

```
EEE Career Masterbook/                    ← Content (unchanged)
├── 00_Project/
├── 01_Volume_*/
│   └── Chapter-NN_*/
│       ├── Chapter-NN.md
│       ├── Chapter-NN_MCQ.md
│       ├── Chapter-NN_Viva.md
│       ├── Chapter-NN_Glossary.md
│       ├── Chapter-NN_References.md
│       └── Chapter-NN_Videos.md
└── 99_Final_PDF/

eee-learning-platform/                    ← Web application
├── scripts/build-content-index.ts
├── .generated/content-manifest.json
├── src/
│   ├── app/
│   ├── components/
│   ├── content/
│   ├── lib/
│   └── types/
└── public/
```

---

# URL Scheme

```
/                                                           Home
/volumes/[volumeSlug]                                       Volume index
/chapters/[volumeSlug]/[chapterSlug]                        Chapter reading
/chapters/[volumeSlug]/[chapterSlug]/mcq                    Phase 4
/chapters/[volumeSlug]/[chapterSlug]/viva                   Phase 5
/chapters/[volumeSlug]/[chapterSlug]/glossary               Phase 3
/chapters/[volumeSlug]/[chapterSlug]/references             Phase 6
/chapters/[volumeSlug]/[chapterSlug]/videos                 Phase 6
/search                                                     Phase 7
```

Slug derivation:
- `01_Volume_Electrical_Fundamentals` → `electrical-fundamentals`
- `Chapter-01_Introduction_to_Electricity` → `introduction-to-electricity`

---

# Implementation Phases

| Phase | Scope | Status |
|-------|-------|--------|
| 0 | Project scaffold, manifest script | Bundled with Phase 1 |
| 1 | Chapter reading, TOC, sidebar, prev/next, breadcrumbs, responsive layout | **In Progress** |
| 2 | Theme system, reading progress, print styles | Pending |
| 3 | Glossary parser + popover, cross-reference linking | Pending |
| 4 | MCQ parser + interactive UI | Pending |
| 5 | Viva parser + expandable cards | Pending |
| 6 | References + Videos pages | Pending |
| 7 | Search (Pagefind) | Pending |
| 8 | SEO metadata, sitemap, a11y audit | Pending |
| 9 | Service interfaces for progress/quiz/AI (stubs) | Pending |

---

# Content Parsing Contracts

## Chapter-01.md structure

- H1: Chapter number + title
- `## Introduction`, `## Learning Objectives`, `## Chapter Contents`
- `## Topic NN: Title` with `###` subsections
- `# Chapter Summary`, `# What's Next?`

## Satellite files (later phases)

- MCQ: `### MCQ-NNN` blocks
- Viva: `### Viva-NNN` blocks
- Glossary: `## Term` + definition

---

# Data Models

```typescript
interface VolumeMeta { id, slug, title, chapterCount, chapters }
interface ChapterMeta { volumeSlug, chapterNumber, slug, title, folderPath, prev?, next? }
interface TocItem { id, title, level, children? }
```

---

# Component Architecture

```
AppShell
├── Header
├── Breadcrumbs
├── ChapterSidebar (sticky TOC)
├── ChapterTabs (Phase 4+)
├── Main content (MarkdownRenderer / TopicSection)
└── PrevNextNav
```

---

# Future Scalability

- 30+ chapters: `generateStaticParams` from manifest; no per-chapter code
- Future volumes: auto-discovered by folder scan
- AI / Quiz / Progress / Bookmarks: service interfaces in `src/services/`

---

# Final Rule

Never modify markdown educational content from the frontend codebase. Treat markdown files as immutable source of truth managed by the content team.

---

Publisher: Favorite Web

Copyright © 2026 Favorite Web. All Rights Reserved.

End of Document
