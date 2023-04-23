import "../../styles/globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Providers from "@/components/Providers";
import { Poppins } from '@next/font/google'
// import { Montserrat } from '@next/font/google'

// Install npm @next/font 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-poppins'
})

// Next Js Metadata Documentation
export const metadata = {
  title: 'John Cañero Blog',
  description: 'Blog of John Cañero',
  keywords: 'blog, lifestyle, developer, creator',
  icons: {
    icon: '/images/johncaneroProfile.jpg',
    shortcut: '/images/johncaneroProfile.jpg',
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Input classname = {poppins.className} */}
      {/* Dark Mode: Providers */}
      <Providers>
        <body className="mx-auto transition-all duration-700 max-w-7xl bg-zinc-100 dark:bg-zinc-900">
          <div className={`${poppins.variable} font-poppins`}>
            <Header />
            <Banner />
            {children}
          </div>
        </body>
      </Providers>
    </html>
  )
}
