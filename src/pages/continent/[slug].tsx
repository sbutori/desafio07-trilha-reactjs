import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createServer } from 'miragejs';

import { Container, Heading, Image } from '@chakra-ui/react';

import CityCard from '../../components/CityCard';

createServer({
  seeds(server) {
    server.db.loadData({
      continents: [
        {
          slug: 'america',
          name: 'América',
          description:
            'América (algumas vezes usado o termo Américas) (em aimará: Amërika, em castelhano: América, em francês: Amérique, em guarani: Amérika, em inglês: America, em neerlandês: Amerika, em quíchua: Amirika) é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros.',
          numberOfCountries: 50,
          numberOfLanguages: 60,
          numberOfLargeCities: 27,
        },
        {
          slug: 'europa',
          name: 'Europa',
          description:
            'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
          numberOfCountries: 50,
          numberOfLanguages: 60,
          numberOfLargeCities: 27,
        },
        {
          slug: 'asia',
          name: 'Asia',
          description:
            'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. ',
          numberOfCountries: 50,
          numberOfLanguages: 60,
          numberOfLargeCities: 27,
        },
        {
          slug: 'africa',
          name: 'África',
          description:
            'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes.',
          numberOfCountries: 50,
          numberOfLanguages: 60,
          numberOfLargeCities: 27,
        },
        {
          slug: 'oceania',
          name: 'Oceania',
          description:
            "Oceania é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes",
          numberOfCountries: 50,
          numberOfLanguages: 60,
          numberOfLargeCities: 27,
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
  },
});

type ContinentProps = {
  continent: Continent;
};

type Continent = {
  slug: string;
  name: string;
  description: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfLargeCities: number;
};

const Continent: NextPage<ContinentProps> = () => {
  const [continent, setContinent] = useState<Continent>({
    description: '',
    name: '',
    numberOfCountries: 0,
    numberOfLanguages: 0,
    numberOfLargeCities: 0,
    slug: '',
  });

  const router = useRouter();

  const slug = router.query.slug;

  useEffect(() => {
    // Mocked MirageJS Call
    fetch(`/api/continents/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setContinent(data);
      });
  }, [slug]);

  return (
    <>
      <Image
        src={`/continents/${slug}.jpg`}
        alt={`Foto representando o continente ${continent.name}`}
      />
      <Heading>{continent.name}</Heading>
      <Container maxW="1160px">
        <Heading>Cidades +100</Heading>
        <CityCard />
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
