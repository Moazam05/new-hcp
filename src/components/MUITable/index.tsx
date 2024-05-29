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

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#E0E0E0",
    color: "#49454f",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
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
  background?: string;
}

const MUITable: React.FC<MUITableProps> = ({
  tableHead,
  children,
  rows,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  background,
}) => {
  return (
    <>
      <TableContainer
        component={Paper}
        // sx={{ maxHeight: 495, overflowY: "auto" }}
        sx={{
          height: "auto",
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            borderRadius: "8px",
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#EBEBEB",
            borderRadius: "8px",
          },
        }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {tableHead.map((header, index) => (
                <StyledTableCell
                  align="left"
                  key={index}
                  sx={{
                    minWidth: "165px",
                    backgroundColor: background ? background : "#e0e0e0",
                  }}
                >
                  {header}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
      {rows?.length > 0 && (
        <Box
          sx={{
            backgroundColor: "#fff",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      )}
    </>
  );
};

export default MUITable;
