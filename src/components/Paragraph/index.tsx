import { Typography } from "@mui/material";
import React from "react";

const subRoot = {
  fontSize: "14px",
  whiteSpace: "wrap !important",
  color: "#414042",

  "@media screen and (max-width: 425px)": {
    fontSize: "12px",
  },
};

interface ParagraphProps {
  children?: React.ReactNode;
  sx?: any;
}

const Paragraph = (props: ParagraphProps) => {
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

export default Paragraph;
