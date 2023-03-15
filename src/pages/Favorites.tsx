import { useTheme, List } from "@mui/material";
import { useSelector } from "react-redux";
import FavItems from "../components/Favorites/FavItems";
import { RootState } from "../store/store";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Favorites = () => {
  //Animation
  const [parent] = useAutoAnimate();

  const theme = useTheme();

  // SUBSCRIÇÃO DO REDUX
  const favItems = useSelector((state: RootState) => state.favItems);

  return (
    <main style={{ minHeight: "100vh" }}>
      <List sx={{ width: "100%", flexDirection: "column" }} ref={parent}>
        {favItems &&
          favItems.map((item) => (
            <FavItems favoriteItem={item} key={item.name} />
          ))}
      </List>
    </main>
  );
};

export default Favorites;
