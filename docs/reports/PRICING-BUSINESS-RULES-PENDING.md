# PRICING — BUSINESS RULES PENDING CONFIRMATION

Generated during development preview. These items must be resolved before the pricing page goes live.

---

## 1. Session Duration Ambiguity

**Location:** `lib/pricing.ts` → `DAILY_RATE`

The flyer contains two conflicting descriptions:
- "2-hour cleaning session with a 30-minute grace period" (implies 2.5 hrs total)
- "2 hours includes the 30-minute grace period" (implies 2 hrs total)

**Decision needed:** Is the standard session 2 hours or 2.5 hours?

---

## 2. Additional Laundry Load — Tier Applicability

**Location:** `lib/pricing.ts` → `SERVICE_ADDONS` → `laundry` → `needsConfirmation`

The $25 / 7 lb additional load charge appears under the Light Sleeper column only.

**Decision needed:** Does the additional load charge also apply to Heavy Dreamer customers?

---

## 3. Commercial Rate Relationship

**Location:** `lib/pricing.ts` → `COMMERCIAL`

The flyer shows $160 session + $80/hr additional but does not define:
- How many hours the $160 session covers
- When the $80/hr rate begins

**Decision needed:** Does the $160 cover 1 hour, 2 hours, or a flat visit regardless of duration?

---

## 4. Package Billing Periods

**Location:** `lib/pricing.ts` → `PACKAGES`

All three packages show visit counts but no billing period:
- Dream: $230 / 2 visits a week
- Clean: $350 / 3 visits / bi-weekly
- Shine: $470 / 5 visits / monthly

**Decision needed:** Are these prices per week, per month, or per billing cycle? What is the billing cycle?

---

## 5. Tier Mixing

**Decision needed:** Can a customer select Light Sleeper for one service and Heavy Dreamer for another in the same session? Currently the UI applies one tier globally.

---

## 6. Base Rate + Add-Ons Relationship

**Decision needed:** Is the $130 daily rate always required alongside individual add-on services, or can add-ons be booked independently?
