import React, { useEffect, useRef } from "react";
import CustomButton from "../../Buttons/CustomButton/custombutton.component";
import IconBox from "../../Buttons/IconBox/iconbox.component";
import "./navbar.styles.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IKImage } from "imagekitio-react";
import pdf from "../../../assets/pdf/Attachment_1638359682_compressed.pdf";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  let navref = useRef();

  useEffect(() => {
    const handler = () => {
      if (window.pageYOffset > 40) {
        navref.current.style.opacity = 1;
        navref.current.style.visibility = "visible";
      } else if (
        window.innerHeight + window.pageYOffset ==
        window.innerHeight
      ) {
        navref.current.style.opacity = 0;
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  });

  let toggleMenu = () => {
    var navbarHeight = document.querySelector(".navbar");
    var rightIconBox = document.querySelector(".navbar__right-icons-box");
    if (navbarHeight.style.height == "90px") {
      navbarHeight.style.height = "100vh";
      rightIconBox.style.visibility = "visible";
    } else {
      navbarHeight.style.height = "90px";
      rightIconBox.style.visibility = "hidden";
    }
  };

  // window.addEventListener('resize', function () {
  //   var navbarHeight = document.querySelector('.navbar');
  //   var rightIconBox = document.querySelector('.navbar__right-icons-box');
  //   if (window.innerWidth > 800) {
  //     navbarHeight.style.height = "90px";
  //     rightIconBox.style.visibility = "visible";
  //   } else {
  //     // navbarHeight.style.height = "90px";
  //     rightIconBox.style.visibility = "hidden";
  //     rightIconBox.style.zIndex = "-100";
  //   }
  // })

  return (
    <div on className="navbar" ref={navref}>
      <div className="mobile-navbar__logo">
        {/* <img src={SiteLogo} alt="logo" className="navbar__img" /> */}
        <IKImage
          path={
            "/project-folder/compressed/logo-min_pYsW57pF-.png?updatedAt=1638350267897"
          }
          className="navbar__img"
          loading="lazy"
          lqip={{ active: true }}
        />
      </div>
      <div className="navbar__icons">
        <div className="navbar__icons-box">
          <IconBox
            image={
              "/project-folder/compressed/twitter-min_o6sI-7h6a.png?updatedAt=1638350261339"
            }
            link={"https://twitter.com/AlnSphere"}
          />
          <IconBox
            image={
              "/project-folder/icons/discord_JbBdPByYs.svg?updatedAt=1638249766988"
            }
            link={"https://discord.gg/YgeEwVa6Yn"}
          />
          <IconBox
            image={
              "/project-folder/compressed/fileicon-min_NMS0fl6kn.png?updatedAt=1638350250276"
            }
            link={pdf}
            target="_blank"
          />
        </div>
      </div>
      <div className="navbar__logo">
        {/* <img src={SiteLogo} alt="logo" className="navbar__img" /> */}
        <IKImage
          path={
            "/project-folder/compressed/logo-min_pYsW57pF-.png?updatedAt=1638350267897"
          }
          loading="lazy"
          className="navbar__img"
          lqip={{ active: true }}
        />
      </div>
      <div className="navbar__right-icons">
        {/* <div className="menu" onClick={toggleMenu} >
          <img src={menuIcon} alt="menu icon" />
        </div> */}
        <div className="navbar__right-icons-box">
          <IconBox
            image={
              "/project-folder/icons/fort_A5jnIqSNA.svg?updatedAt=1638249768149"
            }
          />
          <IconBox
            image={
              "/project-folder/icons/marketplace_ZWerWNeEy.svg?updatedAt=1638249769328"
            }
          />
          <CustomButton saveText>Connect Wallet</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
