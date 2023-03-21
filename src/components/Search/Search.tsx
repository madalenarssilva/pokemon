import { Container, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { alpha } from "@mui/material";
import { useTheme } from "@mui/material";

type InputProps = {
  updateInput: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchInput: string | undefined;
};

const SearchBar = (props: InputProps) => {
  // ESTILO DO SEARCH - TO DO
  const StyleTextField = styled(TextField)({
    color: "darkslategray",
    borderRadius: "10px",
    backgroundColor: alpha("#ffffff", 0.15),
    "&:hover": {
      backgroundColor: alpha("#ffffff", 0.25),
    },
  });
  const theme = useTheme();

  return (
    <Container>
      <TextField
        id="search"
        type="search"
        placeholder="Procura um Pokemon"
        value={props.searchInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          props.updateInput(e.target.value)
        }
        sx={{
          width: "100%",
          borderRadius: "10px",
          backgroundColor: alpha("#ffffff", 0.15),
          "&:hover": {
            backgroundColor: alpha("#ffffff", 0.25),
          },
          input: { color: "white" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: theme.palette.primary.dark }} />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default SearchBar;
