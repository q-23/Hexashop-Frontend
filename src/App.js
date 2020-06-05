import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Container from "./components/_Shared/Container";
import FlexContainer from "./components/_Shared/FlexContainer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { routes } from "./routes";
import {MOCK_CATEGORIES as mockCategories} from "./tests/Menu/Menu.mock.data";


function App() {

  return (
    <Container main mx_auto>
      <Header/>
      <FlexContainer>
        <Menu categories={mockCategories}/>
        <Container styles={'padding-left: 25px'}>
          <Switch>
            {
              routes.map((route, idx) =>
                <Route exact={route.exact} path={route.path} component={route.component} key={route.path + idx}/>
              )
            }
          </Switch>
        </Container>
      </FlexContainer>
    </Container>
  );
}

export default App;
