import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Dropdown from 'react-bootstrap/Dropdown'
import Accordion from 'react-bootstrap/Accordion'

export default function NavFilterOption(){

    function renderFilterMenuBar() {
        return (
            <Nav
                activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href="/home">Just in</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Limited edition</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">X Collaboration</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Runway Collection</Nav.Link>
                </Nav.Item>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>Designers</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Alexander McQueen</Dropdown.Item>
                        <Dropdown.Item>Alexander Wang</Dropdown.Item>
                        <Dropdown.Item>Balenciaga</Dropdown.Item>
                        <Dropdown.Item>Gucci</Dropdown.Item>
                        <Dropdown.Item>Celine</Dropdown.Item>
                        <Dropdown.Item>Chanel</Dropdown.Item>
                        <Dropdown.Item>Christian Dior</Dropdown.Item>
                        <Dropdown.Item>Christian Louboutin</Dropdown.Item>
                        <Dropdown.Item>Dolce Gabbana</Dropdown.Item>
                        <Dropdown.Item>Fendi</Dropdown.Item>
                        <Dropdown.Item>Hermes</Dropdown.Item>
                        <Dropdown.Item>Loius Vuitton</Dropdown.Item>
                        <Dropdown.Item>Miu Miu</Dropdown.Item>
                        <Dropdown.Item>Patek Philippe</Dropdown.Item>
                        <Dropdown.Item>Prada</Dropdown.Item>
                        <Dropdown.Item>Rolex</Dropdown.Item>
                        <Dropdown.Item>Siant Laurent</Dropdown.Item>
                        <Dropdown.Item>Valentino</Dropdown.Item>
                        <Dropdown.Item>Versace</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>By categories</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Bag</Dropdown.Item>
                        <Dropdown.Item>Shoe</Dropdown.Item> 
                        <Dropdown.Item>Clothing</Dropdown.Item> 
                        <Dropdown.Item>Jewelry</Dropdown.Item> 
                        <Dropdown.Item>Watch</Dropdown.Item> 
                    </Dropdown.Menu>
                </Dropdown>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Vintage</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5">Voucher</Nav.Link>
                </Nav.Item>
            </Nav>
        )

    }


    return (
        <React.Fragment>

            <div className="row mt-md-2 mt-lg-3 d-none d-md-block">
                {renderFilterMenuBar()}
                <hr className="mt-1"></hr>
            </div>

            <div className="row mt-2 d-block d-md-none">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Show Filter Menu</Accordion.Header>
                        <Accordion.Body>
                            {renderFilterMenuBar()}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>

        </React.Fragment>
    )
}