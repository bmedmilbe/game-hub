import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width={"236px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
