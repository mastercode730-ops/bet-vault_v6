const points = [
  { title: 'We actually answer', desc: 'Message us at 3am about a stuck withdrawal — a real person replies, not a script.', icon: 'chat' },
  { title: 'Set up in minutes', desc: "No form with twenty fields. Just the essentials, then you're in.", icon: 'bolt' },
  { title: 'UPI in, UPI out', desc: 'No mysterious "processing" that somehow takes three days.', icon: 'wallet' },
  { title: 'Honest bonus terms', desc: 'The welcome bonus conditions fit in one message, not a legal document.', icon: 'gift' },
  { title: 'One ID, every market', desc: 'Cricket, football, casino — same login, every time.', icon: 'grid' },
  { title: "We're upfront about risk", desc: "Betting isn't a plan for rent money, and we'll say that plainly, always.", icon: 'shield' },
];

export default function Features() {
  return (
    <section id="features" className="section-cream py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-xl mx-auto text-center mb-12 sm:mb-16">
          <span className="chip-gold inline-block rounded-full px-4 py-1.5 text-xs font-semibold mb-5">
            Why people stick around
          </span>
          <h2 className="display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', lineHeight: 1.1 }}>
            Nothing revolutionary. Just done properly.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            We didn't reinvent online betting — we just got tired of platforms making simple things difficult.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {points.map((p, i) => (
            <div key={i} className="card-soft rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: i % 2 === 0 ? 'var(--gold-tint)' : 'var(--forest-tint)' }}
              >
                <Icon name={p.icon} color={i % 2 === 0 ? '#A6752B' : '#0B4F3F'} />
              </div>
              <div>
                <h3 className="font-bold mb-1.5 text-base" style={{ color: 'var(--ink)' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name, color }: { name: string; color: string }) {
  const common = { width: 22, height: 22, fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24' };
  switch (name) {
    case 'chat':
      return <svg {...common}><path d="M4 4h16v12H8l-4 4V4Z" /><path d="M8 9h8M8 12h5" /></svg>;
    case 'bolt':
      return <svg {...common}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></svg>;
    case 'wallet':
      return <svg {...common}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><circle cx="16" cy="14" r="1.4" /></svg>;
    case 'gift':
      return <svg {...common}><rect x="3" y="9" width="18" height="4" /><rect x="5" y="13" width="14" height="8" /><path d="M12 9v12M12 9C10 5 6 5 6 8s3 1 6 1ZM12 9c2-4 6-4 6-1s-3 1-6 1Z" /></svg>;
    case 'grid':
      return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1.2" /><rect x="14" y="3" width="7" height="7" rx="1.2" /><rect x="3" y="14" width="7" height="7" rx="1.2" /><rect x="14" y="14" width="7" height="7" rx="1.2" /></svg>;
    case 'shield':
      return <svg {...common}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="M9 12l2 2 4-4" /></svg>;
    default:
      return null;
  }
}
