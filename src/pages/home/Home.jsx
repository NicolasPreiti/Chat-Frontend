import { useState } from 'react';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export function Home() {
  const [input, setInput] = useState();
  const navigate = useNavigate();

  const handleUsername = (evt) => {
    evt.preventDefault();
    const username = document.getElementById('username');

    if (username.value === '') {
      setInput('');
      return;
    }
    sessionStorage.setItem('username', username.value);

    navigate('/salas');
  };

  // Form error message
  const handleSelectName = (evt) => {
    setInput(evt.target.value);
  };
  const isError = input === '';

  return (
    <Box bg={'gray.800'} w="100%" minH={'100vh'} pt={32}>
      <Box
        pos={'absolute'}
        top="0"
        w={'100%'}
        h={'100%'}
        bgImage={
          "url('https://www.mundogatos.com/Uploads/mundogatos.com/ImagenesGrandes/los-mejores-chats-y-apps-para-amantes-de-los-gatos.jpg')"
        }
        bgSize="cover"
        bgRepeat={'no-repeat'}
        bgBlendMode={'primary'}
        bgPos={'center'}
        bgAttachment="fixed"
        bgColor={'primary'}
      />

      <Box
        pos={'relative'}
        w={{ base: '90%', md: '50%', lg: '25%' }}
        mx={'auto'}
      >
        <Heading
          as={'h1'}
          fontFamily={'poppins'}
          fontSize={{ base: '3xl', md: '5xl' }}
          textAlign="center"
          mb={'20'}
          color={'white'}
        >
          Bienvenido al mejor chat en linea
        </Heading>

        <Box fontFamily={'poppins'} color={'white'}>
          <form onSubmit={handleUsername}>
            <FormControl isInvalid={isError}>
              <FormLabel
                fontSize={{ base: 'md', md: 'lg' }}
                textAlign={'center'}
                w={'100%'}
              >
                Ingrese un nombre de usuario
              </FormLabel>
              <Input
                id="username"
                type="text"
                onChange={handleSelectName}
                fontSize={{ base: 'md', md: 'lg' }}
              />
              <Input
                type={'submit'}
                value={'A chatear!'}
                fontSize={{ base: 'md', md: 'lg' }}
                mt={'5'}
                color="black"
                bg={'white'}
                cursor={'pointer'}
                _hover={{ bgColor: 'primary', color: 'white' }}
              ></Input>
              {!isError ? (
                <></>
              ) : (
                <FormErrorMessage>No puede estar vacio</FormErrorMessage>
              )}
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
