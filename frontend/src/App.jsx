import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import UpdatePage from './pages/UpdatePage'
import Navbar from './components/Navbar'
import Logobar from "./components/Logobar";
import BrowsePage from "./pages/BrowsePage";
import InfoPage from "./pages/InfoPage";
import CreateUser from "./pages/CreateUser";
import AllUsers from "./pages/AllUsers";

function App() {

  return (
    <Box minH={"100vh"}>
      <Logobar /> {/* The logo and user login button will be here */}
      <Navbar />  {/* Classic navigation bar */}
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/create" element= {<CreatePage />} />
        <Route path="/update" element= {<UpdatePage />} />
        <Route path="/:requestedGame/:requestedType" element= {<BrowsePage />} />
        <Route path="/:productId/info" element= {<InfoPage />} />
        <Route path="/createUser" element= {<CreateUser />} />
        <Route path="/allUsers" element= {<AllUsers />} />
      </Routes>

    </Box>
  )
}

export default App
