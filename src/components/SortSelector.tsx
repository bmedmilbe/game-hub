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
  onSelect: (plaform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const SortSelector = ({ selectedPlatform, onSelect }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem onClick={() => onSelect(null)} value={""}>
          Relevance
        </MenuItem>
        <MenuItem onClick={() => onSelect(null)} value={""}>
          Date added
        </MenuItem>
        <MenuItem onClick={() => onSelect(null)} value={""}>
          Name
        </MenuItem>
        <MenuItem onClick={() => onSelect(null)} value={""}>
          Release Date
        </MenuItem>
        <MenuItem onClick={() => onSelect(null)} value={""}>
          Popularity
        </MenuItem>
        <MenuItem onClick={() => onSelect(null)} value={""}>
          Average Rating
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
