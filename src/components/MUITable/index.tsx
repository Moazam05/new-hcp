// MUI Imports
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E0E0E0",
    color: "#49454f",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface MUITableProps {
  tableHead: string[];
  children: React.ReactNode;
  rows?: any;
  rowsPerPage?: any;
  page?: any;
  handleChangePage?: any;
  handleChangeRowsPerPage?: any;
}

const MUITable: React.FC<MUITableProps> = ({
  tableHead,
  children,
  rows,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 495, overflowY: "auto" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {tableHead.map((header, index) => (
                <StyledTableCell align="left" key={index}>
                  {header}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
      {/* {rows?.length > 5 && ( */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <TablePagination
          rowsPerPageOptions={[2, 5, 10, 25]}
          component="div"
          count={rows?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      {/* )} */}
    </>
  );
};

export default MUITable;
