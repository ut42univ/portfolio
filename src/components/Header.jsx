import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h3>Portfolio</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="portfolio/">Home</Link>
                    </li>
                    <li>
                        <Link to="portfolio/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="portfolio/About">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header