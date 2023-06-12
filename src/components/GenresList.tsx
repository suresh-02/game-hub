import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { useData } from "../Hooks/useData";
import { Genres } from "../Hooks/useGenres";
import croppedImage from "../services.ts/image-url";

interface props {
  onSelectGenre: (genre: Genres) => void;
}

const GenresList = ({ onSelectGenre }: props) => {
  const { data, isLoading, error } = useData<Genres>("/genres");

  if (isLoading) return <Spinner />;

  if (error) return null;
  return (
    <List>
      {data?.map((genre) => (
        <ListItem paddingY="10px" key={genre.id}>
          <HStack>
            <Image
              boxSize="38px"
              src={croppedImage(genre.image_background)}
              borderRadius="8px"
            />
            <Button
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
