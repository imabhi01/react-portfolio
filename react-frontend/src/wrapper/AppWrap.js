import React from 'react'
import { useState } from 'react';
import {NavigationDots, SocialMedia} from '../components'

const AppWrap = (Component, idName, classNames) => function HOC(){
  const current = new Date();
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia/>
      <div className="app__wrapper app__flex">
        <Component />
        <div className='copyright'>
          <p className='p-text'>@{current.getFullYear()}</p>
          <p className='p-text'>All rights reserved!</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap;