import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
   <>
    <header>
        <a href='https://www.google.com'>Logo</a>
        <nav>
        <li>
                    <NavLink to = "/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to = "/about">About</NavLink>
                    </li>
                    <li>
                    <NavLink to = "/contact">Contact</NavLink>
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