// import ContactPage from './components/002-componentHierarchy/ContactPage';
// import FirstComponent from './components/001-components-into/FirstComponents';
// import LoginPage from './components/006-forms/LoginPage';
// import Zoo from './components/007-state-objects/Zoo';

// import ToDoManager from './components/008-state-array/toDoManager';
// import ShoppingManager from './components/008-state-array/ShoppingManager';

// import Pokedex from './components/009-json-data/Pokedex.jsx';
import './css/App.css';
// import Manager from './components/003-props/Manager';
// import ContactCardManager from './components/004-props-example/ContactCardManager';
// import StateManager from './components/005-State/StateManager';
import Home from './components/011-routing/Home';
import About from './components/011-routing/About';
import Profile from './components/011-routing/Profile';
import Zoo from './components/011-routing/Zoo';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/011-routing/NavBar';
import Footer from './components/011-routing/Footer';



function App() {
  return (
    <div className="App">
            {/* Our app is rendering whatever FirstComponent renders */}
            {/* <FirstComponent/>  */}
            {/* <ContactPage /> */}
            {/* <Manager/> */}
            {/* <ContactCardManager/> */}
            {/* <StateManager/> */}
            {/* <LoginPage/> */}
            {/* <Zoo/> */}
            {/* < ShoppingManager/> */}
            {/* <Pokedex/> */}
            <Router>
              <NavBar/>
              <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/about" element={<About/>}/>
                <Route path = "/profile/:nameId" element={<Profile/>}/>
                <Route path = "/zoo" element={<Zoo/>}/>
              </Routes>
              <Footer/>
            </Router>
    </div>
  );
}

export default App;
