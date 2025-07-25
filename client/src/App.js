import { Route, Routes } from 'react-router-dom';
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
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
    </div>
  );
}

export default App;
