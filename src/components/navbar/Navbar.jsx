import { Box, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function NavItem({ name, to }) {
  return (
    <Text color={'white'}>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : 'notActive')}
        to={to}
      >
        {name}
      </NavLink>
    </Text>
  );
}

export function Navbar() {
  return (
    <Box
      pos={'absolute'}
      zIndex={'1000'}
      w={'100%'}
      p={5}
      bg={'transparent'}
      color={'white'}
    >
      <Flex justify={'center'} gap={6} fontFamily={'poppins'}>
        <NavItem name="inicio" to="/" />
        <NavItem name="salas" to="/salas" />
      </Flex>
    </Box>
  );
}
