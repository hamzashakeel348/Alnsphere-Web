import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import CustomButton from "../../Buttons/CustomButton/custombutton.component";
import "./ImageFadeMaterial";
import "./hero.styles.scss";
import { IKImage } from "imagekitio-react";
import * as THREE from "three";

function FadingImage() {
  const ref = useRef();
  const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, [
    "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/back-min_iHuWQIZZ8.png?updatedAt=1638350241601",
    "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/NFT_Proyect_Illustration_2__1440x900__v2_diIesqYsu.jpg?updatedAt=1638350837437",
    "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/disp-min_zbIdLo0CQ.jpg?updatedAt=1638350257474",
  ]);
  const [hovered, setHover] = useState(false);
  useFrame(
    () =>
      (ref.current.dispFactor = THREE.MathUtils.lerp(
        ref.current.dispFactor,
        !!hovered,
        0.1
      ))
  );

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset > 40) {
        setHover(true);
      } else if (
        window.innerHeight + window.pageYOffset ==
        window.innerHeight
      ) {
        setHover(false);
      }
    };

    window.addEventListener("mouseup", handleScroll);
    window.addEventListener("mousedown", handleScroll);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseup", handleScroll);
      window.removeEventListener("mousedown", handleScroll);
    };
  }, []);

  return (
    <mesh>
      <planeGeometry args={[1700, 1000]} />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
      />
    </mesh>
  );
}

export default function HeroFadeImg() {
  let heroSection = useRef(null);
  let parallax_element = useRef(null);
  let animatable = useRef(null);
  let typewriterRef = useRef();
  let parallaxInstance;
  let base_character;
  let [leftMargin, setLeftMargin] = useState(0);
  let [topMargin, setTopMargin] = useState(0);
  let [elemHeight, setElemHeight] = useState("101");
  let [elemWidth, setElemWidth] = useState("100%");
  let [visibility, setVisibility] = useState("hidden");
  let [animation, setAnimation] = useState("");
  let [opacity, setOpacity] = useState("0");
  let [pointerEvents, setPointerEvents] = useState("none");
  let [bgPositon, setBgPosition] = useState("fixed");

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
      this.querySelectorAll(".layer").forEach((shift) => {
        const position = shift.getAttribute("data-depth");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
  }, [
    visibility,
    opacity,
    pointerEvents,
    animation,
    elemWidth,
    elemHeight,
    leftMargin,
    topMargin,
    setBgPosition,
  ]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset > 40) {
        parallax_element.current.style.display = "none";
        typewriterRef.current.style.display = "block";
      } else if (
        window.innerHeight + window.pageYOffset ==
        window.innerHeight
      ) {
        parallax_element.current.style.display = "block";
        typewriterRef.current.style.display = "none";
      }
    };

    window.addEventListener("mouseup", handleScroll);
    window.addEventListener("mousedown", handleScroll);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseup", handleScroll);
      window.removeEventListener("mousedown", handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="canvas-container">
        <Canvas
          camera={{
            position: [0, 0, 182],
            fov: 140,
            aspect: 1600 / 900,
            near: 0.1,
          }}
        >
          <Suspense fallback={null}>
            <FadingImage />
          </Suspense>
        </Canvas>
      </div>

      <div className="parallax-holder" ref={parallax_element}>
        <div className="parallax-scene" id="parallax_scene">
          <div data-depth="5" className="layer shot-character">
            <IKImage
              style={{ opacity: 0.7 }}
              path={
                "/project-folder/compressed/shot4_3AZpkXOcg.png?updatedAt=1638351108378"
              }
              loading="lazy"
              lqip={{ active: true }}
            />
          </div>
          <div data-depth="2" className="layer base-character">
            <IKImage
              path={
                "/project-folder/img/Main_Character_Eav45YWE8.png?updatedAt=1638249594075"
              }
              loading="lazy"
              lqip={{ active: true }}
            />
          </div>
          <div data-depth="5" className="layer dragon-image">
            <IKImage
              height={820}
              path={
                "project-folder/compressed/Dragon_MtUcY6S5r.png?updatedAt=1638351312790"
              }
              loading="lazy"
              lqip={{ active: true }}
            />
          </div>
        </div>
      </div>
      <div className="mobile-parallax-holder">
        <div class="night">
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
        </div>

        <img
          className="ainsphere-text"
          src={
            "https://ik.imagekit.io/pgtkpta0mpcw/project-folder/compressed/AlNSText-min_RntFmIcJ4.png?updatedAt=1638350234656"
          }
          alt="AINSPHERE"
        ></img>
      </div>

      <h1 className="Typewriter" ref={typewriterRef}>
        <span class="glitch" data-text="Error">
          Error
        </span>
      </h1>

      <div className="button">
        <CustomButton
          imageIcon={
            "/project-folder/icons/discord_JbBdPByYs.svg?updatedAt=1638249766988"
          }
          link={"https://discord.gg/YgeEwVa6Yn"}
        >
          Join Discord
        </CustomButton>
      </div>
    </section>
  );
}
