import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Room } from './components/room/Room';

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room' element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
