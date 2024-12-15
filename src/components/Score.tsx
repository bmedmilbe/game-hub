import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const Score = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "red";
  return <Badge backgroundColor={color}>{score}</Badge>;
};

export default Score;
