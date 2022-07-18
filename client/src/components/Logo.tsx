import React from 'react';
import logo from '../assets/images/logo.svg';

interface ILogoProps {
  classes?: string;
}

const Logo = (props: ILogoProps) => {
  return (
    <img
      className={`object-scale-down bg-gradient-to-t from-white/50 p-1 m-2 w-[50px] rounded-[50%] bg-primary border-2 border-primary ${props.classes} `}
      src={logo}
      alt='logo'
    />
  );
};

export default Logo;
