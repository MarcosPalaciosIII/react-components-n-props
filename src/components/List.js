import React, { Component } from 'react'

export class List extends Component {
    state = {
        list: [],
        name: '',
        price: '',
    }

    componentDidMount() {
        console.log({propsList: this.props});
        let tempItem = this.props.nameOfItem && this.props.priceOfItem ? {name: this.props.nameOfItem, price: this.props.priceOfItem} : false;

        if (tempItem) {
            this.setState({list: [...this.state.list, tempItem]});
        }

    }

    updateInput = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    addToList = () => {
        let tempValue = [...this.state.list, {name: this.state.name, price: this.state.price}]

        this.setState({ list: tempValue, name: '', price: ''});
    } 

    displayList = () => {
        return this.state.list.map((item, i) => {
            return (
                <li key={i}>
                    <h4>Name: {item.name}</h4>
                    <h4>Price: {item.price}</h4>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="list-container">
                <h2>List Items</h2>
                <ul>
                    {this.displayList()}
                </ul>
                <div className="form-container">
                <h3>Add To List</h3>
                    <label>Name: <input name="name" onChange={(e) => this.updateInput(e)} value={this.state.name} /></label>
                    <label>Price: <input name='price' onChange={(e) => this.updateInput(e)} value={this.state.price} /></label>
                    <br />
                    <button className="add-item-button" onClick={() => this.addToList()}>Add</button>
                </div>
            </div>
        )
    }
}
