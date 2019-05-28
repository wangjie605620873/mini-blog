import React from 'react';
import {Route} from 'react-router-dom';
import './index.scss'
import Menu from '../../Components/menu/index'
import Index from './index/index'
import Compiles from './compile/index'

const Business = ({match}) => {
  return (
    <div className="__business">
      <Menu/>
      <div className="__container">
        <Route path={`${match.path}/index`} component={Index}/>
        <Route path={`${match.path}/compiles`} component={Compiles}/>
      </div>

    </div>
  )
};
export default Business