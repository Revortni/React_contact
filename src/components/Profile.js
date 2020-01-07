import React from 'react';
import './styles/Profile.css';

const Profile = ({ userInfo, backHandler }) => {
  const { email, phone, address, lastName, firstName, profileImage } = userInfo;
  return (
    <div className='profile_wrapper container'>
      <img className='profile_image' src={profileImage} alt='profile_image' />
      <div className='back_button' onClick={backHandler}>
        Back
      </div>
      <div className='profile_info'>
        <div className='profile_info_title'>Basic Info</div>
        <div>
          name
          <span>{`${firstName} ${lastName}`}</span>
        </div>
        <div>
          email
          <span>
            <a href={`mailto:${email}`}>{email}</a>
          </span>
        </div>
        <div>
          phone
          <span>
            <a href={`tel:${phone}`}>{phone}</a>
          </span>
        </div>
      </div>
      <div className='profile_info'>
        <div className='profile_info_title'>Address Details</div>
        {Object.keys(address).map((key, index) => {
          return (
            <div key={index}>
              {key}
              <span>{address[key]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
