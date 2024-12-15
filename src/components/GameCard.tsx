import {
  Card,
  CardBody,
  CardHeader,
  CardRoot,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot overflow={"hidden"}>
      <Image src={game.background_image} />

      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
