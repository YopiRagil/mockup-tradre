import React from 'react';
import '../App.css';

export const AboutUs = (props) => {
  const { width } = props;
  return (
    <div>
      <div className="row pt-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <p className="mt-5 pb-0 mb-0 popin text-secondary">About Us</p>
          <div className="bg-image-ali">
            <div
              className="h-100"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0,0,0,1) 65%, rgba(0,0,0,0.30885857761073177) 100%)',
              }}
            >
              <div style={{ width: width < 994 ? '100%' : '50%' }}>
                <p className="h1 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-8 pb-5">
                  <p className="font-normal p-1">
                    Proud of what we have achieved from the drawing board last
                    year! With a lot of effort we have set up our real estate
                    company: Tradre Group . We focus on the growth areas in the
                    Netherlands. We strive for a continuously growing real
                    estate portfolio of stable rented real estate.
                    <br />
                    <br />
                    With our own, unique data-driven search method and the
                    network of our own trained sourcing partners, we are able to
                    realize a custom-made real estate portfolio. At Tradre Group
                    we work with a fixed, realistic purchasing policy, which
                    means that many parties find it interesting to work with us!
                  </p>
                  <p className="blue-color font-more p-1">
                    More About Us <i className="fas fa-arrow-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
