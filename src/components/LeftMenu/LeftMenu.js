import React from 'react';
import './LeftMenu.css';
import Avatar from '@material-ui/core/Avatar';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreateIcon from '@material-ui/icons/Create';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

function LeftMenu() {
    return (
        <div className="leftmenu">
            <div className="leftmenu_top">
                <Avatar style={{width: '90px', height: '90px'}} />
                <p>Harshit Chopra</p>
            </div>
            <div className="leftmenu_mid">
                <div className="leftmenu_mid_elements">
                    <CreateIcon className="leftmenu_icon_color" />
                    <p>Ask</p>
                </div>
                <div className="leftmenu_mid_elements">
                    <LibraryAddIcon className="leftmenu_icon_color" />
                    <p>Share</p>
                </div>
                <div className="leftmenu_mid_elements">
                    <AccountBalanceWalletIcon className="leftmenu_icon_color" />
                    <p>Buy</p>
                </div>
                <div className="leftmenu_mid_elements">
                    <MonetizationOnIcon className="leftmenu_icon_color" />
                    <p>Sell</p>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu;
