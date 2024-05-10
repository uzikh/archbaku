import React from 'react'
import "./style.css"

function L() {
  return (
<>
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
      </>  )
}

export default index