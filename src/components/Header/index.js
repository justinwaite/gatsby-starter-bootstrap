import React from 'react';
import Link from 'gatsby-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './header.scss';

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  close = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="container">
            <Link className="navbar-brand" to="/" onClick={this.close}>
              Gatsby Bootstrap Starter
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/spreadsheets" onClick={this.close}>
                    Components
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Header;
