import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GridGames from "./components/GridGames";
import ListGenres from "./components/ListGenres";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,

          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem hideBelow="lg" area="aside" bg="gold">
          <ListGenres />
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          <GridGames />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
