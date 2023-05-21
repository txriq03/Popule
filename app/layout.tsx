import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Popule',
  description: 'The population game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-hidden'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
