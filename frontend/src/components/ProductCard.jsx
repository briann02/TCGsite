import { ViewIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, IconButton, Image, Text, Tooltip, Icon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const ProductCard = ({product}) => {

    const navigate = useNavigate();

    return (
        <Box 
        shadow='lg' 
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{transform: "translateY(-5px)", shadow: "xl"}}
        >
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='contain' />
            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>

                <Text fontWeight='bold' fontSize='xl' mb={4}>
                    ${product.price}
                </Text>

                <HStack spacing={2}>
                    <Tooltip label='Click to view product page'>
                        <IconButton icon={<ViewIcon/>} colorScheme='blue' onClick={() => navigate(`/${product._id}/info`)}/>
                    </Tooltip>
                    <Tooltip label='Click to add to cart'>
                        <IconButton icon={<Icon as={FontAwesomeIcon} icon={faShoppingCart} />} colorScheme='green' />
                    </Tooltip>
                </HStack>
            </Box>
        </Box>
    )
}

export default ProductCard