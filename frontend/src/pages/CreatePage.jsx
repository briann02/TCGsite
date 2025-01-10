import { useState } from 'react';
import { Container, Box, Button, VStack, Heading, Input, Select, 
  NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
  useToast } from '@chakra-ui/react';
import { useProductStore } from '../../store/product';

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    game: "",
    productType: "",
    stock: "",
    image: ""
  });

  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, '');

  const [gameSelectValue, setGameSelectValue] = useState(''); 
  const [typeOptions, setTypeOptions] = useState([]); 
  
  const handleGameSelectChange = (event) => { 
    const value = event.target.value; 
    setGameSelectValue(value); 
    setNewProduct((prevProduct) => ({ ...prevProduct, game: value }));
    // Dynamically update second select options based on the first select value 
    if (value === 'pkm') { 
      setTypeOptions([
        {label: 'Booster Box', value: 'booster_box'}, 
        {label: 'Elite Trainer Box', value: 'etb'}, 
        {label: 'Booster Bundle', value: 'booster_bundle'},
        {label: 'Starter Deck', value: 'starter_deck'},
        {label: 'Single Card', value: 'singles'},
      ]); 
    } else if (value === 'ygo') { 
      setTypeOptions([
        {label: 'Booster Box', value: 'booster_box'},
        {label: 'Booster Bundle', value: 'booster_bundle'},
        {label: 'Starter Deck', value: 'starter_deck'},
        {label: 'Single Card', value: 'singles'},
      ]); 
    } else if (value === 'mtg') { 
      setTypeOptions([
        {label: 'Booster Box', value: 'booster_box'},
        {label: 'Booster Bundle', value: 'booster_bundle'},
        {label: 'Starter Deck', value: 'starter_deck'},
        {label: 'Single Card', value: 'singles'},
      ]); 
    } else if (value === 'spt') { 
      setTypeOptions([
        {label: 'Booster Box', value: 'booster_box'}, 
        {label: 'Booster Bundle', value: 'booster_bundle'},
        {label: 'Single Card', value: 'singles'},
      ]); 
    } else { 
      setTypeOptions([]); 
    } 
  };

  const {createProduct} = useProductStore();
  const toast = useToast();

  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct);
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
    }
    setNewProduct({ name: "", price: "", game: "", productType: "", stock: "", image: "" });
    // Refresh the page 
    window.location.reload();
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mt={5}>
          Create New Product
        </Heading>

        <Box w={"full"} p={6} rounded={"lg"} shadow={'md'}>
          <VStack spacing={4}>
            <Input 
              placeholder='Name' 
              name='name' 
              value={newProduct.name} 
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />

            <NumberInput 
              name='price' 
              value={format(newProduct.price)} 
              precision={2}
              step={0.1}
              min={0}
              w={'100%'}
              onChange={(valueString) => setNewProduct({ ...newProduct, price: parse(valueString) })}
            >
              <NumberInputField placeholder='Price' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Select placeholder="Select Game" name='game' onChange={handleGameSelectChange}>
              <option value='pkm'>Pokemon TCG</option>
              <option value='ygo'>Yu-Gi-Oh!</option>
              <option value='mtg'>Magic the Gathering</option>
              <option value='spt'>Sports Cards</option>
            </Select>

            <Select name='productType' onChange={(e) => setNewProduct({ ...newProduct, productType: e.target.value })} disabled={!gameSelectValue}>
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>

            <NumberInput 
              name='stock' 
              value={newProduct.stock}
              step={1}
              min={0}
              w={'100%'}
              onChange={(valueString) => setNewProduct({ ...newProduct, stock: valueString })}
            >
              <NumberInputField placeholder='Stock' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Input 
              placeholder='Image URL' 
              name='image' 
              value={newProduct.image} 
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />

            <Button colorScheme={'green'} onClick={handleAddProduct} w={'full'}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage;
