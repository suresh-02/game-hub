import { List, ListItem, HStack, Image, Text } from "@chakra-ui/react";
import { useData } from "../Hooks/useData";
import { Genres } from "../Hooks/useGenres";
import croppedImage from "../services.ts/image-url";

const GenresList = () => {
  const { data } = useData<Genres>("/genres");
  return (
    <List>
      {data?.map((genre) => (
        <ListItem paddingY="10px">
          <HStack>
            <Image
              boxSize="38px"
              src={croppedImage(genre.image_background)}
              borderRadius="8px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
