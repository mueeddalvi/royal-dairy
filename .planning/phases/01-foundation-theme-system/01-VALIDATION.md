---
phase: 1
slug: foundation-theme-system
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-07-04
---

# Phase 1 — Validation Strategy

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
| 01-01-01 | 01 | 1 | ARCH-01 | build | `npm run build` | ❌ W0 | ⬜ pending |
| 01-01-02 | 01 | 1 | ARCH-02 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 01-01-03 | 01 | 1 | ARCH-03 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 01-02-01 | 02 | 2 | THEM-01 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 01-02-02 | 02 | 2 | THEM-02 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 01-02-03 | 02 | 2 | THEM-03 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |
| 01-02-04 | 02 | 2 | UXIN-01 | unit | `npm run test --run` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `src/theme/ThemeContext.test.tsx` — stubs for THEM-01, THEM-02, THEM-03
- [ ] `src/components/Preloader/Preloader.test.tsx` — stubs for UXIN-01
- [ ] `vitest` + `@testing-library/react` + `@testing-library/jest-dom` + `jsdom` framework install

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Visual preloader animation | UXIN-01 | Animation timing and style visual check | Load page in browser, verify preloader displays and fades out elegantly with gold transitions. |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 10s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** approved 2026-07-04
