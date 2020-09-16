import React, { Component, Fragment } from 'react'
import GlideJS from './task_2/components/Glide/GlideJS'
import Button from './task_2/components/Button/Button'
import { initialOptions, changedOptions, initialImages } from './task_2/data/data';
import PropTypes from 'prop-types'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialOptions: initialOptions,
      initialImages: initialImages,
      changedOptions: changedOptions
    }
  }

  handleChangeOption = (value) => {
    this.setState({
      initialOptions: value
    })
  }

  render = () => {
    return (
      <Fragment>
        <GlideJS options={this.state.initialOptions} images={this.state.initialImages} />
        <Button handleButton={this.handleChangeOption} data={this.state.changedOptions} text='Stop auto play' />
      </Fragment>
    )
  }
}

App.propTypes = {
  initialOptions: PropTypes.object.isRequired,
  initialImages: PropTypes.array.isRequired,
  changedOptions: PropTypes.object.isRequired
}

export default App