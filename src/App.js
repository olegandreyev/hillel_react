import React from 'react'
import Header from './task_1/components/Header/Header'
import ProductTable from './task_1/components/ProductTable/ProductTable'
import AddProductForm from './task_1/components/AddProductForm/AddProductForm'

import { Table, TableContainer, Paper } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'

import { toggleCreateForm } from './task_1/actions/index'

const App = ({ isCreateFormHidden, toggleCreateForm }) => {
  return (
    <div className="wrapper">
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <Header/>
          <ProductTable />
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" align="center" onClick={() => toggleCreateForm()}>Add user</Button>
      {
        isCreateFormHidden ? <AddProductForm /> : null
      }
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    isCreateFormHidden: state.ui.isCreateFormHidden
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCreateForm: () => dispatch(toggleCreateForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)