const voices = [
  { name: 'Rohit M.', location: 'Mumbai', text: "Switched over after a bad run with another platform. My ID took maybe eight minutes, which felt suspiciously fast until I realized that's just how it works here.", tag: 'Cricket', rating: 5 },
  { name: 'Arjun K.', location: 'Chennai', text: "One withdrawal took a bit longer than usual during IPL — but they messaged ME to explain why before I even asked. That mattered more than if it had gone perfectly.", tag: 'IPL', rating: 4 },
  { name: 'Priya S.', location: 'Hyderabad', text: "Was nervous about the whole thing honestly. Someone walked me through it like a normal question, not like I was new to something they'd judge me for.", tag: 'Football', rating: 5 },
  { name: 'Vikram D.', location: 'Bangalore', text: "Three months in and I still just message them for everything — deposits, questions, whatever. Never felt the need to look anywhere else.", tag: 'Casino', rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="voices" className="section-cream py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-xl mx-auto text-center mb-12 sm:mb-14">
          <span className="chip-forest inline-block rounded-full px-4 py-1.5 text-xs font-semibold mb-5">
            Not cherry-picked, we promise
          </span>
          <h2 className="display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', lineHeight: 1.1 }}>
            What people actually say
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            One of these mentions something going slightly wrong — pretending nothing ever does
            would be the stranger claim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {voices.map((v, idx) => (
            <div key={idx} className="card-soft rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill={i < v.rating ? 'var(--gold)' : '#E5E1D6'}>
                    <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--ink)' }}>"{v.text}"</p>
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--line)' }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #C7972C, #A6752B)' }}
                  >
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{v.name}</div>
                    <div className="text-xs" style={{ color: 'var(--muted)' }}>{v.location}</div>
                  </div>
                </div>
                <span className="chip-forest text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">{v.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
