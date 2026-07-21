import { waLink } from '@/lib/whatsapp';

const tones = [
  { bg: 'var(--gold-tint)', fg: '#8A6414' },
  { bg: 'var(--forest-tint)', fg: '#0B4F3F' },
  { bg: '#E6F0FB', fg: '#2563A8' },
  { bg: '#FBEAEE', fg: '#B4456F' },
];

const sports = [
  { icon: '🏏', name: 'Cricket' },
  { icon: '⚽', name: 'Football' },
  { icon: '🏀', name: 'Basketball' },
  { icon: '🎾', name: 'Tennis' },
  { icon: '🏒', name: 'Hockey' },
  { icon: '🎰', name: 'Casino' },
  { icon: '🃏', name: 'Teen Patti' },
  { icon: '🎲', name: 'Live Tables' },
];

export default function Sports() {
  const bannerWa = waLink("Hey Bet Vault, I'm ready to place my first bet — help me get set up.");

  return (
    <section id="sports" className="section-cream py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-xl mx-auto text-center mb-10 sm:mb-12">
          <span className="chip-gold inline-block rounded-full px-4 py-1.5 text-xs font-semibold mb-5">
            One login, several distractions
          </span>
          <h2 className="display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', lineHeight: 1.1 }}>
            Cricket's the headline. Not the whole show.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-16">
          {sports.map((sport, i) => {
            const tone = tones[i % tones.length];
            return (
              <a
                key={sport.name}
                href={waLink(`Hey Bet Vault, I want to bet on ${sport.name}. Can you help me get set up?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="card-soft rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center gap-3 aspect-square"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: tone.bg }}
                >
                  {sport.icon}
                </div>
                <span className="font-bold text-sm" style={{ color: 'var(--ink)' }}>{sport.name}</span>
              </a>
            );
          })}
        </div>

        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, #0B4F3F 0%, #12694F 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 15% 30%, #D4AF37 0%, transparent 55%), radial-gradient(circle at 85% 70%, #ffffff 0%, transparent 45%)' }}
          />
          <div className="relative z-10 max-w-lg mx-auto">
            <h3 className="display text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', lineHeight: 1.15 }}>
              Your first bet is one message away.
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-7">
              Not a sales pitch — just an honest offer. Say hello, we'll take it from there.
            </p>
            <a
              href={bannerWa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold px-7 py-3.5 rounded-full text-sm sm:text-base font-bold"
            >
              Let's Do This
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
