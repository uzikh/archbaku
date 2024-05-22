import React from "react";
import "./layiheler-without-green-top.css";
export default function layihelerwithout(){
    return(
        <div className="Layihələr">
        <div className="layiheler-header">
          <h2 className="layiheler-h2">Layihələr</h2>
          <button className="layihe-btn">Hamısı</button>
        </div>

        <div className="layiheler-img">
          <div className="layiheler-photo1">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <div className="layiheler-etrafli">Ətraflı</div>
          </div>
          <div className="layiheler-photo2">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <div className="layiheler-etrafli">Ətraflı</div>
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
    )
}