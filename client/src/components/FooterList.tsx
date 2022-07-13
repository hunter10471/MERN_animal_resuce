import React from 'react';

interface IFooterListProps {
  array:string[];
  heading:string;
}


const FooterList = (props: IFooterListProps) => {
  return (
    <ul className='lg:m-12 md:m-10 sm:m-8 m-6 max-w-[160px]'>
      <li className='font-medium text-base md:text-lg tracking-wider mb-2'>
        {props.heading}
      </li>
      {props.array.map((el, index) => {  //eslint-disable-line
        return (
          <li key={index} className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>
            {el}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterList;