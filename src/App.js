import React from 'react';
import AvatarImage from './components/AvatarImage';
import BigTitle from './components/BigTitle';
import Copyright from './components/Copyright';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div className='container'>
      <AvatarImage />
      <BigTitle />
      <SocialLinks />
      <Copyright />
    </div>
  );
};

export default App;