import { FunctionComponent } from "react";
import styled from "styled-components";
import Link from "next/link";

const Layout: FunctionComponent = ({ children }) => {
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
        <Title>
          <Link href="/">
            <a>Graham Tremper</a>
          </Link>
        </Title>
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
  return (
    <li>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </li>
  );
}

const Header = styled.header`
  padding: 0 20px;
  background-color: #d6efff;
  display: flex;
  min-height: 80px;
`;

const Navbar = styled.nav`
  flex: auto;
  ul {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
  }
  li {
    list-style: none;
    &:hover {
      background-color: #c6e9ff;
    }
  }
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

const Title = styled.h1`
  flex: none;
  margin: 0;
  display: flex;
  align-items: center;
  a,
  a:visited {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Body = styled.main`
  padding: 0 20px;
`;
