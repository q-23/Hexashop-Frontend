import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import { routes } from "./routes";
import './tailwind.generated.css';

function App() {
  return (
    <div className="container mx-auto">
      <Header/>
      <section>
        <Switch>
          {
            routes.map((route, idx) => <Route exact={route.exact} path={route.path} component={route.component} key={route.path + idx}/>)
          }
        </Switch>
      </section>
    </div>
  );
}

export default App;
