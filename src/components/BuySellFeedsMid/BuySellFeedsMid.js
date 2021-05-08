import React, {useState, useEffect} from 'react';
import './BuySellFeedsMid.css';
import Button from '@material-ui/core/Button';
import SingleFeed from '../FeedMid/SingleFeed';
import { ControlCameraOutlined, NearMe } from '@material-ui/icons';
import { db } from '../../firebase'; 
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import firebase from 'firebase';
import BuySellSingle from './BuySellSingle';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { buySellData } from './buySellData';

function BuySellFeedsMid() {

  const user = useSelector(selectUser);

  const [itemName, setItemName] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [buySell, setBuySell] = useState([]);

  useEffect(() => {
      db.collection('buySell').orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => (
          setBuySell(snapshot.docs.map(doc => (
              {
                  id: doc.id,
                  data: doc.data()
              }
          )))
        ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault();    
 
    db.collection('buySell').add({
        itemName: itemName,
        itemDesc: itemDesc,
        itemPrice: itemPrice,
        userPhone: userPhone,
        itemImage: itemImage,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    toggle();

    setItemName('');
    setItemDesc('');
    setItemPrice('');
    setUserPhone('');
    setItemImage('');

  }

  const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('active');
        var blurr = document.getElementById("blurr");
        blurr.classList.toggle('active');
        var popup = document.getElementById("popup");
        popup.classList.toggle('active');
  }


    return (
        <div className="feedmid_main">
        <div id="popup" className="feedmid">
            <div className="feedmid_top">
              <div className="feedmid_top_input">
                  {/* <input  
                    placeholder="What would you like to Sell?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  /> */}
              </div>
              <div>
                  <p className="cross" onClick={toggle}>
                    &times;
                  </p>
              </div>
              <div className="feedmid_top_input">
                  <input  
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />
              </div>
              <div className="feedmid_top_input">
                  <input  
                    placeholder="Item Description"
                    value={itemDesc}
                    onChange={(e) => setItemDesc(e.target.value)}
                  />
              </div>
              <div className="feedmid_top_input">
                  <input  
                    placeholder="Item Price"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                  />
              </div>
              <div className="feedmid_top_input">
                  <input  
                    placeholder="Your phone number"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                  />
              </div>
              <div className="feedmid_top_input">
                  <input 
                    placeholder="Enter image URL"
                    value={itemImage}
                    onChange={(e) => setItemImage(e.target.value)}
                  />
              </div>
              <div className="feedmid_top_btnn">
                  <div className="feedmid_top_btnn_right">
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
            
        </div>
        <div id="blurr" className="sell_btn">
            <p>Sell off your non needy things and make some money!</p>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={toggle}>
                    Sell
            </Button>
        </div>
        <div id="blur" className="feedmid_mid">
            {/* {buySellData.map((buySellData) => (
                <BuySellSingle 
                    item_name={buySellData.item_name} 
                    item_description={buySellData.item_description}
                    item_price={buySellData.item_price}
                    item_phone={buySellData.item_phone}
                    item_image={buySellData.item_image}
                />
            ))} */}

            {buySell.map(({ id, data: { itemName, itemDesc, itemPrice, userPhone, itemImage } }) => (
                <BuySellSingle
                    key={id} 
                    itemName={itemName}
                    itemDesc={itemDesc}
                    itemPrice={itemPrice}
                    userPhone={userPhone}
                    itemImage={itemImage}
                />
            ))}

        </div>
      </div>
    )
}

export default BuySellFeedsMid;
