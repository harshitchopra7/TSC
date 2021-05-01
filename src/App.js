import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Feeds from './components/Feeds/Feeds';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Route exact path='/'>
          <Navbar />
          <Homepage />
          <Footer />
        </Route>

        <Route path="/feeds">
          <Navbar />
          <Feeds />
        </Route>

      </Router>
     
    </div>
  );
}

export default App;
