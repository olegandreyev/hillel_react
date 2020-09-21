import React from 'react'
import { Card as UserCard } from 'semantic-ui-react'
import AlbumList from '../AlbumsList/AlbumsList'

import './Card.css'

const Card = ({ user}) => {

  const { id, name, email, phone, website } = user

  return (
    <div className="user__card">
      <UserCard>
        <UserCard.Content>
          <UserCard.Header>{name}</UserCard.Header>
          <UserCard.Meta>Email: {email}</UserCard.Meta>
          <UserCard.Meta>Phone: {phone}</UserCard.Meta>
          <UserCard.Meta>Website: {website}</UserCard.Meta>
        </UserCard.Content>
        <UserCard.Content>
          <AlbumList userID={id} />
        </UserCard.Content>
      </UserCard>
    </div>
  )
}

export default Card
