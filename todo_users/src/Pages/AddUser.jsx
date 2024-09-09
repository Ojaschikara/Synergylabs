
import { Button,useToast, Container,Input,Select,Textarea,VStack } from "@chakra-ui/react"
import axios from "axios";
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
export default function AddUser(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: "",
//     email: "",
//     phone: "",
// id:Math.random()});

    const navigate=useNavigate()
    const toast=useToast()
    function HandleBack(){
        navigate("/user")
       }
    async function handleAddUser(){
        try {
            const newUser = {
                id:Math.random(),
                name: name,
                email: email,
                phone: phone,
                
              };
          
        
            const res = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
            if (res.status === 201) {
                setUsers([...users,res.data, newUser]);
              toast({
                title: "User added successfully!",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
              
              console.log(newUser)
              navigate("/user")
              
        //  ;
        // //  console.log(res)
        //  if(res.status===201){
        //     toast({
        //         title: 'User added succcessfully!',
        //         description: "Navigated to Tickets section",
        //         status: 'success',
        //         duration: 3000,
        //         isClosable: false,
        //       })
        //       console.log(user)
        //       setUser([...user, res.user]);
        //     navigate("/user")
        //  }
        }
    }
    

    catch (error) {
        console.log(error)
    }}

    return(
        <Container>
             
            <VStack spacing={8} my={5}>
            <Button colorScheme="blue" variant="outline" onClick={HandleBack}  >
               Go Back
           </Button>
            <Input
             placeholder="Enter Name"
             size="lg"
             value={name}
             onChange={(e)=>{
                setName(e.target.value);
             }}
              />
             <Textarea  
             placeholder="Enter email"
             size="lg"
             value = {email}
             onChange={(e)=>{
                setEmail(e.target.value);
             }}
              /> 
               <Textarea  
             placeholder="Enter phone"
             size="lg"
             value = {phone}
             onChange={(e)=>{
                setPhone(e.target.value);
             }}
              /> 
              
              <Button colorScheme="red" variant="outline" onClick={handleAddUser} >Create User </Button>
            </VStack>
          
            
        </Container>
        
        
    )

    }