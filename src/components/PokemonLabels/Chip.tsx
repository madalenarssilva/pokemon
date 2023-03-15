import { useTheme } from "@mui/material";
import { Chip } from "@mui/material";

type ChipProps = {
  label: string | undefined;
};
export const ChipPokemon = ({ label }: ChipProps) => {
  const theme = useTheme();

  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
        minWidth: "5rem",
      }}
    />
  );
};
