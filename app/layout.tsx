import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aethelgard Security — Autonomous Intelligence Cast in Sovereign Armor',
  description: 'Deterministic defense framework neutralizing prompt injection, tool hijacking, and privilege escalation for autonomous AI agents.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Cinzel:wght@600;700;800&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#141313] text-[#E5E2E1] antialiased selection:bg-[#D4C4B5]/25 selection:text-[#F1E0D0] min-h-screen">
        {children}
      </body>
    </html>
  )
}
