import {
  Card,
  CardBody,
  CardHeader,
  CardRoot,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import PlatformList from "./PlatformList";
import Score from "./Score";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot overflow={"hidden"}>
      <Image src={game.background_image} />

      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          {/* <PlatformList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          /> */}
          <Score score={game.metacritic} />
        </HStack>
        {/* {game.parent_platforms.map(
          ({ platform }) =>
            //   <Text>{Icons[`${platform.slug}`]}</Text>
            ""
        )} */}
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
