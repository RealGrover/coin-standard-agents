# Complete Guide: Enabling Full Search & Browser Automation

*A step-by-step guide to unlocking all OpenClaw capabilities*

---

## Table of Contents
1. [Overview](#overview)
2. [Option 1: Brave Search API (Web Search)](#option-1-brave-search-api-web-search)
3. [Option 2: Browser Automation](#option-2-browser-automation)
4. [Option 3: Both (Recommended)](#option-3-both-recommended)
5. [Verification & Testing](#verification--testing)
6. [Troubleshooting](#troubleshooting)
7. [Security Considerations](#security-considerations)

---

## Overview

Your OpenClaw agent currently has limited search capabilities. Here's what's available now vs. what you can unlock:

| Feature | Current Status | With Full Setup |
|---------|---------------|-----------------|
| Fetch specific URLs | ✅ Works | ✅ Works |
| General web search | ❌ Not working | ✅ 2,000 queries/month |
| Post to Twitter/X | ❌ Not working | ✅ Full automation |
| Create Meetup/Luma events | ❌ Not working | ✅ Automated |
| Take screenshots | ❌ Not working | ✅ Available |
| Browser form filling | ❌ Not working | ✅ Available |

**Prerequisites:**
- OpenClaw installed (you already have this)
- Terminal/command line access
- About 15-20 minutes

---

## Option 1: Brave Search API (Web Search)

**Difficulty:** Easy  
**Time:** 5 minutes  
**Cost:** Free (2,000 queries/month), then ~$5/month if exceeded

### Step 1: Create a Brave Search Account

1. Open your browser and go to: https://api.search.brave.com/
2. Click the **"Get Started for Free"** or **"Sign Up"** button
3. Create an account using:
   - Email address, OR
   - Google account (faster)
4. Verify your email if required

### Step 2: Generate Your API Key

1. Once logged in, you'll see the Brave Search API dashboard
2. Look for **"API Keys"** or **"Create API Key"** section
3. Click **"Create New API Key"** or **"Generate Key"**
4. Give it a name like "OpenClaw" or "My AI Agent"
5. Copy the API key immediately (it looks like: `BSA...` followed by random characters)
   
   **⚠️ Important:** Save this key somewhere secure. You won't be able to see it again!

### Step 3: Configure OpenClaw

Open your terminal and run:

```bash
# Check OpenClaw is installed
openclaw --version

# Configure web settings
openclaw configure --section web
```

You'll be prompted to enter:
- **Provider:** Type `brave` and press Enter
- **API Key:** Paste your Brave API key (right-click to paste in most terminals)

Example interaction:
```
$ openclaw configure --section web
? Select provider: brave
? Enter Brave API key: [paste your key here]
✓ Configuration saved to ~/.openclaw/config.toml
```

### Step 4: Restart the Gateway

```bash
# Stop the gateway if running
openclaw gateway stop

# Start it again
openclaw gateway start

# Or use restart
openclaw gateway restart
```

### Step 5: Test Web Search

Ask your agent:
- "Search for Bitcoin news from this week"
- "Find recent Coin Standard discussions"
- "What are people saying about sats vs coins?"

If it returns search results (titles, URLs, snippets), it's working!

---

## Option 2: Browser Automation

**Difficulty:** Medium  
**Time:** 10-15 minutes  
**Cost:** Free

### Understanding Browser Automation

This allows your agent to:
- Control Chrome/Brave/Edge programmatically
- Log into websites (Twitter, Meetup, etc.)
- Fill forms and click buttons
- Take screenshots
- Post content

### Step 1: Install a Supported Browser

Your agent needs one of these browsers installed:

**Chrome:** https://www.google.com/chrome/
**Brave:** https://brave.com/download/
**Edge:** https://www.microsoft.com/edge (usually pre-installed on Windows)

**Installation check:**
- Mac: Open Finder → Applications → look for Chrome/Brave/Edge
- Windows: Press Windows key → type "Chrome" or "Brave"
- Linux: Run `which google-chrome` or `which brave` in terminal

**⚠️ Important:** The browser must be FULLY installed, not just downloaded. Open it once to complete any first-run setup.

### Step 2: Verify OpenClaw Gateway is Installed

```bash
# Check if OpenClaw command exists
which openclaw

# Check version
openclaw --version

# Should return something like: openclaw version 1.x.x
```

If not found, download from: https://openclaw.ai

### Step 3: Start the OpenClaw Gateway

The gateway must be running for browser automation to work.

**Option A: Using Terminal**
```bash
# Start the gateway
openclaw gateway start

# Check status
openclaw gateway status

# Expected output:
# Gateway: running
# Version: 1.x.x
# Browser: available (Chrome/Brave/Edge detected)
```

**Option B: Using OpenClaw Desktop App**
1. Open the OpenClaw application
2. Look for "Gateway" in the menubar or settings
3. Click "Start Gateway"
4. Wait for status to show "Running"

### Step 4: Verify Browser Detection

```bash
openclaw gateway status
```

Look for this line in the output:
```
Browser: available (Chrome detected)
```
or
```
Browser: available (Brave detected)
```

If it says `Browser: not available`, see troubleshooting below.

### Step 5: Test Browser Automation

Ask your agent:
- "Take a screenshot of coinpill.me"
- "Navigate to twitter.com and check my notifications"
- "Go to github.com/Schellbach/coins and read the README"

If it successfully navigates and returns information, browser automation is working!

---

## Option 3: Both (Recommended)

For maximum capability, enable both features:

1. **Complete Option 1** (Brave Search API) — 5 minutes
2. **Complete Option 2** (Browser Automation) — 10 minutes

**Benefits:**
- Search for information (Brave)
- Navigate to results automatically (Browser)
- Interact with websites (Browser)
- Post content to social media (Browser)

---

## Verification & Testing

### Test 1: Web Search
```
You: "Search for Bitcoin adoption statistics 2024"
Agent: [Should return search results with URLs and snippets]
```

### Test 2: URL Fetch (should already work)
```
You: "Fetch https://coinpill.me"
Agent: [Should return page content]
```

### Test 3: Browser Navigation
```
You: "Navigate to twitter.com/Grover1233057 and tell me my latest post"
Agent: [Should open browser, navigate, and report findings]
```

### Test 4: Screenshot
```
You: "Take a screenshot of bips.dev"
Agent: [Should return an image of the webpage]
```

---

## Troubleshooting

### "missing_brave_api_key" Error

**Problem:** Agent can't search the web  
**Solution:** 
- Complete Option 1 above
- Make sure you ran `openclaw configure --section web`
- Restart gateway after adding the key

### "No supported browser found" Error

**Problem:** Gateway can't find Chrome/Brave/Edge  
**Solution:**
1. Verify browser is installed (not just downloaded)
2. Open the browser once manually to complete setup
3. Restart gateway: `openclaw gateway restart`
4. Check status: `openclaw gateway status`

### "Can't reach the openclaw browser control service" Error

**Problem:** Gateway isn't running  
**Solution:**
```bash
openclaw gateway start
```

### Browser is installed but not detected

**Mac:**
```bash
# Check if Chrome is in Applications
ls /Applications/Google\ Chrome.app

# If installed elsewhere, create symlink
ln -s /path/to/Chrome /Applications/Google\ Chrome.app
```

**Windows:**
- Make sure Chrome/Brave is installed for all users (not just current user)
- Try reinstalling and selecting "Install for all users"

**Linux:**
```bash
# Check if Chrome is in PATH
which google-chrome

# If not found but installed, create symlink
sudo ln -s /usr/bin/google-chrome-stable /usr/local/bin/google-chrome
```

### Gateway starts but browser automation fails

1. Check if browser is already running — close all browser windows and try again
2. Restart gateway: `openclaw gateway restart`
3. Check for updates: `openclaw update`

### Rate limiting on Brave Search

**Problem:** Hitting the 2,000 query/month limit  
**Solution:**
- Check usage at: https://api.search.brave.com/
- Upgrade plan if needed (~$5/month for more queries)
- Or be more selective with searches (cache results, use fetch for known URLs)

---

## Security Considerations

### API Keys
- Your Brave API key is stored locally in `~/.openclaw/config.toml`
- Never share this file or your API key
- If compromised, regenerate the key at https://api.search.brave.com/

### Browser Automation
- The agent can only control the browser when the gateway is running
- Close the gateway when not needed: `openclaw gateway stop`
- The agent cannot access your browser passwords (those are encrypted)
- For sensitive sites, use manual login or dedicated accounts

### Best Practices
1. Use dedicated accounts for automation (don't use your personal Twitter)
2. Enable 2FA on accounts when possible
3. Review what the agent is doing in the browser
4. Stop the gateway when not in use

---

## Summary

| Feature | Command/Step | Status Check |
|---------|-------------|--------------|
| Web Search | Get Brave API key → `openclaw configure --section web` | "Search for Bitcoin news" |
| Browser | Install Chrome/Brave → `openclaw gateway start` | "Take a screenshot of example.com" |

**Quick Start (Minimum):**
1. Get Brave API key (5 min)
2. Configure OpenClaw: `openclaw configure --section web`
3. Restart gateway
4. Done!

**Full Power (Recommended):**
1. Do steps above for search
2. Install Chrome or Brave
3. Run: `openclaw gateway start`
4. Test browser automation
5. Done!

---

*Need help? Run `openclaw --help` or visit https://docs.openclaw.ai*
