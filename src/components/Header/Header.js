import React from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"
const Header = (props) => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(sidebar)
    const closeSidebar = () => setSidebar(!sidebar)
    return (
        <header className="Header">
            <nav>
                {props.title === "" ?
                    <img onClick={showSidebar} src="img/arrow.png" alt="Menu" /> :
                    <img src="img/burgerMenu.png" alt="menu" />
                }
                <p>{props.title === "" ? "" : props.title}</p>
            </nav>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                <img onClick={closeSidebar} src="img/closeVector.png" />
                <ul className={'nav-menu-items'}>
                    <li>
                        <Link to="/chart">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/addtransaction">
                            Einnahmen
                        </Link>
                    </li>
                    <li>
                        <Link to="/transactions">
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Logout
                        </Link>
                    </li>
                </ul>
                <img src="img/wavy.png" alt="" />
            </nav>
        </header>
    )
}

export default Header