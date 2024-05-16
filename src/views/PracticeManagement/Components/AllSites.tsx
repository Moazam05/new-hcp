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
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import useLocalStorageTimeout from "../../../hooks/useLocalStorageTimeout";
import { useGetLocationsQuery } from "../../../redux/api/locationApiSlice";
import OverlayLoader from "../../../components/Spinner/OverlayLoader";

const tableHead = ["Name", "Site of Service", "Address", "Phone", "Status"];

const AllSites = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [userMessage, setUserMessage] = useState(
    localStorage.getItem("userMessage")
  );

  useLocalStorageTimeout("userMessage", 5000, setUserMessage);

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
  const { data, isLoading, isSuccess } = useGetLocationsQuery({});

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
            justifyContent: "flex-end",
            marginBottom: "20px",
            "@media (max-width: 576px)": {
              marginTop: "40px",
            },
          }}
        >
          <PrimaryButtonTwo
            onClick={() => navigate("/practice-management/new-site")}
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
            rows={data?.data?.$values}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          >
            {isSuccess && data?.data?.$values.length > 0 ? (
              data?.data?.$values
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row: any) => (
                  <StyledTableRow
                    key={row.id}
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      navigate(`practice-management/view-site/${row.id}`)
                    }
                  >
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>{row.siteOfServiceID}</StyledTableCell>
                    <StyledTableCell>{row.address1}</StyledTableCell>
                    <StyledTableCell>{row.phone}</StyledTableCell>

                    <StyledTableCell>
                      {row.isActive ? "Active" : "Inactive"}
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
                    {data?.data?.$values?.length === 0
                      ? "No records found"
                      : ""}
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

export default AllSites;
