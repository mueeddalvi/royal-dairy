---
phase: 4
slug: premium-interactions-scroll-animations
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-07-04
---

# Phase 4 — Validation Strategy

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
| 04-01-01 | 01 | 1 | UXIN-02 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 04-01-02 | 01 | 1 | UXIN-02 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 04-01-03 | 01 | 1 | UXIN-03 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `src/hooks/useScrollReveal.test.ts` — stubs for UXIN-02
- [ ] `src/components/Header/Header.test.tsx` — stubs for UXIN-03

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Sticky header glassmorphism blur | UXIN-03 | Visual backdrop blur inspection | Scroll down the page, verify section elements blur behind the header layout container. |
| Viewport scroll entry classes | UXIN-02 | IntersectionObserver testing | Scroll elements into view, verify class name `.is-visible` is appended dynamically in DOM inspector. |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 10s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** approved 2026-07-04
