import React from 'react';
import './Feeds.css';
import LeftMenu from '../LeftMenu/LeftMenu';
import FeedMid from '../FeedMid/FeedMid';
import RightMenu from '../RightMenu/RightMenu';

function Feeds() {
    return (
        <div className="feeds">
            <div className="feeds_left">
                <LeftMenu />
            </div>
            <div className="feeds_mid">
                <FeedMid />
            </div>
            <div className="feeds_right">
                <RightMenu />
            </div>
        </div>
    )
}

export default Feeds;
