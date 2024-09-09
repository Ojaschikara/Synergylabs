import{Routes, Route} from "react-router-dom";
import TodoPage from "../Pages/TodoPage";
import Home from "../Pages/Home";
import UserUpdate from "../Pages/UserUpdate";
import AddUser from "../Pages/AddUser";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<TodoPage />} />
            {/* <Route path="/user/:id" element={<UserCard />} /> */}
            <Route path="/user/edit/:id" element={<UserUpdate />} />
            <Route path="/user/adduser" element={<AddUser />} />
        </Routes>
    )
}