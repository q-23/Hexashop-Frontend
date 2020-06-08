import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';

import FlexContainer from "./components/_Shared/FlexContainer";
import Container from "./components/_Shared/Container";
import WithLoader from "components/_HOC/WithLoader";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Menu from "./components/Menu";

import { routes } from "./routes";

function App() {
  const [categoriesData, setCategoriesData] = useState([]);
  const ContainerWithLoader = WithLoader(FlexContainer);


  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesBuffer = await fetch(`${process.env.REACT_APP_API_URL}/category`, {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const categoriesResolved = await categoriesBuffer.json();
      setCategoriesData(categoriesResolved.map(e => ({ showInMenu: true, ...e })));
    }
    fetchCategories();
  }, [])

  return (
    <>
      <Navbar/>
      <Header/>
      <Menu categories={categoriesData}/>
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
