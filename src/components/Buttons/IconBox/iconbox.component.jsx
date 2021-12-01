import React from "react";

import "./iconbox.styles.scss";

import { IKImage } from "imagekitio-react";

const IconBox = ({ large, image, link, target, iconClassName }) => {
  return (
    <div className={large ? "icon-box__large" : "icon-box__small"}>
      <div className={`icon-box__icon `}>
        <a className={iconClassName} href={link} target={target}>
          {/* <img src={image} alt='twiiter' /> */}
          <IKImage path={image} loading="lazy" lqip={{ active: true }} />
        </a>
      </div>
    </div>
  );
};

export default IconBox;
