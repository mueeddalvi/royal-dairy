---
phase: 3
slug: brand-sections-layout-assembly
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-07-04
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Vitest |
| **Config file** | vite.config.ts |
| **Quick run command** | npm run test |
| **Full suite command** | npm run test --run |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run test --run`
- **After every plan wave:** Run `npm run test --run`
- **Before `/gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 03-01-01 | 01 | 1 | SECT-01 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 03-01-02 | 01 | 1 | SECT-03 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 03-01-03 | 01 | 1 | SECT-04 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 03-01-04 | 01 | 1 | SECT-05 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 03-02-01 | 02 | 2 | SECT-06 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 03-02-02 | 02 | 2 | SECT-07 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 03-02-03 | 02 | 2 | SECT-08 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 03-02-04 | 02 | 2 | SECT-09 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `src/sections/Hero/Hero.test.tsx` — stubs for SECT-01
- [ ] `src/sections/WhoWeAre/WhoWeAre.test.tsx` — stubs for SECT-03
- [ ] `src/sections/WhyChoose/WhyChoose.test.tsx` — stubs for SECT-04
- [ ] `src/sections/Achievements/Achievements.test.tsx` — stubs for SECT-05
- [ ] `src/sections/Partners/Partners.test.tsx` — stubs for SECT-06
- [ ] `src/sections/Reviews/Reviews.test.tsx` — stubs for SECT-07
- [ ] `src/sections/Contact/Contact.test.tsx` — stubs for SECT-08
- [ ] `src/sections/Footer/Footer.test.tsx` — stubs for SECT-09

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Testimonial slide fade transition | SECT-07 | Transition animations check | Click next arrow, verify slide fades out and new review fades in smoothly. |
| Form submission reset check | SECT-08 | Transition verification | Fill out form details, click inquire, confirm success card replaces form with a reset button. |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 10s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** approved 2026-07-04
