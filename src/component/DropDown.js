import React from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Image, Grid, Row, Col, DropdownButton} from 'react-bootstrap';

const DropDownComp=() =>{
    return(
        <div className="dropdown">
                            <DropdownButton bsStyle="primary" title="Select" >
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>

                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>
                        </div>

    )
}

export default DropDownComp;