import{ Box, Heading,useToast,Button} from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
// import UserCard from "../Components/UserCard";
import axios from "axios";

export default function TodoPage(){
    const toast=useToast();
    const {id} =useParams()
    const[users,setUsers] = useState([]);
   const navigate=useNavigate();
   function HandleHome(){
    navigate("/")
   }
   function HandleAddUser(){
    navigate("/user/adduser")
   }

   useEffect(()=>{
    const fetchUsers=async()=>{
        try {
            let res= await axios({
                method:"get",
                url:"https://jsonplaceholder.typicode.com/users",
               
            });
            let data=res?.data;
            setUsers(data)
        } catch (error) {
            console.log("error in fetching users data",error)
        }
    }
    fetchUsers()
},[]);
async function HandleDelete(id){
    console.log(id)
    try {
     let res=await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
     
     if(res.status===200){
       
            setUsers(users.filter((user) => user.id !== id))
         

  
      await toast({
         title: 'User Deleted..!',
         description: "User Section",
         status: 'success',
         duration: 500,
         isClosable: false,
         colorScheme:"red"
       })

       
     }
    } catch (error) {
     console.log("error",error)
    }   
 }
   
   
    return(

<>
<div>
<Box>
     <Heading as="h1" size="xl" textAlign="center" >TODO USER</Heading>
 <Button colorScheme="blue" variant="outline" onClick={HandleHome}  >
      Go to Home
</Button>
<Button colorScheme="blue" variant="outline" onClick={HandleAddUser}  >
     Add User
</Button>
   </Box>
      <h1>Todo List</h1>
      <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                
        {users.map(user => (
          <tr key={user.id}>
           
            
                        <td> {user.name} </td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        
          
            <td>
            <Button variant='outline' colorScheme='yellow' onClick={()=>{navigate(`/user/edit/${user.id}`)}}>
             Edit Ticket
            </Button>
            </td>
            <td>
              <Button variant='outline' colorScheme='red'onClick={() => HandleDelete(user.id)} >
             Delete Ticket
            </Button>
            </td>
                    </tr>
            
         
        ))}
      
                   
                </tbody>
            </table>
     
    </div>
</>
   
    )
    
}