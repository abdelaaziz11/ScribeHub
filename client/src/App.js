import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      Welcome to scribeHub app to share stories and chat with community
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
