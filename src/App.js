import React from 'react';
import {Switch, Route} from 'react-router-dom';

import FlexContainer from "./components/_Shared/FlexContainer";
import Container from "./components/_Shared/Container";
import WithLoader from "components/_HOC/WithLoader";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Menu from "./components/Menu";

import { routes } from "routes";

function App() {
  const ContainerWithLoader = WithLoader(FlexContainer);

  return (
    <>
      <Navbar/>
      <Header/>
      <Menu/>
      <Container main mx_auto>
        <ContainerWithLoader isLoading={false} main_container>
            <Switch>
              {
                routes.map((route, idx) =>
                  <Route exact={route.exact} path={route.path} component={route.component} key={route.path + idx}/>
                )
              }
            </Switch>
        </ContainerWithLoader>
      </Container>
    </>
  );
}

export default WithLoader(App);
