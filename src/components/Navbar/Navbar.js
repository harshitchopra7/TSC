import React from 'react';
import './Navbar.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../../firebase';
import { login, logout, selectUser } from '../features/userSlice';

function Navbar() {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const history = useHistory();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photURL,
                    uid: user.uid
                }))
            }).catch(error => alert(error.message));
        alert("Successful");

        history.push("/feeds");
    }

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
        history.push('/');
        alert('Logged Out');
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
                {(!user)
                    ? (
                        <Button onClick={signIn} variant="contained" color="primary">
                            Log In
                        </Button>
                    )
                    : (
                        <div>
                            <div>
                                <Button color="primary">Hi, Harshit!</Button>
                            </div>

                            <Button onClick={signOut} variant="contained" color="primary">
                                Log Out
                            </Button>
                        </div>
                    )

                }
            </div>
        </div>
    )
}

export default Navbar;
