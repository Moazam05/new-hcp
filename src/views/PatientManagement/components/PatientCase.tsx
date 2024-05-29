import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { Box } from "@mui/material";
import Paragraph from "../../../components/Paragraph";
import MUITable, {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/MUITable";
import { IoBookOutline } from "react-icons/io5";
import { useState } from "react";

const tableHead = [
  "Case ID #",
  "Product",
  "Patient Name",
  "Case Type",
  "Patient D.O.B.",
  "Patient ID #",
  "Case Status",
  "Case Start Date",
  "Case End Date",
  "Pharmacy",
  "Pharmacy Status",
  "Appeals",
  "Appeals Status",
  "Replacement",
  "Replacement Status",
];

const personData = [{}];

const PatientCase = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <SecondaryLayout>
      <Box sx={{ margin: "20px 200px" }}>
        <Paragraph
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#414042",
            "@media (max-width: 576px)": {
              fontSize: "14px",
            },
          }}
        >
          Cases
        </Paragraph>

        <Box
          sx={{
            margin: "20px 0 ",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
          }}
        >
          <MUITable
            tableHead={tableHead}
            rows={personData}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          >
            {/* isSuccess */}
            {true && personData.length > 0 ? (
              personData
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row: any) => {
                  return (
                    <StyledTableRow
                      key={row.id}
                      //   onClick={() =>
                      //     navigate(`/practice-management/view-user/${row.id}`)
                      //   }
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      <StyledTableCell>{`${row.lastName}, ${row.firstName}`}</StyledTableCell>
                      <StyledTableCell>
                        {row.isAdmin ? "Yes" : "No"}
                      </StyledTableCell>
                      <StyledTableCell>{row.email}</StyledTableCell>
                      <StyledTableCell>{row.lastLoginDate}</StyledTableCell>
                      <StyledTableCell>{row.status}</StyledTableCell>
                    </StyledTableRow>
                  );
                })
            ) : (
              <StyledTableRow>
                <StyledTableCell
                  sx={{ height: "100px" }}
                  colSpan={tableHead?.length}
                  align="center"
                >
                  <Box
                    sx={{
                      fontSize: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <IoBookOutline />
                    {personData.length === 0 ? "No records found" : ""}
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </MUITable>
        </Box>
      </Box>
    </SecondaryLayout>
  );
};

export default PatientCase;
