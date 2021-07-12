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
import './MainMenu.css';

// eslint-disable-next-line no-unused-vars
const MainMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <Navbar className="d-flex header" light expand="md">
      <div className="d-flex container-fluid">
        <NavbarBrand className= "text-success" href="/"> 
        <img className="logo" src={"/images/log1.png"} alt="logo" />
        </NavbarBrand>



        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <NavbarText id="nav-header3" className="offset-md-3"> Только качественные товары </NavbarText>
          <Nav className="mr-auto offset-md-3 " navbar>
            <NavItem>
              <NavLink id="nav-header1" href="/components/">Войти</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="nav-header2" href="/reactstrap">Зарегистрироватся</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>


  );
}

export default MainMenu;