import React, { useContext } from 'react';
import { Redirect } from '@reach/router'
import { UserContext } from '../App';

const Content = () => {
  // Could have something here to check for the time when the accesstoken expires
  // and then call the refresh_token endpoint to get a new accesstoken automatically
  const [user] = useContext(UserContext);
  if (!user.accesstoken) return <Redirect from='' to='login' noThrow />
  return <div>This is the content.</div>;
}

export default Content;