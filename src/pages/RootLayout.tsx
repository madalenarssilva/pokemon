import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material";

const RootLayout = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <NavBar />
      <main
        style={{
          textAlign: "center",
          color: "white",
          padding: "3rem",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
