import React, { Component } from "react";
import { Comment } from "semantic-ui-react";

class CommentCard extends Component {
  render() {
    const { email, body } = this.props.comment;
    return (
      <Comment>
        <Comment.Content>
          <Comment.Author as="a">{email}</Comment.Author>
          <Comment.Text>{body}</Comment.Text>
        </Comment.Content>
      </Comment>
    );
  }
}

export default CommentCard;
