import React from 'react';
import logo from '../assets/images/logo.svg';

interface ILogoProps {
    classes?: string;
}

const Logo = (props: ILogoProps) => {
  return (
    <img className={`object-scale-down bg-gradient-to-t from-white p-1 w-[30px] md:w-[50px] m-4 rounded-[50%] bg-primary border-2 border-primary ${props.classes} `} src={logo} alt="logo" />
  );
};

export default Logo;