import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { createServer } from 'miragejs';
import { useRouter } from 'next/router';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Tooltip,
  useMediaQuery,
} from '@chakra-ui/react';

import CityCard from '../../components/CityCard';
import Header from '../../components/Header';
import { InfoOutlineIcon } from '@chakra-ui/icons';

createServer({
  seeds(server) {
    server.db.loadData({
      continents: [
        {
          slug: 'europa',
          name: 'Europa',
          description:
            'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
          numberOfCountries: 440,
          numberOfLanguages: 286,
          numberOf100Cities: 32,
          cities: [
            {
              cityId: 'londres',
              countryId: 'gb',
              title: 'Londres',
              country: 'Reino Unido',
            },
            {
              cityId: 'paris',
              countryId: 'fr',
              title: 'Paris',
              country: 'França',
            },
            {
              cityId: 'roma',
              countryId: 'it',
              title: 'Roma',
              country: 'Itália',
            },
            {
              cityId: 'praga',
              countryId: 'cr',
              title: 'Praga',
              country: 'República Tcheca',
            },
            {
              cityId: 'amsterda',
              countryId: 'nl',
              title: 'Amsterdã',
              country: 'Holanda',
            },
          ],
        },
        {
          slug: 'asia',
          name: 'Ásia',
          description:
            'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. ',
          numberOfCountries: 48,
          numberOfLanguages: 2301,
          numberOf100Cities: 40,
          cities: [
            {
              cityId: 'hong-kong',
              countryId: 'cn',
              title: 'Hong Kong',
              country: 'China',
            },
            {
              cityId: 'bangkok',
              countryId: 'th',
              title: 'Bangkok',
              country: 'Tailândia',
            },
            {
              cityId: 'macau',
              countryId: 'cn',
              title: 'Hong Kong',
              country: 'China',
            },
            {
              cityId: 'singapura',
              countryId: 'sg',
              title: 'Singapura',
              country: 'Singapura',
            },
          ],
        },
        {
          slug: 'africa',
          name: 'África',
          description:
            'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes.',
          numberOfCountries: 54,
          numberOfLanguages: 2138,
          numberOf100Cities: 12,
          cities: [
            {
              cityId: 'joanesburgo',
              countryId: 'za',
              title: 'Joanesburgo',
              country: 'África do Sul',
            },
            {
              cityId: 'cidade-do-cabo',
              countryId: 'za',
              title: 'Cidade do Cabo',
              country: 'África do Sul',
            },
            {
              cityId: 'cairo',
              countryId: 'eg',
              title: 'Cairo',
              country: 'Egito',
            },
            {
              cityId: 'lagos',
              countryId: 'ng',
              title: 'Lagos',
              country: 'Nigéria',
            },
          ],
        },
        {
          slug: 'america',
          name: 'América',
          description:
            'América (algumas vezes usado o termo Américas) é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros.',
          numberOfCountries: 35,
          numberOfLanguages: 1064,
          numberOf100Cities: 13,
          cities: [
            {
              cityId: 'nova-iorque',
              countryId: 'us',
              title: 'Nova Iorque',
              country: 'Estados Unidos',
            },
            {
              cityId: 'rio-de-janeiro',
              countryId: 'br',
              title: 'Rio de Janeiro',
              country: 'Brasil',
            },
            {
              cityId: 'cidade-do-mexico',
              countryId: 'mx',
              title: 'Cidade do México',
              country: 'México',
            },
            {
              cityId: 'vancouver',
              countryId: 'ca',
              title: 'Vancouver',
              country: 'Canadá',
            },
          ],
        },
        {
          slug: 'oceania',
          name: 'Oceania',
          description:
            "Oceania é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes",
          numberOfCountries: 14,
          numberOfLanguages: 1313,
          numberOf100Cities: 3,
          cities: [
            {
              cityId: 'sydney',
              countryId: 'au',
              title: 'Sydney',
              country: 'Austrália',
            },
            {
              cityId: 'wellington',
              countryId: 'nz',
              title: 'Wellington',
              country: 'Nova Zelândia',
            },
            {
              cityId: 'auckland',
              countryId: 'nz',
              title: 'Auckland',
              country: 'Nova Zelândia',
            },
            {
              cityId: 'brisbane',
              countryId: 'au',
              title: 'Brisbane',
              country: 'Austrália',
            },
          ],
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/continents/:slug', (schema, request) => {
      const { slug } = request.params;
      return schema.db.continents.findBy({ slug });
    });

    // resets the namespace to the root
    this.namespace = ''; // or this.namespace = "/"
    this.passthrough(); // now this will pass through everything not handled to the current domain (e.g. localhost:3000)
  },
});

type City = {
  cityId: string;
  countryId: string;
  title: string;
  country: string;
};

type Continent = {
  slug: string;
  name: string;
  description: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOf100Cities: number;
  cities: City[];
};

type ContinentProps = {
  continent: Continent;
};

const Continent: NextPage<ContinentProps> = () => {
  const [continent, setContinent] = useState<Continent>({
    description: '',
    name: '',
    numberOfCountries: 0,
    numberOfLanguages: 0,
    numberOf100Cities: 0,
    slug: '',
    cities: [],
  });

  const router = useRouter();

  const slug = router.query.slug;

  const continentAttributes = [
    { value: continent.numberOfCountries, desc: 'países' },
    { value: continent.numberOfLanguages, desc: 'línguas' },
    { value: continent.numberOf100Cities, desc: 'cidades +100' },
  ];

  useEffect(() => {
    // Mocked MirageJS Call
    fetch(`/api/continents/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setContinent(data);
      });
  }, [slug]);

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Head>
        <title>worldtrip | {continent.name}</title>
      </Head>
      <Header />
      <Flex
        alignItems="center"
        backgroundImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url('/continent/${slug}.jpg')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={['150px', null, '500px']}
        width="100%"
      >
        <Heading
          color="light.text"
          fontSize={['1.75rem', null, '5xl']}
          fontWeight="semibold"
          maxW="1280px"
          mx="auto"
          pt={[0, null, '369px']}
          px="60px"
          textAlign={['center', null, 'left']}
          width="100%"
        >
          {continent.name}
        </Heading>
      </Flex>
      <Container
        maxW="1280px"
        px={['1rem', null, '3.75rem']}
        pt={[8, null, 20]}
        mx="auto"
      >
        <Flex justifyContent="space-between" wrap="wrap">
          <Text
            fontSize={['0.875rem', null, '1.5rem']}
            textAlign="justify"
            flex={['100%', null, '52%']}
          >
            {continent.description}
          </Text>
          <Flex
            flex={['100%', null, '48%']}
            justifyContent="space-between"
            py={['1rem', null, '3.5rem']}
            pl={[null, null, '4.375rem']}
          >
            {continentAttributes.map((attributes) => {
              return (
                <Box
                  textAlign={['left', null, 'center']}
                  fontWeight="semibold"
                  key={attributes.desc}
                >
                  <Text color="highlight" fontSize={['2xl', null, '5xl']}>
                    {attributes.value}
                  </Text>
                  <Text
                    fontSize={['lg', null, '2xl']}
                    fontWeight={['normal', null, 'semibold']}
                  >
                    {attributes.desc}
                    {attributes.desc === 'cidades +100' && isLargerThan768 && (
                      <Tooltip
                        hasArrow
                        label="Cidades que o continente possui e estão entre as 100 mais visitadas do mundo"
                        bg="light.info"
                        color="dark.text"
                        fontSize="md"
                        p="1rem"
                      >
                        <InfoOutlineIcon
                          color="dark.info"
                          w="1rem"
                          h="1rem"
                          ml="5px"
                        />
                      </Tooltip>
                    )}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Flex>
        <Heading
          fontSize={['1.5rem', null, '4xl']}
          fontWeight="normal"
          mt={[null, null, '5rem']}
        >
          Cidades +100
        </Heading>
      </Container>
      <Container maxW="1280px" px="60px" py={[5, null, 10]}>
        <Flex
          justifyContent="space-between"
          alignContent="space-between"
          flexFlow="row wrap"
        >
          {continent.cities.map((city: City) => {
            return <CityCard city={city} key={city.cityId} />;
          })}
        </Flex>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Real API call, will replace Mirage JS in the future!
  // const res = await fetch(`${process.env.BASE_URL}/api/continents/${context.params?.slug}`);
  // const continent = await res.json();
  //
  // if (!continent) {
  //   return {
  //     notFound: true,
  //   };
  // }
  // return {
  //   props: { continent },
  // };

  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'america' } },
      { params: { slug: 'europa' } },
      { params: { slug: 'africa' } },
      { params: { slug: 'asia' } },
      { params: { slug: 'oceania' } },
    ],
    fallback: false,
  };
};

export default Continent;
