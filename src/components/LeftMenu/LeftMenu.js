import React from 'react';
import './LeftMenu.css';
import Avatar from '@material-ui/core/Avatar';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreateIcon from '@material-ui/icons/Create';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useHistory } from 'react-router-dom';

function LeftMenu() {

    const user = useSelector(selectUser);
    const history = useHistory();

    const askshare = () => {
        history.push('ask-share');
    }

    const buysell = () => {
        history.push('/buy-sell');
    }

    return (
        <div className="leftmenu">
            <div className="leftmenu_top">
                <Avatar src={user?.photoURL} style={{width: '90px', height: '90px'}} >
                    {user?.displayName[0]}
                </Avatar>
                <p>{user?.displayName}</p>
            </div>
            <div className="leftmenu_mid">
                <div className="leftmenu_mid_elements" onClick={askshare}>
                    <CreateIcon className="leftmenu_icon_color" />
                    <p>Ask</p>
                </div>
                <div className="leftmenu_mid_elements" onClick={askshare}>
                    <LibraryAddIcon className="leftmenu_icon_color" />
                    <p>Share</p>
                </div>
                <div className="leftmenu_mid_elements" onClick={buysell}>
                    <AccountBalanceWalletIcon className="leftmenu_icon_color" />
                    <p>Buy</p>
                </div>
                <div className="leftmenu_mid_elements" onClick={buysell}>
                    <MonetizationOnIcon className="leftmenu_icon_color" />
                    <p>Sell</p>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu;
