import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
   <>
    <header>
        <a href='https://www.google.com'>Logo</a>
        <nav>
        <li>
                    <Link to = "/">Home</Link>
                    </li>
                    <li>
                    <Link to = "/about">About</Link>
                    </li>
                    <li>
                    <Link to = "/contact">Contact</Link>
                    </li>
        </nav>
    </header>
    <section>
        <h2>About Page</h2>
    </section>
   </>
  )
}

export default About