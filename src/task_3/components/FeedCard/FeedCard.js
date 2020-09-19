import React, { Component } from "react";
import "./FeedCard.css";
import { Feed, Header, Loader } from "semantic-ui-react";
import { fetchData } from "../../helpers/helpers";
import { usersUrl } from "../../data/constants";
import CommentsList from "../CommentsList/CommentsList";

class FeedCard extends Component {
  constructor(props) {
    super(props);
    this.userUrl = `${usersUrl}/${this.props.post.userId}`;
    this.albumsUrl = `${usersUrl}/${this.props.post.userId}/albums`;

    this.state = {
      user: {},
      albums: [],
      isClickeTitle: false,
    };
  }

  componentDidMount = () => {
    fetchData(this.userUrl).then((user) => {
      this.setState({
        user: user,
      });
    });

    fetchData(this.albumsUrl).then((albums) => {
      this.setState({
        albums: albums,
      });
    });
  };

  handleTitle = () => {
    this.setState({
      isClickeTitle: !this.state.isClickeTitle,
    });
  };

  render() {
    const { post, clickedName } = this.props;
    const { user, albums, isClickeTitle } = this.state;
    return (
      <>
        <Feed.Event onClick={() => clickedName(user, albums)}>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{user.email}</Feed.User> submitted a new post:
            </Feed.Summary>
            <Feed.Extra text onClick={this.handleTitle}>
              {post.title}
            </Feed.Extra>
            {isClickeTitle ? (
              <>
                <Header as="h3">{post.body}</Header>
                <CommentsList postId={post.id} />
              </>
            ) : null}
          </Feed.Content>
        </Feed.Event>
      </>
    );
  }
}

export default FeedCard;
