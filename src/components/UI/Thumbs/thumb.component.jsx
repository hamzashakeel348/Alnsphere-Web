import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Thumb = ({ image, name, index }) => {
  return (
    <div className="thumb-holder">
      <div className="thumb-wrapper">
        <div className="pagination-thumb">
          {/* <img src={image} alt="" /> */}
          <LazyLoadImage src={image} alt="" />
        </div>
      </div>
      <div style={{ border: "2px solid red" }} className="thumb__member-name">
        asdhasjkdh
      </div>
    </div>
  );
};

export default Thumb;
