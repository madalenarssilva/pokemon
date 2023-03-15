// TO DO:

import { Grid } from "@mui/material";
import { useTheme } from "@mui/system";
import { PokemonData } from "../../types/PokemonDetails";
import { ChipPokemon } from "./Chip";

// Estamos a validar as keys do objeto (ele nao aceita so uma string, têm que ser keys válidas)
type PokemonKeys = keyof Omit<PokemonData, "height" | "weight">;

// Fazemos um Generic pq queremos que o react assuma qual a key dependendo do que recebe
interface GridPorps<Details extends PokemonKeys> {
  data: PokemonData;
  detail: Details;
  text: keyof PokemonData[Details][0];
}

export function GridPokemon<Detail extends PokemonKeys>({
  data,
  detail,
  text,
}: GridPorps<Detail>) {
  const theme = useTheme();

  return (
    <Grid container spacing={3} columns={32}>
      {data[detail].map((item: PokemonData[Detail][0], index) => {
        return (
          <Grid item xs={16} sm={12} md={8} key={index}>
            {/* @ts-expect-error this is correct */}
            <ChipPokemon label={item[text].name} />
          </Grid>
        );
      })}
    </Grid>
  );
}
