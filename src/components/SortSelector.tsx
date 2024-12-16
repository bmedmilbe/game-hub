import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
interface Props {
  onSelect: (order: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ selectedOrder, onSelect }: Props) => {
  const orders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Date added" },
    { value: "-rating", label: "Average Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const currentOrder = orders.find((order) => order.value === selectedOrder);
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {"Order: "}
          {currentOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {orders.map((order) => (
          <MenuItem
            key={order.label}
            onClick={() => onSelect(order.value)}
            value={""}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
