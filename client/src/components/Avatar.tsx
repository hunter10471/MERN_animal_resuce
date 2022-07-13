import React from 'react';
import avatar from '../assets/images/avatar.png';

interface IAvatarProps {
    url?: any;
    alt?: string | 'avatar';
    classes?: string;
}

const Avatar = (props: IAvatarProps) => {
  return <img className={`w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[50%] border-2 object-scale-down ${props.classes}`} src={props.url || avatar } alt={props.alt} />;
};

export default Avatar;
