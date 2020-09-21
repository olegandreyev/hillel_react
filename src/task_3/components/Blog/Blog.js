import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import Card from '../Card/Card'
import FeedList from '../FeedList/FeedList'
import './Blog.css'

const Blog = () => {

  const [isNameClicked, setIsNameClicked] = useState(false)
  const [user, setUser] = useState({})

  const clickedName = (user) => {
    setIsNameClicked(true)
    setUser(user)
  }

  return (
    <div className="blog">
      <Grid>
        <Grid.Column width={9}>
          <FeedList clickedName={clickedName} />
        </Grid.Column>
        {
          isNameClicked &&
          <Grid.Column width={6}>
            <Card user={user} />
          </Grid.Column>
        }
      </Grid>
    </div>
  )
}

export default Blog
