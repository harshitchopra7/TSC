import React, {useState, useEffect} from 'react';
import './BuySellFeedsMid.css';
import Button from '@material-ui/core/Button';
import SingleFeed from '../FeedMid/SingleFeed';
import { ControlCameraOutlined } from '@material-ui/icons';
import { db } from '../../firebase'; 
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import firebase from 'firebase';
import BuySellSingle from './BuySellSingle';
import PermMediaIcon from '@material-ui/icons/PermMedia';

function BuySellFeedsMid() {

  const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  const post = (e) => {
    e.preventDefault();    
 
    setInput('');

  }


    return (
        <div className="feedmid_main">
        <div className="feedmid">
            <div className="feedmid_top">
              <div className="feedmid_top_input">
                  <input  
                    placeholder="What would you like to Sell?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
              </div>
              <div className="feedmid_top_btnn">
                  <div className="feedmid_top_btnn_left">
                    <PermMediaIcon style={{color: '#3f51b5'}} />
                    <p>Add Media</p>
                  </div>
                  <div className="feedmid_top_btnn_right">
                    <Button type="submit" className="post_btn" 
                    variant="contained" 
                    color="primary"
                
                    >
                        Post
                    </Button>
                </div>
              </div>
            </div>
            
        </div>
        <div className="feedmid_mid">

          <BuySellSingle />
          <BuySellSingle />
          <BuySellSingle />
          <BuySellSingle />
        </div>
      </div>
    )
}

export default BuySellFeedsMid;
