import Image from 'next/image';
import React from 'react';
// import Styles from '../Molecule/LeftFrag.css'
import HamburgerIcon from '../../public/svg/menu.svg'
import KeepIcon from '../../public/svg/keep.png'
import Icons from '../Atom/Icons';

const LeftFrag = () => {
  return (
    <div className='Left-frag'>
      <Icons photos={HamburgerIcon}/>
      <Image src={KeepIcon} alt='Keep Image' priority={true}/>
      <p>Keep</p>
    </div>
  );
}

export default LeftFrag;
