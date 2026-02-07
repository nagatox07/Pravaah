import React from 'react';
import Title from './Title';
import Asteroid from './Asteroid';
import LoginOverlay from './LoginOverlay';
import BlackHole from '../BlackHole';
import './IntroScene.css';

const IntroScene = () => {
  return (
    <div className="intro-scene">
      <BlackHole />
      <Title />
      <Asteroid />
      <LoginOverlay />
    </div>
  );
};

export default IntroScene;