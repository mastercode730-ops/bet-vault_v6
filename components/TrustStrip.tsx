const items = [
  'Cricket', 'Football', 'Casino', 'Live Odds', 'Instant Payouts', 'Real People',
  'IPL', 'T20 Leagues', 'UPI in Seconds', 'No Nonsense',
];

export default function TrustStrip() {
  const loop = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee-content font-semibold text-xs sm:text-sm uppercase tracking-widest text-white/90">
        {loop.map((item, i) => (
          <span key={i} className="mx-5 sm:mx-7 inline-flex items-center gap-5 sm:gap-7">
            {item}
            <span style={{ color: 'var(--gold-bright)' }}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
