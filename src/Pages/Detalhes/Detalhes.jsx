import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api.js";
import {
  Heading,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  } from "@chakra-ui/react";


function Detalhes() {

  const { username } = useParams();
  const { repositorio } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`repos/${username}/${repositorio}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log('erro')
      });
  }, [username]);
  
console.log(data)

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      py={6}
      h={{base: '90%',sm: '86vh' }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW={{base: '90%',sm: '25%' }}
        maxH={"auto"}
        w={"full"}
        h={"auto"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        marginRight={{base: '0',sm: '2em' }}
        textAlign={'center'}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://www.zbw-mediatalk.eu/wp-content/uploads/2015/09/github-cover.jpg"
          }
          objectFit={"cover"}
        />
        
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading marginBottom='0.5em' fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {data.name}
            </Heading>
            <Text textAlign='center' paddingBottom='1.0em' color={"gray.500"}>{data.description}</Text>
            <Text color={"gray.500"}>{data.language}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{data.stargazers_count}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Estrelas
              </Text>
            </Stack>
           
          </Stack>

          <a href={data.html_url}><Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Ver no Github
          </Button></a>
          
            <Button onClick={() => navigate(`/user/${username}`)}
              w={"full"}
              mt={2}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Voltar
            </Button>
          </Box>
      </Box>            
    </Flex>
  );
}

export default Detalhes;
