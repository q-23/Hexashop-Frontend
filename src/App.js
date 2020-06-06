import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Container from "./components/_Shared/Container";
import FlexContainer from "./components/_Shared/FlexContainer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { routes } from "./routes";
import {MOCK_CATEGORIES as mockCategories} from "./tests/Menu/Menu.mock.data";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Menu categories={mockCategories}/>
      <Container main mx_auto>
        <FlexContainer main_container>
            <Switch>
              {
                routes.map((route, idx) =>
                  <Route exact={route.exact} path={route.path} component={route.component} key={route.path + idx}/>
                )
              }
            </Switch>
        </FlexContainer>
      </Container>
    </>
  );
}

export default App;
