import FirstComponent from './components/FirstComponents';
import './css/App.css';

function App() {
  return (
    <div className="App">
            {/* Our app is rendering whatever FirstComponent renders */}
            <FirstComponent/> 
    </div>
  );
}

export default App;
