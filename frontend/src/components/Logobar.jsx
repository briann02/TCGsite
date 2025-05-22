import { Container, Flex , Text, Box, Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Logobar = () => {
  return (
    <Container maxW={"100%"} px={"4"} padding={"20px"}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box flex={"1"} textAlign={"center"}>
              <Text><Link to="/">TCG Site by Brian Nguyen</Link></Text>
          </Box>
          <Box textAlign={"center"}> 
            <Avatar src='https://bit.ly/broken-link' /> 
            <Text fontSize={"sm"}>Log In</Text> 
          </Box>
      </Flex>
    </Container>
  )
}

export default Logobar