import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./play.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Autoplay } from "swiper";
import { IKImage } from "imagekitio-react";

const images = [
  "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/Arena-min_Uot0g5HXp.jpg?updatedAt=1638350239079",
  "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/Quest-min_brNGWHK7ol.jpg?updatedAt=1638350263714",
];

const Play = () => {
  const [photoIndex, setphotoIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="play">
      <div className="play__gradient"></div>
      <h2 className="play__title">Play to Earn</h2>
      <div className="play__left">
        <div className="play__img-box">
          <Swiper
            modules={[Autoplay]}
            loop
            space-between={10}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <IKImage
                className="play__img"
                path={
                  "/project-folder/compressed/Inventory-min_cN_-sSVFk.jpg?updatedAt=1638350260376"
                }
                onClick={() => setisOpen(true)}
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img
                className="play__img"
                src={inventoryImage}
                onClick={() => setisOpen(true)}
              /> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <img
                className="play__img"
                src={inventoryChatImage}
                onClick={() => setisOpen(true)}
              /> */}

              <IKImage
                className="play__img"
                path={
                  "/project-folder/compressed/Inventory_Chat-min_Jjq7nGCr9c.jpg?updatedAt=1638350260391"
                }
                onClick={() => setisOpen(true)}
                loading="lazy"
                lqip={{ active: true }}
              />
            </SwiperSlide>
          </Swiper>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setisOpen(false)}
              onMovePrevRequest={() =>
                setphotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setphotoIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </div>
        <div className="play__content">
          <p></p>
          <p>
            Grow your inventory and dive into the action by completing{" "}
            <b>quests</b>, fighting in <b>dungeons</b>, challenging players in{" "}
            <b>PvP</b> and climbing the leader board, collecting rare{" "}
            <b>items</b>, joining <b>guilds</b>, and winning <b>tournaments</b>{" "}
            containing huge prize pools! Collect <b>$Sphererocks</b> along the
            way and make us of them in <b>The Grand Hall</b>. Enjoy a thrilling
            gameplay experience and use your special ability to your advantage.
          </p>
        </div>
      </div>

      <div className="play__right">
        <div className="play__content">
          <p></p>
          <p>
            Team up with other players and defeat <b>boss monsters</b>, loot
            epic items with special <b>bonuses</b>, and make good use of the{" "}
            <b> marketplace</b> to take an edge and win over the competition.
            <br />
            Formulate the best strategy to your success and become the best! Be
            part of our exclusive community and benefit from <b>airdrops</b>,
            and many more features outside the game.
          </p>
        </div>
        <div className="play__img-box">
          <Swiper
            modules={[Autoplay]}
            loop
            space-between={10}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <IKImage
                className="play__img"
                path={
                  "/project-folder/compressed/Arena-min_Uot0g5HXp.jpg?updatedAt=1638350239079"
                }
                onClick={() => setisOpen(true)}
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img
                className="play__img"
                src={arenaImage}
                onClick={() => setisOpen(true)}
              /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                className="play__img"
                path={
                  "/project-folder/compressed/Quest-min_brNGWHK7ol.jpg?updatedAt=1638350263714"
                }
                onClick={() => setisOpen(true)}
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img
                className="play__img"
                src={questImage}
                onClick={() => setisOpen(true)}
              /> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Play;
