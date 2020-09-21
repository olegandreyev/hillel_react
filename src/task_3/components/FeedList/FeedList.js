import React from 'react'
import { Feed, Loader } from 'semantic-ui-react'
import { postsUrl } from '../../data/constants'
import FeedCard from '../FeedCard/FeedCard'
import { useFetch } from '../../projectHooks/useFetch'

const FeedList = ({ clickedName }) => {

  const [posts, isFetching] = useFetch(postsUrl)

  return (
    <>
      {
        isFetching
        &&
        <Loader size="massive" active inline='centered'>
          Loading
        </Loader>
      }
      <Feed size="large">
        {
          posts.map(post => (
            <FeedCard post={post} key={post.id} clickedName={clickedName} />
          ))
        }
      </Feed>
    </>
  )

}

export default FeedList
