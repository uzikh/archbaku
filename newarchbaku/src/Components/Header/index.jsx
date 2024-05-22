import React from "react";
// import Navbar from "./Navbar";
import phone from "../../assets/images/phone-solid1.svg";
import "./navbar.css";
import envelope from "../../assets/images/envelope-regular.svg";
import address from "../../assets/images/location-pin-solid.svg";
import facebook from "../../assets/images/facebook-f.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import mmc from "..//..//assets//images/mmc-logo.svg";
import { Routes , Route , NavLink } from "react-router-dom";
import Main from "../Main";
import Layiheler from "..//Layiheler2";
import Xidmetler from  "../Xidmətlər";
import LayihelerMore from "..//..//layiheler-section";




function Header() {
  return (
    <>
      <div className="connections">
        <div className="container">
          <ul style={{ display: "flex", justifyContent: "space-between" }}>
            <li className="left-contact">
              <li>
                <img
                  className="tele"
                  style={{ width: "50px" }}
                  src={phone}
                  alt=""
                />
              </li>
              <p className="number">+994 51 987 65 43</p>
              <li>
                <img
                  className="mail"
                  style={{ width: "50px" }}
                  src={envelope}
                  alt=""
                />
              </li>
              <p className="gmail">info@archbaku.az</p>
              <li>
                <img
                  className="address"
                  style={{ width: "50px" }}
                  src={address}
                  alt=""
                />
              </li>
              <p className="baki">Bakı, Azərbaycan</p>
            </li>

            <li className="right-contact">
              <li>
                <img
                  className="facebook"
                  style={{ width: "50px" }}
                  src={facebook}
                  alt=""
                />
              </li>

              <li>
                <img
                  className="instagram"
                  style={{ width: "50px" }}
                  src={instagram}
                  alt=""
                />
              </li>

              <li>
                <img
                  className="linkedin"
                  style={{ width: "50px" }}
                  src={linkedin}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="linkedin"
                  style={{ width: "50px" }}
                  src={whatsapp}
                  alt=""
                />
              </li>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-items-main">
        <div className="navbar-items">
          <img className="mmc" src={mmc} alt="Not found" />
          <div className="navbar">
            <NavLink  exact activeClassName="active" to="/" className="navbar-item">Əsas sehifə</NavLink>
            <p className="navbar-item"> Haqqimizda</p>
            <NavLink activeClassName="active" to="/layiheler"  className="navbar-item">Layihələr</NavLink>
            <NavLink activeClassName="active" to="/xidmetler" className="navbar-item">Xidmətlər</NavLink>
            <NavLink className="navbar-item">Vakansiyalar</NavLink>
            <p className="navbar-item">Xəbərlər</p>
            <p className="navbar-item">Əlaqə</p>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/layiheler" element={<Layiheler />} />
        <Route path="/xidmetler" element={<Xidmetler />} />
        <Route path="/layihelermore" element={<LayihelerMore />} />
      </Routes>
      
    </>
  );
}

export default Header;
