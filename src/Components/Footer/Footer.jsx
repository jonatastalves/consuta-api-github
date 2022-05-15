import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  
  const SocialButton = ({ children, label, href, }: {children: ReactNode, label: string, href: string }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  function Footer() {
    return (
     <footer>
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© Jonatas Torres Alves - Processo seletivo Sirius</Text>
            <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Github'} href={'https://github.com/jonatastalves'}>
                <FaGithub />
                </SocialButton>
                <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/jonatastalves/'}>
                <FaLinkedin />
                </SocialButton>
                <SocialButton label={'Whatsapp'} href={'https://api.whatsapp.com/send?phone=5521981578985'}>
                <FaWhatsapp />
                </SocialButton>
            </Stack>
            </Container>
        </Box>
    </footer>       
    );
  }

  export default Footer;