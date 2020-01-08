import React, { useState, useEffect } from 'react';
import Header from './Header';
import ContactList from './ContactList';
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

const Main = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUserData().then(data => {
      setUsers(data);
    });
  }, []);

  const [showProfile, setShowProfile] = useState({});

  useEffect(() => {
    setShowProfile({ show: false });
  }, []);

  const backHandler = () => {
    setShowProfile({ show: false });
  };

  const handleOnClick = id => {
    setShowProfile({ show: true, id, backHandler });
  };

  const EnhancedContactList = withDetail(ContactList);

  return (
    <div className='Main'>
      <Header showProfile={showProfile} />
      <EnhancedContactList
        users={users}
        onClick={handleOnClick}
        showProfile={showProfile}
        backHandler={backHandler}
      />
    </div>
  );
};

export default Main;
