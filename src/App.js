import "./App.css";
import Homepage from "./pages/Homepage/homepage.component";
import { IKContext } from "imagekitio-react";
import React from "react";

function App() {
  return (
    <IKContext
      publicKey="public_1BREq820KwhiqNZpc1O9bDF2OVA="
      urlEndpoint="https://ik.imagekit.io/pgtkpta0mpcw"
      loading="lazy"
    >
      <div className="App">
        <Homepage />
      </div>
    </IKContext>
  );
}

export default App;
