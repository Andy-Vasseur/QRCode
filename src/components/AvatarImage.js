import React from 'react';
import AvatarLogo from '../assets/happyavatar.png';

const AvatarImage = () => {
    return (
        <div className='wrapperAvatar'>
            <img src={ AvatarLogo } alt="test" />
        </div>
    );
};

export default AvatarImage;