import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const users = [
  {
    id: 1,
    name: "Ishan",
  },
  {
    id: 2,
    name: "Senanayaka",
  },
];
const Users = () => {
  return (
    <Box
      sx={{
        width: 'calc(100% - 100px)',
        marginLeft: "auto",
        marginTop: "100px",
      }}
    >
      <UserForm />
      <UserTable rows={users} />
    </Box>
  );
};
export default Users;
