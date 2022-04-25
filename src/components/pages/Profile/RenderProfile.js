import React from 'react';

function RenderProfile(props) {
  const { userInfo, authService } = props;
  console.log('hi profile view: ', userInfo);
  return (
    <div>
      <h1>HELLLLLOOOOOOO {userInfo.name}</h1>
    </div>
  );
}

export default RenderProfile;
