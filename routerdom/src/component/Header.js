import { NavLink } from "react-router-dom"

const Header = () => {
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
                    <li>s
                    <NavLink to = "/contact">Contact</NavLink>
                    </li>
                   
                </ul>
            </nav>
        </header>
        </>
  )
}

export default Header