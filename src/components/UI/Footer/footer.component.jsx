import React from "react";
import "./footer.styles.scss";
import IconBox from "../../Buttons/IconBox/iconbox.component";
import { IKImage } from "imagekitio-react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        {/* <img src={Logo} alt="logo" className="footer__img" /> */}
        <IKImage
          path={
            "/project-folder/compressed/logo-min_pYsW57pF-.png?updatedAt=1638350267897"
          }
          loading="lazy"
          lqip={{ active: true }}
          className="footer__img"
        />
      </div>
      <div className="footer__icons">
        <IconBox
          large
          image={
            "/project-folder/compressed/twitter-min_o6sI-7h6a.png?updatedAt=1638350261339"
          }
          link={"https://twitter.com/AlnSphere"}
          iconClassName="iconClassName"
        />
        <IconBox
          large
          image={
            "/project-folder/icons/discord_JbBdPByYs.svg?updatedAt=1638249766988"
          }
          iconClassName="iconClassName"
          link={"https://discord.gg/YgeEwVa6Yn"}
        />
      </div>
      <div className="footer__copyright">
        <p> ©2021 AlnSphere. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
