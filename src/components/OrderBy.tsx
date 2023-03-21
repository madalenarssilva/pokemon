import {
  Box,
  FormControl,
  alpha,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { theme } from "../theme/Theme";
import SortIcon from "@mui/icons-material/Sort";

type InputProps = {
  updateOrderBy: React.Dispatch<React.SetStateAction<string>>;
  orderByInput: string | undefined;
};

const OrderBy = (props: InputProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.updateOrderBy(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl
        fullWidth
        sx={{
          backgroundColor: alpha("#ffffff", 0.15),
          color: "white",
          borderRadius: "10px",
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{ color: "white", display: "flex" }}
        >
          <SortIcon sx={{ color: "white", marginRight: "0.5rem" }} />
          Ordenar
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.orderByInput}
          label="Order"
          onChange={handleChange}
          sx={[
            {
              "& .MuiSelect-select": {
                color: "white",
              },
            },
            {
              "& .MuiSelect-icon": {
                color: theme.palette.primary.main,
              },
            },
          ]}
        >
          <MenuItem value={undefined}>Sem Ordenar</MenuItem>
          <MenuItem value={"Crescente"}>Crescente</MenuItem>
          <MenuItem value={"Decrescente"}>Decrescente</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default OrderBy;
