import { Box, Flex, Image, Text } from '@chakra-ui/react';

type CityCardProps = {
  city: {
    cityId: string;
    countryId: string;
    title: string;
    country: string;
  };
};

const CityCard = ({ city }: CityCardProps) => {
  return (
    <Box
      key={city.cityId}
      maxW="256px"
      maxH="279px"
      mb={['1.25rem', null, '3rem']}
      mx={['auto', null, 0]}
      px={0}
    >
      <Box maxH="173px">
        <Image
          w="256px"
          h="173px"
          objectFit="cover"
          borderTopLeftRadius="md"
          borderTopRightRadius="md"
          src={`/cities/${city.cityId}.jpg`}
          alt={`Foto de ${city.title}`}
        />
      </Box>

      <Flex
        align="center"
        justify="space-around"
        background="white"
        borderWidth="1px"
        borderTopWidth="0"
        borderColor="highlight"
        borderBottomLeftRadius="md"
        borderBottomRightRadius="md"
      >
        <Box alignItems="center">
          <Text textStyle="cityCardTitle" mt="1.125rem" fontSize="xl" as="h2">
            {city.title}
          </Text>
          <Text
            textStyle="cityCardDesc"
            color="gray.600"
            fontSize="md"
            fontWeight="medium"
            mt="0.75rem"
            marginBottom="1.5625rem"
            as="h4"
          >
            {city.country}
          </Text>
        </Box>
        <Box>
          <Image
            src={`/countries/${city.countryId}.png`}
            alt={`Foto de ${city.title}`}
            w="30px"
            h="30px"
            my="38px"
            objectFit="fill"
            borderRadius="50%"
            borderColor="light.info"
            border="1px solid"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CityCard;
