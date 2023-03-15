import Container from "@mui/material/Container";
import { PokemonData } from "../../types/PokemonDetails";
import { PokeLabel } from "./PokeLabel";
import { ChipPokemon } from "./Chip";
import { GridPokemon } from "./Grid";

type PokemonLabelsProps = {
  pokemonData: PokemonData;
};

const PokemonLabels = ({ pokemonData }: PokemonLabelsProps) => {
  return (
    <Container maxWidth="md" style={{ marginTop: "4rem" }}>
      <PokeLabel text="Altura: ">
        <ChipPokemon label={pokemonData.height?.toString()} />
      </PokeLabel>
      <PokeLabel text="Largura: ">
        <ChipPokemon label={pokemonData.weight?.toString()} />
      </PokeLabel>
      <PokeLabel text="Versões: ">
        <GridPokemon data={pokemonData} detail="game_indices" text="version" />
      </PokeLabel>
      <PokeLabel text="Tipos: ">
        <GridPokemon data={pokemonData} detail="types" text="type" />
      </PokeLabel>
      <PokeLabel text="Moves: ">
        <GridPokemon data={pokemonData} detail="moves" text="move" />
      </PokeLabel>
    </Container>
  );
};

export default PokemonLabels;
