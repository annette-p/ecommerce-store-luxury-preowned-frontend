import React, {useEffect, useState} from "react";
import ConsignmentContext from "./ConsignmentContext";

import { 
    getProductCategories,
    getProductDesigners,
    getProductConditions 
} from '../../services/products';

export default function ConsignmentProvider(props) {

    const [categories, setCategories] = useState([]);
    const [designers, setDesigners] = useState([]);
    const [conditions, setConditions] = useState([]);
    const [loaded, setLoaded] = useState(false)

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

        getProductCategories: () => {
            return categories;
        },

        getProductDesigners: () => {
            return designers;
        },

        getProductConditions: () => {
            return conditions;
        },

        test: () => {
            setConsignment(consignment)
        }

    }

    useEffect(() => {

        const loadData = async() => {
            const allCategories = await getProductCategories();
            console.log("allCategories: ", allCategories)
            setCategories(allCategories);

            const allDesigners = await getProductDesigners();
            setDesigners(allDesigners);

            const allConditions = await getProductConditions()
            setConditions(allConditions);

            setLoaded(true);
        }
        loadData();

    }, [loaded]) 

    return (
        <ConsignmentContext.Provider value={context}>
            {props.children}  
        </ConsignmentContext.Provider>
    )

}