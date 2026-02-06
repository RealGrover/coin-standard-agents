# Coin Standard Wallet Outreach Report
## Targeting Open Source Bitcoin Wallets for ¢ (Coin) Support

**Date:** February 5, 2026  
**Objective:** Identify open source Bitcoin wallets that could adopt the Coin Standard (rebranding satoshis to coins ¢)

---

## Executive Summary

The Coin Standard BIP proposes redefining Bitcoin's smallest unit from "satoshi/sat" to "coin" (¢), where:
- **1 BTC = 100,000,000 coins (¢)**
- Display format: `10,000¢` instead of `0.00010000 BTC`
- Symbol: ¢ (cent sign, reinforcing monetary familiarity)

This report identifies **7 open source Bitcoin wallets** with existing denomination settings, making them ideal targets for Coin Standard adoption. Each includes copy-paste ready GitHub issue drafts.

---

## Target Wallet List (Prioritized)

| Priority | Wallet | GitHub | Stars | Unit Support | Ease |
|----------|--------|--------|-------|--------------|------|
| 1 | **Sparrow Wallet** | [sparrowwallet/sparrow](https://github.com/sparrowwallet/sparrow) | 2.5k+ | BTC, sats, Auto | ⭐⭐⭐ Easy |
| 2 | **BlueWallet** | [BlueWallet/BlueWallet](https://github.com/BlueWallet/BlueWallet) | 3.1k+ | BTC, Sats, Fiat | ⭐⭐⭐ Easy |
| 3 | **Electrum** | [spesmilo/electrum](https://github.com/spesmilo/electrum) | 7k+ | BTC, mBTC, bits, sat | ⭐⭐⭐ Easy |
| 4 | **Wasabi Wallet** | [WalletWasabi/WalletWasabi](https://github.com/WalletWasabi/WalletWasabi) | 2k+ | BTC (sats requested) | ⭐⭐ Medium |
| 5 | **Trezor Suite** | [trezor/trezor-suite](https://github.com/trezor/trezor-suite) | 1.7k+ | BTC, sats | ⭐⭐⭐ Easy |
| 6 | **BTCPay Server** | [btcpayserver/btcpayserver](https://github.com/btcpayserver/btcpayserver) | 6k+ | BTC, SATS | ⭐⭐ Medium |
| 7 | **Phoenix Wallet** | [ACINQ/phoenix](https://github.com/ACINQ/phoenix) | 1k+ | sats default | ⭐⭐ Medium |

---

## Detailed Analysis & Draft Issues

### 1. Sparrow Wallet (HIGHEST PRIORITY)
**GitHub:** https://github.com/sparrowwallet/sparrow

**Why Target:**
- Already has unit toggle (BTC/sats/Auto)
- Issue #777 shows community interest in "bits" denomination
- Maintainer @craigraw is active and responsive to UX improvements
- Desktop-focused power users = influencers

**Existing Discussion:** Issue #777 requested "bits" support with compelling arguments about fiat-like denominations

---

#### 📋 DRAFT ISSUE: Sparrow Wallet

**Title:** `[Feature Request] Add Coin Standard (¢) unit option`

**Body:**
```markdown
## Summary
Add support for displaying values in "coins" (¢) as defined by the Coin Standard BIP, where 1 BTC = 100,000,000¢.

## Context
Building on issue #777's discussion about "bits," the Coin Standard takes this further by:
- Renaming the base unit (satoshi) to "coin" 
- Using the ¢ symbol for immediate monetary recognition
- Eliminating decimals entirely for cleaner UX

## Why Coins > Bits > Sats

| Format | Display for 0.00010000 BTC |
|--------|---------------------------|
| BTC | 0.00010000 BTC |
| sats | 10,000 sats |
| bits | 100.00 bits |
| **coins** | **10,000¢** |

The ¢ symbol provides instant monetary context—users already understand cents. This aligns with @craigraw's commitment to "transparency and usability."

## Implementation
- Add "Coin (¢)" to the unit dropdown alongside BTC/sats/Auto
- Format: integer display with ¢ suffix (e.g., `10,000¢`)
- No protocol changes required—display-only

## References
- Coin Standard BIP: https://github.com/Schellbach/coins
- Interactive demo: https://coinpill.me
- Related discussion: #777

## User Benefit
- Eliminates "unit bias" for newcomers (100M coins feels attainable vs 1 BTC)
- Familiar ¢ symbol = intuitive pricing
- Clean integer display = fewer errors

Would love to discuss implementation details or contribute a PR!
```

---

### 2. BlueWallet
**GitHub:** https://github.com/BlueWallet/BlueWallet

**Why Target:**
- React Native = wide mobile reach (iOS + Android)
- Issue #3144 already requested "bits" with similar reasoning
- 3.1k+ stars = massive user base
- Active development team

**Existing Discussion:** Issue #3144 argues for "bits" as cent-equivalent, perfectly aligned with Coin Standard

---

#### 📋 DRAFT ISSUE: BlueWallet

**Title:** `[Feature Request] Add Coin Standard (¢) denomination option`

**Body:**
```markdown
## Summary
Add "Coin (¢)" as a currency denomination option, where 1 coin = 1 satoshi and 100,000,000¢ = 1 BTC.

## Context
Issue #3144 requested "bits" (100 sats) for fiat-like UX. The Coin Standard takes this further by:
- Using the smallest unit as base (like actual fiat cents)
- Adopting ¢ symbol for universal monetary recognition
- Eliminating decimals entirely

## Why Coins?
From #3144's excellent reasoning:
> "We don't use cents to price things in the real world so trying to make 'sats' the main denominator would be counterintuitive"

The Coin Standard solves this by making ¢oins **the cents of Bitcoin**:
- `5,000¢` reads like `$50.00` 
- No decimals, no confusion
- ¢ symbol triggers monetary intuition instantly

## Implementation
Add to `BitcoinUnit` enum:
```javascript
export const BitcoinUnit = {
  BTC: 'BTC',
  SATS: 'sats', 
  COINS: '¢',  // NEW: Coin Standard
  LOCAL_CURRENCY: 'local_currency',
};
```

Display format: `{amount}¢` (e.g., "10,000¢")

## References
- Coin Standard BIP: https://github.com/Schellbach/coins
- Demo: https://coinpill.me

## Benefits
- Defeats unit bias for new users
- Familiar ¢ symbol = zero learning curve
- Aligns with #3144's vision for fiat-like denominations
```

---

### 3. Electrum
**GitHub:** https://github.com/spesmilo/electrum

**Why Target:**
- The OG Bitcoin wallet—7k+ stars
- Already supports BTC, mBTC, bits, AND satoshi
- Adding "coin (¢)" would be trivial (one more enum value)
- Massive influence on other wallets

**Current Units:** BTC, mBTC, bits, sat (via Tools > Preferences > Units)

---

#### 📋 DRAFT ISSUE: Electrum

**Title:** `[Feature Request] Add Coin (¢) unit option - Coin Standard BIP`

**Body:**
```markdown
## Summary
Add "Coin (¢)" as a unit option in Preferences > Units, equivalent to satoshi but with ¢ symbol formatting.

## Background
Electrum already offers excellent unit flexibility (BTC, mBTC, bits, sat). The Coin Standard BIP proposes standardizing on "coin" as the base unit name with ¢ symbol.

## Why Add Coins?
1. **Familiar Symbol:** ¢ instantly signals "small monetary unit" (like cents)
2. **Clean Integers:** `10,000¢` vs `0.00010000 BTC`
3. **Adoption Aid:** Defeats "Bitcoin is too expensive" psychology
4. **Standards Alignment:** Growing BIP support for unified terminology

## Implementation
In `electrum/util.py` (or equivalent unit handling):
```python
UNIT_NAME_TO_VALUE = {
    'BTC': 8,
    'mBTC': 5,
    'bits': 2,
    'sat': 0,
    '¢': 0,  # Coin Standard - same as sat, different symbol
}
```

Display: Format satoshi values with ¢ suffix instead of "sat"

## References
- Coin Standard BIP: https://github.com/Schellbach/coins
- Demo: https://coinpill.me

Given Electrum's influence, adding this would help establish the standard across the ecosystem.
```

---

### 4. Wasabi Wallet
**GitHub:** https://github.com/WalletWasabi/WalletWasabi

**Why Target:**
- Privacy-focused community = often early adopters
- Issue #2110 shows demand for satoshi display
- C# codebase = well-structured for unit additions
- Active GitHub discussions

**Existing Discussion:** Issue #2110 requested satoshi toggle with digit grouping

---

#### 📋 DRAFT ISSUE: Wasabi Wallet

**Title:** `[Feature] Coin Standard (¢) display option alongside sats`

**Body:**
```markdown
## Summary
Extend issue #2110's satoshi display feature to include Coin Standard formatting (¢ symbol).

## Context
Issue #2110 proposed satoshi display with spacing: `1234 5678 9012 sats`

The Coin Standard BIP suggests using "coin" terminology with ¢ symbol:
- Same value (1 coin = 1 sat)
- Different symbol: `1,234,567,890¢`
- Reinforces monetary familiarity

## Why Both Sats AND Coins?
Give users choice:
- **sats:** For Bitcoin natives who prefer community terminology
- **coins (¢):** For mainstream adoption with instant monetary recognition

## Implementation
Extend the unit toggle in Settings:
```csharp
public enum BitcoinUnit 
{
    BTC,
    Satoshi,  // existing: "12345678 sats"
    Coin      // new: "12,345,678¢"
}
```

## Formatting
| Unit | Example |
|------|---------|
| BTC | 0.12345678 BTC |
| sats | 1234 5678 sats |
| coins | 12,345,678¢ |

## References
- Coin Standard BIP: https://github.com/Schellbach/coins
- Demo: https://coinpill.me
- Related: #2110

Wasabi's privacy-focused users often lead adoption trends—this could help establish the standard!
```

---

### 5. Trezor Suite
**GitHub:** https://github.com/trezor/trezor-suite

**Why Target:**
- Hardware wallet companion = high-value users
- Already implemented BTC/sats toggle (issue #3004, #6701)
- TypeScript/React = modern, maintainable
- Trezor's reputation = industry influence

**Current Status:** BTC/sats toggle implemented since ~2022

---

#### 📋 DRAFT ISSUE: Trezor Suite

**Title:** `[Feature] Add Coin (¢) as third Bitcoin unit option`

**Body:**
```markdown
## Summary
Add "Coin (¢)" as a third option in Bitcoin unit settings, alongside BTC and sats.

## Context
Trezor Suite implemented the BTC/sats toggle (issues #3004, #6701). The Coin Standard BIP now proposes standardizing "coin" as the base unit name with the ¢ symbol.

## Why Add Coins?
The ¢ symbol provides what "sats" lacks:
- **Instant recognition:** ¢ is universally understood as "small money"
- **No explanation needed:** New users don't ask "what's a sat?"
- **Clean formatting:** `10,000¢` vs `10000 sat`

## Implementation
Extend the existing unit selector:
```typescript
type BitcoinUnit = 'BTC' | 'sat' | 'coin';

const formatCoin = (sats: number): string => {
  return `${sats.toLocaleString()}¢`;
};
```

Settings UI: Add "Coin (¢)" radio option below sats

## User Benefit
- Hardware wallet users = often help onboard newcomers
- ¢ symbol makes explaining Bitcoin easier
- Aligns with growing Coin Standard adoption

## References
- Coin Standard BIP: https://github.com/Schellbach/coins
- Demo: https://coinpill.me

Thank you for Trezor's commitment to open source and UX!
```

---

### 6. BTCPay Server
**GitHub:** https://github.com/btcpayserver/btcpayserver

**Why Target:**
- Merchant-focused = directly impacts pricing/adoption
- Issue #250 shows long-standing interest in denomination options
- Already supports SATS as invoice currency
- .NET codebase, well-documented

**Existing Discussion:** Issue #250 requested mBTC/bits options

---

#### 📋 DRAFT ISSUE: BTCPay Server

**Title:** `[Feature] Add Coin (¢) denomination for invoices and displays`

**Body:**
```markdown
## Summary
Add "Coin (¢)" as a denomination option for invoice displays and checkout experience.

## Context
Issue #250 requested denomination options (mBTC, bits). BTCPay now supports SATS. The Coin Standard BIP proposes "coin" (¢) as the standardized base unit name.

## Why Coins for Merchants?

### Pricing Example
A $5 item at $50,000/BTC:
| Format | Display |
|--------|---------|
| BTC | 0.00010000 BTC |
| SATS | 10,000 sats |
| **Coins** | **10,000¢** |

The ¢ symbol makes pricing **intuitive**:
- "That coffee is 5,000¢" 
- Customers instantly understand (like cents)
- No crypto jargon barrier

## Implementation
Add to currency options in Store Settings > Checkout Experience:
- Existing: "Display Lightning payment amounts in Satoshis"
- New: "Display Bitcoin amounts in Coins (¢)"

Format: `{amount}¢` with thousand separators

## References
- Coin Standard BIP: https://github.com/Schellbach/coins  
- Demo: https://coinpill.me
- Related: #250

BTCPay's merchant focus makes this high-impact for real-world adoption!
```

---

### 7. Phoenix Wallet
**GitHub:** https://github.com/ACINQ/phoenix

**Why Target:**
- Lightning-native = sats are already default
- ACINQ is influential in Lightning space
- Kotlin/Swift = modern mobile stack
- Simple UX focus aligns with Coin Standard goals

---

#### 📋 DRAFT ISSUE: Phoenix Wallet

**Title:** `[Feature Request] Add Coin (¢) display option`

**Body:**
```markdown
## Summary
Add option to display amounts in "Coins" (¢) instead of sats, where 1 coin = 1 sat.

## Context
Phoenix already displays sats by default, which is great! The Coin Standard BIP proposes using "coin" with ¢ symbol for better mainstream adoption.

## Why Coins for Phoenix?
Phoenix's mission is making Lightning accessible. The ¢ symbol takes this further:

- **Universal understanding:** Everyone knows cents (¢)
- **Zero explanation:** "It costs 50¢" needs no clarification
- **Clean UI:** `500¢` vs `500 sats` (same length, more intuitive)

## Implementation
Add to Settings:
```kotlin
enum class DisplayUnit {
    SATS,   // "500 sats"
    COINS   // "500¢"
}
```

Simple string formatting change—same underlying value.

## Lightning Use Case
Small Lightning payments become even friendlier:
- "Tip 100¢" (sounds like tipping $1)
- "Stream 1¢/second" (familiar micro-payment feel)

## References
- Coin Standard BIP: https://github.com/Schellbach/coins
- Demo: https://coinpill.me

Phoenix is already the friendliest Lightning wallet—this would make it even more approachable!
```

---

## Supporting Arguments Summary

### Technical Arguments
1. **Zero Protocol Changes:** Display-only modification
2. **Trivial Implementation:** Adding one enum value to existing unit systems
3. **Unicode Ready:** ¢ (U+00A2) exists in all fonts
4. **Backward Compatible:** Same value as satoshi, different label

### UX Arguments
1. **Defeats Unit Bias:** 100M coins feels more attainable than 1 BTC
2. **Familiar Symbol:** ¢ universally understood as "small money"
3. **Clean Integers:** No decimals, no leading zeros
4. **Fiat Parallel:** Works like dollars/cents structure

### Adoption Arguments
1. **Lowers Barrier:** New users don't need crypto vocabulary
2. **Media Friendly:** "Bitcoin costs 5,000¢" is quotable
3. **Merchant Ready:** Pricing becomes intuitive
4. **Network Effect:** More wallets = more momentum

---

## Recommended Order of Approach

### Phase 1: Desktop Wallets (Weeks 1-2)
1. **Sparrow Wallet** - Engaged community, existing bits discussion
2. **Electrum** - Maximum influence, trivial to add

### Phase 2: Mobile Wallets (Weeks 3-4)
3. **BlueWallet** - Largest mobile reach, existing bits request
4. **Phoenix Wallet** - Lightning-native, simple UX

### Phase 3: Infrastructure (Weeks 5-6)
5. **Trezor Suite** - Hardware wallet authority
6. **BTCPay Server** - Merchant ecosystem

### Phase 4: Privacy Focused (Week 7+)
7. **Wasabi Wallet** - Privacy community influence

---

## References

- **Coin Standard BIP:** https://github.com/Schellbach/coins
- **Interactive Demo:** https://coinpill.me
- **Key Principle:** 1 BTC = 100,000,000¢

---

*Report generated for Coin Standard adoption initiative*
