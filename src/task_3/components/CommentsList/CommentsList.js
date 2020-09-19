import React, { Component } from "react";
import { Comment, Header, Loader } from "semantic-ui-react";
import { postsUrl } from "../../data/constants";
import { fetchData } from "../../helpers/helpers";
import CommentCard from "../CommentCard/CommentCard";

class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.commentsUrl = `${postsUrl}/${this.props.postId}/comments`;
    this.state = {
      comments: [],
    };
  }

  componentDidMount = () => {
    fetchData(this.commentsUrl).then((comments) => {
      this.setState({
        comments: comments,
      });
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <Comment.Group>
        <Header as="h5" dividing>
          Comments
        </Header>
        {comments.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
        ))}
      </Comment.Group>
    );
  }
}

export default CommentsList;
