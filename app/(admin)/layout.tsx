import "../../styles/globals.css";

export const metadata = {
  title: 'John Cañero Blog',
  description: 'Blog of John Cañero',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
