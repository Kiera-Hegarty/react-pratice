// import ContactPage from './components/002-componentHierarchy/ContactPage';
// import FirstComponent from './components/001-components-into/FirstComponents';
import './css/App.css';
// import Manager from './components/003-props/Manager';
import ContactCardManager from './components/004-props-example/ContactCardManager';

function App() {
  return (
    <div className="App">
            {/* Our app is rendering whatever FirstComponent renders */}
            {/* <FirstComponent/>  */}
            {/* <ContactPage /> */}
            {/* <Manager/> */}
            <ContactCardManager/>
    </div>
  );
}

export default App;
