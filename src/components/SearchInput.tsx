import { useRef } from "react";
import { InputGroup } from "./ui/input-group";
import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

interface Props {
  onSearch: (input: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup flex="1" width={"100%"} startElement={<LuSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search game..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
