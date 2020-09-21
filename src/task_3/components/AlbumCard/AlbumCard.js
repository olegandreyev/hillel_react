import React from 'react'
import { List } from 'semantic-ui-react'

const AlbumCard = ({ album }) => {
  return (
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{album.title}</List.Header>
      </List.Content>
    </List.Item>
  )
}

export default AlbumCard
