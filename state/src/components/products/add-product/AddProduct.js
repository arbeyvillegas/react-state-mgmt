import React, { Component } from 'react';
import './AddProduct.css';

export class AddProduct extends Component {
    render() {
        return (<form>
            <label>Product:
                <input type='text' />
            </label>
            <label>Price:
                <input type='number' />
            </label>
            <input type='submit' value="Save"/>
            <input type='button' value="Cancel" onClick={this.props.onCancel}/>
        </form>);
    }
}