import React from 'react'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  subsets:['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-montserrat'
})


// racfe or rcfe (starter)
function HomePage() {
  return (
    // 1. Created an app folder and input page.tsx
    // 2. Install Next Sanity
    // 3. npm (importing Sanity Project)
    // 4. Input localhost:3000/studio
    <div className={`${montserrat.variable} font-montserrat`}>
      <h1 className='text-3xl font-medium text-sky-500'>Welcome to John Cañero's Blog</h1>
      <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      {/* TimeStamp: 1:03:24 */}
      {/* https://www.youtube.com/watch?v=x3fCEPFgUSM&t=2915s*/}
    </div>
  )
}

export default HomePage
