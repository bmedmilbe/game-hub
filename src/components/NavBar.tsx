import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput />
    </>
  );
};

export default NavBar;
