import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';

const Home: NextPage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [showAirplane] = useMediaQuery('(min-width: 1230px)');

  const continentsSummaries = [
    {
      slug: 'europa',
      name: 'Europa',
      summary: 'O continente mais antigo.',
      imagePath: '/continents/europa.jpg',
    },
    {
      slug: 'asia',
      name: 'Asia',
      summary: 'O maior dos continentes.',
      imagePath: '/continents/asia.jpg',
    },
    {
      slug: 'africa',
      name: 'África',
      summary: 'O terceiro continente mais extenso.',
      imagePath: '/continents/africa.jpg',
    },
    {
      name: 'América',
      slug: 'america',
      summary: 'O continente localizado no hemisfério ocidental.',
      imagePath: '/continents/america.jpg',
    },
    {
      slug: 'oceania',
      name: 'Oceania',
      summary: 'Uma região composta por vários grupos de ilhas.',
      imagePath: '/continents/oceania.jpg',
    },
  ];

  const travelTypes = [
    {
      iconId: 'cocktail',
      description: 'vida noturna',
    },
    {
      iconId: 'beach',
      description: 'praia',
    },
    {
      iconId: 'building',
      description: 'moderno',
    },
    {
      iconId: 'museum',
      description: 'clássico',
    },
    {
      iconId: 'world',
      description: 'e mais...',
    },
  ];

  return (
    <>
      <Head>
        <title>worldtrip | Home</title>
      </Head>
      <Header />
      <Flex
        w="100%"
        h={['163px', null, '335px']}
        backgroundImage="background.png"
        backgroundSize="cover"
        justifyContent="space-around"
      >
        <Box flex="1 1 auto">
          <Heading
            color="light.text"
            px={[4, null, 36]}
            paddingTop={[6, null, 20]}
            fontSize={['1.25rem', null, '2.25rem']}
          >
            5 Continentes,
            <br />
            infinitas possibilidades
          </Heading>
          <Text
            color="light.text"
            px={[4, null, 36]}
            paddingTop={[2, null, 5]}
            wrap="yes"
            fontSize={['0.875rem', null, '1.25rem']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        {showAirplane && (
          <Box position="relative" width="50%">
            <Spacer />
            <Image
              src="airplane.svg"
              alt="Avião"
              position="absolute"
              top="76px"
              right="140px"
            />
          </Box>
        )}
      </Flex>
      <Container maxW="1240px" my={[4, null, 20]} px={0}>
        <Flex wrap="wrap">
          {travelTypes.map((travelType) => {
            return (
              <Fragment key={travelType.iconId}>
                <Spacer />
                <Box textAlign="center" flex={['50%', null, '20%']}>
                  {isLargerThan768 ? (
                    <Image
                      src={`/icons/${travelType.iconId}.svg`}
                      alt="Ícone turismo"
                      mx="auto"
                      w="85px"
                      h="85px"
                    />
                  ) : (
                    <Box
                      backgroundColor="highlight"
                      display="inline-block"
                      marginRight={2}
                      height="0.5rem"
                      width="0.5rem"
                      top="50%"
                      borderRadius="50%"
                      transform="translateY(-30%)"
                    ></Box>
                  )}

                  <Text
                    display={['inline-block', null, 'block']}
                    fontSize={['lg', null, '2xl']}
                    fontWeight="semibold"
                    mt={[6]}
                  >
                    {travelType.description}
                  </Text>
                </Box>
              </Fragment>
            );
          })}
        </Flex>
        <Divider
          w="90px"
          borderWidth={['1px', null, '2px']}
          mx="auto"
          marginTop={['2.25rem', null, '5rem']}
          borderColor="dark.text"
          opacity="1"
        />
        <Heading
          my={['1.5rem', null, '3.25rem']}
          fontSize={['xl', null, '4xl']}
          fontWeight="medium"
          textAlign="center"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
        <Carousel slideInfo={continentsSummaries} />
      </Container>
    </>
  );
};

export default Home;
