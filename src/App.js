import React from 'react';
import AvatarImage from './components/AvatarImage';
import BigTitle from './components/BigTitle';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div className='container'>
      <AvatarImage />
      <BigTitle />
      <SocialLinks />
    </div>
  );
};

export default App;