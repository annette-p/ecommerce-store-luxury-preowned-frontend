import React, {useContext} from 'react'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Dropdown from 'react-bootstrap/Dropdown'
import Accordion from 'react-bootstrap/Accordion'

import ProductContext from '../../contexts/products/ProductContext';

export default function NavFilterOption(){
    
    let productContext = useContext(ProductContext);

    function filterProductByDesigner(e) {
        productContext.setFilterBy({
            "designer_id": parseInt(e)
        })
    }

    function filterProductByCategory(e) {
        productContext.setFilterBy({
            "category_id": parseInt(e)
        })
    }

    function renderFilterMenuBar() {
        return (
            <Nav>
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
                <Dropdown as={NavItem} onSelect={filterProductByDesigner}>
                    <Dropdown.Toggle as={NavLink}>Designers</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {productContext.getDesigners().map( designer => {
                            return (
                                <Dropdown.Item eventKey={designer.id}>{designer.name}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem} onSelect={filterProductByCategory}>
                    <Dropdown.Toggle as={NavLink}>By categories</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {productContext.getCategories().map( category => {
                            return (
                                <Dropdown.Item eventKey={category.id}>{category.name}</Dropdown.Item>
                            )
                        })}
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