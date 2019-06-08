import React, { useState, useEffect } from 'react';
import AuthUserContext from './context';
import { withFirebase } from "../Firebase";

const setupAuthentication = (Component) => {
  const SetupAuthentication = (props) => {
    const [ authUser, setAuthUser ] = useState(null);

    useEffect(() => {
      props.firebase.auth.onAuthStateChanged(setAuthUser);
    }, []);

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

  return withFirebase(SetupAuthentication);
};

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    return (
      <AuthUserContext.Consumer>
        {(authUser) => <Component {...props} authUser={authUser} />}
      </AuthUserContext.Consumer>
    );
  };

  return withFirebase(WithAuthentication);
};

export { AuthUserContext, withAuthentication, setupAuthentication };