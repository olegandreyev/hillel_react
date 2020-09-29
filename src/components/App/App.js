import React from 'react'
import { FormDiv } from './style'
import Form from '../Form/Form'
import { useOnlineStatus } from '../../hook/useOnlineStatus'

const App = () => {
  //проверка online
  const isOnline = useOnlineStatus()

  return (
    <FormDiv >
      <Form />
      <p>
        Ваш онлайн статус :
        {
          isOnline ?
            'Карл, а ты крут, у тебя есть Интернет' :
            'Карл, ты без Интернета'
        }
      </p>
    </FormDiv>
  )
}

export default App
