import React from 'react';
import './header.scss';
import Logo from '../logo/Logo';

export default function Header() {
  return (
    <header className='header-main'>
      <button onClick={() => localStorage.clear()}>Clear Storage</button>
      <Logo/>
    </header>
  )
}
