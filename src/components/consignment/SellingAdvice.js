import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

export default function SellingAdvice(){
    return (
        <React.Fragment>

            <div className="row mb-4">
                <div className="d-none d-lg-block col-lg-5 mt-4 mb-2"></div>
                <div className="col-12 col-lg-7 mt-4 mb-2">
                    <Accordion>
                        {/* Be Brand Savvy */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Be Brand Savvy</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    Some brands never go out of style. On Vestiaire; Hermès and Louis Vuitton are forever popular, so will always sell for a good price, no matter what the season. 
                                </div>
                                <div class="mt-3">
                                    Some brands however may be hot property for a season or 2, so it’s good to buy and then re-sell them quickly, as you may be able to make 100% of your money back... It’s about knowing what’s hot and following demand.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* Think Seasonal */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Think Seasonal</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    If you want to sell your pieces quickly, make sure to sell them at the right time. 
                                </div>
                                <div class="mt-3">
                                    Right now, our community are looking for <span className="fw-bold">leather jackets, jumpers and ankle boots</span> - so why not sell your must-haves from last year + use the money to buy a new piece to take you through the season.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* Be Transparent */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Be Transparent</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    When describing your item, it can be tempting to omit small imperfections in a bid to sell your piece faster. Don’t fall into this trap though, it’s always better to be honest about imperfections to avoid stalling the process at a later stage.
                                </div>

                                <div class="mt-3">
                                    All sold items are checked by our team for quality and authenticity. Any unmentioned imperfections will be noted and called out. Depending on the discrepancy, we’ll either offer the buyer a lower price or cancel the sale altogether. Honesty really is the best policy!
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* the little things */}
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>It’s the little things</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    The best way to make your money back when you sell, is to look after your items carefully. Wear and tear is inevitable, but follow these tips to keep your pieces in the best condition possible. 
                                    <div class="mt-3">
                                    Store your clothes away from light to avoid colour fade, keep handbags in dustbags and shoes in boxes, and fill them with tissue to keep their shape. 
                                    </div> 
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>  
            </div>

        </React.Fragment>
    )
}