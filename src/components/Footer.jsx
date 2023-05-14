import React from "react";
import { CiFacebook } from "react-icons/ci";

function Footer() {
  return (
    <footer className="Container_footer">
      <div className="Container_footer_logoContainer">
        <img src="" className="Contaienr_footer_logoContainer_logo" alt="" />
      </div>

      <div className="Container_footer_columns">
        <div className="Container_footer_columns_paragh">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          incidunt! Ratione facilis modi quaerat odio, deserunt recusandae
          earum, eum, quasi fugit rerum sed ullam atque? Cupiditate libero dicta
          facere sunt.
        </div>
        <div className="Container_footer_columns_paragh">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          incidunt! Ratione facilis modi quaerat odio, deserunt recusandae
          earum, eum, quasi fugit rerum sed ullam atque? Cupiditate libero dicta
          facere sunt.
        </div>
        <div className="Container_footer_columns_paragh">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          incidunt! Ratione facilis modi quaerat odio, deserunt recusandae
          earum, eum, quasi fugit rerum sed ullam atque? Cupiditate libero dicta
          facere sunt.
        </div>
      </div>

      <div className="Container_footer_social-media">
        <CiFacebook />
      </div>

      <div className="Container_footer_second-logo-container">
        <img src="" className="Container_footer_second-logo-container_logo" alt="Flores Group Logo" />
      </div>

    </footer>
  );
}

export default Footer;
