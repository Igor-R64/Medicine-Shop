import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Navigation extends Component {
   
    render() {
        return ( 
            <div>
            <hr />
            <Nav vertical>
              <NavItem>
                <NavLink href="#">Главная</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Товары</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Корзина</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Контакты</NavLink>
              </NavItem>
            </Nav>
            <hr />
      </div>
        );
    }
}
