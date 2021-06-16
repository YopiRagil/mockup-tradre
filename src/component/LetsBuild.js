/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';

export const LetsBuild = () => {
  return (
    <div className="lets-build">
      <div className="w-100">
        <p className="h1 text-center mb-4">
          Let's build something great together
        </p>
        <div className="d-flex justify-content-center w-100">
          <button className="btn btn-outline-info btn-lg p-lg-4 rounded-0 px-5">
            <span className="text-light px-lg-4 button-texts">
              Make enquiry
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
