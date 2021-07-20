import React, { Component } from 'react';
import { List } from './List';

export class WelcomePage extends Component {
    state = {
        welcomeMessage: ''
    };

    componentDidMount() {
        console.log({propsInWelcome: this.props})
        this.setState({
            welcomeMessage: this.props.message ? this.props.message : 'Hello World!'
        })
    }

    render() {
        return (
            <div>
                <h1 className="App-header">{this.state.welcomeMessage}</h1>

                <br />

                <List nameOfItem={this.props.itemName} priceOfItem={this.props.itemPrice} />
            </div>
        )
    }
}
