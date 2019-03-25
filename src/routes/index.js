import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'

import Login from '../modules/login';
import Audit from '../modules/audit';
import HrAudit from '../modules/hraudit';
import ViewAudit from '../modules/viewAudit';
import AssignInventory from '../modules/assignInventory';
import AddInventory from '../modules/addInventory';
import UnassignedInventory from '../modules/unassignedInventory';
import UnauditedInventory from '../modules/unauditedInventory';
import Requirement from '../modules/requirement';
import ChangePassword from '../modules/changePassword';
import AddRequirement from '../modules/addRequirement';
import AddInvEmp from '../modules/addInvEmp';

import createStore from '../store/createStore'

class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  shouldComponentUpdate () {
    return false
  }  
  render () {
    const store = createStore();
    return (
      <Provider store={store}>
        <HashRouter >
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/audit" component={Audit} />
            <Route exact path="/hraudit" component={HrAudit} />
            <Route exact path="/viewAudit" component={ViewAudit} />
            <Route exact path="/addInventory" component={AddInventory} />
            <Route exact path="/addMyInventory" component={AddInvEmp} />
            <Route exact path="/assignInventory" component={AssignInventory} />
            <Route exact path="/unassignInventory" component={UnassignedInventory} />
            <Route exact path="/unaditedInventory" component={UnauditedInventory} />
            <Route exact path="/requirement" component={Requirement} />
            <Route exact path="/changePassword" component={ChangePassword} />
            <Route exact path="/addRequirement" component={AddRequirement} />
          </div>
        </HashRouter >
      </Provider>
    )
  }
}

export default App
