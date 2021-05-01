import React from 'react';
import './FeedMid.css';
import Button from '@material-ui/core/Button';
import SingleFeed from '../SingleFeed/SingleFeed';

function FeedMid() {
    return (
        <div className="feedmid_main">
        <div className="feedmid">
            <div className="feedmid_top">
              <div className="feedmid_top_input">
                  <input  
                    placeholder="What would you like to ask/share?"
                  />
              </div>
              <div className="feedmid_top_btn">
                <Button className="post_btn" variant="contained" color="primary">
                    Post
                </Button>
              </div>
            </div>
            
        </div>
        <div className="feedmid_mid">
                <SingleFeed />
                <SingleFeed />
                <SingleFeed />
                <SingleFeed />
            </div>
        </div>
    )
}

export default FeedMid;
