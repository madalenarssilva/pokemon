import { Container, Grid, Pagination, Stack } from "@mui/material";
import { useState, useMemo } from "react";
import CardPokemon from "../components/CardPokemon";
import usePokedex from "../hooks/usePokedex";
import SearchBar from "../components/Search/Search";
import { Pokemon } from "../types/PokemonCard";
import Error from "./Error";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import OrderBy from "../components/OrderBy";

const Pokedex = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const matches = useMediaQuery(`(max-width: 768px)`);

  // ler dados
  const { data, error, isLoading } = usePokedex(pageIndex);
  const theme = useTheme();

  // input search
  const [searchInput, setSearchInput] = useState<string | undefined>("");

  // order by selector
  const [orderBy, setOrderBy] = useState<string>("");

  // handler paginacao
  const handlePaginationChange = (
    e: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPageIndex(newPage - 1);
  };

  // Filtrar dados do Search
  const filterData = useMemo(() => {
    if (data === undefined) {
      return [];
    }
    if (searchInput === undefined) {
      return data.results.sort((a: Pokemon, b: Pokemon) => {
        if (orderBy === undefined) return 0;
        if (orderBy === "Crescente") return a.name > b.name ? 1 : -1;
        else return a.name < b.name ? 1 : -1;
      });
    } else {
      return data.results
        .filter((item: Pokemon) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .sort((a: Pokemon, b: Pokemon) => {
          if (orderBy === undefined) return 0;
          if (orderBy === "Crescente") return a.name > b.name ? 1 : -1;
          else return a.name < b.name ? 1 : -1;
        });
    }
  }, [data, searchInput, orderBy]);

  // Pagina de erro
  if (error) {
    return <Error />;
  }

  // Pagina de loading
  if (isLoading) {
    return (
      <CircularProgress style={{ color: theme.palette.primary.contrastText }} />
    );
  }

  const PaginationStyle = styled(Pagination)({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff",
        borderColor: theme.palette.primary.light,
      },
    },
  });

  return (
    <>
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: matches ? "0" : "",
        }}
      >
        <SearchBar searchInput={searchInput} updateInput={setSearchInput} />
        <OrderBy orderByInput={orderBy} updateOrderBy={setOrderBy} />
      </Container>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: "2rem" }}
      >
        {data &&
          filterData.map((item: { name: string; url: string }) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={item.name}>
                <CardPokemon name={item.name} url={item.url} />
              </Grid>
            );
          })}
      </Grid>
      <Stack
        spacing={2}
        sx={{
          marginTop: "2rem",
          alignItems: "center",
        }}
      >
        <PaginationStyle
          count={22}
          variant="outlined"
          shape="rounded"
          color="secondary"
          page={pageIndex + 1}
          onChange={handlePaginationChange}
          siblingCount={0}
          size={matches ? "small" : "medium"}
          sx={[
            {
              "& .MuiPagination-ul": {
                display: "flex",
                flexDirection: "row",
              },
            },
            {
              "& .MuiPagination-ul > li": {
                margin: matches ? "0" : "",
                padding: matches ? "0.2rem" : "",
              },
            },
          ]}
        />
      </Stack>
    </>
  );
};

export default Pokedex;
