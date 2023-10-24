import { Routes } from 'react-router'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Error from './pages/Error';


function App() {


  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/user/:userId" element={<Profile />} />
          </Routes>
        </Router>
  )
}

export default App
