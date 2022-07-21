import React, { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface IEventProps {
    day:string;
    date:number;
    monthYear:string;
    img:any;
    title:string;
    time:string;
    location:string;
    toggle?:boolean;
    color:string;
}

const EventAccordion = (props:IEventProps) => {
  const [toggle, setToggle] = useState(props.toggle);
  return (
    <div onClick={()=>setToggle(!toggle)} style={{borderColor:props.color}} className={`cursor-pointer transition-all bg-white overflow-hidden shadow-xl duration-300 mt-4 min-w-[200px] max-w-[400px] ${toggle ? 'h-[385px]' : 'h-[165px]'} border-b-[5px] `}>  {/*eslint-disable-line*/}
      <div className='flex'>
        <div style={{backgroundColor:props.color}} className='text-white p-1 flex flex-col justify-center items-center '>
          <h2 className='text-base md:text-lg font-bold uppercase'>{props.day}</h2>
          <h3 className='text-5xl md:text-6xl font-light'>{props.date}</h3>
        </div>
        <img className='w-full h-[200px] object-cover' src={props.img} alt={props.title} />
      </div>
      <div className='p-4'>
        <span className='text-sm md:text-base font-bold text-stone-600'>{props.monthYear}</span>
        <h2 className='capitalize text-xl md:text-2xl font-heading font-bold my-2'>{props.title}</h2>
        <div className='flex flex-col p-2'>
          <span className='text-xs md:text-sm font-medium text-stone-500 flex items-center gap-2 my-1'><AccessTimeIcon/>{props.time}</span>
          <span className='text-xs md:text-sm font-medium text-stone-500 flex items-center gap-2 my-1 capitalize'><LocationOnIcon/> {props.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventAccordion;
