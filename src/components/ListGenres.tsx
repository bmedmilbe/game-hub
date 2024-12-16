import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";
import imageCrop from "../services/image-crop";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const ListGenres = ({ onSelect, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return "";
  if (isLoading) return <Spinner size="xl" />;
  return (
    <>
      <Heading marginLeft={"15px"} color={"white"} fontSize={"3xl"}>
        Genres
      </Heading>

      <List.Root padding={2} listStyle={"none"}>
        {data.map((genre) => (
          <List.Item key={genre.id} padding={2}>
            <HStack>
              <Image
                boxSize={"50px"}
                src={imageCrop(genre.image_background)}
                borderRadius={4}
                objectFit={"cover"}
              />
              <Button
                paddingX={2}
                onClick={() => onSelect(genre)}
                fontSize={"25px"}
                textAlign={"left"}
                whiteSpace={"normal"}
                backgroundColor={
                  selectedGenre?.id == genre.id ? "yellow.900" : `blue.900`
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
