/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';
import jason from '../assets/pictures/jason-briscoe-UV81E0oXXWQ-unsplash.jpg';
import dawson from '../assets/pictures/dawson-lovell-W_MUqtuHwyY-unsplash.jpg';
import jasdent from '../assets/pictures/jason-dent-w3eFhqXjkZE-unsplash.jpg';

const data = [
  {
    title: "The Netherlands' first wooden high-rise project",
    date: '25 June 2021',
    img: jason,
  },
  {
    title:
      'Tradre is working on Het Hooghout, a residential building in Eindhoven',
    date: '9 July 2021 ',
    img: dawson,
  },
  {
    title: 'Extension of sponsorship PSV Eindhoven',
    date: '13 December 2022',
    img: jasdent,
  },
];
export const ForInvestorBottom = (props) => {
  const { width } = props;
  return (
    <div
      className="container"
      style={{ padding: width < 994 ? '10px' : '60px', paddingTop: '100px' }}
    >
      <p className="text-secondary pt-3 pt-lg-0 popin">For investor</p>
      <div className="d-flex justify-content-between">
        <p className="h2 mb-5">Latest news</p>

        <p className="blue-color h6 font-more p-0 m-0 text-right align-self-center">
          See all news <i className="fas fa-arrow-right"></i>
        </p>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-lg-4">
            <div
              className="image-investor"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <p className="text-date">{item.date}</p>
            <p className="title-picture popin">
              {item.title}{' '}
              <span className="icon-forinvest-bottom  blue-color ml-2">
                <i className="fas fa-arrow-right fa-sm"></i>
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
