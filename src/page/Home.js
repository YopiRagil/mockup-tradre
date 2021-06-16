/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';
import {
  TopContent,
  AboutUs,
  OurServices,
  ForInvestor,
  LetsBuild,
  Footer,
  ForInvestorBottom,
  Header,
} from '../component';

const HomePage = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  window.addEventListener('resize', function () {
    setWidth(window.innerWidth);
  });

  const [position, setPosition] = React.useState(0);
  document.addEventListener('scroll', function (e) {
    setPosition(parseInt(window.scrollY));
  });

  return (
    <div>
      <Header position={position} />
      <div className="container-fluid">
        <TopContent width={width} />
        <AboutUs width={width} />
      </div>
      <div className="bg-gray">
        <OurServices width={width} />
      </div>
      <div className="container-fluid p-0">
        <ForInvestor width={width} />
      </div>
      <div className="bg-gray">
        <ForInvestorBottom width={width} />
      </div>
      <LetsBuild />
      <div className="bg-gray p-2 p-lg-5">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
