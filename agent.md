# Project Context: CIMSS 2026 Workshop Website

## Overview
This project contains the official website for the 6th International Workshop on Critical Infrastructure and Maritime Systems Security (CIMSS 2026), held in conjunction with ACNS 2026.

## What Has Been Achieved

- **Modern Website Built with Next.js and Tailwind CSS**
  - Fully responsive, professional design
  - All content and structure based on the workshop proposal
  - Navigation bar with tabs for all major sections

- **Pages Implemented:**
  - Home: Workshop overview, about, and quick links
  - Call for Papers: Topics of interest and submission guidelines
  - Submissions: Two-cycle submission process, instructions
  - Important Dates: All deadlines and schedule
  - Organization: Program chairs, committee, and bios
  - Program: Tentative agenda and workshop format

- **Deployment:**
  - Configured for GitHub Pages deployment using GitHub Actions
  - Repository name is `cimssworkshop2026.github.io` (user/organization site)
  - Next.js config set for root domain deployment (no basePath)
  - Automatic deployment on push to `main` branch

- **Project Structure:**
  - `src/app/` contains all page components
  - `src/components/` contains Navigation and Footer
  - Tailwind CSS for styling
  - All configuration files for Next.js, Tailwind, and deployment included

- **How to Continue:**
  - Update content by editing the relevant files in `src/app/`
  - Add new pages or sections as needed
  - Push changes to `main` to trigger auto-deployment
  - See `README.md` for setup and deployment instructions

## Notes for Future Agents
- The site is live at: https://cimssworkshop2026.github.io/
- All content is based on the workshop proposal in `workshop proposal.txt`
- For any new features, follow the established Next.js + Tailwind CSS structure
- For deployment, ensure the workflow and Next.js config remain compatible with GitHub Pages user/organization site requirements

---
_Last updated: November 25, 2025_
