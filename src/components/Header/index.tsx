import { NextComponentType } from 'next';
import Link from 'next/link';

import { Box, Flex, Image } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

type HeaderProps = {
  hasBackButton: boolean;
};

const Header: NextComponentType<HeaderProps> = (props) => {
  const router = useRouter();

  return (
    <Box position="relative" as="header" my={[3, 7]}>
      {router.pathname !== '/' && (
        <Link href="/">
          <a>
            {
              <ChevronLeftIcon
                position="absolute"
                top={[0, null, 4]}
                left={[4, null, 28]}
                transform={[null, null, 'scale(2)']}
              />
            }
          </a>
        </Link>
      )}

      <Image
        src="/logo.svg"
        alt="logo"
        width={{ base: '81px', md: '184.06px' }}
        height={{ base: '20px', md: '45.92px' }}
        mx="auto"
      />
    </Box>
  );
};

export default Header;
