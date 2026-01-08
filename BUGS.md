# Known Bugs and Issues

## 🐛 Active Bugs

### Desktop Centering Issue - User Type Selection Page
**Priority:** Medium  
**Status:** Open  
**Date Reported:** 2026-01-07

**Description:**
The User Type Selection (landing) page content is not centering properly on desktop screens. Content remains left-aligned instead of being centered.

**Root Cause:**
Global `.container` class in `src/styles/global.css` (max-width: 1280px) is conflicting with the page-specific container styles. Multiple attempts to override with `!important`, child selectors, and explicit width/margin properties have not resolved the issue.

**Files Affected:**
- `/src/pages/UserTypeSelection/UserTypeSelection.css` (lines 11-17)
- `/src/styles/global.css` (lines 76-90)

**Attempted Fixes:**
1. Added child selector `.user-type-selection > .container`
2. Added `!important` to margin, padding, max-width
3. Added explicit `width: 100%` and `display: block`
4. Removed padding from hero section

**Potential Solutions to Try:**
1. Rename `.container` to `.user-type-container` to avoid global class conflict
2. Use CSS specificity with additional wrapper class
3. Move global container styles to component-specific approach
4. Use CSS modules for better style isolation

**Workaround:**
None currently. Issue does not affect functionality, only visual layout on desktop.

---

## 📋 Resolved Bugs

_(No resolved bugs yet)_
