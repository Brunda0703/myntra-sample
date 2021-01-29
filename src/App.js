import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import CrouselView from "./components/Crousel/Crousel";
import DealCardViewPort from "./components/DealCardViewPort/DealCardViewPort";
import BrandInFocusViewPort from "./components/BrandInFocusViewPort/BrandInFocusViewPort";
import Footer from "./components/footer/Footer";

library.add(fas);

class App extends Component {
  state = {
    brand: [
      {
        title: "Deals of the day",
        sub_title: "show some brand love",
      },
      {
        title: "Deals of the day",
        sub_title: "show some brand love",
      },
    ],
  };
  render() {
    return (
      <div className="App container-fluid">
        <Header />

        <CrouselView />
        <DealCardViewPort />

        {this.state.brand.map((item, index) => {
          return (
            <BrandInFocusViewPort
              key={index}
              title={item.title}
              sub_title={item.sub_title}
            />
          );
        })}

        <Footer />
      </div>
    );
  }
}

export default App;
