/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';
import breno from '../assets/pictures/breno-assis-r3WAWU5Fi5Q-unsplash-scaled.jpg';
import daniel from '../assets/pictures/daniel-dinuzzo-qCjolcMFaLI-unsplash-scaled.jpg';

const data = [
  {
    title: 'Residential Real Estate',
    content:
      'We offer the security of creditworthy tenants and a long-term lease.',
    img: breno,
  },
  {
    title: 'Commercial Real Estate',
    content:
      'Our objects that are inhabited meet the minimum energy label C. We carry out necessary upgrades to objects ourselves.',
    img: daniel,
  },
];
export const OurServices = (props) => {
  const { width } = props;
  return (
    <div
      className="container"
      style={{ padding: width < 994 ? '10px' : '60px', paddingTop: '100px' }}
    >
      <p className="text-secondary popin pt-3 pt-lg-0">Our Services</p>
      <p className="h1">What we do</p>
      {data.map((item, idx) => (
        <div key={idx} className="row d-flex justify-content-between my-5">
          <div
            className="col-lg-7 bg-image-breno"
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
          <div className="col-lg-5 px-lg-5 align-items-stretch d-flex align-content-between flex-wrap">
            <div className="w-100">
              <p className="h4 mt-sm-2 mb-4 popin">{item.title}</p>
              <p className="font-normal">{item.content}</p>
            </div>
            <p className="blue-color font-more p-0 m-0">
              Learn more <i className="fas fa-arrow-right"></i>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
