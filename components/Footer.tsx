import Link from 'next/link';
import Image from 'next/image';
import { waLink } from '@/lib/whatsapp';

const quickLinks = ['Home', 'Features', 'How It Works', 'Sports', 'About', 'Blog', 'FAQ'];

export default function Footer() {
  const whatsappUrl = waLink("Hey Bet Vault, can I get a bit more info on this?");

  return (
    <footer className="section-cream border-t" style={{ borderColor: 'var(--line)' }} id="footer">
      <div className="wrap pt-14 sm:pt-16 pb-6 sm:pb-8">
        <div
          className="rounded-3xl p-8 sm:p-14 mb-14 sm:mb-16 text-center"
          style={{ background: 'linear-gradient(135deg, #0B4F3F 0%, #12694F 100%)' }}
        >
          <h2 className="display text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', lineHeight: 1.1 }}>
            Ready when you are.
          </h2>
          <p className="text-white/75 text-sm sm:text-base mb-7 max-w-md mx-auto">
            One message, and someone real gets your ID sorted.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-full text-sm sm:text-base font-bold"
          >
            Message Us on WhatsApp
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.jpeg"
                alt="Bet Vault"
                width={52}
                height={52}
                className="rounded-lg object-contain flex-shrink-0"
              />
              <div>
                <div className="display text-lg gold-text">Bet Vault</div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>Your bet. Our vault. Your win.</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--muted)' }}>
              A small team that sets up cricket betting IDs over WhatsApp, by hand, usually before
              your tea gets cold.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest" style={{ color: 'var(--forest)' }}>
              Around the site
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors flex items-center gap-2 hover:opacity-70"
                    style={{ color: 'var(--muted)' }}
                  >
                    <span style={{ color: 'var(--gold)' }}>›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest" style={{ color: 'var(--forest)' }}>
              Reach us directly
            </h4>
            <div className="space-y-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--forest-tint)' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--forest)' }} fill="currentColor" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-sm" style={{ color: 'var(--ink)' }}>WhatsApp</div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>+91 87644 65110</div>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--gold-tint)' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-sm" style={{ color: 'var(--ink)' }}>Online around the clock</div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>Yes, actually 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 sm:pt-8" style={{ borderColor: 'var(--line)' }}>
          <div className="chip-gold rounded-xl p-4 mb-6">
            <p className="text-xs leading-relaxed text-center" style={{ color: '#7A5A11' }}>
              <strong>A quick word on responsible gambling: </strong>
              this should stay fun. Only bet what you can genuinely afford to lose, and stop if it
              stops being fun. You must be 18+ to use this platform. Check your local laws too.
            </p>
          </div>

          <div className="flex justify-center gap-5 sm:gap-6 mb-6">
            {['🏏', '⚽', '🏀', '🎾', '🎰'].map((icon, i) => (
              <span key={i} className="text-xl sm:text-2xl opacity-50 hover:opacity-100 transition-opacity cursor-default">
                {icon}
              </span>
            ))}
          </div>

          <div className="text-center text-xs" style={{ color: 'var(--muted)' }}>
            <p>© {new Date().getFullYear()} Bet Vault. All rights reserved.</p>
            <p className="mt-1 flex flex-wrap justify-center gap-x-3 gap-y-1">
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Sitemap</a>
              <span>·</span>
              <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Robots.txt</a>
              <span>·</span>
              <a href={whatsappUrl} className="hover:opacity-70 transition-opacity">Privacy Policy</a>
              <span>·</span>
              <a href={whatsappUrl} className="hover:opacity-70 transition-opacity">Terms &amp; Conditions</a>
              <span>·</span>
              <a href={whatsappUrl} className="hover:opacity-70 transition-opacity">Responsible Gaming</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
