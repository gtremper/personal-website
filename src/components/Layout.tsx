import { FC } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header>
        <Navbar>
          <ul>
            <NavLink name="Home" href="/" />
            <NavLink name="Resume" href="/resume" />
            <NavLink name="Projects" href="/projects" />
          </ul>
        </Navbar>
        <Link href="/">
          <Title>Graham Tremper</Title>
        </Link>
      </Header>
      <Body>{children}</Body>
    </>
  );
};
export default Layout;

type NavLinkProps = {
  name: string;
  href: string;
};

function NavLink({ name, href }: NavLinkProps) {
  const router = useRouter();
  return (
    <Navtab isSelected={router.pathname === href}>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </Navtab>
  );
}

const Header = styled.header`
  padding: 0 20px;
  background-color: #d6efff;
  display: flex;
  min-height: 80px;
`;

type NavtabProps = {
  isSelected?: boolean;
};

const Navtab = styled.li<NavtabProps>`
  list-style: none;
  padding: 1px;
  &:hover {
    background-color: #c6e9ff;
    border: 1px solid #a7c4d6;
    padding: 0px;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #c6e9ff;
    `}

  a,
  a:visited {
    text-decoration: none;
    font-size: 24px;
    color: black;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
  }
`;

const Navbar = styled.nav`
  flex: auto;
  ul {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
  }
`;

const Title = styled.h1`
  flex: none;
  cursor: pointer;
  margin: 0;
  display: flex;
  align-items: center;
  color: black;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Body = styled.main`
  padding: 0 20px;
`;
