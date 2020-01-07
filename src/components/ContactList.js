import React from 'react';
import './styles/ContactList.css';

const ListItem = ({ userInfo, onClick, index }) => {
  const { lastName, firstName, profileImage } = userInfo;
  return (
    <div className='list_item_wrapper clearfix' onClick={() => onClick(index)}>
      <img className='list_item_image' src={profileImage} alt='profile_image' />
      <div className='list_item_info'>
        <div>{`${firstName} ${lastName}`}</div>
      </div>
    </div>
  );
};

const ContactList = ({ users, onClick }) => {
  return (
    <div className='contact_list container'>
      {users.length > 0 &&
        users.map((user, index) => (
          <ListItem
            key={user.id}
            userInfo={user}
            onClick={id => onClick(id)}
            index={index}
          />
        ))}
    </div>
  );
};

export default ContactList;
