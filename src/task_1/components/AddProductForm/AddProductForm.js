import React from 'react'
import { connect } from 'react-redux'
import { handleInputChange, addItem, toggleCreateForm} from '../../actions/index'
import { reduxForm, Field, submit} from 'redux-form'
import {validate, renderField} from '../../helper/helper'
  

const AddProductForm = ({
    handleInputChange, 
    addItem, 
    newProduct, 
    toggleCreateForm, 
    handleSubmit, 
    submitting, 
    syncErrors
}) => {
    
    const handleAdd = (e) => {
        e.preventDefault()
        addItem(newProduct)
        toggleCreateForm()
    }   
    
    return (
        <div className="section">
            <form onSubmit={handleSubmit(submit)}>
                <Field name="name" type="text" component={renderField} label="Name" onChange={(e) =>
                            handleInputChange(e.target.name, e.target.value)}/>
                 <Field name="category" type="text" component={renderField} label="Category" onChange={(e) =>
                            handleInputChange(e.target.name, e.target.value)}/>
                 <Field name="price" type="text" component={renderField} label="Price" onChange={(e) =>
                            handleInputChange(e.target.name, e.target.value)}/>
                 <Field name="residue" type="text" component={renderField} label="Residue" onChange={(e) =>
                            handleInputChange(e.target.name, e.target.value)}/>
                <div className="row">
                    <div className="input-field col offset-s4 s4">
                        {(!syncErrors)?
                        <button className="btn pink" type="submit" disabled={submitting} onClick={handleAdd}>Save</button>
                    :<button className="btn pink" type="submit" disabled={submitting}>Save</button>
                    }        
                    </div>
                </div> 
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newProduct: state.products.newProduct,
        syncErrors: state.form.productForm.syncErrors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputChange: (name, value) => dispatch(handleInputChange(name, value)),
        addItem: (newProduct) => dispatch(addItem(newProduct)),
        toggleCreateForm: () => dispatch(toggleCreateForm())
    }
}

export default reduxForm({form: 'productForm', validate})(connect(mapStateToProps, mapDispatchToProps)
(AddProductForm))

