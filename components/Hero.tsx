import { waLink } from '@/lib/whatsapp';

const stats = [
  { value: '3M+', label: 'Happy users' },
  { value: '<5 min', label: 'ID setup' },
  { value: '24/7', label: 'Real support' },
];

export default function Hero() {
  const whatsappUrl = waLink("Hey Bet Vault, I'd like to get my betting ID set up.");

  return (
    <section id="hero" className="section-white relative pt-28 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% -10%, rgba(199,151,44,0.14) 0%, transparent 55%), radial-gradient(ellipse at 85% 60%, rgba(11,79,63,0.06) 0%, transparent 50%)',
        }}
      />
      <div className="wrap relative flex flex-col items-center text-center">
        <div className="chip-gold inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold)' }} />
          Set up by a real person, over WhatsApp
        </div>

        <h1 className="display mb-6 max-w-3xl" style={{ color: 'var(--ink)', fontSize: 'clamp(2.2rem, 6vw, 4.2rem)', lineHeight: 1.05 }}>
          Cricket betting, made as easy as{' '}
          <span className="gold-text">sending a text.</span>
        </h1>

        <p className="max-w-xl mb-10 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          No forms, no app downloads. Message us on WhatsApp, and your ID is ready before you've
          even put the kettle on. Cricket, football, casino — one login for all of it.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-full text-sm sm:text-base font-bold"
          >
            Get My ID on WhatsApp
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 btn-outline px-8 py-4 rounded-full text-sm sm:text-base"
          >
            See How It Works
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="card-soft rounded-full pl-5 pr-6 py-3 flex items-center gap-3"
            >
              <span className="display text-xl" style={{ color: 'var(--forest)' }}>{s.value}</span>
              <span className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
