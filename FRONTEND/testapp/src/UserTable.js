import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const UserTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: "16px", color: "#000000", fontWeight: "bold"}}>ID</TableCell>
            <TableCell sx={{fontSize: "16px", color: "#000000", fontWeight: "bold"}}>Name</TableCell>
            <TableCell sx={{fontSize: "16px", color: "#000000", fontWeight: "bold"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow key={"row.id"} sx={{ color: "#000000" }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ margin: "0px 10px" }}
                    onClick={() => {}}
                    variant="contained"
                  >
                    Update
                  </Button>
                  <Button
                    sx={{ margin: "0px 10px" }}
                    onClick={() => {}}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                No Data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
