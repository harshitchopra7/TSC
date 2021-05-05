import React, {useState, useEffect} from 'react';
import './FeedMid.css';
import Button from '@material-ui/core/Button';
import SingleFeed from './SingleFeed';
import { ControlCameraOutlined } from '@material-ui/icons';
import { db } from '../../firebase'; 
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import firebase from 'firebase';

function FeedMid() {

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
                    placeholder="What would you like to ask/share?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
              </div>
              <div className="feedmid_top_btn">
                <Button type="submit" className="post_btn" 
                  variant="contained" 
                  color="primary"
              
                >
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
