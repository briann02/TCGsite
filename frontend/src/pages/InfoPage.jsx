import { Container, Flex, Box, Button, Image, Text, VStack, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useProductStore } from '../../store/product';
import { useParams } from 'react-router-dom';
import InfoCard from '../components/InfoCard';


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

    return (
        <Container maxW={"container.xl"} py={12}>
        <HStack justifyContent='center'>
            <Image 
                src={requestedProduct.image} 
                alt={requestedProduct.name} 
                boxSize='500px' 
                objectFit='contain'
            />

            <InfoCard product={requestedProduct}/>
        </HStack>
        </Container>
    )
}


export default InfoPage