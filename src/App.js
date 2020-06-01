import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Menu from "./components/Menu";
import { routes } from "./routes";
import './tailwind.generated.css';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Switch>
        {
          routes.map(route => <Route exact={route.exact} path={route.path} component={route.component}/>)
        }
      </Switch>
    </div>
  );
}

export default App;
