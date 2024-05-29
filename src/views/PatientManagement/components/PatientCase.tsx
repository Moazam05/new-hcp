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

const personData = [
  {
    caseId: "123456",
    product: "UDENYCA",
    patientName: "John Doe",
    caseType: "New",
    patientDOB: "01/01/1990",
    patientID: "A01",
    caseStatus: "OPEN",
    caseStartDate: "01/01/2021",
    caseEndDate: "01/01/2022",
    pharmacy: "Walgreens",
    pharmacyStatus: "Patient Declined Due To Unspecified Reason",
    appeals: "Cancelled",
    appealsStatus: "Formulary restriction patient does not have coverage",
    replacement: "Approved",
    replacementStatus: "Failed to meet Program Requirements",
  },
  {
    caseId: "789012",
    product: "NEULASTA",
    patientName: "Jane Smith",
    caseType: "Follow-up",
    patientDOB: "02/14/1985",
    patientID: "B02",
    caseStatus: "CLOSED",
    caseStartDate: "03/15/2021",
    caseEndDate: "04/15/2021",
    pharmacy: "CVS",
    pharmacyStatus: "Medication Not Available",
    appeals: "Approved",
    appealsStatus: "Patient met all coverage criteria",
    replacement: "Not Required",
    replacementStatus: "N/A",
  },
];

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
            margin: "10px 0 ",
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
            background="#F2F8FA"
          >
            {/* isSuccess */}
            {true && personData.length > 0 ? (
              personData
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row: any) => {
                  return (
                    <StyledTableRow
                      key={row.caseId}
                      //   onClick={() =>
                      //     navigate(`/practice-management/view-user/${row.id}`)
                      //   }
                      sx={{
                        cursor: "pointer",
                        background: "#E6F1F5",
                      }}
                    >
                      <StyledTableCell>{row?.caseId}</StyledTableCell>
                      <StyledTableCell>{row?.product}</StyledTableCell>
                      <StyledTableCell>{row?.patientName}</StyledTableCell>
                      <StyledTableCell>{row?.caseType}</StyledTableCell>
                      <StyledTableCell>{row?.patientDOB}</StyledTableCell>
                      <StyledTableCell>{row?.patientID}</StyledTableCell>
                      <StyledTableCell
                        sx={{
                          color: "#3CA714",
                          fontWeight: 700,
                        }}
                      >
                        {row?.caseStatus}
                      </StyledTableCell>
                      <StyledTableCell>{row?.caseStartDate}</StyledTableCell>
                      <StyledTableCell>{row?.caseEndDate}</StyledTableCell>
                      <StyledTableCell>{row?.pharmacy}</StyledTableCell>
                      <StyledTableCell>{row?.pharmacyStatus}</StyledTableCell>
                      <StyledTableCell>{row?.appeals}</StyledTableCell>
                      <StyledTableCell>{row?.appealsStatus}</StyledTableCell>
                      <StyledTableCell>{row?.replacement}</StyledTableCell>
                      <StyledTableCell>
                        {row?.replacementStatus}
                      </StyledTableCell>
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
