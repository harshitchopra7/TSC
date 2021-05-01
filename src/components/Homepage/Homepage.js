import React from 'react';
import './Homepage.css';
import banner from '../images/banner.png';

function Homepage() {
    return (
        <div className="homepage">

            <p className="homepage_title1">Welcome to Takshshila's Student Community Portal</p>

            <div className="banner">
                <div className="banner_left">
                    <p className="homepage_title2">Keep up with the latest information, All in one place.</p>
                    <p className="homepage_title3">Communicate, Share knowledge, Buy needy things, Sell off non needy things, Provide Help, Get Help, Guide students, Get guided by students, know all the ins and outs of our college and plenty more.</p>
                    <p className="homepage_title4"><span style={{color: '#3f51b5', fontWeight: '700'}}>LogIn</span> and become an integral part of the Takshshila's growing Student Community.</p>
                </div>
                <div className="banner_right">
                    <img src={banner} alt="" />
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Homepage;
