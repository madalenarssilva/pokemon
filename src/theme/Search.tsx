import styled from "@emotion/styled";
import { alpha, InputBase } from "@mui/material";

export const Search = styled("div")(({}) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: alpha("#ffffff", 0.15),
  "&:hover": {
    backgroundColor: alpha("#ffffff", 0.25),
  },
  margin: "auto auto 3rem auto",
  padding: "0.2rem",
  width: "50%",
  alignItems: "center",
  justifyContent: "center",
}));

export const SearchIconWrapper = styled("div")(({}) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({}) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "1, 1, 1, 0",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${"1em"})`,
    width: "100%",
  },
}));
