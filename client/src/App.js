import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePageContainer from "./containers/HomePageContainer";

function App() {


  return (
    <BrowserRouter>
      <HomePageContainer  />
    </BrowserRouter>
  );
}

export default App;
