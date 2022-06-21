import './App.scss';
import Characters from './components/Characters';
import Burgers from './components/Burgers';
import Stores from './components/Stores';
import { BBContextProvider } from './context/context';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <BBContextProvider>
    <Characters></Characters>
    <Burgers></Burgers>
    <Stores></Stores>
    </BBContextProvider>
    </div>
  );
}

export default App;
