import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Layiheler2() {
  return (
    <>
      <div className="layiheler-section-top">
        <div className="layiheler-section-top-content">
          <h1>
            <span className="vertical-line">│</span>&nbsp;&nbsp;LAYIHƏLƏR
          </h1>
          <p className="layiheler-top-content-text">
            <span className="layiheler-top-content-text-span">Əsas Səhifə</span>
            &nbsp;&nbsp; > &nbsp; Layiheler
          </p>
        </div>
      </div>
      <div className="layiheler-navbar">
        <div className="layiheler-navbar-hamisi layiheler-navbar-element">Hamısı</div>
        <div className="layiheler-navbar-element">Tikinti</div>
        <div className="layiheler-navbar-element">Restavrasiya</div>
        <div className="layiheler-navbar-element">Layihələndirmə</div>
        <div className="layiheler-navbar-element">Texnikanın icarəsi</div>
        <div className="layiheler-navbar-element">Təmir</div>
        <div className="layiheler-navbar-element">Eksteryer və Landşaft</div>
      </div>
      <div className="Layihələr">
        

        <div className="layiheler-img">
          <div className="layiheler-photo1">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>
          </div>
          <div className="layiheler-photo2">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>
          </div>
          <div className="layiheler-photo3">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>          </div>
          <div className="layiheler-photo4">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>          </div>
        </div>
      </div>

      <div className="Layihələr">
        

        <div className="layiheler-img">
          <div className="layiheler-photo1">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>          </div>
          <div className="layiheler-photo2">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>          </div>
          <div className="layiheler-photo3">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>          </div>
          <div className="layiheler-photo4">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>          </div>
        </div>
      </div>
      <div className="Layihələr">
        

        <div className="layiheler-img">
          <div className="layiheler-photo1">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>          </div>
          <div className="layiheler-photo2">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>          </div>
          <div className="layiheler-photo3">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>          </div>
          <div className="layiheler-photo4">
            <div className="layihelər-text">Lorem ipsum dolor sit amet</div>
            <NavLink
              exact
              activeClassName="active"
              to="/layihelermore"
              className="layiheler-etrafli"
            >
              Ətraflı
            </NavLink>          </div>
        </div>
      </div>
    </>
  );
}

export default Layiheler2;
