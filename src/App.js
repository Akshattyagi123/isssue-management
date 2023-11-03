import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Addproject from './component/Addproject';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Lssue from './component/Lssue';
import Loginpage from './component/Loginpage';
import AddIssue from './component/AddIssue';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddProject" element={<Addproject />} />
        <Route path="/LoginPage" element={<Loginpage />} />
        <Route path="/Lssue" element={<Lssue />} />
      </Routes>


    </div>

  );
}

export default App;

