import React from 'react'
import { List, Loader, Card } from 'semantic-ui-react'
import AlbumCard from '../AlbumCard/AlbumCard'
import { usersUrl } from '../../data/constants'
import { useFetch } from '../../projectHooks/useFetch'

const AlbumList = ({ userID }) => {

  const albumsUrl = `${usersUrl}/${userID}/albums`

  const [albums, isFetching] = useFetch(albumsUrl, [], [userID])

  return (
    <>
      <Card.Header>Albums</Card.Header>
      {
        (isFetching
          &&
          <Loader size="large" active inline='centered'>
            Loading
        </Loader>)
          ||
          <List divided relaxed>
            {albums.map((album) => (
              <AlbumCard album={album} key={album.id} />
            ))}
          </List>
      }
    </>
  )
}

export default AlbumList
