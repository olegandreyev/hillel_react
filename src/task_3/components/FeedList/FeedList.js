import React, { Component } from "react";
import { Feed, Loader } from "semantic-ui-react";
import { postsUrl } from "../../data/constants";
import { fetchData } from "../../helpers/helpers";
import FeedCard from "../FeedCard/FeedCard";
import "./FeedList.css";

class FeedList extends Component {
  state = {
    posts: [],
    isFetching: false,
  };

  componentDidMount = () => {
    this.setState({ isFetching: true });
    fetchData(postsUrl).then((posts) => {
      this.setState({
        posts: posts,
        isFetching: false,
      });
    });
  };

  render() {
    const { clickedName } = this.props;
    const { isFetching, posts } = this.state;
    return (
      <>
        <Loader size="massive" active={isFetching}>
          Loading
        </Loader>
        <Feed size="large">
          {posts.map((post) => (
            <FeedCard post={post} key={post.id} clickedName={clickedName} />
          ))}
        </Feed>
      </>
    );
  }
}

export default FeedList;
