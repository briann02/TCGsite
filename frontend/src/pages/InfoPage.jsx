import { Container, Flex, Box, Button, Image, Text, Card, CardBody, SimpleGrid, VStack } from '@chakra-ui/react';
import ProductCard  from '../components/ProductCard';
import { useEffect } from 'react';
import { useProductStore } from '../../store/product';


export const InfoPage = () => {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log("products", products);

    return (
        <Container maxW={"container.xl"} py={12}>
        
        </Container>
    )
}
