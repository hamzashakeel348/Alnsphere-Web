import React, { useRef, useState, useEffect } from "react";
import Card from "../../Card/card.component";
import "./roadmap.styles.scss";
import CustomButton from "./../../Buttons/CustomButton/custombutton.component";
import { IKImage } from "imagekitio-react";

const Roadmap = () => {
  const [showMore, setShowMore] = useState(false);
  const [roadmapExtension, setRoadMapExtension] = useState(false);

  let progressBarHeight = "calc(100% - 303px)";
  if (showMore) {
    progressBarHeight = "calc(100% - 230px)";
  }
  if (roadmapExtension) {
    progressBarHeight = "calc(100% - 330px)";
  }

  return (
    <div className="roadmap">
      <h2 className="roadmap__title">Roadmap</h2>
      <div className="roadmap__btns">
        {roadmapExtension ? (
          <>
            <CustomButton accent onClick={() => setRoadMapExtension(false)}>
              Roadmap Launch
            </CustomButton>
            <CustomButton onClick={() => setRoadMapExtension(true)}>
              Roadmap Extension
            </CustomButton>
          </>
        ) : (
          <>
            <CustomButton onClick={() => setRoadMapExtension(false)}>
              Roadmap Launch
            </CustomButton>
            <CustomButton accent onClick={() => setRoadMapExtension(true)}>
              Roadmap Extension
            </CustomButton>
          </>
        )}
      </div>
      <div className="roadmap__stages">
        <div className="progress-bar" style={{ height: progressBarHeight }}>
          {roadmapExtension ? (
            <img
              className="first-hexa"
              src={
                "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
              }
              alt=""
              srcset=""
            />
          ) : (
            <>
              <IKImage
                path={
                  "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
                }
                className="first-hexa"
                loading="lazy"
                lqip={{ active: true }}
              />
              <IKImage
                path={
                  "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
                }
                className="second-hexa"
                loading="lazy"
                lqip={{ active: true }}
              />
              <IKImage
                path={
                  "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
                }
                className="third-hexa"
                loading="lazy"
                lqip={{ active: true }}
              />
              <IKImage
                path={
                  "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
                }
                className="fourth-hexa"
                loading="lazy"
                lqip={{ active: true }}
              />
              <IKImage
                path={
                  "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
                }
                className="fifth-hexa"
                loading="lazy"
                lqip={{ active: true }}
              />
              <IKImage
                path={
                  "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
                }
                className="sixth-hexa"
                loading="lazy"
                lqip={{ active: true }}
              />

              {showMore ? (
                <>
                  <IKImage
                    path={
                      "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
                    }
                    className="seventh-hexa"
                    loading="lazy"
                    lqip={{ active: true }}
                  />
                  <IKImage
                    path={
                      "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
                    }
                    className="eighth-hexa"
                    loading="lazy"
                    lqip={{ active: true }}
                  />
                  <IKImage
                    path={
                      "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
                    }
                    className="ninth-hexa"
                    loading="lazy"
                    lqip={{ active: true }}
                  />
                  <IKImage
                    path={
                      "/project-folder/img/normal_hexa_9D-6SKDjN.svg?updatedAt=1638249562501"
                    }
                    className="tenth-hexa"
                    loading="lazy"
                    lqip={{ active: true }}
                  />
                  {/* <img
                    className="seventh-hexa"
                    src={normal_svg}
                    alt=""
                    srcset=""
                  />
                  <img
                    className="eighth-hexa"
                    src={normal_svg}
                    alt=""
                    srcset=""
                  />
                  <img
                    className="ninth-hexa"
                    src={normal_svg}
                    alt=""
                    srcset=""
                  />
                  <img
                    className="tenth-hexa"
                    src={normal_svg}
                    alt=""
                    srcset=""
                  /> */}
                </>
              ) : null}
            </>
          )}
        </div>

        {roadmapExtension ? (
          <Card
            noTitle={true}
            text_content={`Extension of Roadmap with community feedback and experience`}
            card_number="1"
          />
        ) : (
          <>
            <Card
              text_content={`◆ AlnSphere game concept\n◆ Team building\n ◆ Aln base character modelling\n◆ Community growth ◆ limited whitelist\n◆ Whitepaper release`}
              card_number="1"
            />
            <Card
              text_content={`◆ Presale of the Aln NFTs\n◆ Whitelist & public sale\n◆ Aln abilities\n◆ Gallery release\n◆ 3D modelling`}
              card_number="2"
            />
            <Card
              text_content={`◆ Spheroxy invasions\n◆ New abilities\n◆ 50 ETH giveaway for holders`}
              card_number="3"
            />
            <Card
              text_content={`◆ Sphererocks Token (ERC◆20)\n◆ NFT staking (website) with rewards`}
              card_number="4"
            />
            <Card
              text_content={`◆ Items and gems implementation\n◆ The Grand Hall launches\n◆ Marketplace early access`}
              card_number="5"
            />
            <Card
              text_content={`◆ Game demo release\n◆ Aln staking\n◆ Dungeons / PvP / PvE / Quests / Guilds\n◆ Airdrops for holders (items/gems/potions)\n`}
              card_number="6"
            />
            {!showMore ? (
              <div className="showmore-btn-container">
                <button
                  className="showmore-btn"
                  onClick={() => setShowMore(true)}
                >
                  {/* <img src={showmorebtn} alt="showmorebtn"></img> */}
                  <IKImage
                    path={
                      "/project-folder/icons/show_more_7kxozyKRvQk.svg?updatedAt=1638249770229"
                    }
                    loading="lazy"
                    lqip={{ active: true }}
                  />
                  <span>Show More</span>
                </button>
              </div>
            ) : (
              <>
                <Card
                  text_content={`◆ Full game launch\n◆ Marketplace launch\n◆ Land implementation`}
                  card_number="7"
                />
                <Card
                  text_content={`◆ Game expansion\n◆ Community suggestions\n◆ New collectibles & features`}
                  card_number="8"
                />
                <Card
                  text_content={`◆ 3D model launch for the metaverse\n◆ Airdrop 3D models`}
                  card_number="9"
                />
                <Card
                  text_content={`Community upgrades\n◆ Buy land on Netvrk and provide realistic 3D Spheron\n◆ Mini games and meetups in the metaverse`}
                  card_number="10"
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Roadmap;
