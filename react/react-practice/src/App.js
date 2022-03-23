// import ContactPage from './components/002-componentHierarchy/ContactPage';
// import FirstComponent from './components/001-components-into/FirstComponents';
// import LoginPage from './components/006-forms/LoginPage';
// import Zoo from './components/007-state-objects/Zoo';

// import ToDoManager from './components/008-state-array/toDoManager';
// import ShoppingManager from './components/008-state-array/ShoppingManager';

import Pokedex from './components/009-json-data/Pokedex.jsx';
import './css/App.css';
// import Manager from './components/003-props/Manager';
// import ContactCardManager from './components/004-props-example/ContactCardManager';
// import StateManager from './components/005-State/StateManager';

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
            <Pokedex/>
    </div>
  );
}

export default App;
