import '../bootstrap'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AdminSidebar from './components/AdminSidebar'
import AdminNavbar from '../components/AdminNavbar'
import DashboardScene from './scenes/DashboardScene'
import UsersScene from './scenes/UsersScene'
import UserScene from './scenes/UserScene'
import GroupsScene from './scenes/GroupsScene'
import GroupScene from './scenes/GroupScene'
import ObservationsScene from './scenes/ObservationsScene'

class Admin extends Component {
    render() {
        return (
            <div>
                <AdminNavbar />
                <Router basename="/admin" onChange={() => alert('changed')}>
                    <div className="main-content admin-content">
                        <div className="container is-fluid">
                            <div className="columns">
                                <div className="column is-2 admin-sidebar">
                                    <AdminSidebar/>
                                </div>
                                <div className="column is-10">
                                    <Switch>
                                        <Route exact={true} path="/" component={DashboardScene}/>
                                        <Route path="/users" component={UsersScene}/>
                                        <Route path="/user/:id" component={UserScene}/>
                                        <Route path="/groups" component={GroupsScene}/>
                                        <Route path="/group/:id" component={GroupScene}/>
                                        <Route path="/observations" component={ObservationsScene}/>
                                    </Switch>
                                    <div className="app-footer admin-footer">
                                        Copyright &copy; 2017 University of Tennessee at Knoxville
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<Admin />, document.getElementById('app'))