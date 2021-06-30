import React, {Component} from 'react';
import {Nav, NavItem, NavLink, Badge} from 'reactstrap';
import { Link } from 'react-router-dom';

function Navigation({count}) {
   
    
        return ( 
            <div>
            <hr />
            <Nav vertical >
              <NavItem>
                <Link to='/'>Главная</Link>
              </NavItem>
              <NavItem>
                <Link to='/products'>Товары</Link>
              </NavItem>
              <NavItem>
                <Link to='/cart'> Корзина </Link><span>{count}</span>
              </NavItem>
              <NavItem>
                <Link to='/contacts'>Контакты</Link>
              </NavItem>
            </Nav>
            <hr />
      </div>
        );
}

export default Navigation;
