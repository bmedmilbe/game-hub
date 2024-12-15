import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import imageCrop from "../services/image-crop";

const ListGenres = () => {
  const { data, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List.Root padding={2} listStyle={"none"}>
        {data.map((genre) => (
          <List.Item key={genre.id} padding={2}>
            <HStack>
              <Image
                boxSize={"50px"}
                src={imageCrop(genre.image_background)}
                borderRadius={4}
              />
              <Text paddingX={2} color={"blue.500"} fontSize={"25px"}>
                {genre.name}
              </Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default ListGenres;
