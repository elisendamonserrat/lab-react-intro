import React, { Component } from 'react'

export default class FeatureCard extends Component {
    render() {
        return (
            <div className="feature__card">
                <img src={this.props.image} alt="feature icon" />
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
