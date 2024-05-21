// React Imports
import React from "react";
// MUI
import { Typography } from "@mui/material";
import { SxProps } from "@mui/system";

const root = {
  fontSize: "22px",
  fontWeight: "700",
  whiteSpace: "wrap !important",

  "@media screen and (max-width: 425px)": {
    fontSize: "18px",
  },

  "@media screen and (max-width: 375px)": {
    fontSize: "15px",
  },
};

const subRoot = {
  fontSize: "18px",
  fontWeight: 400,
  whiteSpace: "wrap !important",
  color: "#414042",
  textTransform: "none",

  "@media screen and (max-width: 425px)": {
    fontSize: "12px",
  },

  "@media screen and (max-width: 320px)": {
    fontSize: "12px",
  },
};

interface HeadingProps {
  children?: React.ReactNode;
  sx?: SxProps;
}

export const Heading = (props: HeadingProps) => {
  const styles: any = props.sx;
  return (
    <Typography
      color={(theme: any) => theme.palette.primary.main}
      sx={{ ...root, ...styles }}
    >
      {props.children}
    </Typography>
  );
};

export const SubHeading = (props: HeadingProps) => {
  const styles: any = props.sx;
  return (
    <Typography
      color={(theme: any) => theme.palette.secondary.main}
      sx={{ ...subRoot, ...styles }}
    >
      {props.children}
    </Typography>
  );
};
