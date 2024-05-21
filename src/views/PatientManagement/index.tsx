import SecondaryLayout from "../../components/Layout/SecondaryLayout";
import { Box } from "@mui/material";
import { SearchIcon } from "../../assets/images";
import Paragraph from "../../components/Paragraph";
import PrimaryInput from "../../components/PrimaryInput";
import { useState } from "react";

const PatientManagement = () => {
  const [search, setSearch] = useState("");

  return (
    <SecondaryLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "100px 150px 50px",
          "@media (max-width: 992px)": {
            margin: "20px",
          },
        }}
      >
        <Box
          sx={{
            border: "2px solid #00739A",
            display: "flex",
            gap: "45px",
            padding: "10px 50px 15px 50px",
            borderTopLeftRadius: "38px",
            borderBottomRightRadius: "38px",
          }}
        >
          <img src={SearchIcon} alt="icon" />
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Paragraph
              sx={{
                fontSize: "32px",
                color: "#00739A",
                marginTop: "15px",
              }}
            >
              Search
            </Paragraph>
            <PrimaryInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              blueField={true}
              sx={{
                width: "300px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </SecondaryLayout>
  );
};

export default PatientManagement;
