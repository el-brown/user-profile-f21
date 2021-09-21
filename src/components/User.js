import React, { useContext } from "react";
import { Card, Image, } from "semantic-ui-react";
import styled from "styled-components";
import { UserContext } from "../provider/UserProvider";
import { primaryColor } from "./Colors";

const User = () => {
  const {email, firstName, lastName, avatar} = useContext(UserContext);
  return(
    <Card>
      <Card.Content>
        <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
        <Card.Meta>
          Email: {email}
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <Image src = {avatar} fluid/>
      </Card.Content>
    </Card>
  )
}

export default User;
