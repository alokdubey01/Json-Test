import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Navbar/Header';
import { Home } from './pages/Home/Home';
import { Consult } from './pages/Consult/Consult';
import Footer from './components/Footer/Footer';
import { Medicine } from './pages/Medicine/Medicine';
import Tests from './pages/Tests/Tests';
import {Cart} from './pages/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
    </>
  );
}

export default App;
