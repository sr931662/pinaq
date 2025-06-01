import logo from './logo.svg';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/home/Home';
import './App.css';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Services from './components/services/services';
import Blog from './components/blog/blog';
import Careers from './components/career/career';
import Login from './components/login/login';
import Register from './components/register/register';
import { AuthContext, AuthProvider, UserProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Contact from './components/contact/contact';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/about-us' element={<About />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/contact-us' element={<Contact />} />
          <Route exact path='/careers' element={<Careers />} />
          <Route exact path='/about-us' element={<About />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/sign-up' element={<Register />} />
        </Routes>
        <Footer />
      </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;