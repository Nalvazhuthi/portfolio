import React from 'react';
import profile from '../assets/images/avatar.jpg'
import { UilInstagram, UilLinkedinAlt, UilTwitter, UilGithubAlt } from '@iconscout/react-unicons';

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Nalvazhuthi</span>
        </div>
        <div className="featured-name">
          <p>I'm <span className="typedText"></span></p>
        </div>
        <div className="featured-text-info">
          <p>Experienced frontend developer with a passion for creating visually stunning and user-friendly websites.</p>
        </div>
        <div className="featured-text-btn">
          <button className="btn blue-btn">Hire Me</button>
          <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
        </div>
        <div className="social_icons">
          <div className="icon"><UilInstagram size="24" /></div>
          <div className="icon"><UilLinkedinAlt size="24" /></div>
          <div className="icon"><UilTwitter size="24" /></div>
          <div className="icon"><UilGithubAlt size="24" /></div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={profile} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
