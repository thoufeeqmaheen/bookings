
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Room from './Pages/Room'
import Booking from './Pages/Booking';
import Newbooking from './Pages/Newbooking';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/room' element={<Room/>}/>
    <Route path='/booking' element={<Booking/>} />
    <Route path='/newbooking' element={<Newbooking/>} />

  </Routes>

  </BrowserRouter>
  );
}

export default App;
