import React, { Component } from 'react'
import logo from '../images/ironhack-logo.svg'
import menuTop from '../images/menu-top.svg'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navBar">
                    <img src={logo} alt="Ironhack logo" />
                    <img src={menuTop} alt="mobile menu icon"/>
                </nav>
                <div className="header__content">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular frontend library,
                        and become a super Ninja developer.
                    </p>
                    <button>Awesome!</button>
                </div>
            </header>
        )
    }
}
