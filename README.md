Moonshine Capital 🥃Moonshine Capital is a premium fintech marketplace connecting business owners with alternative funding sources.This repository features a Hybrid Architecture designed for speed and scalability:
    1. Static Site (/static): A lightweight HTML/JS version for immediate, zero-cost deployment (Netlify/GitHub Pages).
    2. Next.js App (/nextjs): A full-featured React application for dynamic routing, server-side API handling, and advanced filtering (Vercel).
    3. Shared Core (/shared): Single Source of Truth for data and assets.

📂 Repository Structuremoonshine-capital/
├── nextjs/              # Dynamic Application (React/Node)
├── shared/              # Master Data (Providers, Config)
├── static/              # Lightweight Distribution (HTML/CSS)
├── .github/             # CI/CD Workflows
└── package.json         # Root automation scripts

🚀 Getting Started

Prerequisites
- Node.js 18+
- NPM or Yarn

1. Installation
Install dependencies for the root and the Next.js application:npm run install:all
2. Running the ProjectsTo run the Next.js App:npm run dev:next
# Opens http://localhost:3000
To preview the Static Site:npm run serve:static
# Opens http://localhost:8080 (requires 'http-server' or similar)
🛠 Data ManagementAll provider data lives in shared/data/providers.json.Do NOT edit data inside static/ or nextjs/ directly.Update shared/data/ first.The build scripts automatically copy this data to the respective applications.📄 LicenseProprietary & Confidential. See LICENSE.