import React, { useState } from 'react'
import { Feed, Header } from 'semantic-ui-react'
import { usersUrl } from '../../data/constants'
import CommentsList from '../CommentsList/CommentsList'
import { useFetch } from '../../projectHooks/useFetch'
import './FeedCard.css'

const FeedCard = ({ post, clickedName }) => {

  const { userId } = post

  const userUrl = `${usersUrl}/${userId}`

  const [user] = useFetch(userUrl, {})

  const [isClickedTitle, setIsClickedTitle] = useState(false)

  const handleTitle = () => {
    setIsClickedTitle(!isClickedTitle)
  }

  return (
    <>
      <Feed.Event onClick={() => clickedName(user)}>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>{user.email}</Feed.User> submitted a new post:
            </Feed.Summary>
          <Feed.Extra text onClick={handleTitle}>
            {post.title}
          </Feed.Extra>
          {
            isClickedTitle &&
            <>
              <Header as="h3">{post.body}</Header>
              <CommentsList postId={post.id} />
            </>
          }
        </Feed.Content>
      </Feed.Event>
    </>
  )
}

export default FeedCard
