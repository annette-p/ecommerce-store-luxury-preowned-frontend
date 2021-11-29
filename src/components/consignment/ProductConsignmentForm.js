import React from 'react'

export default function ProductConsignmentForm(){
    return (
        <React.Fragment>
            <div class="row mt-4 v-light-grey-bg">
                <h4 className="text-center pt-3">Consignment Form</h4>
                {/* item type */}
                <div class="mt-4 mb-3 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        Which type of item are you selling? 
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="e.g shoulder bag"/>
                </div>
                {/* designer / brand - drop down lists */}
                <div class="mb-3 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        Which designer is your item?
                    </label>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        {/* load the desginer options from db */}
                        <option selected>Pick a brand</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                {/* condition - drop down lists */}
                <div class="mb-3 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        Which condition is your item in? 
                        <span className="ms-3 fst-italic text-decoration-underline" href="">
                            See condition guide here
                        </span>
                    </label>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        {/* load the condition options from db */}
                        <option selected>Select item's condition</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                {/* condition description */}
                <div class="mb-3 fw-bold">
                    <label for="exampleFormControlTextarea1" class="form-label">
                        Describe the conditions and defect (if any)
                    </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                    placeholder="Describe any wear, aging, or defect (i.e. dust bags, straps, clochettes)"></textarea>
                </div>
                {/* width */}
                <div class="mb-3 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        What is the width of your item (CM)?
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="width in cm"/>
                </div>
                {/* height */}
                <div class="mb-3 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        What is the height of your item (CM)?
                    </label>
                    <input type="" class="form-control" id="exampleFormControlInput1" placeholder="height in cm"/>
                </div>
                {/* expecting price */}
                <div class="mb-4 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        How much are you hoping to get for your item?
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="price in SGD"/>
                </div>
            </div>

            {/* Product Images */}
            <div class="row mt-4 pt-3 v-light-grey-bg">
                <h5>Product Images</h5>
                <div class="mb-3">
                    <div className="mt-1">
                        Please upload images of your item as specified
                    </div>
                    <div className="mt-1 mb-2 orange-text">
                        Tips: <span className="fst-italic">include clear photos, showing the true color and any areas prone to wear (interior lining, corners and handle).</span>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label fw-bold">Front Image of your item</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label fw-bold">Back Image of your item</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label fw-bold">Corner Image of your item</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label fw-bold">Inside Image of your item</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label fw-bold"> Image of item Label</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label fw-bold">Image of item Serial Number</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label fw-bold">Image of item tag (if any)</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="mb-4">
                    <label for="formFile" class="form-label fw-bold">Image of item receipt (if any)</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>


            </div>

            {/* Submit button */}
            <div class="row mt-4 mb-2">
                <div class="d-grid gap-2">
                    <button class="btn btn-secondary" type="button">SUBMIT</button>
                </div>
            </div>

        </React.Fragment>
    )
}