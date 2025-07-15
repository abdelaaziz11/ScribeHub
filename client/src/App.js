import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import ContactForm from './Components/ContactForm/ContactForm'
import Login from './Pages/Login/Login'

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Home/>
      <ContactForm/>
      <Login/>
      <Footer/> 
    </div>
  );
}

export default App;
