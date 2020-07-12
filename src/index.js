import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import StateProviderMenu from "./contexts/menu/menu";
import { StateProviderAuthorization } from "contexts/authorization/authorization";
import {StateProviderPagination} from "contexts/pagination/pagination";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProviderPagination>
        <StateProviderAuthorization>
          <StateProviderMenu>
            <App />
          </StateProviderMenu>
        </StateProviderAuthorization>
      </StateProviderPagination>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
