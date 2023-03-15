import { styled, useTheme } from "@mui/material";
import { FormLabelProps, FormLabel } from "@mui/material";
import { Box } from "@mui/system";

interface PokeLabelProps extends FormLabelProps {
  text: string;
}

export const PokeLabel = ({ text, children, ...rest }: PokeLabelProps) => {
  const theme = useTheme();

  const Details = styled(FormLabel)`
    color: ${theme.palette.primary.contrastText};
    padding: "2rem
  `;

  return (
    <Box style={{ marginTop: "2rem" }}>
      <Details {...rest}>
        <h2 style={{ color: theme.palette.secondary.main, margin: "1.5rem" }}>
          {text}
        </h2>
        {children}
      </Details>
    </Box>
  );
};
