const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: 'gm1DHe05tNVptw4RqlXnjWd1T',
  appSecret: 'M1U06Yy2HPxdRbGf2erUBOlHN2xpfF0M2o5OUc18CivVU4kc75',
  accessToken: '2019106249418137600-kKN2bmmWPXguYrEhXAS5BCibDQHXmX',
  accessSecret: 'Fi8hcsh8Ez8JtOLmAhQGXmIMdcG8xXUhgFJ2NUeVg8K5T',
});

const tweets = [
  `Bitcoin has a UX problem that nobody talks about.

We display prices like "0.00042350 BTC" and wonder why normies think it's "too expensive" or "too complicated."

Here's a simple idea that changes everything 🧵`,

  `The problem: Decimals kill intuition.

0.001 BTC = $100
0.0001 BTC = $10  
0.00001 BTC = $1

Try doing mental math on that. Try explaining it to your mom.

It's not "user-friendly" — it's user-hostile.`,

  `Enter: The Coin Standard (¢)

Instead of decimals, we use whole numbers.

1 BTC = 100,000,000 coins

So:
• $100 = 10,000¢
• $10 = 1,000¢
• $1 = 100¢

No decimals. No confusion. Just count.

(And for Mac users: Option+4 = ¢. It's already on your keyboard.)`,

  `"But we already have sats!"

Yes, but "sats" feels technical. It references the founder. It requires explanation.

"Coins" is intuitive. You already know what a coin is. You know cents (¢). 

The mental model is already in your head.`,

  `The psychology is real:

"I own 0.0005 BTC" → sounds like crumbs
"I own 50,000 coins" → sounds like wealth

Same value. Completely different feeling.

Unit bias is a moat we built around Bitcoin. The Coin Standard removes it.`,

  `This isn't a protocol change.

It's a display change. A terminology change. A culture change.

Wallets can implement this today. Exchanges can add it as an option today.

No soft fork. No drama. Just better UX.`,

  `Real examples:

Old: "Send me 0.00025000 BTC"
New: "Send me 25,000¢"

Old: "I stacked 0.00001000 BTC today"
New: "I stacked 1,000¢ today"

Which conversation feels easier?

The ¢ symbol immediately signals "this is a monetary unit" — just like $, €, or £.`,

  `2.1 quadrillion coins.
21 million bitcoin.

The scarcity stays the same. The supply stays the same.

We're just changing how we *talk about it* to make it accessible to the next billion people.`,

  `The Coin Standard BIP is live.

Try the converter at coinpill.me
Read the full proposal: github.com/Schellbach/coins

This is how we make Bitcoin feel inevitable.`,

  `If you run a wallet, exchange, or Bitcoin app — consider adding "coins (¢)" as a display option.

If you're a Bitcoiner — start using "coins" in conversation. See how people respond.

Sometimes the smallest change has the biggest impact.

🪙`
];

async function postThread() {
  try {
    // Post first tweet
    let lastTweet = await client.v2.tweet(tweets[0]);
    console.log('Tweet 1 posted:', lastTweet.data.id);
    
    // Reply to create thread
    for (let i = 1; i < tweets.length; i++) {
      lastTweet = await client.v2.reply(tweets[i], lastTweet.data.id);
      console.log(`Tweet ${i + 1} posted:`, lastTweet.data.id);
    }
    
    console.log('\n✅ Thread posted successfully!');
    console.log('First tweet URL:', `https://twitter.com/Grover1233057/status/${lastTweet.data.id}`);
  } catch (error) {
    console.error('Error posting thread:', error);
    process.exit(1);
  }
}

postThread();
