import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api.js";
import './User.css'
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

function Reposit({ repos = []}, data){
  
  const [order, setOrder] = useState(1);
  const [columnOrder, setColumnOrder] = useState('stargazers_count');
  const navigate = useNavigate();
  
  const handleOrder = fieldName =>{
      setOrder(-order)
      setColumnOrder(fieldName)
  }

  repos = repos.sort((a,b) =>{
    return a[columnOrder] < b[columnOrder] ? order : -order;
  })

  return(
  <Box
        maxW={{base: '90%',sm: '25%' }}
        w={"full"}
        h={'70%'}        
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"} 
        rounded={"md"}
        overflowY="scroll"
        paddingRight="3em"
        fontSize={'0.8em'}

      >
        
        
          <table>
            <thead>
              <tr>
                <th>Repositório</th>
                <th>Linguagem</th>
                <th className="star" onClick={e => handleOrder('stargazers_count')}>Estrelas</th>
              </tr>
            </thead>
          <tbody>
            {
              repos?.map(({name, language, stargazers_count, owner})=>{
                return (
                <tr>
                  <td className="repo-name" onClick={() => navigate(`/user/${owner.login}/${name}`)}>{name}</td>
                  
                
                  <td>{language}</td>
                
                  <td>{stargazers_count}</td>
                </tr>
                )
              })
            }
            
          </tbody>
          </table>
      </Box>
  )
}

function User() {
  
  const { username } = useParams();
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  

  useEffect(() => {
    api.get(`users/${username}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert("Usuário não encontrado, pesquise novamente!");
      });
  }, [username]);

  useEffect(() => {
    api.get(`users/${username}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        alert("Nenhum repositório encontrado!");
      });
  }, [username]);
  
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      py={6}
      maxH={"100%"}
      h={{base: '90%',sm: '86vh' }}
      flexDirection={{base: 'column',sm: 'row' }}
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
        marginBottom="2em"
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "http://flf.edu.br/web/app/uploads/O-que-e-e-para-que-serve-a-programacao-Principal.jpg"
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
            <Text textAlign='center' color={"gray.500"}>{data.bio}</Text>
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
          <Link to="/consulta">
            <Button
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
            <Text marginTop="1em" textAlign='center' fontSize='0.8em' color={"gray.500"}>Você pode clicar ao lado em "Estrelas" para mudar a ordenação e também pode clicar no repositório escolhido para ver detalhes do mesmo!</Text>       
        </Box>
      </Box>
      <Reposit repos={repos}/>
      
    </Flex>
  );
}

export default User;
