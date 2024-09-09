import{ Box, Heading, Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


export default function Home(){
    const navigate= useNavigate();
     function HandleClick(){
      navigate("/user")
     }
    return(
        <Box>
    <Heading as="h1" size="xl" textAlign="center" >TODO USER</Heading>
    <Button colorScheme="blue" variant="outline" onClick={HandleClick} ml="45%" >
      Get Users
     </Button>
     <Box>
      <Heading as="h2" size="xl" textAlign={"center"}>Welcome User!!!</Heading>
     </Box>
   </Box>
    )
    
}