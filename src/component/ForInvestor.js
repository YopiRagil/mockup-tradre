/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';

export const ForInvestor = (props) => {
  const { width } = props;
  return (
    <div>
      <div className="bg-andreas p-0">
        <div
          className="row m-0 p-2 p-lg-0 py-lg-5 "
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,1) 35%, rgba(0,0,0,0.30885857761073177) 100%)',
          }}
        >
          <div className="col-lg-1" />
          <div className="col-lg-10">
            <p className="mt-5 pb-0 mb-0 popin text-secondary mb-2">
              For investor
            </p>
            <p
              className="h2 0 mb-5"
              style={{ width: width < 994 ? '100%' : '50%' }}
            >
              Building a custom-made real estate portfolio together
            </p>
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-8">
                <p className="font-normal">
                  Cooperation, flexibility and guarantee. Those are 3 keywords
                  on which our working method is based. We build custom-made
                  real estate portfolios for our investors, entirely according
                  to the wishes discussed in advance and with a continuous
                  supply of new, suitable objects.
                </p>
                <p className="blue-color font-more p-0 m-0">
                  More about investors <i className="fas fa-arrow-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    </div>
  );
};
