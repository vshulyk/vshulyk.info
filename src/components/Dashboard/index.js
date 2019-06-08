import React, { Fragment } from 'react';
import { withAuthentication } from '../Session'

function Dashboard (props) {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      {!props.authUser && (
        <p>
          Please sign in to see your statistics
        </p>
      )}
      {props.authUser && (
        <p>
          Hi there, {props.authUser.displayName}. You don't have anything yet.
        </p>
      )}
    </Fragment>
  );
}

export default withAuthentication(Dashboard);
