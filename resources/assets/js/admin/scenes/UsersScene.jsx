import React, {Component} from 'react'
import $ from 'jquery'
import 'datatables.net'
import '../plugins/dataTables.bulma'
import {Link} from 'react-router-dom'
import Spinner from '../../components/Spinner'
import Scene from '../../scenes/Scene'

export default class UsersScene extends Scene {
  constructor(props) {
    super(props)

    this.state = {
      users  : [],
      loading: true
    }

    document.title = 'Users - TreeSnap'
  }

  componentDidMount() {
    axios.get('/admin/web/users').then(response => {
      this.setState({users: response.data.data})
    }).catch(error => {
      console.log(error)
    }).then(() => {
      this.setState({loading: false})
    })
  }

  componentDidUpdate() {
    $('#users-table').dataTable({
      autoWidth: false,
      destroy  : true,
      language : {
        search           : '',
        searchPlaceholder: 'Search'
      }
    })
  }

  _renderRow(user, index) {
    return (
      <tr key={index}>
        <td><Link to={`/user/${user.id}`}>{user.name}</Link></td>
        <td>{user.email}</td>
        <td>{user.is_anonymous ? 'Yes' : 'No'}</td>
        <td>{user.class}</td>
        <td>{user.observations_count}</td>
        <td>{user.role}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <h1 className="title is-3">Users</h1>
          </div>
          <div className="column is-narrow has-text-right">
            <a href={'/admin/users/download'} className={'button'}>
              <span className="icon is-small">
                <i className="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </div>
        </div>
        <div className="box">
          <table className="table is-striped mb-none" id="users-table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Anonymous</th>
              <th>Class</th>
              <th>Observations</th>
              <th>Role</th>
            </tr>
            </thead>
            <tbody>
            {this.state.users.map(this._renderRow.bind(this))}
            </tbody>
          </table>
        </div>
        <Spinner visible={this.state.loading}/>
      </div>
    )
  }
}
