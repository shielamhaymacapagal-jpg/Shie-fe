import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'


export const metadata: Metadata = {
title: 'SHL | Shiela Macapagal — GoHighLevel Expert',
description:
'Shiela Macapagal is a GoHighLevel Expert helping businesses grow with beautiful websites, high-converting funnels, CRM, and smart automations. Build. Automate. Scale.',
generator: 'v0.app',
}

export const viewport: Viewport = {
colorScheme: 'dark',
themeColor: '#0f0707',
}

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode
}>) {
return (
<html lang="en" className="bg-background">
<head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>{`:root{--font-space-grotesk:'Space Grotesk',sans-serif;--font-inter:'Inter',sans-serif}`}</style>
</head>
<body className="antialiased font-sans">
{children}
{process.env.NODE_ENV === 'production' && <Analytics />}
</body>
</html>
)
}
