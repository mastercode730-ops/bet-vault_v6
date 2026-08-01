import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvault365.com'),
  title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
  description: "Message us on WhatsApp and your Bet Vault ID is ready in minutes. Cricket, football, casino — one login, real people behind it.",
  keywords: "cricket betting ID, IPL betting ID, online betting ID India, Bet Vault",
  openGraph: {
    title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
    description: "Message us on WhatsApp and your ID is ready in minutes.",
    type: "website",
  },
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
