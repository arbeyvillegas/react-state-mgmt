import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = (props) => {
    const [state, setState] = useState({
        title: null,
        price: null
    });

    const handleInputChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        setState({...state, [name]: value });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onSave(state);
        props.onCancel();
    }

    return (
        <form className="add-product" onSubmit={handleSubmit}>
            <div>
                <label>Product:</label>
                <input type='text' name="title" onChange={handleInputChange} />
            </div>
            <div>
                <label>Price:</label>
                <input type='number' name="price" onChange={handleInputChange} step="0.01" />
            </div>
            <div className="button-container">
                <button type='submit'>Save</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>);

}

export default AddProduct;