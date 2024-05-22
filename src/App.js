import './Reset.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import DonLau from './components/DonLau';
import Destination from './components/Destination';
import Delly from './components/Delly';
import SleepyTime from './components/SleepyTime';
import Lavandaria from './components/Lavandaria';
import Barbers from './components/Barbers';


function App() {
  return (
    <BrowserRouter>
      
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/DonLau" element={<DonLau />}/>
          <Route path="/Destination" element={<Destination />}/>
          <Route path="/Delly" element={<Delly />}/>
          <Route path="/SleepyTime" element={<SleepyTime />}/>
          <Route path="/Lavandaria" element={<Lavandaria />}/>
          <Route path="/Barbers" element={<Barbers />}/>
        </Routes>

      </div>
      
    </BrowserRouter>
  );
}

export default App;
