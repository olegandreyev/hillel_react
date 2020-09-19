import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Card from "../Card/Card";
import FeedList from "../FeedList/FeedList";
import "./Blog.css";

class Blog extends Component {
  state = {
    isNameClicked: false,
    user: {},
    albums: [],
  };

  clickedName = (user, albums) => {
    this.setState({
      isNameClicked: true,
      user: user,
      albums: albums,
    });
  };

  render() {
    const { user, albums, isNameClicked } = this.state;
    return (
      <div className="blog">
        <Grid>
          <Grid.Column width={9}>
            <FeedList clickedName={this.clickedName} />
          </Grid.Column>
          {isNameClicked ? (
            <Grid.Column width={6}>
              <Card user={user} albums={albums} />
            </Grid.Column>
          ) : null}
        </Grid>
      </div>
    );
  }
}

export default Blog;
