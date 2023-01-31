import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

import JoinedMissions from './mission/joined_missions';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <>
      <h2 className="profile-heading">My Profile</h2>
      <div className="profile">
        <div className="rockets">
          <h2>My Rockets</h2>
          <ul>
            {rockets.map((rkt) => {
              return (
                rkt.reserved === true ? <li key={rkt.name}>{rkt.name}</li> : ''
              );
            })}
          </ul>
        </div>
        <JoinedMissions />
      </div>
    </>
  );
};

export default Profile;
