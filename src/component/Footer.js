/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';
import logo from '../assets/logo/logo.png';

const data = [
  'About Us',
  'News',
  'Objects',
  'Business',
  'Contact',
  'Join the team',
  'References',
  'Partners',
  'Team',
  'FAQ',
];
export const Footer = () => {
  return (
    <div>
      <div className="container px-5 pt-3">
        <div className="d-flex flex-wrap px-lg-5 border-bottom pb-3">
          {data.map((item, idx) => (
            <a href={`#${item}`} key={idx} className="link-hide-uderline">
              <p className="text-menu-footer">{item}</p>
            </a>
          ))}
          <div className="lg-6"></div>
        </div>
        <div className="pt-5 row">
          <div className="col-lg-10 mb-3">
            <img style={{ width: '170px' }} src={logo} alt="logo" />
          </div>
          <div className="col-lg-2">
            <p className="copy-right pt-2 text-center">© 2021 - Tradre</p>
          </div>
        </div>
      </div>
    </div>
  );
};
