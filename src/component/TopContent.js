import React from 'react';
import erwindoom from '../assets/pictures/erwin-doorn-Wc6KbWWwURc-unsplash.jpg';

export const TopContent = (props) => {
  const { width } = props;
  return (
    <div className="row d-flex justify-content-between">
      <div className="col-lg-1"></div>
      <div
        className="col-lg-5 pt-4 align-items-stretch d-flex align-content-start flex-wrap pb-5"
        style={{ zIndex: 1 }}
      >
        <div style={styles().h_40}></div>
        <div className="align-items-stretch">
          <p className="popinTitle" style={styles(width).width_text}>
            Your partner for optimally profitable real estate investments
          </p>
          <div className="row align-items-center">
            <div className="col-6 col-md-5">
              <button
                type="button"
                className="popin btn btn-lg btn-info text-light rounded-0 px-3 py-1 py-md-4 w-100"
              >
                Make enquiry
              </button>
            </div>
            <div className="col-6 col-md-6">
              <p className="small-text popin">
                <u>Call: +31 1111 2222</u>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-3 mt-md-0">
        <img style={styles().imageErwindoom} src={erwindoom} alt="pict" />
      </div>
    </div>
  );
};

const styles = (params) => {
  return {
    index1: { zIndex: 1 },
    h_40px: { height: '40px' },
    h_40: { height: '40%' },
    width_text: { width: params > 994 ? '130%' : '100%' },
    imageErwindoom: { width: '100%', borderBottomLeftRadius: '10%' },
  };
};
