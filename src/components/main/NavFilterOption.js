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

    function filterProductByTag(tagid) {
        productContext.setFilterBy({
            "tag_id": parseInt(tagid)
        })
    }

    function renderFilterMenuBar() {
        return (
            <Nav>
                {/* Display list of product tags */}
                {productContext.getTags().map(tag => {
                    return (
                        <Nav.Item key={`productTagId_${tag.id}`}>
                            <Nav.Link onClick={()=>filterProductByTag(tag.id)}>{tag.name}</Nav.Link>
                        </Nav.Item>
                    )
                })}
                {/* Display dropdown list of designers */}
                <Dropdown as={NavItem} onSelect={filterProductByDesigner}>
                    <Dropdown.Toggle as={NavLink}>Designers</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {productContext.getDesigners().map( designer => {
                            return (
                                <Dropdown.Item key={`designerId_${designer.id}`} eventKey={designer.id}>{designer.name}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                {/* Display dropdown list of categories */}
                <Dropdown as={NavItem} onSelect={filterProductByCategory}>
                    <Dropdown.Toggle as={NavLink}>By categories</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {productContext.getCategories().map( category => {
                            return (
                                <Dropdown.Item key={`categoryId_${category.id}`} eventKey={category.id}>{category.name}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <Nav.Item>
                    <Nav.Link eventKey="vouchers" href="/voucher">Voucher</Nav.Link>
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