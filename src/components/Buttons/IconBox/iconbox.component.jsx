import React from "react";

import "./iconbox.styles.scss";

import { IKImage } from "imagekitio-react";

const IconBox = ({ large, image, link, target, iconClassName }) => {
  return (
    <a
      href={link}
      target={target}
      className={large ? "icon-box__large" : "icon-box__small"}
    >
      <div className={`icon-box__icon `}>
        <div className={iconClassName}>
          {/* <img src={image} alt='twiiter' /> */}
          <IKImage path={image} loading="lazy" lqip={{ active: true }} />
        </div>
      </div>
    </a>
  );
};

export default IconBox;
