import React from "react";
import ErrorImage from "./assets/error-image.png";
import "./error.css";
export default function Error(){
    return(
        <div className="error-section">
            <h1 className="error-section-title">Axtardığınız Səhifə Tapılmadı</h1>
            <img src={ErrorImage} alt="" />
            <button className="error-section-button"> &lt;&nbsp; Əsas səhifəyə qayıt</button>
        </div>
    )
}