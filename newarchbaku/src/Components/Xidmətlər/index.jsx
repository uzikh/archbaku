import React from 'react'
import "./style.css"
import construction from '../../assets/images/Construction.svg'
import constructioncrane from '../../assets/images/ConstructionCrane.svg'
import blueprint from "../../assets/images/Blueprint.svg"
import excavator from '../../assets/images/excavator.svg'
import eksteryer from "../../assets/images/eksteryer.svg"
import repairtool from "../../assets/images/repairtool.svg"


function Xidmetler() {
  return (
    <>
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
          <div className="xidmetler-main2">

            
          <img src={constructioncrane} alt="" />
            <h4 className="xidmetler-main-title">Restavrasiya</h4>
            <p className="xidmetler-main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <div className="xidmetler-main-etrafli">Ətrafli  </div>
            </div>
          </div>
          <div className="xidmetler-main">
          <div className="xidmetler-main2">

          <img src={blueprint} alt="" />
            <h4 className="xidmetler-main-title">Layihələndirmə</h4>
            <p className="xidmetler-main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <div className="xidmetler-main-etrafli">Ətrafli  </div>
            </div>
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

<img src={eksteryer} alt="" />
<h4 className="xidmetler-main-title">Təmir</h4>
<p className="xidmetler-main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
<div className="xidmetler-main-etrafli">Ətrafli  </div>
</div></div>
          <div className="xidmetler-main">
          <div className="xidmetler-main2">

<img src={repairtool} alt="" />
<h4 className="xidmetler-main-title">Eksteryer və Landşaft dizaynı</h4>
<p className="xidmetler-main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
<div className="xidmetler-main-etrafli">Ətrafli </div>
</div>
          </div>
        </div>
      </div></>
    )
}

export default Xidmetler