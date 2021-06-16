import React from 'react';
import '../App.css';
import logo from '../assets/logo/logo.png';

export const Header = (props) => {
  const { position } = props;

  return (
    <div
      id="header-nav"
      style={{
        background: `linear-gradient(0deg, rgba(24,24,24,${
          position / 672
        }) 0%, rgba(0,0,0,${position / 802}) 1%)`,
      }}
    >
      <div className="py-4 d-flex justify-content-between">
        <a href="#home">
          <img style={{ width: '170px' }} src={logo} alt="logo" />
        </a>
        <p>
          <a href="#menu">
            <i className="fa fa-bars fa-lg text-light" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
};
