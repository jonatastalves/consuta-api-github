import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom"

function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Link to='/'><VisuallyHidden>Consulta Github</VisuallyHidden></Link>
            </chakra.a>
            <Link to='/'><chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Consulta Github
            </chakra.h1></Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link to='/Sobre'><Button variant="ghost">Sobre</Button></Link>
              <a href={'https://api.whatsapp.com/send?phone=5521981578985'}><Button variant="ghost">Whatsapp</Button></a>
            </HStack>
            <a href={'https://www.linkedin.com/in/jonatastalves/'}><Button colorScheme="brand" size="sm">
              Linkedin
            </Button></a>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link to='/sobre'><Button w="full" variant="ghost">
                  Sobre
                </Button></Link>
                <a href={'https://api.whatsapp.com/send?phone=5521981578985'}><Button w="full" variant="ghost">
                  Whatsapp
                </Button></a>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}

export default Navbar;
