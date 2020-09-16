import React from 'react'
import { Card as UserCard, Icon, Image } from 'semantic-ui-react'

const Card = () => {
    return (
        <UserCard>
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <UserCard.Content>
                <UserCard.Header>Daniel</UserCard.Header>
                <UserCard.Meta>Joined in 2016</UserCard.Meta>
                <UserCard.Description>
                    Daniel is a comedian living in Nashville.
      </UserCard.Description>
            </UserCard.Content>
            <UserCard.Content extra>
                <a>
                    <Icon name='user' />
        10 Friends
      </a>
            </UserCard.Content>
        </UserCard>
    )
}

export default Card