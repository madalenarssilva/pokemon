import useSWR from "swr";

const usePokedex = (pageIndex: number) => {
  // GET
  return useSWR(
    `https://pokeapi.co/api/v2/pokemon/?offset=${pageIndex * 60}&limit=60`
  );
};

export default usePokedex;
