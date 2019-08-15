/**
 * AppRouter
 * ルーティング（画面遷移）
 */
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Screens
import {
  DestinationScreen,
  DestinationRegistrationScreen,
  HomeScreen
} from "./components/screens";

// Store
import store from "./redux/store";

export const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/reference" component={DestinationScreen} />
      <Route path="/registration" component={DestinationRegistrationScreen} />
    </BrowserRouter>
  </Provider>
);
