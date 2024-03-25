import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";


const users = [
    {
        id: 1,
        name: "Shivam",
    },
    {
        id: 2,
        name: "Shubham",
    }
]
const Users = () => {
    return(
        <Box>
            <UserForm />
            <UserTable rows={users}/>
        </Box>
        
    );
} 
export default Users;