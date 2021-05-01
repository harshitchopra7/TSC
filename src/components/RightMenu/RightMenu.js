import React from 'react';
import './RightMenu.css';

function RightMenu() {
    return (
        <div className="rightmenu">
            <div className="rightmenu_top">
                <img src="https://www.targetadmission.com/img/logos/2775798976.png" alt="" />
                <p>Takshshila Institue of Engineering and Technology</p>
            </div>
            <div className="rightmenu_mid">
                <p className="rightmenu_add">Address : </p>
                <p className="rightmenu_add_desc">Sharda Mandir Road, Sharda Chowk, Ratan Nagar, Madan Mahal, Jabalpur, Madhya Pradesh 482001</p>
            </div>
            <div className="rightmenu_mid">
                <p className="rightmenu_add">Phone : </p>
                <p className="rightmenu_add_desc">076124 41352</p>
            </div>
        </div>
    )
}

export default RightMenu;
