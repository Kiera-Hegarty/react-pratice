// import ContactPage from './components/002-componentHierarchy/ContactPage';
// import FirstComponent from './components/001-components-into/FirstComponents';
import './css/App.css';
// import Manager from './components/003-props/Manager';
// import ContactCardManager from './components/004-props-example/ContactCardManager';
import StateManager from './components/005-State/StateManager';

function App() {
  return (
    <div className="App">
            {/* Our app is rendering whatever FirstComponent renders */}
            {/* <FirstComponent/>  */}
            {/* <ContactPage /> */}
            {/* <Manager/> */}
            {/* <ContactCardManager/> */}
            <StateManager/>
    </div>
  );
}

export default App;
