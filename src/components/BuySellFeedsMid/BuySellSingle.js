import React from 'react';
import './BuySellSingle.css';
import PhoneIcon from '@material-ui/icons/Phone';
import { Avatar } from '@material-ui/core';

function BuySellSingle({ itemName, itemDesc, itemPrice, userPhone, itemImage }) {
    return (
        <div className="buysellsingle">
            <div className="bs_left">
                <div className="bs_left_title">
                    <p>{itemName}</p>
                </div>
                <div className="bs_left_desc">
                    <p>
                        {itemDesc}
                    </p>
                </div>
                <div className="bs_left_pricephone">
                    <div className="bs_left_price">
                        <p className="rightmenu_add_desc">₹ {itemPrice}</p>
                    </div>
                    <div className="bs_left_phone">
                        <a href="tel:`${userPhone}`" className="rightmenu_add_desc"><PhoneIcon style={{color: '#3f51b5'}} /><span>{userPhone}</span></a>
                    </div>
                </div>
            </div>
            <div className="bs_right">
                <img src={itemImage} alt="" />
            </div>
        </div>
    )
}

export default BuySellSingle;
