// React Imports
import React from "react";
// React
import { useNavigate } from "react-router-dom";
// Constants
import { Logo, Person, ArrowDown } from "../../assets/images";
import constants from "../../constants";
// Styles
import "./Header.css";
// Redux
import { useGetUserQuery } from "../../redux/api/userApiSlice";
// MUI
import { Box, Button, Menu, MenuItem } from "@mui/material";
// Custom
import OverlayLoader from "../Spinner/OverlayLoader";

interface SecondaryHeaderProps {
  anchorEl: null | HTMLElement;
  setAnchorEl: (value: null | HTMLElement) => void;
  open: boolean;
}

const SecondaryHeader = ({
  anchorEl,
  setAnchorEl,
  open,
}: SecondaryHeaderProps) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // GET USER API BIND
  const { data, isLoading } = useGetUserQuery({});

  return (
    <header>
      {isLoading && <OverlayLoader />}

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginRight: "300px",
          }}
        >
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
              textTransform: "none",
              fontSize: "12px",
              color: "#007298",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "fit-content",
                marginRight: "8px",
                marginTop: "4px",
              }}
            >
              <img src={Person} alt="person" />
            </Box>
            Welcome, {data?.data?.firstName}
            <Box
              sx={{
                marginLeft: "14px",
              }}
            >
              <img src={ArrowDown} alt="arrow-down" />
            </Box>
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              "& .MuiPaper-root": {
                borderRadius: "0px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginTop: "5px",
                minWidth: "200px",
                "& .MuiMenuItem-root": {
                  fontSize: "16px",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                  },
                },
              },
            }}
          >
            <MenuItem onClick={handleClose}>My Settings</MenuItem>
            <MenuItem onClick={handleClose}>Manage Practice</MenuItem>
            <MenuItem onClick={handleClose}>Sign Out</MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            margin: "0px 50px 50px",
            display: "flex",
            justifyContent: "space-between",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              alignItems: "center",
              margin: "30px 20px 20px",
              gap: "20px",
            },
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "flex-start",
              flexDirection: "column",
              "@media (max-width: 576px)": {
                alignItems: "center",
              },
            }}
          >
            <h2 className="header-title">Contact Us</h2>
            <a href="tel:{constants.CONTACT_US_TEL}" className="header-tel">
              {constants.CONTACT_US_TEL}
            </a>
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default SecondaryHeader;
