import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import 'whatwg-fetch'
import store from '../store/'
import { View as Header } from '../components/header/'
import { View as Home } from '../pages/home/'
import {View as Detail} from '../pages/detail/'
import {View as List} from '../pages/list/'
import styles from'./style.mcss'
import 'antd/dist/antd.css'
import './reset.css'
class App extends Component {
  render() {
    return (
    <Provider store={store}> 
      <div className={styles.wrapper}>
         
         <BrowserRouter>
          <div>
           <Route path="/" component={Header}></Route>
           <Switch>
             <Route path="/detail/:id" component={Detail}></Route>
             <Route path="/list/:id" component={List}></Route>
             <Route path="/" component={Home}></Route>
             
           </Switch>
           </div>
         </BrowserRouter>
      </div>
    </Provider> 
    );
  }
}

export default App;
