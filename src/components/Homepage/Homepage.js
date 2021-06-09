import React from 'react';
import './Homepage.css';
import banner from '../images/banner.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

function Homepage() {

    const user = useSelector(selectUser);
    const history = useHistory();

    const goToHome = () => {
        history.push('/ask-share');
    }

    return (
        <div className="homepage">

            <p className="homepage_title1">Welcome to Takshshila's Student Community Portal</p>

            <div className="banner">
                <div className="banner_left">
                    <p className="homepage_title2">Keep up with all the latest happenings.</p>
                    <p className="homepage_title3">Communicate, Share knowledge, Buy needy things, Sell off non needy things, Provide Help, Get Help, Guide students, Get guided by students, know all the ins and outs of our college and plenty more.</p>
                    {(!user) ? (
                        <p className="homepage_title4"><span style={{color: '#3f51b5', fontWeight: '700'}}>LOGIN</span> and become an integral part of the Takshshila's growing Student Community.</p>
                    ) : (
                        <Button
                           variant="contained" color="primary"
                           onClick={goToHome}
                        >
                            Go to Home 
                        </Button>
                    )}
                    
                </div>
                <div className="banner_right">
                    <img src={banner} alt="" />
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Homepage;
