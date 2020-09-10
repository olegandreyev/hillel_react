import React, { Component } from 'react'


class AddProductForm extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        name: this.props.inputs.name,
        category: this.props.inputs.category,
        price: this.props.inputs.price,
        residue: this.props.inputs.residue
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }
   

    render() {
        const { addProduct } = this.props

        return (
            <div className="section">
                <form>
                    <div className="row">
                        <div className="input-field col offset-s4 s4">
                            <input id="name" type="text" value={this.state.name} className="validate" onChange={this.handleChange}></input>
                            <label for="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col offset-s4 s4">
                            <input id="category" type="text" value={this.state.category} className="validate" onChange={this.handleChange}></input>
                            <label for="category">Category</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col offset-s4 s4">
                            <input id="price" type="text" value={this.state.price} className="validate" onChange={this.handleChange}></input>
                            <label for="price">Price</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col offset-s4 s4">
                            <input id="residue" type="text" value={this.state.residue} className="validate" onChange={this.handleChange}></input>
                            <label for="residue">Residue</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col offset-s4 s4">
                            <button className="btn pink" onClick={addProduct.bind(this, { ...this.state })}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddProductForm

