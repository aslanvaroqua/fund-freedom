import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Navbar = (props) => {
  return (
    <Nav bsStyle="tabs">
      <LinkContainer to="/about">
        <NavItem>About</NavItem>
      </LinkContainer>
      <LinkContainer to="/visualize">
        <NavItem>Interactive Visualization</NavItem>
      </LinkContainer>
      <LinkContainer to="/datatable">
        <NavItem>Real Time Dataset</NavItem>
      </LinkContainer>
      <LinkContainer to="/trends">
        <NavItem>Highlighted Trends</NavItem>
      </LinkContainer>
      <LinkContainer to="/donate">
        <NavItem>Donate</NavItem>
      </LinkContainer>
    </Nav>
  )
}

export default Navbar
