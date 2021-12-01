import React from "react";
import "./custombutton.styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IKImage } from "imagekitio-react";

const CustomButton = ({
  children,
  accent,
  saveText,
  imageIcon,
  link,
  onClick,
  target,
}) => {
  if (saveText) {
    return (
      <div className={`${accent ? "accent-btn__box" : "custom-btn__box"}`}>
        <a
          className={`${
            accent ? "btn-accent save-text" : "custom-btn save-text"
          }`}
          target={target}
          href={link}
          onClick={onClick}
        >
          {children}
        </a>
      </div>
    );
  } else {
    return (
      <div className={`${accent ? "accent-btn__box" : "custom-btn__box"}`}>
        <a
          className={`${accent ? "btn-accent" : "custom-btn"}`}
          href={link}
          target={target}
          onClick={onClick}
        >
          {imageIcon && (
            <IKImage
              path={imageIcon}
              loading="lazy"
              lqip={{ active: true }}
              // height={20}
            />
            // <img src={imageIcon} alt="" />
          )}
          {children}
        </a>
      </div>
    );
  }
};

export default CustomButton;
