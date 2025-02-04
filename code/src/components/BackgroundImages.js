import { useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components/macro';

const BACKGROUND_IMAGES = {
  '0,0': './images/backgroundImages/ScreenTwo.jpg',
  '0,1': './images/backgroundImages/ScreenFive.jpg',
  '0,2': './images/backgroundImages/ScreenSix.jpg',
  '0,3': './images/backgroundImages/ScreenSeven.jpg',
  '1,0': './images/backgroundImages/ScreenThree.jpg',
  '1,1': './images/backgroundImages/ScreenFour.jpg',
  '1,3': './images/backgroundImages/FinalScreen.jpg'
};

export const BackgroundImage = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates);
  const backgroundImageSrc = BACKGROUND_IMAGES[coordinates] || './images/backgroundImages/WelcomeScreen.jpg';

  return <BackgroundImg backgroundImageSrc={backgroundImageSrc} />;
};

const BackgroundImg = styled.img`
   background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => props.backgroundImageSrc});
    background-size: cover;
    width: 100%;
    position: absolute;
    top: 0;
    height: 100%;
    z-index: -1
`
