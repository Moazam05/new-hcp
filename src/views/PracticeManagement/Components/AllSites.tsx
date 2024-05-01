// React Imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// React Icons
import { IoBookOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
// Custom
import MainLayout from "../../../components/Layout/MainLayout";
import MUITable, {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/MUITable";
import PrimaryButtonTwo from "../../../components/PrimaryButton/PrimaryButtonTwo";
import Footer from "../../../components/Footer";

const tableHead = ["Name", "Site of Service", "Address", "Phone", "Status"];

const data = [
  {
    _id: "1",
    Name: "Westlake Clinic",
    SiteOfService: "Office",
    Address: "4121 Beecaves Road Austin TX 78708",
    Phone: "(512) 123-4567",
    Status: "Active",
  },
  {
    _id: "2",
    Name: "Zilker Park Clinic",
    SiteOfService: "On Campus-Outpatient Hospital",
    Address: "3456 South 5th Street Austin TX 78703",
    Phone: "(512 )456-7890",
    Status: "Deactivated",
  },
  {
    _id: "3",
    Name: "Zilker Park Clinic",
    SiteOfService: "Office",
    Address: "3456 South 5th Street Austin TX 78703",
    Phone: "(512 )456-7890",
    Status: "Active",
  },
];

const AllSites = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

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
    <MainLayout>
      <Box
        sx={{
          margin: "50px 200px 50px",
          "@media (max-width: 576px)": {
            margin: "20px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
            "@media (max-width: 576px)": {
              marginTop: "40px",
            },
          }}
        >
          <PrimaryButtonTwo
            onClick={() => navigate("/practice-management/new-site")}
          >
            <FaPlus />
            <Box
              sx={{
                marginLeft: "5px",
              }}
            >
              New Site
            </Box>
          </PrimaryButtonTwo>
        </Box>
        <Box
          sx={{
            margin: "10px 0",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
          }}
        >
          <MUITable
            tableHead={tableHead}
            rows={data}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          >
            {/* isSuccess */}
            {true && data.length > 0 ? (
              data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row: any) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell>{row.Name}</StyledTableCell>
                    <StyledTableCell>{row.SiteOfService}</StyledTableCell>
                    <StyledTableCell>{row.Address}</StyledTableCell>
                    <StyledTableCell>{row.Phone}</StyledTableCell>
                    <StyledTableCell>
                      <Box
                        sx={{
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          navigate("/practice-management/view-site/1")
                        }
                      >
                        {row.Status}
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
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
                    {data?.length === 0 ? "No records found" : ""}
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </MUITable>
        </Box>
      </Box>
      <Footer />
    </MainLayout>
  );
};

export default AllSites;
