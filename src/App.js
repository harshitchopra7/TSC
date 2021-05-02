import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Feeds from './components/Feeds/Feeds';
import { useSelector, useDispatch } from 'react-redux';
import { login, selectUser } from './components/features/userSlice';
import { auth } from './firebase';
import { useEffect } from 'react';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          mail: user.email,
          photoURL: user.photoURL
        }))
      }
    })
  }, [])

  return (

    

    <div className="App">
      <Router>
      {(!user) ? (
        <Route exact path='/'>
          <Navbar />
          <Homepage />
          <Footer />
        </Route>
    ) : (
        <Route path="/feeds">
          <Navbar />
          <Feeds />
        </Route>
    )
}
      </Router>
     
    </div>
    
  );
}

export default App;
