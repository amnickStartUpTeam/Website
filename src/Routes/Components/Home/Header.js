import React from "react";
import "../../css/HomeHeader.css";
import { Text } from "./containers/Language";

function Header() {
  return (
    <div className="home_header_center">
      <div>
        <div styles="border-radius: 0px" className="header_img_center">
          <div className="header_title">
            <h1>
              {" "}
              <Text tid="Welcome_message" />{" "}
            </h1>

            <h4>
              <Text tid="Header_message" />{" "}
            </h4>
            <div>
              <p>
                <Text tid="second_header_message" />{" "}
              </p>
            </div>
            <button className="header_button">
              <Text tid="Explore_message" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
