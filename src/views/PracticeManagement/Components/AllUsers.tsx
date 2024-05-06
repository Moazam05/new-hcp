// React Imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// React Icons
import { IoBookOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
// Custom
import MUITable, {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/MUITable";
import PrimaryButtonTwo from "../../../components/PrimaryButton/PrimaryButtonTwo";
import Footer from "../../../components/Footer";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { useAllPersonsQuery } from "../../../redux/api/personApiSlice";
import OverlayLoader from "../../../components/Spinner/OverlayLoader";

const tableHead = [
  "Name",
  "User Type",
  "Admin Rights",
  "Email Address",
  "Last Activity",
  "Status",
];

const data = [
  {
    _id: "1",
    Name: "McGary, Leo",
    userType: "Provider",
    adminRights: "Yes",
    email: "lmcgary@austinclinic.com",
    lastActivity: "6/21/19",
    Status: "Active",
  },
  {
    _id: "2",
    Name: "Smith, Susan",
    userType: "Staff",
    adminRights: "No",
    email: "ssmith@austinclinic.com",
    lastActivity: "3/9/2023",
    Status: "Suspended",
  },
  {
    _id: "3",
    Name: "Jones, James",
    userType: "Provider",
    adminRights: "No",
    email: "jones@austinclinic.com",
    lastActivity: "11/11/2022",
    Status: "Deactivated",
  },
];

const AllUsers = () => {
  const navigate = useNavigate();

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

  // todo: GET ALL USERS API CALL
  const { data: personData, isLoading, isSuccess } = useAllPersonsQuery({});

  return (
    <SecondaryLayout>
      {isLoading && <OverlayLoader />}

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
            justifyContent: "space-between",
            marginBottom: "20px",
            "@media (max-width: 576px)": {
              marginTop: "40px",
            },
          }}
        >
          <Box
            sx={{
              color: "#414042",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              "@media (max-width: 576px)": {
                fontSize: "18px",
              },
            }}
            onClick={() => navigate("/practice-management")}
          >
            <Box
              sx={{
                color: "#B12029",
                fontSize: "30px",
                width: "21px",
                height: "28px",
              }}
            >
              <MdKeyboardArrowLeft />
            </Box>

            <Box
              sx={{
                fontSize: "24px",
                "@media (max-width: 576px)": {
                  fontSize: "18px",
                },
              }}
            >
              <h2>Users</h2>
            </Box>
          </Box>
          <PrimaryButtonTwo
            onClick={() => navigate("/practice-management/new-user")}
            sx={{
              width: "120px",
            }}
          >
            <FaPlus />
            <Box
              sx={{
                marginLeft: "5px",
              }}
            >
              New User
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
            rows={personData?.data?.$values}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          >
            {isSuccess && personData?.data?.$values.length > 0 ? (
              personData?.data?.$values
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row: any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>{`${row.lastName}, ${row.firstName}`}</StyledTableCell>
                    <StyledTableCell>{row.userType}</StyledTableCell>
                    <StyledTableCell>{row.adminRights}</StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                    {/* <StyledTableCell>{row.jobTitle}</StyledTableCell> */}
                    <StyledTableCell>{row.lastLoginDate}</StyledTableCell>
                    <StyledTableCell>
                      <Box
                        sx={{
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          navigate("/practice-management/view-user/1")
                        }
                      >
                        {row.status}
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
    </SecondaryLayout>
  );
};

export default AllUsers;
