import { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/services/image-url";
import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Box height={"70px"}>
          <Heading className="line-clamp-1" fontSize="xl">
            {game.name}{" "}
          </Heading>
          <Emoji rating={game.rating_top} />
        </Box>
      </CardBody>
    </Card>
  );
};

export default GameCard;
