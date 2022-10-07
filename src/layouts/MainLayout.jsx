import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout({children}) {
  return (
    <div>
        <header>
            <nav className="navbar bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand text-white ">Aidhub's Point of Sale Test</Link>
                </div>
            </nav>
        </header>
        <main className="container">
            {children}
        </main>
    </div>
  )
}

export default MainLayout