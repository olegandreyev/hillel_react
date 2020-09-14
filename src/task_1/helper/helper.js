import React from 'react'

export const validate = values => {
    const errors = {}

    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less'
    }

    if (!values.category) {
        errors.category = 'Required'
      } else if (values.category.length > 15) {
        errors.category = 'Must be 15 characters or less'
      }

    if (!values.price) {
      errors.price = 'Required'
    } else if (isNaN(Number(values.price))) {
      errors.price = 'Must be a number'
    }

    if (!values.residue) {
        errors.residue = 'Required'
      } else if (isNaN(Number(values.residue))) {
        errors.residue = 'Must be a number'
      }
      console.log(errors)
    return errors
  }

 export const renderField = ({
    input,
    label,
    type,
    meta: { 
        touched, 
        error
    }
  }) => (
    <div className="row">
      <div className="input-field col offset-s4 s4">
      <input {...input} type={type} />
            <label>{label}</label>
            {touched &&
          ((error && <span>{error}</span>)) }
      </div>  
    </div>
    )