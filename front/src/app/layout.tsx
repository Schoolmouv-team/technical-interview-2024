import { ReactNode } from 'react'

import './global.css'

export default function MainLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="body-grid">
          <header className='header'>HEADER AREA</header>
          <nav className='nav'>NAV AREA</nav>
          <main className='main'>{ children }</main>
        </div>
      </body>
    </html>
  )
}