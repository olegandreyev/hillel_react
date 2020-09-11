import React from 'react'
import { connect } from 'react-redux'
import { handleInputChange, addItem } from '../../actions/index'


const AddProductForm = ({ handleInputChange, name, category, price, residue, addItem, newProduct }) => {

    const handleAdd = (e) => {
        e.preventDefault()
        console.log(newProduct)
        addItem(newProduct)
    }

    return (
        <div className="section">
            <form>
                <div className="row">
                    <div className="input-field col offset-s4 s4">
                        <input id="name" type="text" name='name' className="validate" onChange={(e) =>
                            handleInputChange(e.target.name, e.target.value)}></input>
                        <label for="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col offset-s4 s4">
                        <input id="category" type="text" name='category' className="validate" onChange={(e) =>
                            handleInputChange(e.target.name, e.target.value)}></input>
                        <label for="category">Category</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col offset-s4 s4">
                        <input id="price" type="text" name='price' className="validate" onChange={(e) =>
                            handleInputChange(e.target.name, e.target.value)}></input>
                        <label for="price">Price</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col offset-s4 s4">
                        <input id="residue" type="text" name="residue" className="validate" onChange={(e) =>
                            handleInputChange(e.target.name, e.target.value)}></input>
                        <label for="residue">Residue</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col offset-s4 s4">
                        <button className="btn pink" onClick={handleAdd}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newProduct: state.products.newProduct
    }
}


const mapDispatchToProps = dispatch => {
    return {
        handleInputChange: (name, value) => dispatch(handleInputChange(name, value)),
        addItem: (newProduct) => dispatch(addItem(newProduct)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm)

