import React, { Component } from 'react';
import './AddProduct.css';

export class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    getInitialState() {
        return {
            title: null,
            price: null
        };
    }

    handleInputChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSave(this.state);
        this.props.onCancel();
    }

    render() {
        return (
            <form className="add-product" onSubmit={this.handleSubmit}>
                <div>
                    <label>Product:</label>
                    <input type='text' name="title" onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type='number' name="price" onChange={this.handleInputChange} step="0.01"/>
                </div>
                <div className="button-container">
                    <button type='submit'>Save</button>
                    <button type='button' onClick={this.props.onCancel}>Cancel</button>
                </div>
            </form>);
    }
}