import React from "react";
import MaidenTower from "./assets/maiden-tower.png";
import VideoImage from "./assets/video-background-image.png";
import HighTower from "./assets/tower-image.png"
import "./layiheler-section.css";
export default function Layiheler() {
    return (
        <div className="layiheler-section">
            
            <div className="layiheler-section-bottom">
                <div className="layiheler-section-bottom-content">
                    <div className="layiheler-section-bottom-content-left">
                        <img className="video-image" src={VideoImage} alt="" />
                        <button className="video-play-button">▶</button>
                        <br />
                        <h2 className="layiheler-section-left-title">Layihenin adi</h2>
                        <br />
                        <p className="layiheler-section-left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet,
                            className="layiheler-section-left-text" ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa, euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque eu.
                            Dolor lectus tortor odio velit vestibulum praesent neque dolor.</p><br />
                        <p className="layiheler-section-left-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas.
                        </p><br />
                        <div className="layiheler-section-left-side-images">
                            <img className="layiheler-section-left-side-image" src={VideoImage} alt="" />
                            <img className="layiheler-section-left-side-image"  src={VideoImage} alt="" />
                        </div>
                        <br />
                        <p className="layiheler-section-left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet,
                            className="layiheler-section-left-text" ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa, euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque eu.
                            Dolor lectus tortor odio velit vestibulum praesent neque dolor.</p><br />
                        <p className="layiheler-section-left-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas.
                        </p><br />
                    </div>
                    <div className="layiheler-section-bottom-content-right">
                        <h2>Diger Layiheler</h2>
                        <div className="layiheler-section-right-desc">
                            <img className="layiheler-section-right-desc-little-image" src={VideoImage} alt="" />
                            <p className="layiheler-section-right-desc-text">Lorem ipsum dolor sit amet
consectetur adipiscing elit</p>
                        </div>
                        <div className="layiheler-section-right-desc">
                            <img className="layiheler-section-right-desc-little-image" src={HighTower} alt="" />
                            <p className="layiheler-section-right-desc-text">Lorem ipsum dolor sit amet
consectetur adipiscing elit</p>
                        </div>
                        <div className="layiheler-section-right-desc">
                            <img className="layiheler-section-right-desc-little-image" src={VideoImage} alt="" />
                            <p className="layiheler-section-right-desc-text">Lorem ipsum dolor sit amet
consectetur adipiscing elit</p>
                        </div>
                        <div className="layiheler-section-right-desc">
                            <img className="layiheler-section-right-desc-little-image" src={MaidenTower} alt="" />
                            <p className="layiheler-section-right-desc-text">Lorem ipsum dolor sit amet
consectetur adipiscing elit</p>
                        </div>
                        <div className="layiheler-section-right-desc">
                            <img className="layiheler-section-right-desc-little-image" src={HighTower} alt="" />
                            <p className="layiheler-section-right-desc-text">Lorem ipsum dolor sit amet
consectetur adipiscing elit</p>
                        </div>
                        
                        
                    </div>
                </div>

            </div>
        </div>
    )
}