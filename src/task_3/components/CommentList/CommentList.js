import React from 'react'
import { Comment as CommentGroup } from 'semantic-ui-react'
import Comment from '../Comment/Comment'

const CommentList = () => {
    return (
        <CommentGroup.Group size='large'>
            <Comment />
            <Comment />
            <Comment />
        </CommentGroup.Group>
    )
}

export default CommentList