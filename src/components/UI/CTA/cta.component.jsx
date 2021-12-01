import React from "react";
import CustomButton from "../../Buttons/CustomButton/custombutton.component";
import "./cta.styles.scss";
import { IKImage } from "imagekitio-react";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta__left">
        <h2 className="cta__title">JOIN THE SPHEROXY</h2>
        <p className="cta__content">
          Stay up to date by joining our Discord. Follow us on Twitter and don’t
          miss any announcements.
        </p>
        <div className="cta__btn">
          <CustomButton
            imageIcon={
              "/project-folder/icons/discord_JbBdPByYs.svg?updatedAt=1638249766988"
            }
          >
            Join Discord
          </CustomButton>
        </div>
      </div>
      <div className="cta__right">
        {/* <img src={CharacterBase} alt="character" className="cta__img" /> */}
        <IKImage
          path={
            "/project-folder/compressed/base_character-min_dKJnGMntvt_.png?updatedAt=1638350249453"
          }
          className="cta__img"
          lqip={{ active: true }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CTA;
