import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TODO-List',
  description: 'Created by Hamza Salman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='main'>

        <div className='sideBar'>
          <h2 className='sidebarTitle'>TASK LIST</h2>
          <h3 className='sidebarLi'><a href='/'>Today</a></h3>
          <h3 className='sidebarLi'><a href='/week'>Upcoming</a></h3>
        </div>

        <div className='pages'>
          {children}
        </div>

        </div>
      </body>
    </html>
  )
}