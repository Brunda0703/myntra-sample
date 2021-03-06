import React, { Component } from "react";
import styled from "styled-components";

const navLinkComp = ({ className, children }) => (
  <a className={className}>{children}</a>
);
const NavLink = styled(navLinkComp)`
  color: #282c3f;
  padding-left: 20px;
  font-weight: bold;
  text-decoration: none;
`;

export default NavLink;
