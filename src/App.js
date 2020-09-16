import React, { Fragment } from 'react'
import GlideJS from './task_2/components/Glide/GlideJS'

let options = {
  startAt: 0,
  perView: 1,
  type: 'carousel',
  autoplay: 1000
}

const images = [
  'https://create-react-app.dev/img/logo-og.png',
  'https://ru.reactjs.org/logo-og.png',
  'https://plainjs.com/static/img/logo_640.png',
  'https://res.cloudinary.com/practicaldev/image/fetch/s--NMQU6rfQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/Nh6IfFz.png'
]

const App = () => {
  return (
    <Fragment>
      <GlideJS options={{ ...options }} imagesSources={[...images]} />
    </Fragment>
  )
}

export default App