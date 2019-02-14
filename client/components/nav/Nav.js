import React from 'react'
import logo from '../../../public/styles/images/tl_logo.png'
import './nav.css'
// import Tactic from './tactic-input/Tactic' 

const Nav = () => {
    return (
        <header>
            <div id="nav-logo">
                <div>
                    <img src={logo} alt="logo" height="40" width="118" />
                </div>
                <div id="nav-title">TripleLift Test Page</div>
            </div>
        </header>
    )
}

export default Nav
