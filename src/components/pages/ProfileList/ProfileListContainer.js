import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { getNflTeams } from '../../../api';

import { List } from '../../common';

import RenderProfileListPage from './RenderProfileListPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const ProfileList = () => {
  const { authState } = useOktaAuth();
  console.log('authState', authState);

  return (
    //return a list of h2 from each of the data from the api call
    <div>
      <h1>Profile List</h1>
    </div>
  );
};

export default ProfileList;
