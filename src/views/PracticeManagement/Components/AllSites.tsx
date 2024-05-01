import React, { useState } from "react";
import { Box } from "@mui/material";
import MainLayout from "../../../components/Layout/MainLayout";
import MUITable, {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/MUITable";
import { IoBookOutline } from "react-icons/io5";
import PrimaryButtonTwo from "../../../components/PrimaryButton/PrimaryButtonTwo";
import { FaPlus } from "react-icons/fa6";

const tableHead = ["Id", "Title", "Description"];

const data = [
  {
    _id: "1",
    title: "Sniper",
    description: "A sniper is a military/paramilitary marksman who engages",
  },
  {
    _id: "2",
    title: "Racing",
    description:
      "Racing is a competition of speed, against an objective criterion",
  },
  {
    _id: "3",
    title: "Shooting",
    description:
      "Shooting is the act or process of discharging a projectile from a ranged weapon",
  },
];

const AllSites = () => {
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <PrimaryButtonTwo>
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
            // boxShadow: "rgba(0, 0, 0, 0.16) 3px 16px 87px 0px",
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
                    <StyledTableCell>{row._id}</StyledTableCell>
                    <StyledTableCell>{row.title}</StyledTableCell>
                    <StyledTableCell>{row.description}</StyledTableCell>
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
    </MainLayout>
  );
};

export default AllSites;
