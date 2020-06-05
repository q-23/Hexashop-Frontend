import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Container from "./components/_Shared/Container";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { routes } from "./routes";
import {MOCK_CATEGORIES as mockCategories} from "./components/Menu/Menu.mock.data";


function App() {

  return (
    <Container main mx_auto>
      <Header/>
      <section className={'app'}>
        <Menu categories={mockCategories}/>
        <Container>
          <Switch>
            {
              routes.map((route, idx) =>
                <Route exact={route.exact} path={route.path} component={route.component} key={route.path + idx}/>
              )
            }
          </Switch>
        </Container>
      </section>
    </Container>
  );
}

export default App;
