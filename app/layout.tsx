import type { Metadata } from 'next';
import './globals.css';

export const metadata = {
  title: 'Bracket',
  description: 'Create tournament brackets',
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
