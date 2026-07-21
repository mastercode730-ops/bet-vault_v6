export type BlogSection = {
  heading?: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  icon: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'reading-the-pitch',
    category: 'Cricket',
    icon: '🏏',
    title: 'Reading the pitch before you bet',
    excerpt: "No magic formula — just the handful of things our regulars check before an IPL bet, in the order they check them.",
    image: '/blog/cricket.svg',
    readTime: '6 min read',
    sections: [
      { body: "Every season, someone asks us for \"the system.\" There isn't one. But there's a rough checklist a lot of our more consistent members run through, simple enough to write down." },
      { heading: 'Start with the toss', body: "Check the toss decision before the team sheet. A captain choosing to bowl first at a dew-heavy ground is telling you something — so is one batting first on a dry, cracked pitch." },
      { heading: 'Powerplay numbers over season averages', body: "Some teams explode in the first six overs and fade after; others build slowly. Powerplay-specific stats tell you more than a season-long average ever will." },
      { heading: 'Watch the individual match-ups', body: "A team's best batter can look ordinary against the right bowling variation. Head-to-head records are often more useful than either side's overall form." },
      { heading: 'Fix your bet size ahead of time', body: "Decide a comfortable amount before the season starts, and hold it, win or lose. Chasing losses with bigger bets is how a good season turns forgettable." },
      { heading: 'Give live odds a minute', body: "Pre-match prices already account for public knowledge. They can't price in a flat pitch playing easier than expected. Watch the first over before betting live." },
      { body: "None of it guarantees a win — cricket has a way of humbling anyone who thinks they've solved it. But a little process beats a hunch, and your ID is one message away when you're ready." },
    ],
  },
  {
    slug: 'five-minutes-flat',
    category: 'Guides',
    icon: '⚡',
    title: 'Getting your ID sorted, five minutes flat',
    excerpt: "We time ourselves on this one. Here's exactly what happens between your first message and your first bet.",
    image: '/blog/id-setup.svg',
    readTime: '4 min read',
    sections: [
      { body: "\"How long does this actually take?\" is the question we hear most, so here's the whole thing laid out, step by step." },
      { heading: 'You say hi', body: "Tap the WhatsApp button and send whatever feels natural. There's no form behind it — you're talking to a person from the first message." },
      { heading: 'We ask a few normal things', body: "Name, preferred platform, roughly how much you're planning to deposit. We never ask for banking passwords or OTPs over chat." },
      { heading: 'Your ID shows up in the same chat', body: "Within a few minutes you'll have a login that opens up cricket, football, casino, and everything else." },
      { heading: 'Deposit, then play', body: "UPI, net banking, or a wallet — funds usually land almost instantly, so there's no awkward wait." },
      { body: "That's genuinely the whole process. Time yourself — we think you'll be surprised." },
    ],
  },
  {
    slug: 'the-withdrawal-question',
    category: 'Payments',
    icon: '💰',
    title: 'The withdrawal question, answered honestly',
    excerpt: 'Slow withdrawals are the top complaint about betting platforms generally. Here is what actually causes the delay, and how to avoid it.',
    image: '/blog/payments.svg',
    readTime: '5 min read',
    sections: [
      { body: "If you've used another platform before, a withdrawal has probably sat there doing nothing at some point. Here's what's really happening, and why ours usually doesn't." },
      { heading: 'What happens when you hit withdraw', body: 'Your request is checked against your account details, then sent out through whichever method you used to deposit. Most clear within minutes.' },
      { heading: 'What we support', body: 'UPI, net banking, and the major wallets. UPI is consistently fastest, often under fifteen minutes once approved.' },
      { heading: 'What actually causes delays', body: "Almost always a mismatched account detail, or a request during an unusually busy stretch — right after a big match, for instance. Double-checking details first solves most of it." },
      { heading: 'On security', body: "Every transaction runs through standard encryption, and we can check a withdrawal's status live, not \"within 24-48 hours.\"" },
      { body: "If a withdrawal feels slow, don't just wait — message us. A real person checks it immediately." },
    ],
  },
  {
    slug: 'football-without-the-fuss',
    category: 'Football',
    icon: '⚽',
    title: 'Football betting, without the fuss',
    excerpt: 'Match winner, over/under, both teams to score — the handful of markets worth knowing before your first football bet.',
    image: '/blog/football.svg',
    readTime: '5 min read',
    sections: [
      { body: "Football markets look intimidating mostly because of the jargon. Here's the plain-English version." },
      { heading: 'Match winner (1X2)', body: 'Home win, draw, or away win. The simplest bet there is, and the right place to start.' },
      { heading: 'Over/under goals', body: "Not about who wins — about total goals. A common line is 2.5, and you're betting above or below it." },
      { heading: 'Both teams to score', body: 'A simple yes or no on whether both sides find the net, regardless of who wins.' },
      { heading: 'Asian handicap', body: 'Gives a virtual head start to one side, evening out a clear favourite — often better value than a plain match-winner bet.' },
      { heading: 'Correct score & accumulators', body: 'Bigger payouts, bigger risk — every leg of an accumulator has to land.' },
      { body: 'Start simple, build up from there. All of it is live the moment your ID is active.' },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
