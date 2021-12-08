import React from 'react'

export default function Dashboard(){
    return (
        <React.Fragment>
            <div className="row mt-4">
                <h4 class="mt-3 mb-0 mb-md-4">Hello Name</h4>
                <div class="d-none d-lg-block col-1 mt-4"></div>
                <div class="col mt-4 ms-0 ms-lg-4">
                    <div class="card light-gold-bg dashboard-card">
                        <div class="card-body text-center">
                            <h6 class="card-subtitle mb-2 text-muted">BUY</h6>
                            <h1>2</h1>
                        </div>
                    </div>
                </div>
                <div class="col mt-4 mb-4">
                    <div class="card total-card-bg light-gold-bg dashboard-card">
                        <div class="card-body text-center">
                            <h6 class="card-subtitle mb-2 text-muted">SELL</h6>
                            <h1>0</h1>
                        </div>
                    </div>
                </div>
                <div class="d-none d-lg-block col-1 mt-4"></div>
            </div>
        </React.Fragment>
    )
}