import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';

const CityCard: NextComponentType = () => {
  const city = {
    cityId: 'londres',
    countryId: 'gb',
    title: 'Londres',
    country: 'Reino Unido',
  };

  return (
    <Box w="256px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`/cities/${city.cityId}.jpg`} alt={`Foto de ${city.title}`} />

      <Flex align="center" justify="center" px="6">
        <Box alignItems="center">
          <Heading
            mt="1"
            fontWeight="semibold"
            fontSize="xl"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {city.title}
          </Heading>
          <Text as="span" color="gray.600" fontSize="md" fontWeight="medium">
            {city.country}
          </Text>
        </Box>
        <Box>
          <Image
            src={`/countries/${city.countryId}.png`}
            alt={`Foto de ${city.title}`}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CityCard;
