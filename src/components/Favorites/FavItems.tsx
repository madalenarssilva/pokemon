import { ListItem, ListItemAvatar, Avatar, Button } from "@mui/material";
import { FavItem } from "../../types/ReduxTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { FavActions } from "../../store/Reducers/FavSlice";
import { NavLink } from "react-router-dom";
import React from "react";
import { useTheme } from "@mui/material";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

interface FavProps {
  favoriteItem: FavItem;
}

const FavItems = (props: FavProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(`(max-width: 768px)`);

  // Botao Handler / Redux Handler
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(FavActions.removeFav(props.favoriteItem.name));
  };

  // STYLE DA LISTA
  const FavList = styled(ListItem)({
    borderRadius: "15px",
    backgroundColor: theme.palette.primary.light,
    margin: "0 0 1rem 0",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    display: "flex",
    justifyContent: matches ? "center" : "space-between",
    flexDirection: matches ? "column" : "row",
    paddingTop: matches ? "2rem" : "1rem",
    paddingBottom: matches ? "2rem" : "1rem",
  });

  return (
    <FavList
      sx={[
        {
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
      <NavLink
        to={`/${props.favoriteItem.name}`}
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "center",
        }}
        key={props.favoriteItem.name}
      >
        <ListItemAvatar>
          <Avatar
            alt={`Pokemon ${props.favoriteItem.name}`}
            src={props.favoriteItem.url}
            sx={{
              width: "5rem",
              height: "5rem",
            }}
          />
        </ListItemAvatar>
        {!matches && (
          <h1 style={{ color: "white" }}>{props.favoriteItem.name}</h1>
        )}
        {matches && (
          <h3 style={{ color: "white" }}>{props.favoriteItem.name}</h3>
        )}
      </NavLink>
      <Button
        variant="contained"
        size={matches ? "small" : "large"}
        endIcon={<DeleteIcon />}
        sx={{ margin: 0, borderRadius: "10px" }}
        onClick={clickHandler}
      >
        Remover
      </Button>
    </FavList>
  );
};

export default React.memo(FavItems);
