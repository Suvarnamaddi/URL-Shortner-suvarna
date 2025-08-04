import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import Profile from './Pages/LoginPage/Profile';
import UrlShortener from './Pages/UrlShortener';
import History from './Pages/History';



function App() {
  return (
    <Router>
        <HeaderMegaMenu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/Profile' element={<Profile/>} />
             <Route path='/UrlShortener' element={<UrlShortener/>} />
             <Route path='History' element={<History/>} />
        
            <Route element={<PrivateRoute/>}>

            </Route>
        </Routes>
    </Router>
  )
}

export default App
