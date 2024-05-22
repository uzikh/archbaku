import React from 'react'
import "./style.css"
import logo from "../../assets/logo.svg"
import whatsapp from  "../../assets/images/whatsapp.svg"
import linkedin from  "../../assets/images/linkedin.svg"
import instagram from "../../assets/images/instagram.svg"
import facebook from "../../assets/facebookfoot.svg"
import a from "../../assets/images/Rectangle11.svg"
import b from "../../assets/images/Rectangle13.svg"
import c from "../../assets/images/Rectangle15.svg"
import d from "../../assets/images/Rectangle9.svg"






function Footer() {
  return (
<> 
<div className="footer">
  <div className="first-column">
    <div className="first-column-first-row">

    <img src={logo} alt="" />
    </div>
    <div className="first-column-second-row">

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non velit sem est ipsum leo consequat ornare. Justo sit lacus, risus dictum.</p>
    </div>
    <div className="first-column-third-row">
      <img className="facebook-footer" src={facebook} alt="" />
      <img className="instagram-footer" src={instagram} alt="" />
      <img className="linkedin-footer" src={linkedin} alt="" />
      <img className="whatsapp-footer" src={whatsapp} alt="" />
    </div>
  </div>
  <div className="second-column">
    <div className="second-column-first-row">
      <h3 >Saytın xəritəsi</h3>

    </div>
    <div className="second-column-second-row">
      <li className="footer-navbar">Əsas səhifə</li>
      <li className="footer-navbar">Haqqımızda</li>
      <li className="footer-navbar">Layihələr</li>
      <li className="footer-navbar">Xidmətlər</li>

    </div>
    <div className="second-column-third-row">

    </div>
  </div>
  <div className='third-column'>

  <div className='third-column-first-row'>
    <h3>Son layihələr</h3>
  </div>
  <div className="third-column-first-image">
    <img className="footer-image" src={d} alt="" />
    <img className="footer-image" src={b} alt="" />
    <img className="footer-image" src={a} alt="" />
    <img className="footer-image" src={c} alt="" />

  </div>
  <div className="third-column-second-image">
    <img className="footer-image" src={d} alt="" />
    <img className="footer-image" src={b} alt="" />
    <img className="footer-image" src={a} alt="" />
    <img className="footer-image" src={c} alt="" />
  </div>

  </div>
</div>
</>
  )
}

export default Footer