import { Container, Paper, useTheme } from "@mui/material";
import Carousel from "react-material-ui-carousel";

type Image = {
  nameImage: string[];
};

const CarouselReact = (props: Image) => {
  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Carousel>
        {props.nameImage.map((image, i) => (
          <Paper
            key={i}
            style={{
              backgroundColor: theme.palette.secondary.light,
              borderRadius: "10px",
            }}
          >
            <img
              src={image ? image : "/noImage.png"}
              alt="Pokemon"
              style={{ width: "20rem", height: "20rem" }}
            />
          </Paper>
        ))}
      </Carousel>
    </Container>
  );
};
export default CarouselReact;
