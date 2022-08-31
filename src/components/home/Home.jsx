import { Box, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export function Home () {
  const navigate = useNavigate();

  const handleUsername = (evt) => {
    evt.preventDefault();
    const username = document.getElementById('username');
    sessionStorage.setItem('username', username.value);

    navigate('/room');
  };

  return (
    <Box bg={'gray.800'} w="100%" h={'100vh'} pt={14}>
      <Box
        id='waves'
        pos={'absolute'}
        top="0"
        w={'100%'}
        h={'100vh'}
        pt="40px"
        bgImage={"url('https://cdn.ipadizate.com/2022/01/WavesPurpleMac6K.png')"}
        bgSize="cover"
        bgPos={'center'}
        bgAttachment="fixed"
      />

      <Box pos={'relative'}>
        <Heading id='poppins' textAlign="center" mb={'20'} color={'white'}>
          Bienvenido al mejor chat en linea
        </Heading>
        <Box w={{ base: '90%', md: '50%', lg: '30%' }} m="auto" color={'white'}>
          <form id='poppins' onSubmit={handleUsername}>
            <FormControl>
              <FormLabel textAlign={'center'}>Ingrese un nombre de usuario</FormLabel>
              <Input id='username' type='text' />
              <Input type={'submit'} variant="filled" value={'A chatear!'} w={'100%'} mt={'4'} color="black" cursor={'pointer'}>
              </Input>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
