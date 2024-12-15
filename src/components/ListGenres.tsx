import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import imageCrop from "../services/image-crop";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const ListGenres = ({ onSelect, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {error && ""}
      {isLoading && <Spinner size="xl" />}
      <List.Root padding={2} listStyle={"none"}>
        {data.map((genre) => (
          <List.Item key={genre.id} padding={2}>
            <HStack>
              <Image
                boxSize={"50px"}
                src={imageCrop(genre.image_background)}
                borderRadius={4}
              />
              <Button
                paddingX={2}
                onClick={() => onSelect(genre)}
                fontSize={"25px"}
                backgroundColor={
                  selectedGenre?.id == genre.id ? `blue.800` : "black"
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default ListGenres;
