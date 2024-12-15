import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const Score = ({ score }: Props) => {
  return <Badge>{score}</Badge>;
};

export default Score;
