import React from "react";
import "./overview.styles.scss";
import CustomButton from "../../Buttons/CustomButton/custombutton.component";
import { IKImage } from "imagekitio-react";

const Overview = () => {
  return (
    <section className="overview">
      <div className="overview__content">
        <div className="overview__left">
          <div className="dOverview">
            <h2 className="overview__heading">
              WELCOME TO
              <br />
              <span className="overview__heading--accent">ALNSPHERE!</span>
            </h2>
            <p className="overview__desc">
              Since the Alns have been created on planet Spheron, the Spheroxy
              hasn’t been the same.AlnSphere is more than just your average
              Play-to-Earn game, it is a ticket to a seamless entry into
              blockchain gaming, NFTs, and much more!
            </p>
            <p className="overview__desc">
              Our collection of 9,999 NFTs comes with a variety of over 150
              hand-drawn traits. Each Aln has been created with quality in mind
              to ensure uniqueness in art, and is ready to storm the Ethereum
              blockchain.
            </p>
          </div>
          <div className="overview__buttons">
            <CustomButton
              imageIcon={
                "/project-folder/icons/discord_JbBdPByYs.svg?updatedAt=1638249766988"
              }
            >
              Join Discord
            </CustomButton>

            <CustomButton accent>WhitePaper</CustomButton>
          </div>
        </div>
        <div className="overview__right">
          <div className="overview__img-box">
            <IKImage
              effect="blur"
              path={
                "project-folder/compressed/doctors-min_hB9H5WMUI.png?updatedAt=1638350255820"
              }
              className="overview__img"
              loading="lazy"
              lqip={{ active: true }}
            />
            {/* <img className="overview__img" src={ImgDoctors} alt="aliens" /> */}
          </div>
        </div>
        {/* the following heading and description will show on mobile phone only */}
        <div className="mOverview">
          <h2 className="mOverview__heading">
            WELCOME TO
            <br />
            <span className="mOverview__heading--accent">ALNSPHERE!</span>
          </h2>
          <p className="mOverview__desc">
            AlnSphere represents a collection of 9,999 NFTs who need players.
          </p>
          <p className="mOverview__desc">
            They grant access to the upcoming AlnSphere RPG Game entirely on the
            Ethereum blockchain and a truly special community. Each artwork is
            unique in its creation with a variety of hand-drawn traits for the
            highest possible quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
