import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Agent Security Hub | Google Engineered Architecture',
  description: 'Enterprise defense framework against prompt injection, privilege escalation, and untrusted tool execution for autonomous AI agents.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAFAFA] text-[#202124] antialiased selection:bg-[#E8F0FE] selection:text-[#1A73E8]">
        {children}
      </body>
    </html>
  )
}
