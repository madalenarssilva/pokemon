import { CircularProgress, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import CarouselReact from "../components/Carousel";
import PokemonLabels from "../components/PokemonLabels/PokemonLabels";
import usePokemon from "../hooks/usePokemon";
import Error from "./Error";

const Pokemon = () => {
  const theme = useTheme();
  const { name } = useParams();

  const { data, isLoading, error } = usePokemon(name);

  const back_default_img = data?.sprites.back_default;
  const back_shiny_img = data?.sprites.back_shiny;
  const front_default_img = data?.sprites.front_default;
  const front_shiny_img = data?.sprites.front_shiny;
  const pokeName = data?.name;

  if (isLoading) {
    return (
      <CircularProgress style={{ color: theme.palette.primary.contrastText }} />
    );
  }

  // Pagina de erro
  if (error) {
    return <Error />;
  }

  return (
    <>
      <h1 style={{ color: theme.palette.secondary.main }}>
        {pokeName?.toUpperCase()}
      </h1>
      <CarouselReact
        nameImage={[
          back_default_img,
          front_default_img,
          back_shiny_img,
          front_shiny_img,
        ]}
      />
      <PokemonLabels pokemonData={data} />
    </>
  );
};

export default Pokemon;
