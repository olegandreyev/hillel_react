import React, { Component } from "react";
import { List, Loader } from "semantic-ui-react";
import { usersUrl } from "../../data/constants";
import { fetchData } from "../../helpers/helpers";
import AlbumCard from "../AlbumCard/AlbumCard";

const AlbumList = ({ albums }) => {
  return (
    <div>
      <List divided relaxed>
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </List>
    </div>
  );
};

export default AlbumList;
