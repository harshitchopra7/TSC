import React from 'react';
import './BuySellSingle.css';
import PhoneIcon from '@material-ui/icons/Phone';

function BuySellSingle() {
    return (
        <div className="buysellsingle">
            <div className="bs_left">
                <div className="bs_left_title">
                    <p>Mini Drafter</p>
                </div>
                <div className="bs_left_desc">
                    <p>
                        njksdnjdfnsndndfksfdlksmfkldf
                        lkdvmknfjasnfajsnsjanfsajknfakssadjnknsdajnjnfsakjnsdadsadsdsaasddsadsadsasda
                    </p>
                </div>
                <div className="bs_left_pricephone">
                    <div className="bs_left_price">
                        <p className="rightmenu_add_desc">₹ 150</p>
                    </div>
                    <div className="bs_left_phone">
                        <a href="tel:9876543210" className="rightmenu_add_desc"><PhoneIcon style={{color: '#3f51b5'}} /><span>9876543210</span></a>
                    </div>
                </div>
            </div>
            <div className="bs_right">
                <img src="https://i0.wp.com/theconstructor.org/wp-content/uploads/2017/12/mini-drafter.jpg?resize=300%2C298&ssl=1" alt="" />
            </div>
        </div>
    )
}

export default BuySellSingle;
