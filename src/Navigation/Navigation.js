import React, { Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { navCollapsed } = this.state
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Dane Sanctuary Coalition</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/volunteer">Volunteer</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                   Speeches
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    <NavLink href="/speeches"> Dane Sanctuary</NavLink>
                                    
                  </DropdownItem>
                                    <DropdownItem>
                                    <NavLink href="/speeches"> Keeping Families Together</NavLink>
                                       
                  </DropdownItem>
                                    
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header