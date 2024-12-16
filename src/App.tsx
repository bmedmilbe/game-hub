import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GridGames from "./components/GridGames";
import ListGenres from "./components/ListGenres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <GridItem hideBelow="lg" area="aside">
          <ListGenres
            onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          <HStack padding={2}>
            <PlatformSelector
              onSelect={(platform) => setGameQuery({ ...gameQuery, platform })}
              selectedPlatform={gameQuery.platform}
            />
          </HStack>
          <GridGames gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
