import React from 'react';
import Image from 'next/image';
// import '../../styles/Icons.css';


const Icons = ({photos}) => {
  return (
    <div className='Header-icons'>
      <Image src={photos} alt='HeaderIcons'/>
    </div>
  );
}

export default Icons;

