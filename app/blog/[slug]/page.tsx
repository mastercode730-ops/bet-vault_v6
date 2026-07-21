import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts, getBlogPost } from '@/lib/blog-posts';
import { waLink } from '@/lib/whatsapp';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Bet Vault`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const whatsappUrl = waLink(`Hey Bet Vault, I just read "${post.title}" — can I get more info?`);

  return (
    <main>
      <Navbar />

      <article className="section-white pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="wrap max-w-3xl">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 font-medium text-sm mb-8 transition-colors"
            style={{ color: 'var(--muted)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to the blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="chip-gold text-xs px-3 py-1 rounded-full font-semibold">
              {post.icon} {post.category}
            </span>
            <span className="text-xs" style={{ color: 'var(--muted)' }}>{post.readTime}</span>
          </div>

          <h1 className="display mb-8" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', lineHeight: 1.1 }}>
            {post.title}
          </h1>

          <div className="relative w-full rounded-2xl overflow-hidden mb-10 card-soft" style={{ aspectRatio: '16 / 9' }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="flex flex-col gap-6">
            {post.sections.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="font-bold mb-2" style={{ color: 'var(--ink)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
                    {section.heading}
                  </h2>
                )}
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: 'var(--muted)' }}>{section.body}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-12 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-4"
            style={{ background: 'linear-gradient(135deg, #0B4F3F 0%, #12694F 100%)' }}
          >
            <h3 className="display text-white text-lg sm:text-xl">Alright, enough reading.</h3>
            <p className="text-white/75 text-sm max-w-md">
              If any of that was useful, your ID is one WhatsApp message away.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold px-6 py-3 rounded-full font-bold text-sm"
            >
              Message Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {otherPosts.length > 0 && (
            <div className="mt-14">
              <h3 className="display mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.2rem, 3vw, 1.6rem)' }}>
                A few other things we've written
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="card-soft rounded-xl p-4 flex flex-col gap-2"
                  >
                    <span className="text-2xl">{p.icon}</span>
                    <span className="font-semibold text-sm leading-snug" style={{ color: 'var(--ink)' }}>{p.title}</span>
                    <span className="text-xs font-bold" style={{ color: 'var(--forest)' }}>Read it →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
