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
import imageCrop from "../services/image-crop";
import Imojis from "./Imojis";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot overflow={"hidden"}>
      <Image src={imageCrop(game.background_image)} />

      <CardBody>
        <HStack justifyContent="space-between" alignItems={"unset"}>
          {/* <PlatformList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          /> */}
          <Imojis rating={game.rating_top} />
          <Score score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>

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
