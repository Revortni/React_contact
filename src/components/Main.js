import React, { useState, useEffect } from 'react';
import Header from './Header';
import ContactList from './ContactList';
import SearchContact from './SearchContact';
import Profile from './Profile';
import { fetchUserData } from './services/fetchData';
import './styles/Main.css';

const withDetail = Component => {
  return props => {
    const { showProfile, ...otherProps } = props;
    if (showProfile && showProfile.show) {
      return <Profile userInfo={props.users[showProfile.id]} />;
    }
    return <Component {...otherProps} />;
  };
};

const EnhancedContactList = withDetail(ContactList);

const Main = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {}, []);

  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetchUserData().then(data => {
      setAllUsers(data);
      setFilteredUsers(data);
    });
  }, []);

  const [showProfile, setShowProfile] = useState({});
  useEffect(() => {}, []);

  const filterContacts = (param = '') => {
    setFilteredUsers(
      allUsers &&
        allUsers.filter(user => {
          return user.firstName.includes(param);
        })
    );
  };

  const backHandler = () => {
    setShowProfile({ show: false });
  };

  const handleOnClick = id => {
    setShowProfile({ show: true, id, backHandler });
  };

  return (
    <div className='Main'>
      <Header showProfile={showProfile} />
      <div className='below_header'>
        <SearchContact handleSearch={filterContacts} />
        <EnhancedContactList
          users={filteredUsers}
          onClick={handleOnClick}
          showProfile={showProfile}
          backHandler={backHandler}
        />
      </div>
    </div>
  );
};

export default Main;
