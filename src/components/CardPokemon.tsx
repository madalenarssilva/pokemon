import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/FavoriteBorderRounded";
import { NavLink } from "react-router-dom";
import { Pokemon } from "../types/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { FavActions } from "../store/Reducers/FavSlice";
import { RootState } from "../store/store";

const CardPokemon = (props: Pokemon) => {
  // DADOS
  const name = props.name;
  const url = props.url;
  const splitUrl = url.split("/");
  const id = splitUrl[splitUrl.length - 2];

  // Theme Style
  const theme = useTheme();

  // SUBSCRIÇÃO DO REDUX
  const favItems = useSelector((state: RootState) => state.favItems);

  // Botao Handler / Redux Handler
  const dispatch = useDispatch();
  const favoriteHandler = () => {
    if (favItems.find((item) => item.name === name)) {
      dispatch(FavActions.removeFav(name));
    } else {
      dispatch(
        FavActions.addFav({
          name,
          url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        })
      );
    }
  };

  return (
    <Card
      sx={[
        {
          maxWidth: 345,
          backgroundColor: theme.palette.primary.main,
          borderRadius: "10px",
          transition: "transform 500ms ease-in-out",
        },
        {
          "&:hover": {
            //(X Y Blur Color)
            boxShadow: "10px 10px 40px black",
            transform: "translate(-5px, -5px)",
          },
        },
      ]}
    >
      <NavLink to={`/${name}`} style={{ textDecoration: "none" }}>
        <CardMedia
          sx={{ height: 300 }}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          title={name}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            style={{ color: theme.palette.primary.contrastText }}
          >
            {name}
          </Typography>
        </CardContent>
      </NavLink>
      <CardActions
        style={{ justifyContent: "flex-end" }}
        onClick={favoriteHandler}
      >
        <Tooltip title="Favorita">
          <IconButton aria-label="adicione aos favoritos" size="large">
            <FavoriteIcon
              style={{
                color: favItems.find((item) => item.name === name)
                  ? theme.palette.secondary.light
                  : theme.palette.primary.light,
                width: "2rem",
                height: "2rem",
              }}
            />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default CardPokemon;
