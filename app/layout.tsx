import './globals.css' 

export const metadata = {
  metadataBase: new URL('https://freddy-muleya.vercel.app'),
  title: 'Freddy Muleya',
  description:
    'Software developer - Excellence in Every Line of Code.', 
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
