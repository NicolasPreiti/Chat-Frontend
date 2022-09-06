import { Box, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function NavItem ({ name, to }) {
  return (
    <Text borderBottom='1px solid transparent' color={'white'} _hover={{ borderBottom: '1px solid white' }}>
      <NavLink className={({ isActive }) => isActive ? 'active' : '' } to={to}>{name}</NavLink>
    </Text>
  );
}

export function Navbar () {
  return (
    <Box pos={'relative'} zIndex={'1000'} w={'100%'} p={5} bg={'black'} color={'white'}>
      <Flex justify={'center'} gap={4} fontFamily={'poppins'}>
        <NavItem name="inicio" to="/" />
        <NavItem name="salas" to="/salas" />
      </Flex>
    </Box>
  );
}
