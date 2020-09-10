import React, { Component } from 'react'
import Header from './task_1/components/Header/Header'
import ProductTable from './task_1/components/ProductTable/ProductTable'
import AddProductForm from './task_1/components/AddProductForm/AddProductForm'

import { Table, TableContainer, Paper } from '@material-ui/core'

import { products, headerItems } from './task_1/data/arrays'
class App extends Component {
  state = {
    headerItems: headerItems,
    products: products,
    inputs: {
      name: '',
      category: '',
      price: '',
      residue: ''
    }
  }

  removedProduct = removedIndex => {
    const { products } = this.state
    this.setState({
      products: products.filter(product => product.id !== removedIndex)
    })
  }

  addProduct = (item, e) => {

    e.preventDefault()
    const { products } = this.state

    item.id = String(Date.now())

    this.setState({
      products: [...products, item],
      inputs: {
        name: '',
        category: '',
        price: '',
        residue: ''
      }
    })

  }



  render() {

    return (
      <div className="wrapper">
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <Header headerItems={this.state.headerItems} />
            <ProductTable products={this.state.products} removedProduct={this.removedProduct} />
          </Table>
        </TableContainer>
        <AddProductForm addProduct={this.addProduct} products={this.state.products} inputs={this.state.inputs} />
      </div>
    )
  }
}

export default App