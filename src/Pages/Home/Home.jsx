import React from "react"
import Prog from '../../Components/Prog.jsx'
import {
    Container,
    Heading,
    Stack,
    Text,
    Button,    
  } from '@chakra-ui/react';

function Home(){
    return(
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Consulta a repositórios do{' '}
            <Text as={'span'} color={'orange.400'}>
            Github
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Página sem fins lucrativos, feita como parte do processo seletivo da Sirius Interativa
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Vamos lá
            </Button>
            <Button rounded={'full'} px={6}>
              Leia Mais...
            </Button>
          </Stack>
          <Prog />
          </Stack>
      </Container>
    )
}

export default Home; 