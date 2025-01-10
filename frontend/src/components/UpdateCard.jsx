import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, IconButton, Image, Modal, Text, Tooltip, useToast, useDisclosure, Input,
    ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, VStack, Button,
    NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select,
    Textarea} from '@chakra-ui/react'
import { useProductStore } from '../../store/product'
import { useState, useEffect } from 'react'

const UpdateCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const { deleteProduct, updateProduct } = useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const format = (val) => `$` + val;
    const parse = (val) => val.replace(/^\$/, '');

    const [gameSelectValue, setGameSelectValue] = useState(updatedProduct.game || '');
    const [typeOptions, setTypeOptions] = useState([]);

    useEffect(() => {
        // Dynamically update second select options based on the initial value of updatedProduct.game
        if (updatedProduct.game === 'pkm') {
            setTypeOptions([
                { label: 'Booster Box', value: 'booster_box' },
                { label: 'Elite Trainer Box', value: 'etb' },
                { label: 'Booster Bundle', value: 'booster_bundle' },
                { label: 'Single Card', value: 'singles' },
            ]);
        } else if (updatedProduct.game === 'ygo') {
            setTypeOptions([
                { label: 'Booster Box', value: 'booster_box' },
                { label: 'Booster Bundle', value: 'booster_bundle' },
                { label: 'Single Card', value: 'singles' },
            ]);
        } else if (updatedProduct.game === 'mtg') {
            setTypeOptions([
                { label: 'Booster Box', value: 'booster_box' },
                { label: 'Booster Bundle', value: 'booster_bundle' },
                { label: 'Single Card', value: 'singles' },
            ]);
        } else if (updatedProduct.game === 'spt') {
            setTypeOptions([
                { label: 'Booster Box', value: 'booster_box' },
                { label: 'Booster Bundle', value: 'booster_bundle' },
                { label: 'Single Card', value: 'singles' },
            ]);
        } else {
            setTypeOptions([]);
        }
    }, [updatedProduct.game]);

    const handleGameSelectChange = (event) => {
        const value = event.target.value;
        setGameSelectValue(value);
        setUpdatedProduct((prevProduct) => ({ ...prevProduct, game: value }));
        // Dynamically update second select options based on the first select value
        if (value === 'pkm') {
            setTypeOptions([
                { label: 'Booster Box', value: 'booster_box' },
                { label: 'Elite Trainer Box', value: 'etb' },
                { label: 'Booster Bundle', value: 'booster_bundle' },
                {label: 'Starter Deck', value: 'starter_deck'},
                { label: 'Single Card', value: 'singles' },
            ]);
        } else if (value === 'ygo') {
            setTypeOptions([
                { label: 'Booster Box', value: 'booster_box' },
                { label: 'Booster Bundle', value: 'booster_bundle' },
                {label: 'Starter Deck', value: 'starter_deck'},
                { label: 'Single Card', value: 'singles' },
            ]);
        } else if (value === 'mtg') {
            setTypeOptions([
                { label: 'Booster Box', value: 'booster_box' },
                { label: 'Booster Bundle', value: 'booster_bundle' },
                {label: 'Starter Deck', value: 'starter_deck'},
                { label: 'Single Card', value: 'singles' },
            ]);
        } else if (value === 'spt') {
            setTypeOptions([
                { label: 'Booster Box', value: 'booster_box' },
                { label: 'Booster Bundle', value: 'booster_bundle' },
                { label: 'Single Card', value: 'singles' },
            ]);
        } else {
            setTypeOptions([]);
        }
    };

    const handleDeleteProduct = async (productId) => {
        const { success, message } = await deleteProduct(productId);
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

    const handleUpdateProduct = async (productId, updatedProduct) => {
        const { success, message } = await updateProduct(productId, updatedProduct);
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
                description: "Product updated successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        >
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='contain' />
            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>

                <Text fontWeight='bold' fontSize='xl' mb={4}>
                    ${product.price}
                </Text>

                <Text fontWeight='bold' fontSize='xl' mb={4}>
                    {product.game === 'pkm' && 'Pokemon TCG'} 
                    {product.game === 'ygo' && 'Yu-Gi-Oh!'} 
                    {product.game === 'mtg' && 'Magic the Gathering'} 
                    {product.game === 'spt' && 'Sports Cards'}
                </Text>

                <Text fontWeight='bold' fontSize='xl' mb={4}>
                    {product.productType === 'booster_box' && 'Booster Box'} 
                    {product.productType === 'etb' && 'Elite Trainer Box'} 
                    {product.productType === 'booster_bundle' && 'Booster Bundle'} 
                    {product.productType === 'starter_deck' && 'Starter Deck'} 
                    {product.productType === 'singles' && 'Single Card'}
                </Text>

                <Text fontWeight='bold' fontSize='xl' mb={4}>
                    {product.stock} in stock
                </Text>

                <Text fontWeight='bold' fontSize='xl' mb={4}>
                    Description: {product.description}
                </Text>

                <HStack spacing={2}>
                    <Tooltip label='Edit product'>
                        <IconButton colorScheme='blue' onClick={onOpen} icon={<EditIcon />} />
                    </Tooltip>
                    <Tooltip label='Delete product'>
                        <IconButton colorScheme='red' icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} />
                    </Tooltip>
                </HStack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder='Name'
                                name='name'
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            />
                            <NumberInput
                                name='price'
                                value={format(updatedProduct.price)}
                                precision={2}
                                step={0.1}
                                min={0}
                                w={'100%'}
                                onChange={(valueString) => setUpdatedProduct({ ...updatedProduct, price: parse(valueString) })}
                            >
                                <NumberInputField placeholder='Price' />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>

                            <Select value={updatedProduct.game} placeholder="Select Game" name='game' onChange={handleGameSelectChange}>
                                <option value='pkm'>Pokemon TCG</option>
                                <option value='ygo'>Yu-Gi-Oh!</option>
                                <option value='mtg'>Magic the Gathering</option>
                                <option value='spt'>Sports Cards</option>
                            </Select>

                            <Select value={updatedProduct.productType} name='productType' onChange={(e) => setUpdatedProduct({ ...updatedProduct, productType: e.target.value })} disabled={!gameSelectValue}>
                                {typeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Select>

                            <NumberInput
                                name='stock'
                                value={updatedProduct.stock}
                                step={1}
                                min={0}
                                w={'100%'}
                                onChange={(valueString) => setUpdatedProduct({ ...updatedProduct, stock: valueString })}
                            >
                                <NumberInputField placeholder='Stock' />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            
                            <Textarea 
                                placeholder='Enter description for the product'
                                name='description'
                                value={updateProduct.description}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
                            />

                            <Input
                                placeholder='Image URL'
                                name='image'
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                            />
                        </VStack>
                        <ModalFooter>
                            <Button
                                colorScheme='blue'
                                mr={3}
                                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                            >
                                Update
                            </Button>
                            <Button variant='ghost' onClick={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
					</ModalBody>
                </ModalContent>
        </Modal>
    </Box>
  )
}

export default UpdateCard