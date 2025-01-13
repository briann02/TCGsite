import { Box, Heading, HStack, IconButton, Image, Text, Tooltip, Icon, VStack, 
    NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
    Button, Card, CardHeader, CardBody, CardFooter, 
    Stack, StackDivider} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react'


export const InfoCard = ({product}) => {

    const gameDisplay = product.game === 'pkm' ? "Pokemon TCG" 
        : product.game === 'ygo' ? "Yu-Gi-Oh!"
        : product.game === 'mtg' ? "Magic the Gathering"
        : product.game === 'spt' ? "Sports Cards"
        : "Other Card"; 
    
    const typeDisplay = product.productType === 'booster_box' ? "Booster Box" 
        : product.productType === 'etb' ? "Elite Trainer Box"
        : product.productType === 'booster_bundle' ? "Booster Bundle"
        : product.productType === 'singles' ? "Single Card"
        : product.productType === 'starter_deck' ? "Starter Deck"
        : "";

    const descriptionDisplay = product.description === "" ? "No description provided": product.description;

    return (
        <Card variant='outline' borderColor='gray.400'>     
            <CardHeader>
                <Heading size='lg'> {product.name} </Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider borderColor='gray.300' />} spacing='5'>
                    <HStack justifyContent='space-between'>
                        <Text fontSize='2xl' fontWeight='bold'>
                            ${product.price.toFixed(2)}
                        </Text>
                        <Text fontSize='1xl'>
                            <strong>{ product.stock }</strong> in stock
                        </Text>
                    </HStack>
                    <HStack justifyContent='space-between'>
                        <Text fontSize='1xl'>
                            <strong>Product Type:</strong> { typeDisplay }
                        </Text>
                        <Text fontSize='1xl'>
                            <strong>Game:</strong> {gameDisplay}
                        </Text>
                    </HStack>
                    <Text fontSize='1xl'>
                        <strong>Description:</strong> {descriptionDisplay}
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
                        <Text marginRight='20px'>  of item(s) </Text>
                        <Button colorScheme='green' rightIcon={<Icon as={FontAwesomeIcon} icon={faShoppingCart} />}>Add to cart</Button>
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default InfoCard
