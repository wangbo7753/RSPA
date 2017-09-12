import React, { Component } from 'react'
import NavLink from './NavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li><NavLink to="/app">Dashboard</NavLink></li>
                        <li><NavLink to="/repos">Repos</NavLink></li>
                        <li><NavLink to="/inbox">Inbox</NavLink></li>
                        <li><NavLink to="/calendar">Calendar</NavLink></li>
                    </ul>
                    Logged in as WB
                </header>
                { this.props.children }
            </div>
        )
    }
}