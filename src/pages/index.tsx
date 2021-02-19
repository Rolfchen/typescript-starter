import styled from 'styled-components';
import NextLink from 'next/link';
import MainNavigation from '../components/MainNavigation';

const Title = styled.h1`
  font-size: 50px;
`;

const StyledMain = styled.main`
  padding: 16px;
`;

const Menu = styled.nav`
  a {
    text-decoration: none;
    font-weight: 600;
  }
`;

export default function Home() {
  return (
    <StyledMain>
      <MainNavigation />
      <Title>My page</Title>
      <Menu>
        <NextLink href={`/lambda/basic`}>1. Lambda Basic</NextLink>
      </Menu>
    </StyledMain>
  );
}
