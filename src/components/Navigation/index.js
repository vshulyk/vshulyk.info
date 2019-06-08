import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { compose } from 'recompose'

import ROUTES from '../../constants/routes';
import { withFirebase } from "../Firebase";
import { withAuthentication } from '../Session';
import Landing from "../Landing";
import Home from "../Home";
import Dashboard from "../Dashboard";

import "./index.css";

const NavigationItem = (props) => {
  return (
    <li>
      <Link to={props.path}>
        <h3>{props.name}</h3>
      </Link>
    </li>
  );
};


const Navigation = (props) => {
  return (
    <ul>
      <NavigationItem name="Home" path={ROUTES.HOME} component={Home}/>
      <NavigationItem name="Landing" path={ROUTES.LANDING} component={Landing}/>
      <NavigationItem name="Dashboard" path={ROUTES.DASHBOARD} component={Dashboard}/>
      {props.authUser ? (
        <Fragment>
          <div onClick={props.firebase.signOut}>logout</div>
          <h1>{props.authUser.displayName}</h1>
        </Fragment>
      ) : (
        <div onClick={props.firebase.signIn}>login</div>
      )}
    </ul>
  )
};

export default compose(withAuthentication, withFirebase)(Navigation);
