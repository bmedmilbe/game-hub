import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const Score = ({ score }: Props) => {
  if (!score) return null;
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "red";
  return <Badge backgroundColor={color}>{score}</Badge>;
};

export default Score;
