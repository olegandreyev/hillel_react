import React from 'react'
import { Comment, Header, Loader } from 'semantic-ui-react'
import { postsUrl } from '../../data/constants'
import { useFetch } from '../../projectHooks/useFetch'
import CommentCard from '../CommentCard/CommentCard'

const CommentsList = ({ postId }) => {

  const commentsUrl = `${postsUrl}/${postId}/comments`

  const [comments, isFetching] = useFetch(commentsUrl)

  return (
    <Comment.Group>
      <Header as="h5" dividing>
        Comments
        </Header>
      {
      isFetching && <Loader size="large" active inline='centered'>
        Loading
        </Loader>
        }
      {
      comments.map((comment) => (
        <CommentCard comment={comment} key={comment.id} />
      ))
      }
    </Comment.Group>
  )
}

export default CommentsList
