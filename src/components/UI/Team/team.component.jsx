import React, { useEffect, useRef } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IKImage } from "imagekitio-react";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "./team.styles.scss";

import Thumb from "../Thumbs/thumb.component";

const Team = () => {
  let navigation_previous = useRef(null);
  let navigation_next = useRef(null);
  let sliderWrapper = useRef(null);

  let itemStyles = {
    width: "500px",
    height: "700px",
    overflow: "hidden",
    borderRadius: "25px",
  };

  let arrayOfTeamMembers = [
    {
      name: "Noynberg",
      image:
        "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/1_N5TyFI5em.png?updatedAt=1638350225653",
      designation: "Managing Director",
      description: `8 years of Software & Web Development Experience.
      Early Bitcoin investor and passionate in NFTs.
      `,
    },
    {
      name: "Young Paris",
      image:
        "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/2_TSKABjNOw.png?updatedAt=1638350227528",
      designation: "Advisor",
      description: `Singer, songwriter, performer and model based in New York and Los Angeles.
      Signed to Jay-Z, landing features in Essence, Vogue, and W Magazine.
      `,
    },
    {
      name: "Max Steele",
      image:
        "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/3_qskwRNJTw.png?updatedAt=1638350227754",
      designation: "Full Stack Developer",
      description: `Hybrid master for frontend and backend development.`,
    },
    {
      name: "Moon",
      image:
        "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/4_-4e9OzHT_.png?updatedAt=1638350229166",
      designation: "2D Lead Artist",
      description: "In love with details. Addicted to improvement.",
    },
    {
      name: "Tom Oxford",
      image:
        "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/5_Ld9AjQBxh.png?updatedAt=1638350228764",
      designation: "Graphics & Illustration",
      description: `Has worked for high-profile companies like Starbucks, Warner Bros, and others.`,
    },
    {
      name: "Matheo Veulner",
      image:
        "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/6_qkmm5W00Y.png?updatedAt=1638352221943",
      designation: "3D Lead Artist",
      description: `Over 500 character models have been made by his hands. Modelling, rigging and animation are his profession.`,
    },
  ];

  return (
    <div className="team">
      <div className="team__header">
        <div className="header-title">OUR TEAM</div>
        <div className="header-info nobars">
          <p>
            “Special thanks goes out to our employees and partners! We are
            always searching for experienced employees in development If you
            believe to fit into our team and provide value we are still hiring."
          </p>
          <p>Job applications to: job@alnsphere.com</p>
        </div>
      </div>
      <div className="team__timeline">
        <div className="profile-slides-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop
            navigation={{
              prevEl: navigation_previous.current,
              nextEl: navigation_next.current,
            }}
            onBeforeInit={(swiper) => {
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = navigation_previous.current;
                swiper.params.navigation.nextEl = navigation_next.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            pagination={{
              el: ".pagination-preview",
              clickable: true,
              renderBullet: (index, className) => {
                return `<div class=${className} >
                              <div class="thumb-wrapper">
                                  <div class="pagination-thumb" >
                                  <IKImage
                                  path="${arrayOfTeamMembers[index].image}"
                                  loading="lazy"
                                />
                                      //  <img  src=${arrayOfTeamMembers[index].image} alt="" />
                                  </div>
                              </div>
                              <div class="thumb__member-name"> ${arrayOfTeamMembers[index].name}</div>
                          </div>`;
              },
            }}
          >
            {arrayOfTeamMembers.map((item, index) => {
              if (item) {
                return (
                  <SwiperSlide key={index} style={itemStyles}>
                    <div className="slider-portion">
                      <div className="preview-box">
                        <div className="image-container">
                          {/* <img src={item.image} alt="" srcset="" /> */}
                          <LazyLoadImage
                            src={item.image}
                            effect="blur"
                            alt="sjdhkdashj"
                          />
                        </div>
                        <div className="name-bar">{item.name}</div>
                        <div className="designation-bar">
                          {item.designation}
                        </div>
                        <div className="seprator-container">
                          <span></span>
                        </div>
                      </div>
                      <div className="text-description nobars">
                        <p>{item.description}</p>
                      </div>
                      <div className="icons-bar nobars">
                        <IKImage
                          path={
                            "/project-folder/icons/phone_ml5J8yb8f.svg?updatedAt=1638249769906"
                          }
                          loading="lazy"
                          lqip={{ active: true }}
                        />
                        <IKImage
                          path={
                            "/project-folder/icons/mail_bXeJZd3Mw.svg?updatedAt=1638249768976"
                          }
                          loading="lazy"
                          lqip={{ active: true }}
                        />
                        <IKImage
                          path={
                            "/project-folder/icons/linkedin_-4Ak5QFcBjX.svg?updatedAt=1638249768412"
                          }
                          loading="lazy"
                          lqip={{ active: true }}
                        />
                        {/* <img src={phone_svg} alt="" srcset="" />
                        <img src={mail_svg} alt="" srcset="" />
                        <img src={linkedIn_svg} alt="" srcset="" /> */}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
        <div className="controllers-portion">
          <div className="controlling-btn">
            <div className="sliding-btns">
              <div className="btn-self">
                <div className="slide-next-btn" ref={navigation_next}>
                  <div className="target-btn">
                    <IKImage
                      path={
                        "/project-folder/img/next-icon_b3-R6V3vZmY.svg?updatedAt=1638249552298"
                      }
                      loading="lazy"
                      lqip={{ active: true }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="btn-self">
                <div className="slide-prev-btn" ref={navigation_previous}>
                  <div className="target-btn">
                    <IKImage
                      path={
                        "/project-folder/img/prev-icon_EQdgIsgbW-4.svg?updatedAt=1638249562742"
                      }
                      loading="lazy"
                      lqip={{ active: true }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-preview nobars" ref={sliderWrapper}>
            <>
              {arrayOfTeamMembers.map((item, index) => {
                console.log(index);
                return (
                  <Thumb
                    key={index}
                    index={index}
                    name={item.name}
                    image={item.image}
                  />
                );
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
