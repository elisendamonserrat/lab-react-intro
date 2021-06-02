import React, { Component } from 'react'
import logo from '../images/ironhack-logo.svg'
import menuTop from '../images/menu-top.svg'

export default class Header extends Component {
    render() {
        return (
            <header className="App__header">
                <nav className="App__header__navBar container">
                    <img src={logo} alt="Ironhack logo" />
                    <img src={menuTop} alt="mobile menu icon"/>
                </nav>
                 <div className="container">
                    <div className='App__header__content'>
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn how to use the most popular frontend library,
                                and become a super Ninja developer.
                        </p>
                        <button className="button">Awesome!</button>
                    </div>
                </div>
            </header>
        )
    }
}
