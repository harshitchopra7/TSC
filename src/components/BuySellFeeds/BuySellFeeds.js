import React from 'react';
import LeftMenu from '../LeftMenu/LeftMenu';
import BuySellFeedsMid from '../BuySellFeedsMid/BuySellFeedsMid';
import RightMenu from '../RightMenu/RightMenu';

function BuySellFeeds() {
    return (
        <div className="feeds">
            <div className="feeds_left">
                <LeftMenu />
            </div>
            <div className="feeds_mid">
                <BuySellFeedsMid />
            </div>
            <div className="feeds_right">
                <RightMenu />
            </div>
        </div>
    )
}

export default BuySellFeeds;
