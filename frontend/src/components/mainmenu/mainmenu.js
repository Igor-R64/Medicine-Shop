import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { FcBiomass, FcBusinessman } from "react-icons/fc";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

      <Navbar className="d-flex " color="info" light expand="md">
          <div className="d-flex container-fluid">
            <NavbarBrand className="offset-md-1 text-success"  href="/">Medicine SHOP <FcBiomass/> </NavbarBrand>  
         
        

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto offset-md-3" navbar>
            <NavItem>
              <NavLink href="/components/">Пока не знаю</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reactstrap">Пока не знаю</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="offset-md-2">Разработано c божьей помощью и Александром <FcBusinessman/> </NavbarText>
        </Collapse>
        </div>
      </Navbar>

   
  );
}

export default Example;