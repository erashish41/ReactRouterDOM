import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <header>
            <a href='https://www.google.com'> Logo</a>
            <nav>
                <ul>
                    <li>
                    <NavLink to = "/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to = "/about">About</NavLink>
                    </li>
                    <li>
                    <NavLink to = "/contact">Contact</NavLink>
                    </li>
                   
                </ul>
            </nav>
        </header>
        <section>
          <h2>Home Page</h2>
        </section>
    </>
  )
}

export default Home