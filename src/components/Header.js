import React from 'react';
import './styles/Header.css';
import BackButton from './assets/arrow-left-solid.svg';

const HeaderContent = () => {
  return <div className='header_title'>People</div>;
};

const withBackButton = Component => {
  return ({ showProfile }) => {
    let back = null;
    if (showProfile.show) {
      back = (
        <div className={`back_button`} onClick={showProfile.backHandler}>
          <img src={BackButton} alt='Back' className={`back_button_shown`} />
        </div>
      );
    }
    return (
      <>
        {back}
        <Component />
      </>
    );
  };
};

const EnhancedHeaderContent = withBackButton(HeaderContent);

const Header = ({ showProfile }) => {
  return (
    <header>
      <div className='container clearfix'>
        <EnhancedHeaderContent showProfile={showProfile} />
      </div>
    </header>
  );
};

export default Header;
