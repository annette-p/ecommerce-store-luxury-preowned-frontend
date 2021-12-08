import React, {useContext, useState} from 'react';
import ConsignmentContext from '../../contexts/consignment/ConsignmentContext';
// import axios from 'axios';

export default function ProductConsignmentForm(){

    const [category, setCategory] = useState();
    const [type, setType] = useState();
    const [designer, setDesigner] = useState();
    const [condition, setCondition] = useState();
    const [conditionDescription, setConditionDescription] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [expectedPrice, setExpectedPrice] = useState();
    const [frontImage, setFrontImage] = useState();
    const [backImage, setBackImage] = useState();
    const [cornerImage, setCornerImage] = useState();
    const [insideImage, setInsideImage] = useState();
    const [labelImage, setLabelImage] = useState();
    const [serialImage, setSerialImage] = useState();
    const [tagImage, setTagImage] = useState();
    const [receiptImage, setReceiptImage] = useState();
    const [errors, setErrors] = useState({})
    const [successFormSubmission, setSuccessFormSubmission] = useState(false);
    
    let context = useContext(ConsignmentContext);

    // Perform validation of form inputs
    function validateForm() {
        // //intentionally bypass validation to test cloudinary image upload
        // setErrors({})
        // return true

        let errors = {}
        let formIsValid = true

        if (!category) {
            formIsValid = false
            errors["category"] = "Please select the category for the item"
        }

        if (!type) {
            formIsValid = false
            errors["type"] = "Please provide a short description of the item type (e.g shoulder bag)"
        }

        if (!designer) {
            formIsValid = false
            errors["designer"] = "Please select the designer for the item"
        }

        if (!condition) {
            formIsValid = false
            errors["condition"] = "Please select the condition for the item"
        }

        if (!conditionDescription) {
            formIsValid = false
            errors["conditionDescription"] = "Please describe the item's conditions and defect (if any)"
        }

        if (!width) {
            formIsValid = false
            errors["width"] = "Please specify the width of the item"
        }

        if (!height) {
            formIsValid = false
            errors["height"] = "Please specify the height of the item"
        }

        if (!expectedPrice) {
            formIsValid = false
            errors["expectedPrice"] = "Please specify your desired selling price for the item"
        }

        // if (!frontImage) {
        //     formIsValid = false
        //     errors["frontImage"] = "Please provide the front image for the item"
        // }

        // if (!backImage) {
        //     formIsValid = false
        //     errors["backImage"] = "Please provide the front image for the item"
        // }

        setErrors(errors);

        return formIsValid
    }

    // create new consignment request --> create this function locally as it is related to user authentication
    // maybe import user contax in here to share user state data
    async function requestNewConsignment() {
        if (validateForm()) {
            try {

                // // Ref: https://cloudinary.com/documentation/upload_images#uploading_with_a_direct_call_to_the_rest_api
                // const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/upload`

                // const frontImageUpload = {
                //     file: frontImage,
                //     upload_preset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
                // }
                // console.log("cloudinaryUrl: ", cloudinaryUrl)
                // console.log("frontImageUpload: ", frontImageUpload)
                // let frontImageUploadResponse = await axios.post(cloudinaryUrl, frontImageUpload, { headers: { "Content-Type": "multipart/form-data" } })
                // console.log(frontImageUploadResponse.data)

                // await context.createConsignment(designer, category, type, expectedPrice, condition, conditionDescription, width, height, 
                //                                 frontImage, backImage, cornerImage, insideImage, labelImage, labelImage, serialImage, tagImage, receiptImage)
                // setSuccessFormSubmission(true)

                // *** Without proper handling of the selected images yet :(

                await context.createConsignment(designer, category, type, expectedPrice, condition, conditionDescription, width, height, 
                                                frontImage, backImage, cornerImage, insideImage, labelImage, labelImage, serialImage, tagImage, receiptImage)
                setSuccessFormSubmission(true)
            } catch(_err) {
                console.log(_err)
                setSuccessFormSubmission(false)
            }
        }
    }

    // function renderCloudinaryUploadWidget() {
    //     let widget = window.cloudinary.createUploadWidget({
    //             cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
    //             uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    //         }, (error, result) => {})
        
    //     return (
    //         <div className="mb-3">
    //             <label for="formFile" className="form-label fw-bold">Front Image of your item (test)</label>
    //             <button onclick={() => widget.open()}>Upload Image</button>
    //             {/* <input className="form-control" type="file" accept="image/*" name="frontImage" value={frontImage} 
    //             onChange={(e) => {setFrontImage(e.target.value)}}/>
    //             <div className="error-msg">{errors.frontImage}</div> */}
    //         </div>
    //     )
    // }


    function renderProductConsignmentForm() {
        if (!successFormSubmission) {
            return (

                <div>

                    <div className="row mt-4 v-light-grey-bg">
                        <h4 className="text-center pt-3">Consignment Form</h4>
                        {/* item catergories - drop down lists */}
                        <div className="mt-4 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Which category of item are you selling? 
                            </label>
                            <select className="form-select" name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                                <option value=""> ----- Select One ----- </option>
                                {context.getProductCategories().map(c => {
                                    return (
                                        <option value={c.id}>  
                                            {c.name}
                                        </option>
                                    )
                                })}
                            </select>
                            <div className="error-msg">{errors.category}</div>
                        </div>
                        {/* item type */}
                        <div className="mt-4 mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Which specific type of item are you selling? 
                            </label>
                            <input type="text" className="form-control" placeholder="e.g shoulder bag" name="type" value={type} onChange={(e) => {setType(e.target.value)}}/>
                            <div className="error-msg">{errors.type}</div>
                        </div>
                        {/* designer / brand - drop down lists */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Which designer is your item?
                            </label>
                            <select className="form-select" name="designer" value={designer} onChange={(e)=>{setDesigner(e.target.value)}}>
                                <option selected>Pick a brand</option>
                                {context.getProductDesigners().map(d => {
                                    return (
                                        <option value={d.id}>  
                                            {d.name}
                                        </option>
                                    )
                                })}
                            </select>
                            <div className="error-msg">{errors.designer}</div>
                        </div>
                        {/* condition - drop down lists */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Which condition is your item in? 
                                <span className="ms-3 fst-italic text-decoration-underline" href="">
                                    See condition guide here
                                </span>
                            </label>
                            <select className="form-select" name="condition" value={condition} onChange={(e)=>{setCondition(e.target.value)}}>
                                <option selected value=""> ------ Select item's condition  ------ </option>
                                {context.getProductConditions().map(c => {
                                    return (
                                        <option value={c}>  
                                            {c}
                                        </option>
                                    )
                                })}
                            </select>
                            <div className="error-msg">{errors.condition}</div>
                        </div>
                        {/* condition description */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlTextarea1" className="form-label">
                                Describe the conditions and defect (if any)
                            </label>
                            <textarea className="form-control" rows="3" 
                                placeholder="Describe any wear, aging, or defect (i.e. dust bags, straps, clochettes)"
                                name="conditionDescription" value={conditionDescription} 
                                onChange={(e) => {setConditionDescription(e.target.value)}}></textarea>
                            <div className="error-msg">{errors.conditionDescription}</div>
                        </div>
                        {/* width */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                What is the width of your item (CM)?
                            </label>
                            <input type="text" className="form-control" placeholder="width in cm"
                            name="width" value={width} onChange={(e) => {setWidth(e.target.value)}}/>
                            <div className="error-msg">{errors.width}</div>
                        </div>
                        {/* height */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                What is the height of your item (CM)?
                            </label>
                            <input type="" className="form-control" placeholder="height in cm"
                            name="height" value={height} onChange={(e) => {setHeight(e.target.value)}}/>
                            <div className="error-msg">{errors.height}</div>
                        </div>
                        {/* expecting price */}
                        <div className="mb-4 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                How much are you hoping to get for your item?
                            </label>
                            <input type="text" className="form-control" placeholder="price in SGD"
                            name="expectedPrice" value={expectedPrice} onChange={(e) => {setExpectedPrice(e.target.value)}}/>
                            <div className="error-msg">{errors.expectedPrice}</div>
                        </div>
                    </div>

                    {/* Product Images */}
                    <div className="row mt-4 pt-3 v-light-grey-bg">
                        <h5>Product Images</h5>
                        <div className="mb-3">
                            <div className="mt-1">
                                Please upload images of your item as specified
                            </div>
                            <div className="mt-1 mb-2 orange-text">
                                Tips: <span className="fst-italic">include clear photos, showing the true color and any areas prone to wear (interior lining, corners and handle).</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label fw-bold">Front Image of your item</label>
                            <input className="form-control" type="file" accept="image/*" name="frontImage" value={frontImage} 
                            onChange={(e) => {setFrontImage(e.target.value)}}/>
                            <div className="error-msg">{errors.frontImage}</div>
                            {/* {renderCloudinaryUploadWidget()} */}
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label fw-bold">Back Image of your item</label>
                            <input className="form-control" type="file" accept="image/*" name="backImage" value={backImage} 
                            onChange={(e) => {setBackImage(e.target.value)}}/>
                            <div className="error-msg">{errors.backImage}</div>
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label fw-bold">Corner Image of your item</label>
                            <input className="form-control" type="file" accept="image/*" name="cornerImage" value={cornerImage} 
                            onChange={(e) => {setCornerImage(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label fw-bold">Inside Image of your item</label>
                            <input className="form-control" type="file" accept="image/*" name="insideImage" value={insideImage} 
                            onChange={(e) => {setInsideImage(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label fw-bold"> Image of item Label</label>
                            <input className="form-control" type="file" accept="image/*" name="labelImage" value={labelImage} 
                            onChange={(e) => {setLabelImage(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label fw-bold">Image of item Serial Number</label>
                            <input className="form-control" type="file" accept="image/*" name="serialImage" value={serialImage} 
                            onChange={(e) => {setSerialImage(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label fw-bold">Image of item tag (if any)</label>
                            <input className="form-control" type="file" accept="image/*" name="tagImage" value={tagImage} 
                            onChange={(e) => {setTagImage(e.target.value)}}/>
                        </div>
                        <div className="mb-4">
                            <label for="formFile" className="form-label fw-bold">Image of item receipt (if any)</label>
                            <input className="form-control" type="file" accept="image/*" name="receiptImage" value={receiptImage} 
                            onChange={(e) => {setReceiptImage(e.target.value)}}/>
                        </div>
                    </div>

                    {/* Submit button */}
                    <div className="row mt-4 mb-2">
                        <div className="d-grid gap-2">
                            <button className="btn btn-secondary" type="submit" onClick={()=>{requestNewConsignment()}}>
                                SUBMIT
                            </button>
                        </div>
                    </div>

                </div>

            )
        }
    }


    function renderSuccessFormSubmission() {
        if (successFormSubmission) {
            return (
                <div>
                    <div className="row mt-4 v-light-grey-bg">
                        <h4 className="text-center pt-4 mb-4">
                            Your Consignment Form has been submitted
                        </h4>
                        <p className="fs-5 text-center mt-3 pb-3">
                            We will get back to you within 48 hours with an initial quotation. If you're happy with the quotation, once we receive your item it will take 7-10 working days to book in, authenticate, and make listing on our platform.
                        </p>
                    </div>
                </div>
            )
        }
    }


    return (
        <React.Fragment>
            {renderProductConsignmentForm()}
            {renderSuccessFormSubmission()}
        </React.Fragment>
    )
}