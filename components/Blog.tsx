import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

export default function Blog() {
  return (
    <section id="blog" className="section-white py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-xl mx-auto text-center mb-12 sm:mb-14">
          <span className="chip-gold inline-block rounded-full px-4 py-1.5 text-xs font-semibold mb-5">
            Things worth reading
          </span>
          <h2 className="display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', lineHeight: 1.1 }}>
            We write these ourselves, actually
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            No filler, no listicle padding — just what we'd tell you if you asked in person.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-soft rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="chip-gold text-xs px-3 py-1 rounded-full font-semibold">{post.category}</span>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-base leading-snug" style={{ color: 'var(--ink)' }}>{post.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 font-bold text-sm pt-1" style={{ color: 'var(--forest)' }}>
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
