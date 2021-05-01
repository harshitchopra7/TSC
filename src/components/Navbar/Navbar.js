import React from 'react';
import './Navbar.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function Navbar() {
    
    const history = useHistory();

    const login = () => {
        history.push("/feeds");
    }

    return (
        <div className="nav">
            <div className="nav_left">
                <div className="nav_left_left">
                    <p>TSC</p>
                </div>
                <div className="nav_left_right">
                    <p>Takshshila</p>
                    <p>Student</p>
                    <p>Community</p>
                </div>
            </div>
            <div className="nav_right">
                {/* <div>
                    <Button color="primary">Hi, Harshit!</Button>
                </div> */}
                <Button onClick={login} variant="contained" color="primary">
                    Log In
                </Button>
            </div>
        </div>
    )
}

export default Navbar;
