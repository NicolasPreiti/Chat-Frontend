import { Route, Routes, Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { Home } from './pages/home/Home';
import { Rooms } from './pages/rooms/Rooms';
import { Room } from './components/room/Room';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <Flex direction={'column'}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salas" element={<Rooms />} />
        <Route path="/salas/:room" element={<Room />} />

        <Route
          path="/*"
          element={
            <div>
              <h1>Esta pagina no existe</h1>
              <Link to={'/'}>inicio</Link>
            </div>
          }
        />
      </Routes>
    </Flex>
  );
}

export default App;
