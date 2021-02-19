import styled from 'styled-components';
import NextLink from 'next/link';
import { Auth } from 'aws-amplify';

const MainNav = styled.nav`
  a {
    padding: 8px 16px;
    text-decoration: none;
    font-weight: 600;
  }
`;

const MainNavigation = () => {
  const handleSignout = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log(`%cERROR OCCURED! ${err.message}`, err);
    }
  };
  return (
    <MainNav>
      <NextLink href="/">Home</NextLink>
      <NextLink href="/lambda/basic">Lambda Basic</NextLink>
      <NextLink href="/cognito/login">Cognito - Login</NextLink>
      <button onClick={handleSignout} type="button">
        Sign Out
      </button>
    </MainNav>
  );
};

export default MainNavigation;
