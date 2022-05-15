import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from '../../services/api.js'
import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

function User() {

  const {username} = useParams();

  const [data, setData] = useState([])

  console.log(username)

  useEffect(()=>{
    api.get(`users/${username}`)
    .then((response)=>{
      setData(response.data)
    })
    .catch((error)=>{
      console.log({GET: error})
    });
  }, [username])

     
    return (
      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        py={6}
        h="86vh"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          maxW={"400px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            h={"120px"}
            w={"full"}
            src={
              "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            objectFit={"cover"}
          />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              size={"xl"}
              src={data.avatar_url}
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {data.name}
              </Heading>
              <Text color={"gray.500"}>{data.bio}</Text>
              <Text color={"gray.500"}>{data.email}</Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{data.followers}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Seguidores
                </Text>
              </Stack>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{data.following}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Seguindo
                </Text>
              </Stack>
            </Stack>

            <Button
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
              Ver Repositórios
            </Button>
            <Link to='/consulta'><Button
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
              Pesquisar novamente
            </Button></Link>
          </Box>
        </Box>
      </Flex>
    );
}


export default User;
