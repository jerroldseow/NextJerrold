import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import UserImages from '../box/Userimages';
import axios from 'axios';
import { Link } from "react-router-dom";


class Homepage extends React.Component {
  state = {
    users: [
    ]
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://insta.nextacademy.com/api/v1/users'
    })
    .then(users =>  {
      this.setState({
        users: users.data,
      })
    })
    .catch(error => {
      console.error(error);
    })
  }

  render(){
    return (
      <div>
        <h1 className="text-center">Home Page</h1>
          <div className="box">
            <div className="row">
            {this.state.users.map((user, index) =>
              <div className="col-sm-4" key={index}>
                <div className="card mb-8">
                  <img className="card-img-top img-thumbnail mx-auto" src={user.profileImage} alt={user.profileImage} />
                  <div className="card-body text-center">
                    <Link to={`/users/${user.id}`}>{user.id}</Link>
                    {/* <h4 className="card-title">{user.id}</h4> */}
                    <p className="card-text">{user.username}</p>
                    <UserImages userId={user.id}/>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;