import { waLink } from '@/lib/whatsapp';

const stats = [
  { label: 'Started', value: '2023' },
  { label: 'People who trust us', value: '3M+' },
  { label: 'Time to a working ID', value: '<5 min' },
  { label: 'Days a week we\'re online', value: '7' },
];

export default function About() {
  const whatsappUrl = waLink("Hey Bet Vault, I'd like to know more about the team.");

  return (
    <section id="about" className="section-white py-16 sm:py-24">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="chip-forest inline-block rounded-full px-4 py-1.5 text-xs font-semibold mb-5">
              Who's actually behind this
            </span>
            <h2 className="display mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', lineHeight: 1.1 }}>
              We got tired of waiting on hold too.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              Bet Vault started in 2023 with a handful of us who were sick of the platforms we were
              already using — slow support, withdrawals stuck for days, sign-up forms asking for
              things nobody needed.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              A few of us had worked in payments. One had built support systems for a fintech.
              The rest just really, really watch a lot of cricket. So we built the version we
              actually wanted to use.
            </p>

            <div className="border-l-4 rounded-r-xl py-4 pl-5 my-7" style={{ borderColor: 'var(--gold)', background: 'var(--gold-tint)' }}>
              <p className="italic text-base sm:text-lg leading-relaxed" style={{ color: 'var(--ink)' }}>
                "If a message to us takes longer than five minutes to get a real reply, something's
                broken — and we go fix it."
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              We're not the biggest name in this space and we're not trying to be — we'd rather stay
              small enough that when you message us, you're talking to someone who can actually help.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-outline px-6 py-3 rounded-full text-sm"
            >
              Say Hello
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="card-soft rounded-2xl p-6 flex flex-col justify-between min-h-[130px]">
                <span className="display text-2xl sm:text-3xl gold-text">{stat.value}</span>
                <span className="text-xs sm:text-sm mt-3" style={{ color: 'var(--muted)' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
