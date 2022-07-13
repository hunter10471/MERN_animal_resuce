import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

interface IIconsProps {
    classes?: string;
}

const Icons = (props: IIconsProps) => {
  return <div className={`flex gap-4 md:gap-5 lg:gap-6 text-lg sm:text-xl lg:text-2xl ${props.classes} [&>*:hover]:opacity-60 cursor-pointer`}>
    <FacebookIcon fontSize='inherit' />
    <TwitterIcon fontSize='inherit' />
    <YouTubeIcon fontSize='inherit' />
    <InstagramIcon fontSize='inherit' />
  </div>;
};

export default Icons;
