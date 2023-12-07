import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <>
        <header>
            <a href='https://www.google.com'><h1>React</h1></a>
            <nav>
            <ul>
                    <li>
                    <Link >Home</Link>
                    </li>
                    <li>
                    <Link to = "/about">About</Link>
                    </li>
                    <li>s
                    <Link to = "/contact">Contact</Link>
                    </li>
                   
                </ul>
            </nav>

        </header>
    </>
  )
}

export default MainHeader