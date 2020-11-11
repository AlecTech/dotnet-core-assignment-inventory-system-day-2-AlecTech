import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { GetProducts } from './components/GetProducts';
import { CreateProduct } from './components/CreateProduct';
import { DiscontinuedProduct } from './components/DiscontinuedProduct';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />

            <Route path='/create-product' component={CreateProduct} />

            <Route path='/discontinued-product' component={DiscontinuedProduct} />

            <Route path='/get-products' component={GetProducts} />

      </Layout>
    );
  }
}
