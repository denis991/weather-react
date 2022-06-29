import './App.css';
import AnimePaga from './components/pages/AnimePaga';
import Navbar from './components/UI/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimePaga />
    </div>
  );
}

export default App;
