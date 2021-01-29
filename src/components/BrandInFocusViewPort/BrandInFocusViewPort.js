import React, { Component } from "react";
import data from "../../data";
import "./BrandInFocusViewPort.css";
import BrandFocusCard from "../BrandFocusCard/BrandFocusCard";

class BrandInFocusViewPort extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.sub_title}</p>
        <div className="bif_card_viewport">
          {data["brands-focus-images"].map((element) => {
            return (
              <BrandFocusCard
                image={element.image}
                brandName={element["brand-name"]}
                message={element.message}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BrandInFocusViewPort;
