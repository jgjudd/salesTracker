import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import ProductList from './components/ProductList';
import SalesPeopleList from './components/SalesPeopleList';
import CustomerList from './components/CustomerList';
import SalesList from './components/SalesList';
import Reports from './components/Reports';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/team' component={SalesPeopleList} />
        <Route path='/products' component={ProductList} />
        <Route path='/customers' component={CustomerList} />
        <Route path='/sales' component={SalesList} />
        <Route path='/reports' component={Reports} />
      </Layout>
    );
  }
}
