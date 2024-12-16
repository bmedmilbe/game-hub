import React from "react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { Input, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input borderRadius={20} placeholder="Search game..." variant="subtle" />
    </InputGroup>
  );
};

export default SearchInput;
