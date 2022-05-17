import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    chakra,
    Box,
    useColorModeValue,
    Flex,
    Input,
    SimpleGrid,
    Button,
    InputGroup,
    InputRightElement,
    Image,
  } from "@chakra-ui/react";

function Consulta() {

  const navigate = useNavigate()
  const [inputValue, setValue] = useState('');

  

    return (
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={15}
          h={{base: '90%',sm: '86vh' }}
          _after={{
            bg: "brand.500",
            opacity: 0.25,
            pos: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
            content: '" "',
          }}
        >
          <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            px={{ base: 4, lg: 20 }}
            py={24}
          >
            
            <chakra.h1
              mb={6}
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color={useColorModeValue("brand.600", "gray.300")}
              lineHeight="shorter"
            >
              Pesquise um usuário do Github
            </chakra.h1>
            <chakra.form w="full" mb={6}>
              <Box display={{ base: "block", lg: "none" }}>
                <Input
                  onChange={(event)=>{
                    setValue(event.target.value)
                  }}
                  size="lg"
                  color="brand.900"
                  type="text"
                  placeholder="Insira o usuário..."
                  bg="white"
                  required="true"
                />
                <Button onClick={() => navigate(`/user/${inputValue}`)}
                  w="full"
                  mt={2}
                  color="white"
                  variant="solid"
                  colorScheme="brand"
                  size="lg"
                  type="submit"
                >
                  Pesquisar
                </Button>
              </Box>
              <InputGroup size="lg" w="full" display={{ base: "none", lg: "flex" }}>
                <Input
                    onChange={(event)=>{
                      setValue(event.target.value)
                  }}
                  size="lg"
                  color="brand.900"
                  type="text"
                  placeholder="Insira o usuário..."
                  bg="white"
                  required="true"
                />
                <InputRightElement w="auto">
                <Button onClick={() => navigate(`/user/${inputValue}`)}
                    color="white"
                    variant="solid"
                    colorScheme="brand"
                    size="lg"
                    type="submit"
                    roundedLeft={0}
                  >
                    Pesquisar
                  </Button>
                </InputRightElement>
              </InputGroup>
            </chakra.form>
            <chakra.p
              pr={{ base: 0, lg: 16 }}
              mb={4}
              fontSize="sm"
              color={useColorModeValue("brand.600", "gray.400")}
              letterSpacing="wider"
            >
              Ao pesquisar você poderá ver dados do usuário e seus repositórios mais populares.
            </chakra.p>
          </Flex>
          <Box>
            <Image
              src="https://www.bleepstatic.com/content/hl-images/2021/05/10/GitHub-headpic.jpg"
              alt="logo github azul"
              fit="cover"
              w="full"
              h={{ base: 64, md: "full" }}
              bg="gray.100"
              loading="lazy"
            />
          </Box>
        </SimpleGrid>
    )
}

export default Consulta;