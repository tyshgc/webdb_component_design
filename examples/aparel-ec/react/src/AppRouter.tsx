/**
 * AppRouter
 * ルーティング（画面遷移）
 */
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Screens
import {
  BrandsScreen,
  BrandDetailScreen,
  CategoriesScreen,
  CategoryDetailScreen,
  HomeScreen,
  ProductDetailScreen,
  ProductsScreen
} from "./components/screens";

// Store
import store from "./redux/store";

export const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/product/" component={ProductsScreen} />
      <Route exact path="/product/:id" component={ProductDetailScreen} />
      <Route exact path="/brand/" component={BrandsScreen} />
      <Route exact path="/brand/:label" component={BrandDetailScreen} />
      <Route exact path="/category/" component={CategoriesScreen} />
      <Route exact path="/category/:label" component={CategoryDetailScreen} />
    </BrowserRouter>
  </Provider>
);
