import React from 'react';
import '../css/header.css';

function Header() {
  return (
    <div className="home_header_center">
    <div>
      <div styles="border-radius: 0px" className="header_img_center">
        <div className="header_title">
          <h1>Welcome to Amnick!</h1>
          <h4>
            We are a combination of City <br />
            Leaders/Mayors from around the world.
          </h4>
          <div>
            <p>
              Whatever your life’s goals, <br /> our financial professionals

              can help design a strategy tailored to your specific needs.
            
            </p>
          </div>
          <button className="header_button">Explore</button>
        </div>
      </div>
    </div>
  </div>
    );
}

export default Header;