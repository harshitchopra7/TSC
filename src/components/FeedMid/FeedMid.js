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

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => (
      setPosts(snapshot.docs.map(doc => (
        {
          key: doc.id,
          data: doc.data()
        }
      )))
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault();    

    db.collection('posts').add({
      name: user.displayName,
      message: input,
      photoUrl: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
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
                  onClick={sendPost}
                >
                    Post
                </Button>
              </div>
            </div>
            
        </div>
        <div className="feedmid_mid">

          {posts.map(({ id, data:{ name, message, photoUrl }}) => (
            <SingleFeed 
              key={id}
              name={name}
              message={message}
              photo={photoUrl}
            />
          ))}

        </div>
      </div>
    )
}

export default FeedMid;
