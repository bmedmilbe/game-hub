import { CardBody, CardRoot } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../components/ui/skeleton";
const GameCardSkeleton = () => {
  return (
    <CardRoot>
      <Skeleton height={"157px"} />

      <CardBody>
        <SkeletonText noOfLines={2} />
      </CardBody>
    </CardRoot>
  );
};

export default GameCardSkeleton;
