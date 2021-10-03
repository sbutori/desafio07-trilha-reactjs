/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Box, Heading, Text } from '@chakra-ui/react';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

type CarouselProps = {
  slideInfo: {
    slug: string;
    name: string;
    summary: string;
    imagePath: string;
  }[];
};

export default function Carousel(props: CarouselProps) {
  return (
    <Box w="100%" h={['250px', null, '450px']}>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        observer={true}
        observeParents={true}
      >
        {props.slideInfo.map(({ slug, name, summary, imagePath }) => {
          return (
            <SwiperSlide key={slug}>
              <img src={imagePath} alt={name} />
              <Box position="absolute">
                <Heading
                  color="light.text"
                  fontSize={['2xl', null, '5xl']}
                  padding={[3, null, 4]}
                >
                  <Link href={`/continent/${slug}`}>
                    <a>{name}</a>
                  </Link>
                </Heading>
                <Text
                  color="#DADADA"
                  fontSize={['sm', null, '2xl']}
                  fontWeight="bold"
                >
                  <Link href={`/continent/${slug}`}>
                    <a>{summary}</a>
                  </Link>
                </Text>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
