import './App.css';
import Navbar from './components/Navbar/Navbar';
import logo from './logo.png';
import Login from './pages/Login/Login';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
