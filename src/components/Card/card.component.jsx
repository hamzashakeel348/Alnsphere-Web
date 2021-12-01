import React, { useRef, useState } from "react";
import "./card.styles.scss";
import { IKImage } from "imagekitio-react";

const Card = ({ expansion, text_content, card_number, title, noTitle }) => {
  let cardContent = useRef(null);
  let [cardState, setCardState] = useState(false);
  function handleCardExpansion(e) {
    if (!cardState) {
      setCardState(true);
      // e.target.style.transform = "rotate(180deg)";
      cardContent.current.style.padding = "2rem 0rem";
      cardContent.current.style.height = "auto";
    } else {
      setCardState(false);
      e.target.style.transform = "rotate(0deg)";
      cardContent.current.style.padding = "0rem 0rem";
      cardContent.current.style.height = "0px";
    }
  }

  return (
    <div
      className={card_number ? "card" : "sec-card"}
      data-aos="fade-left"
      data-aos-duration="800"
    >
      <div className="card__header">
        {!noTitle ? (
          <div className="card__title">
            {card_number ? `Stage ${card_number}` : `${title}`}
          </div>
        ) : null}
        {expansion && (
          <div className="sec-card__exapansion" onClick={handleCardExpansion}>
            {/* <img
              src={template__toggler}
              alt=""
            /> */}
            <IKImage
              path={
                "/project-folder/icons/show_more_7kxozyKRvQk.svg?updatedAt=1638249770229"
              }
              loading="lazy"
              lqip={{ active: true }}
            />
          </div>
        )}
      </div>

      {card_number ? (
        <div className="card__content nobars" ref={cardContent}>
          {text_content}
        </div>
      ) : (
        <div className="sec-card__template nobars" ref={cardContent}>
          {text_content}
        </div>
      )}
    </div>
  );
};

export default Card;
