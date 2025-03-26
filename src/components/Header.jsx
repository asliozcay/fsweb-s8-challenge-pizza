import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styled from "styled-components";

export default function Header() {
  const Header = styled.header`
    background-color: #ce2829;
    text-align: center;
    padding-top: 3.5rem;
  `;
  return (
    <Header>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </Header>
  );
}
