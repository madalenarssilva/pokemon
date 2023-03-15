type Details = {
  name: string;
  url: string;
};

type GameIndices = {
  version: Details;
};

type Type = {
  type: Details;
};

export type Move = {
  move: Details;
};

export type PokemonData = {
  game_indices: GameIndices[];
  weight?: number;
  types: Type[];
  height?: number;
  moves: Move[];
};
