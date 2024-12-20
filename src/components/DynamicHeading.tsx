import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
const DynamicHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} paddingY={"20px"} color={"white"} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default DynamicHeading;
