import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';


function Header() {
    return (
        <div>
            <Navbar dark color="dark">
                <NavbarBrand href="/" className="mr-auto">CharityBH</NavbarBrand>
                <NavbarBrand href="/" className="ml-auto mr-auto">ABOUT</NavbarBrand>
                <NavbarBrand href="/" className="mr-auto">CHARITIES</NavbarBrand>
                <NavbarBrand href="/" className="mr-auto">ENROLL</NavbarBrand>
                <NavbarBrand href="/" className="mr-auto">API</NavbarBrand>
                <NavbarBrand href="/" className="mr-auto">HOW DOES IT WORK?</NavbarBrand>
                <NavbarBrand href="/" className="ml-auto">ADMIN</NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Header
