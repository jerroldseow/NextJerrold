import React from 'react';
import { Route, Link } from "react-router-dom";

import Homepage from '../pages/Homepage';
import UserProfilePage from '../pages/UPP';
import Login from '../box/login';
import './Navbar.css';



class Navbar extends React.Component {
    render() {
        return(
            <div>
                <header className="main-header">
                    <h1 className="name">Nextagram</h1>
                    <ul className="main-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users/1">My Profile</Link></li>
                        <li><Link to="/">Login</Link></li>
                        
                    </ul>
                </header>
                <Route exact path="/" component={Homepage} />
                <Route path="/users/:id" component={UserProfilePage} />
                <Route exact path="/" component={Login} />
                
            </div>
        )
    }
}

export default Navbar;