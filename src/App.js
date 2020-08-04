import React from 'react';
import {Switch, Route} from 'react-router-dom';

import FlexContainer from "./components/_Shared/FlexContainer";
import Container from "./components/_Shared/Container";
import Footer from "components/Footer/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Menu from "./components/Menu";

import { routes } from "routes";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Menu/>
      <Container main mx_auto test={'test'} position={'relative'} zIndex={2}>
        <FlexContainer isLoading={false} main_container wrap={'wrap'}>
          <Switch>
            {
              routes.map((route, idx) =>
                <Route exact={route.exact} path={route.path} component={route.component} key={route.path + idx}/>
              )
            }
          </Switch>
        </FlexContainer>
        <ToastContainer />
      </Container>
      <Footer/>
    </>
  );
}

export default App;
