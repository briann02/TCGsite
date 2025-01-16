import { useState, useEffect } from 'react';
import { Container, Box, Button, VStack, Heading, Input, Select,
  useToast, InputGroup, InputRightElement, Table,
  Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Text, IconButton, Tooltip,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
  useDisclosure,} from '@chakra-ui/react';
import { useUserStore } from '../../store/user';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

const AllUsers = () => {

    const [updatedUser, setUpdatedUser] = useState({ 
        _id: '',
        username: '', 
        accessLevel: '', 
        address: '', 
        password: '' 
    });

    const {fetchUsers, users, deleteUser, updateUser} = useUserStore();
    const toast = useToast();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const { isOpen, onOpen, onClose } = useDisclosure();

    const accessLevelName = (level) => level === 1 ? "Customer" :
        level === 2 ? "Employee" : "Administrator";

    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);

    const handleOpenEdit = (user) => {
        setUpdatedUser({ 
            _id: user._id,
            username: user.username, 
            accessLevel: 
            user.accessLevel, 
            address: user.address, 
            password: user.password 
        });
        onOpen();
    };

    const handleUpdateUser = async (userId, updatedUser) => {
        const { success, message } = await updateUser(userId, updatedUser);
        onClose();
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: "User updated successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleDeleteUser = async (userId) => {
        const { success, message } = await deleteUser(userId);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Container maxW={"container.lg"}>

            <TableContainer>
                <Table variant='simple' colorScheme="blue">
                    <TableCaption fontSize='5xl' fontWeight='bold' placement='top'>
                        All Users
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Username</Th>
                            <Th>Access Level</Th>
                            <Th>Shipping Address</Th>
                            <Th>Password</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user) => (
                            <Tr key={user._id}>
                                <Td>{user.username}</Td>
                                <Td>{accessLevelName(user.accessLevel)}</Td>
                                <Td>{user.address}</Td>
                                <Td >{user.password}</Td>
                                <Td>
                                    <Tooltip label='Edit user'>
                                        <IconButton colorScheme='blue' onClick={() => handleOpenEdit(user)} icon={<EditIcon />} />
                                    </Tooltip>
                                </Td>
                                <Td>
                                    <Tooltip label='Delete user'>
                                        <IconButton colorScheme='red' icon={<DeleteIcon />} onClick={() => handleDeleteUser(user._id)}/>
                                    </Tooltip>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

            {/* Edit User Modal */} 
            <Modal isOpen={isOpen} onClose={onClose}> 
                <ModalOverlay /> 
                <ModalContent> 
                    <ModalHeader>
                        Edit User
                    </ModalHeader> 
                    <ModalCloseButton /> 
                    <ModalBody> 
                        <Input 
                            placeholder="Username" 
                            name="username" 
                            value={updatedUser.username} 
                            mt={5}
                            onChange={(e) => setUpdatedUser({ ...updatedUser, username: e.target.value })} 
                        /> 
                        <Select 
                            placeholder="Select Access Level" 
                            name='accessLevel' 
                            onChange={(e) => setUpdatedUser({ ...updatedUser, accessLevel: e.target.value })}
                            mt={5}
                            value={updatedUser.accessLevel}
                        >
                            <option value={1}>Customer</option>
                            <option value={2}>Employee</option>
                            <option value={3}>Administrator</option>
                        </Select>
                        <Input 
                            placeholder="Shipping Address" 
                            name="address" 
                            value={updatedUser.address} 
                            mt={5}
                            onChange={(e) => setUpdatedUser({ ...updatedUser, address: e.target.value })}
                        /> 
                        <InputGroup mt={5}> 
                            <Input 
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter Password' 
                            name='password' 
                            value={updatedUser.password} 
                            onChange={(e) => setUpdatedUser({ ...updatedUser, password: e.target.value })}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </ModalBody> 
                    <ModalFooter mt={5}> 
                        <Button colorScheme="green" onClick={() => handleUpdateUser(updatedUser._id, updatedUser)}> Save </Button> 
                        <Button colorScheme="red" ml={3} onClick={onClose}> Cancel </Button> 
                    </ModalFooter> 
                </ModalContent> 
            </Modal>
        </Container>
    )
}

export default AllUsers;
