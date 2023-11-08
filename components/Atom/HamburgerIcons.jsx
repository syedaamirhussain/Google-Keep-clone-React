'use client'
import React from 'react';
import Image from 'next/image';
// import '../../styles/HamburgerIcons.css';

const HamburgerIcons = ({ icons, text, Click }) => {
  return (
    <div className='HamburgerCss' onClick={Click}>
      <div className='Ham-icon'>
        <Image src={icons}  alt='Icons'/>
      </div>
      <div className='Ham-text'>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default HamburgerIcons;