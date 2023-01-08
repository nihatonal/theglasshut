import React from 'react';
import { Text } from "../../shared/context/Language";

import Cabin from '../../assets/images/homepage/cabins.png'
import VideoPlayer from '../../shared/UI/VideoPlayer';

import video_HD from "../../assets/videos/Beautiful_Places_to_Visit_in_Denmark_HD.mp4";
import video_FHD from "../../assets/videos/Beautiful_Places_to_Visit_in_Denmark_FHD.mp4";
import video_SD from "../../assets/videos/Beautiful_Places_to_Visit_in_Denmark_SD.mp4";

import Gawthorne_Hut_FHD from "../../assets/videos/Gawthorne_Hut_FHD.mp4";
import Gawthorne_Hut_HD from "../../assets/videos/Gawthorne_Hut_HD.mp4";
import Gawthorne_Hut_SD from "../../assets/videos/Gawthorne_Hut_SD.mp4";

import Frame_House_FHD from "../../assets/videos/Frame_House_FHD.mp4";
import Frame_House_HD from "../../assets/videos/Frame_House_HD.mp4";
import Frame_House_SD from "../../assets/videos/Frame_House_SD.mp4";

import './Cabins.css'
function Cabins(props) {
    return (
        <div className="section-container">
            <div className='cabins-wrapper'>
                <div className="cabins-top-content">
                    <div className="cabins-top-content-info">
                        <h4 className="home-section-title"><Text tid="homepage_cabins" /></h4>
                        <p className="home-section-desc"><Text tid="homepage_cabins_desc" /></p>
                        <a href="/thehut" className="home-section-btn"><Text tid="read_more" /></a>
                    </div>
                    <div className="cabins-top-content-img-wrapper">
                        <img src={Cabin} alt="cabin" />
                    </div>
                </div>
                <div className="cabins-media-galery">
                    <VideoPlayer video_HD={video_HD} video_FHD={video_FHD} video_SD={video_SD} />
                    <VideoPlayer video_HD={Gawthorne_Hut_HD} video_FHD={Gawthorne_Hut_FHD} video_SD={Gawthorne_Hut_SD} />
                    <VideoPlayer video_HD={Frame_House_HD} video_FHD={Frame_House_FHD} video_SD={Frame_House_SD} />
                </div>
            </div>
        </div>
    );
}

export default Cabins;