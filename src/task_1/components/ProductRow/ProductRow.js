import React from "react"

import { StyledTableCell, StyledTableRow } from "../myComponents"
import { Button } from "@material-ui/core"
import { connect } from "react-redux"
import { removeItem, toggleInput, changeItem } from "../../actions"

import { Field, reduxForm, submit } from "redux-form"
import { renderField, validate } from "../../helper/helper"

const ProductRow = ({
  product,
  removeItem,
  toggleInput,
  changeItem,
  handleSubmit,
  submitting,
}) => {
  const { name, category, price, residue, id, isEdit } = product;

  if (isEdit) {
    return (
      <StyledTableRow>
        <StyledTableCell align="center" onClick={() => toggleInput(id)}>
          {name}
        </StyledTableCell>
        <StyledTableCell align="center" onClick={() => toggleInput(id)}>
          {category}
        </StyledTableCell>
        <StyledTableCell align="center" onClick={() => toggleInput(id)}>
          $ {price}
        </StyledTableCell>
        <StyledTableCell align="center" onClick={() => toggleInput(id)}>
          {residue}
        </StyledTableCell>
        <StyledTableCell align="center">
          <Button
            variant="contained"
            color="primary"
            align="center"
            onClick={() => removeItem(id)}
          >
            Delete
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    );
  } else {
    return (
      <StyledTableRow>
        <StyledTableCell align="center">
          <input name="name"
            type="text"
            value={name}
            onChange={(e) => changeItem(id, e.target.name, e.target.value)} />
        </StyledTableCell>
        <StyledTableCell align="center">
          <input name="category"
            type="text"
            value={category}
            onChange={(e) => changeItem(id, e.target.name, e.target.value)} />
        </StyledTableCell>
        <StyledTableCell align="center">
          <input name="price"
            type="text"
            value={price}
            onChange={(e) => changeItem(id, e.target.name, e.target.value)} />

        </StyledTableCell>
        <StyledTableCell align="center">
          <input name="residue"
            type="text"
            value={residue}
            onChange={(e) => changeItem(id, e.target.name, e.target.value)} />

        </StyledTableCell>
        <StyledTableCell align="center">
          
          <Button
            variant="contained"
            color="primary"
            align="center"
            type="submit"
            disabled={submitting}
            onClick={() => toggleInput(id)}
          >
            Save
            </Button>
        </StyledTableCell>
      </StyledTableRow>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    newProduct: state.products.newProduct
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeItem(id)),
    toggleInput: (id) => dispatch(toggleInput(id)),
    changeItem: (id, name, value) => dispatch(changeItem(id, name, value)),
  };
};

export default reduxForm({
  form: "productChangeForm",
  validate,
})(connect(mapStateToProps, mapDispatchToProps)(ProductRow));
