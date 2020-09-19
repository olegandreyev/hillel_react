import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Card as UserCard, Icon, Image } from "semantic-ui-react";
import AlbumList from "../AlbumsList/AlbumsList";
import "./Card.css";

const Card = ({ user, albums }) => {
  return (
    <div className="user__card">
      <UserCard>
        <UserCard.Content>
          <UserCard.Header>{user.name}</UserCard.Header>
          <UserCard.Meta>Email: {user.email}</UserCard.Meta>
          <UserCard.Meta>Phone: {user.phone}</UserCard.Meta>
          <UserCard.Meta>Website: {user.website}</UserCard.Meta>
        </UserCard.Content>
        <UserCard.Content>
          <UserCard.Header>Albums</UserCard.Header>
          <AlbumList albums={albums} />
        </UserCard.Content>
      </UserCard>
    </div>
  );
};

export default Card;
