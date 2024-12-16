import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GridGames from "./components/GridGames";
import ListGenres from "./components/ListGenres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import DynamicHeading from "./components/DynamicHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search: string;
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
        <GridItem area="nav" bg="blue.800">
          <HStack>
            <NavBar
              onSearch={(search) => setGameQuery({ ...gameQuery, search })}
            />
          </HStack>
        </GridItem>

        <GridItem hideBelow="lg" area="aside" bg={"blue.800"}>
          <ListGenres
            onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
        <GridItem area="main" bg="blue.900">
          <Box padding={4}>
            <DynamicHeading gameQuery={gameQuery} />
            <HStack>
              <PlatformSelector
                onSelect={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
              />
              <SortSelector
                onSelect={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
                selectedOrder={gameQuery.sortOrder}
              />
            </HStack>
            <GridGames gameQuery={gameQuery} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
