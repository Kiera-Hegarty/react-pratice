import ContactPage from './components/002-componentHierarchy/ContactPage';
import FirstComponent from './components/001-components-into/FirstComponents';
import './css/App.css';
import Manager from './components/003-props/Manager';

function App() {
  return (
    <div className="App">
            {/* Our app is rendering whatever FirstComponent renders */}
            {/* <FirstComponent/>  */}
            {/* <ContactPage /> */}
            <Manager/>
    </div>
  );
}

export default App;
