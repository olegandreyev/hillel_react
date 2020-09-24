import React, { useState, useEffect } from 'react'
import useLocalStorage from '../../hook/useLocalStorage'
import { Input, Button } from 'semantic-ui-react'
import { FormDiv } from './style'
import { initialLocalStorage } from '../../helper/helper'
import Form from '../Form/Form'

const App = () => {
  return (
    <FormDiv>
      <Form />
    </FormDiv>
  )
}

export default App
