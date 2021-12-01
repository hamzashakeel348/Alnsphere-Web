import React from "react";
import "./choosen.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
import { IKImage } from "imagekitio-react";

// install Swiper modules
SwiperCore.use([EffectCards]);

const ChoosenOnes = () => {
  let itemStyles = {
    width: "200px",
    height: "400px",
    overflow: "hidden",
    borderRadius: "30px",
  };

  return (
    <div className="choosen">
      <h2 className="choosen__title">the chosen ones</h2>
      <Swiper
        loop
        autoplay
        effect={"cards"}
        grabCursor={true}

        // pagination={{clickable:true}}
      >
        <SwiperSlide style={itemStyles}>
          <IKImage
            style={{ width: "100%", height: "100%" }}
            path={
              "/project-folder/compressed/JokerGold-min_oXUOAgK2z.png?updatedAt=1638350277898"
            }
            loading="lazy"
            lqip={{ active: true }}
          />
          {/* <img
            style={{ width: "100%", height: "100%" }}
            src={JokerGold}
            alt=""
          /> */}
        </SwiperSlide>
        <SwiperSlide style={itemStyles}>
          {/* <img
            style={{ width: "100%", height: "100%" }}
            src={Gladiator}
            alt=""
          /> */}
          <IKImage
            style={{ width: "100%", height: "100%" }}
            path={
              "/project-folder/compressed/Gladiator-min_j1j2_UE2Y.png?updatedAt=1638350275346"
            }
            loading="lazy"
            lqip={{ active: true }}
          />
        </SwiperSlide>
        <SwiperSlide style={itemStyles}>
          <IKImage
            style={{ width: "100%", height: "100%" }}
            path={
              "/project-folder/compressed/HarryGold-min_0QpOtolQPY2.png?updatedAt=1638350276912"
            }
            loading="lazy"
            lqip={{ active: true }}
          />
          {/* <img
            style={{ width: "100%", height: "100%" }}
            src={HarryGold}
            alt=""
          /> */}
        </SwiperSlide>
        <SwiperSlide style={itemStyles}>
          <IKImage
            style={{ width: "100%", height: "100%" }}
            path={
              "/project-folder/compressed/Alnaut-min_r1IIE4UcJ.png?updatedAt=1638350246790"
            }
            loading="lazy"
            lqip={{ active: true }}
          />
          {/* <img style={{ width: "100%", height: "100%" }} src={Alnaut} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide style={itemStyles}>
          <IKImage
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            path={
              "/project-folder/compressed/AlnsDiamondItems-min_lJ_t5TCi7.png?updatedAt=1638350256543"
            }
            loading="lazy"
            lqip={{ active: true }}
          />
          {/* <img
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            src={AlnsDiamondItems}
            alt=""
          /> */}
        </SwiperSlide>
        <SwiperSlide style={itemStyles}>
          <IKImage
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            path={
              "/project-folder/compressed/FireAlnNew-min_Y9jHjzdyoNTf.png?updatedAt=1638350278022"
            }
            loading="lazy"
            lqip={{ active: true }}
          />
          {/* <img
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            src={FireAlnNew}
            alt=""
          /> */}
        </SwiperSlide>
        <SwiperSlide style={itemStyles}>
          <IKImage
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            path={
              "/project-folder/compressed/IronGold-min_bSOcMpZgY.png?updatedAt=1638350278986"
            }
            loading="lazy"
            lqip={{ active: true }}
          />
          {/* <img
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            src={IronGold}
            alt=""
          /> */}
        </SwiperSlide>
        <SwiperSlide style={itemStyles}>
          <IKImage
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            path={
              "/project-folder/compressed/Naruto-min_fX2W7V_DzLt.png?updatedAt=1638350277805"
            }
            loading="lazy"
            lqip={{ active: true }}
          />
          {/* <img
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            src={Naruto}
            alt=""
          /> */}
        </SwiperSlide>
        <SwiperSlide style={itemStyles}>
          <IKImage
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            path={
              "/project-folder/compressed/Rapper_WnoXa9T31Qn.png?updatedAt=1638351887720"
            }
            loading="lazy"
            lqip={{ active: true }}
          />
          {/* <img
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            src={Rapper}
            alt=""
          /> */}
        </SwiperSlide>
        <SwiperSlide style={itemStyles}>
          <IKImage
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            path={
              "/project-folder/compressed/Xeno_wzqLiBUdN.png?updatedAt=1638351887606"
            }
            loading="lazy"
            lqip={{ active: true }}
          />
          {/* <img
            style={{ width: "100%", height: "100%", filter: "blur(12px)" }}
            src={Xeno}
            alt=""
          /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ChoosenOnes;
