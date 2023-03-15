import useSWR from "swr";

const usePokemon = (name?: string) => {
  // GET
  return useSWR("https://pokeapi.co/api/v2/pokemon/" + name);
};

export default usePokemon;
