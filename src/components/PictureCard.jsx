import React from 'react';
import './style.css';
import Pic from "./about.jpg";


export const PictureCard = () => {
  return (
    <>
    <div className="hero">
      <img className="hero-img" src={Pic} width="300" height="300" alt="image"></img>
    </div>
    </>
  )
}
