import NavLinks from "./NavLinks";
import "./NavBar.css";
import { Drawer, IconButton, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const matches = useMediaQuery(`(max-width: 768px)`);

  return (
    <div
      className="navbar"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <div className="nav-logo">
        <img src={"/logoPoke.png"} alt="Logo" className="logo-image" />
        <h1
          className="logo-text"
          style={{ color: theme.palette.primary.contrastText }}
        >
          Pokemon
        </h1>
      </div>
      {/* Se nao for Mobile */}
      {!matches && <NavLinks />}
      {/* Se for Mobile */}
      {matches && (
        <>
          <IconButton
            className="hamburguer"
            size="large"
            edge="start"
            aria-label="menu"
            onClick={() => setOpen(true)}
            sx={{
              mr: 2,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Menu />
          </IconButton>
          <Drawer
            anchor={"top"}
            open={open}
            onClose={() => setOpen(false)}
            variant="temporary"
            PaperProps={{
              sx: {
                backgroundColor: theme.palette.primary.main,
                color: "red",
              },
            }}
          >
            <NavLinks />
          </Drawer>
        </>
      )}
    </div>
  );
};

export default NavBar;
