import { 
  Container, Flex, Button,
  Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <Container maxW={"50%"} px={"4"}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDirection={{base:"row", sm:"row"}}>
        {/*POKEMON PRODUCTS TAB */}
        <Menu>  
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Pokemon TCG
          </MenuButton>
          <MenuList>
            <MenuItem minH='40px' onClick={() => navigate("/pkm/all")}>
              <span>All Pokemon TCG Products</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/pkm/booster_box")}>
              <span>Booster Boxes</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/pkm/etb")}>
              <span>Elite Trainer Boxes</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/pkm/booster_bundle")}>
              <span>Booster Bundles</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/pkm/starter_deck")}>
              <span>Starter Decks</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/pkm/singles")}>
              <span>Singles</span>
            </MenuItem>
          </MenuList>
        </Menu>

        {/*YUGIOH PRODUCTS TAB */}
        <Menu>  
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Yu-Gi-Oh!
          </MenuButton>
          <MenuList>
            <MenuItem minH='40px' onClick={() => navigate("/ygo/all")}>
              <span>All Yu-Gi-Oh! Products</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/ygo/booster_box")}>
              <span>Booster Boxes</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/ygo/starter_deck")}>
              <span>Starter Decks</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/ygo/singles")}>
              <span>Singles</span>
            </MenuItem>
          </MenuList>
        </Menu>

        {/*MAGIC THE GATHERING PRODUCTS TAB */}
        <Menu>  
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Magic the Gathering
          </MenuButton>
          <MenuList>
            <MenuItem minH='40px' onClick={() => navigate("/mtg/all")}>
              <span>All Magic the Gathering Products</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/mtg/booster_box")}>
              <span>Booster Boxes</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/mtg/starter_deck")}>
              <span>Starter Decks</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/mtg/singles")}>
              <span>Singles</span>
            </MenuItem>
          </MenuList>
        </Menu>

        {/*SPORTS CARDS PRODUCTS TAB */}
        <Menu>  
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Sports Cards
          </MenuButton>
          <MenuList>
            <MenuItem minH='40px' onClick={() => navigate("/spt/all")}>
              <span>All Sports Cards Products</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/spt/booster_box")}>
              <span>Booster Boxes</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/spt/singles")}>
              <span>Singles</span>
            </MenuItem>
          </MenuList>
        </Menu>

        {/*ADMIN OPERATIONS TAB */}
        <Menu>  
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Admin Operations
          </MenuButton>
          <MenuList>
            <MenuItem minH='40px' onClick={() => navigate("/create")}>
              <span>Create Product</span>
            </MenuItem>
            <MenuItem minH='40px' onClick={() => navigate("/update")}>
              <span>Update/Delete Product</span>
            </MenuItem>
          </MenuList>
        </Menu>


      </Flex>
    </Container>
  )
}

export default Navbar
