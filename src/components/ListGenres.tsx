import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const ListGenres = () => {
  const { data, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}

      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGenres;
