import React, { useState } from 'react'

import Collapse from 'react-bootstrap/Collapse'

export default function PayoutRates(){

    const [open1, setOpen1 ] = useState(false);
    const [open2, setOpen2 ] = useState(false);

    return (
        <React.Fragment>

            <div className="row mt-4">
                <div className="col-6">
                    <div class="d-grid gap-2">
                        <button class="btn btn-secondary" type="button" 
                        // onClick={() => { setOpen1(!open1); setOpen2(open1) }} 
                        onClick={() => { setOpen1(!open1); }}
                        aria-controls="bag-payout"
                        aria-expanded={open1}>
                            Bags | Watches | Jewelry Payout Rates
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <div class="d-grid gap-2">
                        <button class="btn btn-secondary" type="button" 
                        // onClick={() =>{ setOpen2(!open2); setOpen1(open2) }} 
                        onClick={() =>{ setOpen2(!open2); }} 
                        aria-controls="apparel-payout"
                        aria-expanded={open2}>
                            Apparel Payout Rates
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <Collapse in={open1}>
                        <div id="bag-payout">
                            <div class="card collapse-card" style={{width: "30rem"}}>
                                <div class="card-body">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Selling Price (SGD)</th>
                                                <th scope="col" className="text-center">Consignor Payout %</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>$500 - $1000</td>
                                                <td className="text-center">65%</td>
                                            </tr>
                                            <tr>
                                                <td>$1000 - $3000</td>
                                                <td className="text-center">70%</td>
                                            </tr>
                                            <tr>
                                                <td>$3000 - $5000</td>
                                                <td className="text-center">75%</td>
                                            </tr>
                                            <tr>
                                                <td> &gt; $5000</td>
                                                <td className="text-center">80%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className="col-6">
                    <Collapse in={open2}>
                        <div id="apparel-payout">
                            <div class="card collapse-card" style={{width: "30rem"}}>
                                <div class="card-body">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Selling Price (SGD)</th>
                                                <th scope="col" className="text-center">Consignor Payout %</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>$30 - $39</td>
                                                <td className="text-center">20%</td>
                                            </tr>
                                            <tr>
                                                <td>$40 - $49</td>
                                                <td className="text-center">25%</td>
                                            </tr>
                                            <tr>
                                                <td>$50 - $69</td>
                                                <td className="text-center">40%</td>
                                            </tr>
                                            <tr>
                                                <td>$70 - $99</td>
                                                <td className="text-center">50%</td>
                                            </tr>
                                            <tr>
                                                <td>$100 - $119</td>
                                                <td className="text-center">60%</td>
                                            </tr>
                                            <tr>
                                                <td>$120 - $179</td>
                                                <td className="text-center">65%</td>
                                            </tr>
                                            <tr>
                                                <td> &gt; $180</td>
                                                <td className="text-center">75%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>

        </React.Fragment>
    )
}