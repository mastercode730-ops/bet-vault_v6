import { waLink } from '@/lib/whatsapp';

const steps = [
  { n: '1', title: 'Say hello', desc: 'Tap the WhatsApp button and send a quick message — that\'s the entire first step.' },
  { n: '2', title: 'Share the basics', desc: 'Your name, preferred platform, rough deposit amount. Nothing more than that.' },
  { n: '3', title: 'Get your ID', desc: 'It lands right in the same chat, usually within a few minutes.' },
  { n: '4', title: 'Deposit & play', desc: 'UPI, net banking, or a wallet — pick one and your first bet is up to you.' },
];

export default function HowItWorks() {
  const whatsappUrl = waLink("Hey Bet Vault, let's get started — walk me through it.");

  return (
    <section id="how" className="section-white py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-xl mx-auto text-center mb-14 sm:mb-16">
          <span className="chip-forest inline-block rounded-full px-4 py-1.5 text-xs font-semibold mb-5">
            How it actually goes
          </span>
          <h2 className="display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', lineHeight: 1.1 }}>
            Four steps. We counted.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block dashed-line absolute left-0 right-0" style={{ top: '28px' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative flex flex-col items-center text-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                  style={{ background: '#fff', border: '2px solid var(--gold)' }}
                >
                  <span className="display text-lg" style={{ color: 'var(--gold)' }}>{s.n}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1.5" style={{ color: 'var(--ink)' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed max-w-[220px] mx-auto" style={{ color: 'var(--muted)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-14 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-forest px-8 py-4 rounded-full text-sm sm:text-base"
          >
            Start Step One
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
