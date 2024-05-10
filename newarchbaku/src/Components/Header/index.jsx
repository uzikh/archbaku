import React from "react";
import Navbar from "./Navbar";
import phone from "../../assets/images/phone-solid1.svg";
import "./navbar.css";
import envelope from "../../assets/images/envelope-regular.svg";
import address from "../../assets/images/location-pin-solid.svg";
import facebook from "../../assets/images/facebook-f.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import mmc from "../../assets/images/Group 8.svg";
import stroitel from "../../assets/images/Rectangle5.svg";
import Layihələr from "../../assets/images/Group42.svg";
import building1 from "..//../assets/images/Rectangle9.svg";
import building2 from "..//../assets/images/Rectangle11.svg";
import building3 from "..//../assets/images/Rectangle13.svg";
import building4 from "..//../assets/images/Rectangle15.svg";
import xidmetlerimg from "..//../assets/images/xidmetler.svg";
import construction from "..//../assets/images/Construction.svg";
import constructioncrane from "..//../assets/images/ConstructionCrane.svg";
import blueprint from "..//../assets/images/Blueprint.svg";
import excavator from "..//../assets/images/excavator.svg";
import eksteryer from "..//../assets/images/repairtool.svg";
import repairtool from "..//../assets/images/eksteryer.svg";

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
            <p className="navbar-item">Əsas sehifə</p>
            <p className="navbar-item"> Haqqimizda</p>
            <p className="navbar-item">Layihələr</p>
            <p className="navbar-item">Xidmətlər</p>
            <p className="navbar-item">Vakansiyalar</p>
            <p className="navbar-item">Xəbərlər</p>
            <p className="navbar-item">Əlaqə</p>
          </div>
        </div>
      </div>
      <div className="stroyka">
        <h1 className="stroyka-title">LOREM IPSUM DOLAR SIT</h1>
        <p className="stroyka-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non velit sem
          est ipsum leo consequat ornare. Justo sit lacus, risus dictum. Nisi,
          quis orci viverra at quam porttitor et. Eu cras imperdiet nisl,
          feugiat lectus mi.
        </p>
        <div className="stroyka-button">Ətraflı</div>
      </div>
      <div className="haqqimizda">
        <div className="haqqimizda-left">
          <img className="haqqimizda-img" src={stroitel} alt="" />\
        </div>
        <div className="haqqimizda-right">
          <h1 className="haqqimizda-title">HAQQIMIZDA</h1>
          <div>____</div>
          <p className="haqqimizda-text">
            Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis heyəti
            ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın ən önəmli
            sahələrindən biri olan infrastruktur sektorunda daim yeniliklərə,
            inkişafa önəm vermişik.{" "}
          </p>
          <p className="haqqimizda-text">
            Bizim ən önəmli missiyamız yüksək keyfiyyətli tikinti və mühəndislik
            təcrübəmizdən istifadə edərək ən son texnikalarla müştərilərimizin
            etimadını qazanmaqdır.
          </p>
          <div className="haqqimizda-button">Ətrafli </div>
        </div>
      </div>
      <div className="Layihələr">
        {/* <img src="Layihələr" alt="" /> */}
        <div className="layiheler-header" >
          <h2 className="layiheler-h2">Layihələr</h2>
          <button className="layihe-btn">Hamısı</button>
        </div>

        <div className="layiheler-img">
          {/* /* <div className="layiheler-photo" src={building1} alt="" />
         <p className="photo-desc">Lorem ipsum dolor sit amet</p> 
          <img className="layiheler-photo" src={building2} alt="" />
          <p className="photo-desc">Lorem ipsum dolor sit amet</p>
          <img className="layiheler-photo" src={building3} alt="" />
          <p className="photo-desc">Lorem ipsum dolor sit amet</p>           <img className="layiheler-photo" src={building4} alt="" />           
          <p className="photo-desc">Lorem ipsum dolor sit amet</p>  */}
         

          <div className="layiheler-photo1">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <div className="layiheler-etrafli">Ətraflı</div>
          </div>
          <div className="layiheler-photo2">
          <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <div className="layiheler-etrafli" >Ətraflı</div>
          </div>
          <div className="layiheler-photo3">
          <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <div className="layiheler-etrafli">Ətrafli</div>
          </div>
          <div className="layiheler-photo4">
          <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <div className="layiheler-etrafli">Ətraflı</div>
          </div>
          </div>

        
      </div>
      <div className="xidmetler">
        Xidmətlər <br /><span className="xett">___</span>
        <div className="xidmetler-row1">
          <div className="xidmetler-main">
            <div className="xidmetler-main2">

            <img src={construction} alt="" />
            <h4 className="xidmetler-main-title">Tikinti</h4>
            <p className="xidmetler-main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <div className="xidmetler-main-etrafli">Ətrafli  </div>
            </div>
          </div>
          <div className="xidmetler-main">
            
            
          <img src={constructioncrane} alt="" />
            <h4 className="xidmetler-main-title">Restavrasiya</h4>
            <p className="xidmetler-main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <div className="xidmetler-main-etrafli">Ətrafli  </div>
          </div>
          <div className="xidmetler-main">
          <img src={blueprint} alt="" />
            <h4 className="xidmetler-main-title">Layihələndirmə</h4>
            <p className="xidmetler-main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <div className="xidmetler-main-etrafli">Ətrafli  </div>
          </div>
        </div>
        <div className="xidmetler-row2">
          <div className="xidmetler-main">
          <div className="xidmetler-main2">

<img src={excavator} alt="" />
<h4 className="xidmetler-main-title">Texnikanın icarəsi</h4>
<p className="xidmetler-main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
<div className="xidmetler-main-etrafli">Ətrafli  </div>
</div>
          </div>
          <div className="xidmetler-main"> <div className="xidmetler-main2">

<img src={repairtool} alt="" />
<h4 className="xidmetler-main-title">Təmir</h4>
<p className="xidmetler-main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
<div className="xidmetler-main-etrafli">Ətrafli  </div>
</div></div>
          <div className="xidmetler-main">
          <div className="xidmetler-main2">

<img src={eksteryer} alt="" />
<h4 className="xidmetler-main-title">Eksteryer və Landşaft dizaynı</h4>
<p className="xidmetler-main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
<div className="xidmetler-main-etrafli">Ətrafli  </div>
</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
