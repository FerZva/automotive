import React from "react";
import LogoFloresGroup from "../images/Logotipo-FGMOTORS.png";
import BawHeaderLogo from "../images/LOGOTIPO-BAW-TRANSPARENTE.png";


function Header() {
  return (
    <header className="Container_header">
      <div className="Container_header_sectiona">
        <div className="Container_header_sectiona_navleft">
          <a href="#" className="Container_header_sectiona_navleft_a">
            Flores Group
          </a>
          <span>|</span>
          <a href="#" className="Container_header_sectiona_navleft_a">
            Ultimas noticias
          </a>
          <span>|</span>
          <a href="#" className="Container_header_sectiona_navleft_a">
            CONTACTENOS
          </a>
          <span>|</span>
          <a href="#" className="Container_header_sectiona_navleft_a">
            Promociones
          </a>
        </div>

        <div className="Container_header_sectiona_navright">
          <select
            className="Container_header_sectiona_navright_dropdown"
            name="Container_header_sectiona_navright_dropdown"
            id="Container_header_sectiona_navright_dropdown"
          >
            <option value="0">Seleccione lugar</option>
            <option value="1">San Pedro Sula</option>
            <option value="2">Tegucigalpa</option>
          </select>
          <a href="#" className="Container_header_sectiona_navright_a">
            BUSCAR
          </a>
        </div>
      </div>

      <div className="Container_header_sectionb">
        <img
          src={LogoFloresGroup}
          className="Container_header_sectionb_logo"
          alt="Flores group logo"
        />

        <nav className="Container_header_sectionb_navleft">
          <a href="#" className="Container_header_sectionb_navleft_a">
            Cotiza
          </a>
          <a href="#" className="Container_header_sectionb_navleft_a">
            Servicio
          </a>
        </nav>

        <img
          src={BawHeaderLogo}
          alt="BAW Logo"
          className="Container_header_sectionb_baw-logo"
        />

        <nav className="Container_header_sectionb_navright">
          <a href="#" className="Container_header_sectionb_navright_a">
            Descubre BAW
          </a>
          <a href="#" className="Container_header_sectionb_navright_a">
            Usados
          </a>
          <a href="#" className="Container_header_sectionb_navright_a">
            SemiNuevos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
