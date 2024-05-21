import './Reset.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home />}/>
        </Routes>

      </div>
      
    </BrowserRouter>
  );
}

export default App;
