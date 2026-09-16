import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvault365.com'),
  title: "BetVault | Online Cricket, Sports & Casino",
  description: "Message us on WhatsApp and your Bet Vault ID is ready in minutes. Cricket, football, casino — one login, real people behind it.",
  keywords: "cricket ID, IPL ID, online ID India, Bet Vault",
  verification: {
    google: "kkjrwNpfGLx-45NwfSg7RM25bqaIiBZdty-ibcAkTbc",
  },
  openGraph: {
    title: "BetVault | Online Cricket, Sports & Casino",
    description: "Message us on WhatsApp and your ID is ready in minutes.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "http://betvault365.com/#website",
      "url": "http://betvault365.com/",
      "name": "BetVault",
      "inLanguage": "en"
    },
    {
      "@type": "Organization",
      "@id": "http://betvault365.com/#organization",
      "name": "BetVault",
      "url": "http://betvault365.com/"
    },
    {
      "@type": "WebPage",
      "@id": "http://betvault365.com/#webpage",
      "url": "http://betvault365.com/",
      "name": "BetVault Bookie Guide | Cricket & Sports",
      "description": "Explore BetVault information, cricket and sports resources, account guidance, casino information, and frequently asked questions.",
      "isPartOf": {
        "@id": "http://betvault365.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "http://betvault365.com/#faq",
      "url": "http://betvault365.com/",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is BetVault?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BetVault is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
          }
        },
        {
          "@type": "Question",
          "name": "How does a BetVault ID work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An account ID is generally used to identify a user account. Refer to BetVault's current account instructions and terms for the exact process."
          }
        },
        {
          "@type": "Question",
          "name": "How can I access BetVault?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
          }
        },
        {
          "@type": "Question",
          "name": "What sports are available on BetVault?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Available sports can change. Check the current sports section on the website for the latest list and availability."
          }
        },
        {
          "@type": "Question",
          "name": "Does BetVault provide live sports information?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get help with my BetVault account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
          }
        },
        {
          "@type": "Question",
          "name": "How do I find BetVault login information?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
          }
        },
        {
          "@type": "Question",
          "name": "What payment options are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I have trouble accessing my account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find the latest BetVault updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refer to BetVault's current website information and terms for the most accurate answer."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
