import React from 'react';
import { Nav, NavItem, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Navigation.css";

// eslint-disable-next-line react/prop-types
function Navigation({ count }) {


  return (
    <Col sm="12" className="navi">
      <Nav id="nav" className="d-flex justify-content-evenly">
        <NavItem >
          <Link className="nav-l"  to='/'>Главная</Link>
        </NavItem >
        <NavItem >
          <Link className="nav-l" to='/products'>Товары</Link>
        </NavItem>
        <NavItem >
          <Link className="nav-l" to='/basket'> Корзина </Link><span className="badge bg-light text-dark rounded-pill">{count}</span>
        </NavItem>
        <NavItem >
          <Link className="nav-l" to='/contacts'>Контакты</Link>
        </NavItem>
      </Nav>
       </Col>
  );
}

export default Navigation;
