import { Container, Flex, Box, Button, Image, Text, Card, CardBody, SimpleGrid, VStack } from '@chakra-ui/react';
import ProductCard  from '../components/ProductCard';
import { useEffect } from 'react';
import { useProductStore } from '../../store/product';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Featured Products
        </Text>
        <SimpleGrid 
          columns={{base: 1, md: 2, lg: 3}} 
          spacing={10}
          w={"full"}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product}/>
            ))}
        </SimpleGrid>
        
        {/* Display Message if there are no products */}
        {products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found
					</Text>
				)}
      </VStack>
    </Container>
  );
}

export default HomePage;
