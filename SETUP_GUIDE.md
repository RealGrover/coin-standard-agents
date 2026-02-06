# Guide: Unlocking Full Search & Browser Tools

This guide shows you how to enable full web search and browser automation for your OpenClaw agent.

---

## Option 1: Web Search (Brave API) — Easier

**What it unlocks:**
- General web searches ("Bitcoin news today", "Coin Standard discussions")
- Research without knowing exact URLs
- Finding new information dynamically

**Steps:**

1. **Get a Brave Search API key:**
   - Go to: https://api.search.brave.com/
   - Sign up for a free account
   - Generate an API key (free tier = 2,000 queries/month)

2. **Add the key to OpenClaw:**
   ```bash
   openclaw configure --section web
   ```
   - When prompted, paste your Brave API key
   - Save the configuration

3. **Restart OpenClaw gateway:**
   ```bash
   openclaw gateway restart
   ```

4. **Test it:**
   - Ask your agent: "Search for Bitcoin adoption news this week"
   - Should return results from Brave Search

---

## Option 2: Browser Automation — More Powerful

**What it unlocks:**
- Posting to Twitter/X without API limits
- Automating Meetup/Luma event creation
- Logging into sites and performing actions
- Taking screenshots of web pages

**Requirements:**
- OpenClaw gateway running on YOUR machine (not just web chat)
- Chrome, Brave, or Edge browser installed

**Steps:**

1. **Install OpenClaw:**
   - Download from: https://openclaw.ai
   - Install the desktop app

2. **Install a supported browser:**
   - Chrome, Brave, or Edge (must be installed, not just downloaded)
   - Safari and Firefox not supported for automation

3. **Start the gateway:**
   ```bash
   openclaw gateway start
   ```
   - Or click "Start Gateway" in the OpenClaw menubar app

4. **Verify it's running:**
   ```bash
   openclaw gateway status
   ```
   - Should show "running"

5. **Connect your agent:**
   - Your agent will automatically use the local gateway
   - Test: Ask agent to "take a screenshot of coinpill.me"

---

## Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| "No supported browser found" | Install Chrome/Brave/Edge and restart gateway |
| "Can't reach browser control service" | Run `openclaw gateway start` |
| "missing_brave_api_key" | Complete Option 1 steps above |
| Gateway starts but browser doesn't work | Make sure browser is fully installed (not just downloaded) |

---

## Cost Summary

- **Brave Search API:** Free tier = 2,000 queries/month (~$5/month if you exceed)
- **OpenClaw Gateway:** Free (included with OpenClaw)
- **Browsers:** Free (Chrome, Brave, Edge)

**Recommended:** Start with Brave Search (Option 1) — it's easier and covers 80% of use cases. Add browser automation (Option 2) when you need to post to Twitter or automate complex workflows.

---

*Questions? Ask your agent or check docs at https://docs.openclaw.ai*
