// React Imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// React Icons
import { FaPlus } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import InputMask from "react-input-mask";
// Custom
import Footer from "../../../components/Footer";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import MUITable, {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/MUITable";
import PrimaryButtonTwo from "../../../components/PrimaryButton/PrimaryButtonTwo";
import OverlayLoader from "../../../components/Spinner/OverlayLoader";
// Redux
import { useGetLocationsQuery } from "../../../redux/api/locationApiSlice";
import { useGetSiteOfServiceQuery } from "../../../redux/api/utilsApiSlice";

const tableHead = ["Name", "Site of Service", "Address", "Phone", "Status"];

const AllSites = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [userMessage, setUserMessage] = useState("");

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // todo: 1) GET ALL USERS API CALL
  const { data, isLoading, isSuccess } = useGetLocationsQuery({});

  // todo: GET SITE OF SERVICE API CALL
  const { data: siteOfServiceData, isLoading: siteOfServiceLoading } =
    useGetSiteOfServiceQuery({});

  const siteOfServiceName = (id: string) => {
    const name = siteOfServiceData?.$values.find((ser: any) => ser.id === id);
    return name;
  };

  useEffect(() => {
    const message = window.localStorage.getItem("message");
    if (message) {
      setUserMessage(message);
      const timer = setTimeout(() => {
        setUserMessage("");
        window.localStorage.removeItem("message");
      }, 4000);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.localStorage.getItem("message")]);

  return (
    <SecondaryLayout>
      {(isLoading || siteOfServiceLoading) && <OverlayLoader />}

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
        <Box>
          {userMessage && (
            <Box
              sx={{
                background: "#00b237",
                color: "#fff",
                padding: "10px 15px",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FaRegCheckCircle fontSize={20} fontFamily="bold" color="#fff" />

              {userMessage}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            margin: "0 0 10px 0",
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
                      navigate(`/practice-management/view-site/${row.id}`)
                    }
                  >
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>
                      {siteOfServiceName(row.siteOfServiceID)?.name}
                    </StyledTableCell>
                    <StyledTableCell>{row.address1}</StyledTableCell>
                    <StyledTableCell>
                      <InputMask
                        mask="(999) 999-9999"
                        value={row.phone}
                        disabled={false}
                        maskChar="_"
                        style={{ border: "none", fontSize: "14px" }}
                      ></InputMask>
                    </StyledTableCell>

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
