import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Login from '../Views/login'

import Test from '../Views/test'
import Business from '../Views/business'




const RouteConfig = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path='/login' component={Login}/>
      <Route path="/business" component={Business} />
      <Route path="/test" component={Test}/>
    </Switch>
  </BrowserRouter>
);
export default RouteConfig
