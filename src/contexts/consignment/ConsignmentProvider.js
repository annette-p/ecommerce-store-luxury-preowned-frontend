import React, {useState} from "react";
import ConsignmentContext from "./ConsignmentContext";

export default function ConsignmentProvider(props) {

    const [consignment, setConsignment] = useState(
        {
          categories: ["bag", "shoe", "cloth", "jewelry", "watch"],
          designers: ["gucci", "celine", "fendi", "loius vuitton", "hermes"],
          conditions: ["new", "never-worn", "pristine", "good", "fair", "vintage"]
        }
    );


    const context = {

        // getConsignment:() => {
        //     return consignment;
        // },

        // 
        getCategories: () => {
            return consignment.categories
        },

        getDesigners: () => {
            return consignment.designers
        },

        getConditions: () => {
            return consignment.conditions
        },

        test: () => {
            setConsignment(consignment)
        }

    }

    return (
        <ConsignmentContext.Provider value={context}>
            {props.children}  
        </ConsignmentContext.Provider>
    )

}