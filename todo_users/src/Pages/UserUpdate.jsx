import{ Box, Heading, Button,Container,Input,VStack,useToast} from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function UserUpdate(){
   const {id} = useParams();
   const navigate= useNavigate();
   const toast= useToast();
   
   const [user,setUser] = useState({});
   
   async function fetchAndUpdateData(id){
    try {
      let res = await axios({
        method:"get",
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
      })
      let data=res?.data;
      setUser(data)
    } catch (error) {
      console.log("error while fetching",user);
    }
   }
   useEffect(()=>{
    fetchAndUpdateData(id);
   },[id]);

   async function editUser(){
    try {
      let updatedUser={
        name:user.name,
        email:user.email,
        phone:user.phone,
      };
      let res= await axios({
        method:"put",
        url:`https://jsonplaceholder.typicode.com/users/${id}`,
        data:updatedUser,
      });
      if (res.status ===200) {
        toast({
          title: 'User Updated..!',
          description: "Navigated to Users section",
          status: 'success',
          duration: 1000,
          isClosable: false,
          
        })
        navigate(`/user`);
      }
    } catch (error) {
      console.log(error)
    }
   }
   const{name, email, phone}= user;

    return(
     <>
    <Box>
    <Heading as="h1" size="xl" textAlign="center" >USER INFO</Heading>
    <Button colorScheme='blue' variant="outline" >
      Go Back!! 
     </Button>
   </Box>

   <Container>
      <VStack spacing={8} my={4}>
        <Input
          placeholder="Enter Name"
          size="lg"
          value={name || ""}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <Input
          placeholder="Enter Email"
          size="lg"
          value={email || ""}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
         <Input
          placeholder="Enter Phone"
          size="lg"
          value={phone || ""}
          onChange={(e) => {
            setUser({
              ...user,
              phone: e.target.value,
            });
          }}
        />
       
       
        
        <Button variant="outline" colorScheme="red" onClick={editUser}>
          Edit Ticket
        </Button>
      </VStack>
    </Container>
    </>

    )
}