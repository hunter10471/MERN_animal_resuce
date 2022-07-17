import React from 'react';

interface IButtonProps {
    theme: 'filled' | 'outlined';
    text?: string;
    icon?: any;
    onClick?(e?:any): any;
    disabled?:boolean;
    classes?: string;
    id?:string;
}

const Button = (props: IButtonProps) => {
  return <button id={props.id} disabled={props.disabled} onClick={props.onClick} className={`flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-80 lg:text-base md:text-sm text-xs font-heading p-2 md:px-4 max-w-[320px] transition-all w-full rounded-xl font-bold border-[1px] border-primary hover:opacity-80 ${props.theme === 'filled' ? 'bg-primary text-white' : 'bg-white text-primary'} ${props.classes} `} > {/*eslint-disable-line*/}
    <span>{props.icon}</span>
    {props.text}
  </button>;
};

export default Button;
