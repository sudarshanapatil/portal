import React from 'react';
import { Navbar, Nav, FormGroup, FormControl, Button, NavItem, MenuItem, NavDropdown, Image, Grid, Row, Col, DropdownButton, ProgressBar } from 'react-bootstrap';
import logo from "../images/jio.png"
import axios from "axios"
let searchData;
let dataToShow
function handleSearch(query)
{
    console.log("in search haahhaa",query)
    let data=["a","b","c"]
    searchData=data.map((item) => {
           return <div key={item} className="searchDiv">{item}</div>
    })
    
    
}
const NavComp = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">Home</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <img src={logo}  width="45px"/>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" onChange={ (e)=>handleSearch(e.target.value)}/>
                        {searchData}
                         <div className="searchDiv">ghgg</div>
                         <div className="searchDiv">ghgg</div>
                         <div className="searchDiv">ghgg</div>
                    </FormGroup>{' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
            
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    30 Days
    </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    7 Days
    </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Today
    </NavItem>
            </Nav>
        </Navbar>
    )

}

export default NavComp;