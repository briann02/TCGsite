import { useState } from 'react';
import { Container, Box, Button, VStack, Heading, Input, Select,
  useToast, InputGroup, InputRightElement} from '@chakra-ui/react';
import { useUserStore } from '../../store/user';

const CreateUser = () => {

  const [newUser, setNewUser] = useState({
    username: "",
    accessLevel: "",
    address: "",
    password: ""
  });

  const {createUser} = useUserStore();
  const toast = useToast();

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const handleAddUser = async () => {
    const {success, message} = await createUser(newUser);
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      })
      setNewUser({ username: "", accessLevel: "", address: "", password: ""});
      window.location.reload();
    }
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mt={5}>
          Add New User
        </Heading>

        <Box w={"full"} p={6} rounded={"lg"} shadow={'md'}>
          <VStack spacing={4}>
            <Input 
              placeholder='Username' 
              name='username' 
              value={newUser.username} 
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            />

            <Select placeholder="Select Access Level" name='accessLevel' onChange={(e) => setNewUser({ ...newUser, accessLevel: e.target.value })}>
              <option value={1}>Customer</option>
              <option value={2}>Employee</option>
              <option value={3}>Administrator</option>
            </Select>

            <Input 
              placeholder='Enter Shipping Address' 
              name='address' 
              value={newUser.address} 
              onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
            />

            <InputGroup>
                <Input 
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter Password' 
                name='password' 
                value={newUser.password} 
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>

            <Button colorScheme={'green'} onClick={handleAddUser} w={'full'}>
              Add User
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreateUser;
