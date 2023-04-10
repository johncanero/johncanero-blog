import "../../styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { Poppins } from '@next/font/google'
// import { Montserrat } from '@next/font/google'

// Install npm @next/font 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-poppins'
})

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
      {/* Input classname = {poppins.className} */}
      <body className="mx-auto max-w-7xl">
        <div className={`${poppins.variable} font-poppins`}>
          <Header />
          <Banner />
          {children}
        </div>
      </body>
    </html>
  )
}
