import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Addproject from './component/Addproject';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddProject" element={<Addproject />} />
      </Routes>


    </div>
  );
}

export default App;

