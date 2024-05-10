import React from 'react'
import "./style.css";
import s from "../../assets/images/Group42.svg"

function Haqqimizda() {
  return (
    <>
    <div className="haqqimizda">
        <div className="haqqimizda-left">
          <img className="haqqimizda-img" src={s} alt="logoo about" />\
        </div>
        <div className="haqqimizda-right">
          <h1 className="haqqimizda-title">HAQQIMIZDA</h1>
          <div>____</div>
          <p className="haqqimizda-text">
            Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis heyəti
            ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın ən önəmli
            sahələrindən biri olan infrastruktur sektorunda daim yeniliklərə,
            inkişafa önəm vermişik.
          </p>
          <p className="haqqimizda-text">
            Bizim ən önəmli missiyamız yüksək keyfiyyətli tikinti və mühəndislik
            təcrübəmizdən istifadə edərək ən son texnikalarla müştərilərimizin
            etimadını qazanmaqdır.
          </p>
          <div className="haqqimizda-button">Ətrafli </div>
        </div>
      </div>
    </>
)
}

export default Haqqimizda