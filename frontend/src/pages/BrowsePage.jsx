import { Container, Flex, Box, Button, Image, Text, Card, CardBody, SimpleGrid, VStack } from '@chakra-ui/react';
import ProductCard  from '../components/ProductCard';
import { useEffect } from 'react';
import { useProductStore } from '../../store/product';
import { useParams } from 'react-router-dom';

export const BrowsePage = () => {
    const { fetchProducts, products } = useProductStore();
    const { requestedGame, requestedType } = useParams();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log("products", products, "requestedType", requestedType, "requestedGame", requestedGame);  

    const filteredProducts = requestedType === 'all' ? products.filter( product => (product.game === requestedGame))
    : products.filter( product => (product.game === requestedGame && product.productType === requestedType));

    const typeMessage = requestedType === 'booster_box' ? "Booster Box" 
    : requestedType === 'etb' ? "Elite Trainer Box"
    : requestedType === 'booster_bundle' ? "Booster Bundle"
    : requestedType === 'singles' ? "Single Card"
    : requestedType === 'starter_deck' ? "Starter Deck"
    : "miscellaneous";
    
    const gameMessage = requestedGame === 'pkm' ? "Pokemon TCG" 
    : requestedGame === 'ygo' ? "Yu-Gi-Oh!"
    : requestedGame === 'mtg' ? "Magic the Gathering"
    : requestedGame === 'spt' ? "Sports Cards"
    : "Other Card";

    return (
        <Container maxW={"container.xl"} py={12}>
        <VStack spacing={8}>
            <Text
            fontSize={"30"}
            fontWeight={"bold"}
            textAlign={"center"}
            >
            {gameMessage} {typeMessage} Products
            </Text>
            <SimpleGrid 
            columns={{base: 1, md: 2, lg: 3}} 
            spacing={10}
            w={"full"}
            >
                {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product}/>
                ))}
            </SimpleGrid>
            
            {/* Display Message if there are no products */}
            {filteredProducts.length === 0 && (
                        <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
                            No {gameMessage} {typeMessage} products found
                        </Text>
                    )}
        </VStack>
        </Container>
    )
}

export default BrowsePage