import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import ContactForm from './Components/ContactForm/ContactForm'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <ContactForm/>
      <Footer/> 
    </div>
  );
}

export default App;
