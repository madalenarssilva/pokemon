import { useTheme } from "@mui/material";

const Error = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.dark,
        margin: "0",
        padding: "0",
        color: "white",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <img
        style={{ color: "white", marginTop: "3rem" }}
        src="/sad-face-2691.svg"
        alt="sad face"
      />
      <h1
        style={{
          marginTop: "2rem",
        }}
      >
        404 Page not found
      </h1>
      <p>
        A página que está à procura não existe ou ocorreu um erro. Volte atrás.
      </p>
    </div>
  );
};

export default Error;
