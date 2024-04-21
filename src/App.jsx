import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './pages/Footer/Footer';
import AboutUs from '../src/pages/AboutUs/AboutUs'
import NavigationBar from './pages/NavigationBar/NavigationBar';
import CompanyServices from './pages/CompanyServices/CompanyServices';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavigationBar/>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about_us'} element={<AboutUs />} />
            <Route path={'/company-services'} element={<CompanyServices />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
