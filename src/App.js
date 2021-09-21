import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import UserProvider from './provider/UserProvider';
import styled from 'styled-components';
import { primaryColor, secondaryColor, terColor } from './components/Colors';
import LandscapeProvider from './provider/LandscapeProvider';
import LandscapeList from './components/LandscapeList';

const App = () => (
  <UserProvider>
  <LandscapeProvider>
    <Fragment>
      <Navbar />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <div>Home</div>}
          />
          <Route
            exact
            path="/user/profile"
            render={ () => <UserProfile /> }
          />
          <Route
            exact
            path="/user/landscape"
            render={ () => <LandscapeList /> }
          />
        </Switch>
      </Container>
    </Fragment>
  </LandscapeProvider>
  </UserProvider>
)

export default App;

