import React from "react";
import "./faq.styles.scss";
import Card from "./../../Card/card.component";

const FAQ = () => {
  return (
    <div className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>

      <div className="faq__cards">
        <Card
          text_content={
            "Alns are Aliens from planet Spheron located deep in the Spheroxy. They are a brave nation, willing to challenge anyone in order to conquer lands."
          }
          title={"What are Alns?"}
          expansion
        />
        <Card
          text_content={`$Sphererock is an in-game “utility-token” (ERC-20) and the main currency of the Alns. It is meant only to enhance the gameplay experience and in no way used as a security. They are used for buying items, mounts, upgrading, and more.`}
          title={"What is a $Sphererock?"}
          expansion
        />
        <Card
          text_content={`There will only ever be 9,999 Alns. Each and every one will be unique with a set of hand-drawn traits.`}
          title={"How many Alns will be available?"}
          expansion
        />
        <Card
          text_content={`Upon release our NFT collection will be available for minting on our website. After that the NFTs can be bought on secondary markets like OpenSea.`}
          title={"Where can I buy an NFT?"}
          expansion
        />
        <Card
          text_content={`Yes, the Whitelist will be given out to active, and engaging community members. Also, there will be contests and other ways to get in, which will be announced soon.`}
          title={"Is there going to be a Whitelist?"}
          expansion
        />
        <Card
          text_content={`There will be item, mount, and 3D model airdrops, which holders can take part in. Furthermore, there will be a 50 ETH giveaway for our community. This, and much more will follow.`}
          title={"Are there benefits for holding the NFTs?"}
          expansion
        />
        <Card
          text_content={`Royalty fees for secondary sales of 5% will be split between our rewards pool for our community, and development pool, to ensure longevity and quality.`}
          title={"What are the royalty fees?"}
          expansion
        />
      </div>
    </div>
  );
};

export default FAQ;
