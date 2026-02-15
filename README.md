# llms-info
LLMS-Info Text Generator to Help AI Crawlers: JS &amp; WordPress Versions

# LLMS Info

LLMS Info is a transparency layer for websites.

It generates a structured, human-readable and machine-readable intelligence map of a site so language models can understand it accurately without guessing or hallucinating context.

This improves:
- AI interpretation accuracy
- SEO clarity
- data transparency
- trust signals

Generated outputs:
- HTML profile page
- JSON structure map
- Markdown reference file

Technical enquiries: tools@ethical.ink

LLMS-INFO SYSTEM FLOW
────────────────────────────────────────────────────────

        settings.json
             │
             ▼
      ┌──────────────┐
      │ generator.js │   ← orchestrator / controller
      └──────┬───────┘
             │
             ▼
      ┌──────────────┐
      │  crawler.js  │   ← visits pages
      └──────┬───────┘
             │
             ▼
      collected page data
             │
             ▼
      ┌──────────────┐
      │  parser.js   │   ← structures + formats data
      └──────┬───────┘
             │
             ▼
      formatted outputs
             │
             ▼
     ┌─────────────────────┐
     │     /output folder   │
     │---------------------│
     │ llms-info.html      │
     │ llms-info.json      │
     │ llms-info.md        │
     └─────────────────────┘

────────────────────────────────────────────────────────
MODULE RESPONSIBILITIES
────────────────────────────────────────────────────────

generator.js
→ controls workflow
→ loads config
→ triggers crawler
→ saves files

crawler.js
→ visits pages
→ extracts metadata
→ collects headings
→ follows links

parser.js
→ converts raw data
→ builds structured formats
→ prepares outputs

utils.js
→ helper functions (timers, tools)

settings.json
→ site URL
→ crawl depth
→ output types

────────────────────────────────────────────────────────
EXECUTION COMMAND
────────────────────────────────────────────────────────

npm start

(That single command runs the entire pipeline.)
