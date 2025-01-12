import { Container, Flex, Box, Button, Image, Text, Card, CardBody, SimpleGrid, VStack, HStack,
    NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Icon
 } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useProductStore } from '../../store/product';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


export const InfoPage = () => {
    const { fetchProducts, products } = useProductStore();
    const { productId } = useParams();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log("products", products);

    // Find the product with the matching productId 
    console.log('Product ID:', productId);
    const requestedProduct = products.find((requestedProduct) => requestedProduct._id === productId);

    const gameDisplay = requestedProduct.game === 'pkm' ? "Pokemon TCG" 
    : requestedProduct.game === 'ygo' ? "Yu-Gi-Oh!"
    : requestedProduct.game === 'mtg' ? "Magic the Gathering"
    : requestedProduct.game === 'spt' ? "Sports Cards"
    : "Other Card"; 

    const typeDisplay = requestedProduct.productType === 'booster_box' ? "Booster Box" 
    : requestedProduct.productType === 'etb' ? "Elite Trainer Box"
    : requestedProduct.productType === 'booster_bundle' ? "Booster Bundle"
    : requestedProduct.productType === 'singles' ? "Single Card"
    : requestedProduct.productType === 'starter_deck' ? "Starter Deck"
    : "";

    return (
        <Container maxW={"container.xl"} py={12}>
        <HStack justifyContent='center'>
            <Image 
                src={requestedProduct.image} 
                alt={requestedProduct.name} 
                boxSize='500px' 
                objectFit='contain'
            />

            <VStack>
                

                <HStack>
                    <VStack>
                        <Text fontSize='6xl' fontWeight='bold'>
                            {requestedProduct.name}
                        </Text>
                        <Text fontSize='2xl' fontWeight='bold'>
                            ${requestedProduct.price}
                        </Text>
                        <Text fontSize='1xl'>
                            <strong>{ requestedProduct.stock }</strong> in stock
                        </Text>
                        <Text fontSize='1xl'>
                            <strong>Product Type:</strong> { typeDisplay }
                        </Text>
                        <Text fontSize='1xl'>
                            <strong>Game:</strong> {gameDisplay}
                        </Text>
                        <Text fontSize='1xl'>
                            <strong>Description:</strong> {requestedProduct.description}
                        </Text>
                        <HStack justifyContent='center'>
                            <NumberInput 
                                name='numItems'
                                defaultValue={1}
                                step={1}
                                min={1}
                                w='25%'
                            >
                                <NumberInputField placeholder='#' />
                                <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Text marginRight='20px'> item(s) </Text>
                            <Button colorScheme='green' rightIcon={<Icon as={FontAwesomeIcon} icon={faShoppingCart} />}>Add to cart</Button>
                        </HStack>
                        
                    </VStack>
                </HStack>
            </VStack>
        </HStack>
        </Container>
    )
}


export default InfoPage