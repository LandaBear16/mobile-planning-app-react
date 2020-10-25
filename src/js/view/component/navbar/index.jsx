import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarToggler } from 'reactstrap'
import { NavLink as Link, useLocation as LocationRouter } from 'react-router-dom'
import React, { useState } from 'react'
import { connect } from 'react-redux'

const isCurrentRoute = (route) => {
  const location = LocationRouter()

  return route === location.pathname
}
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (<Navbar
    className='my-4' color='light' expand='md'
    light
  >
  <NavbarToggler onClick={toggle} className='mr-2'/>
    <Collapse isOpen={isOpen} navbar>
      <Nav className='mr-auto' navbar>
        {props.links.reduce((result, link, index) => {
          if (link.component) {
            result.push(
              <NavItem active={isCurrentRoute(link.href)} className='px-4' key={index}>
                <NavLink tag={Link} to={link.href} onClick={toggle} >{link.label} </NavLink>
              </NavItem>
            )
          }

          return result
        }, [])}
      </Nav>
    </Collapse>
  </Navbar>
  )}

export default connect(
  (state) => ({}),
  (dispatch) => ({
  })
)(NavBar)
