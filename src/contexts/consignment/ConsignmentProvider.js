import React, {useEffect, useState} from "react";
import ConsignmentContext from "./ConsignmentContext";

import {
    createConsignment,
    getProductCategories,
    getProductDesigners,
    getProductConditions 
} from '../../services/products';

export default function ConsignmentProvider(props) {

    const [categories, setCategories] = useState([]);
    const [designers, setDesigners] = useState([]);
    const [conditions, setConditions] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const context = {

        createConsignment: async (designerId, categoryId, itemName, sellingPrice, itemCondition, itemConditionDescription, itemWidth, itemHeight,
                                  itemPhoto1, itemPhoto2, itemPhoto3, itemPhoto4, itemPhoto5, itemPhoto6, itemPhoto7, itemPhoto8) => {
            try{
                const newConsignmentId = await createConsignment(designerId, categoryId, itemName, sellingPrice, 
                                                                 itemCondition, itemConditionDescription, itemWidth, itemHeight,
                                                                 itemPhoto1, itemPhoto2, itemPhoto3, itemPhoto4,
                                                                 itemPhoto5, itemPhoto6, itemPhoto7, itemPhoto8)
                return newConsignmentId;
            } catch(err) {
                console.log(err)
                throw err
            }
        },

        getProductCategories: () => {
            return categories;
        },

        getProductDesigners: () => {
            return designers;
        },

        getProductConditions: () => {
            return conditions;
        }

    }

    useEffect(() => {

        const loadData = async() => {
            const allCategories = await getProductCategories();
            allCategories.sort( function(category1, category2) {
                let categoryName1 = category1.name.toLowerCase();
                let categoryName2 = category2.name.toLowerCase();
    
                return categoryName1.localeCompare(categoryName2);
            })
            setCategories(allCategories);

            const allDesigners = await getProductDesigners();
            allDesigners.sort( function(designer1, designer2) {
                let designerName1 = designer1.name.toLowerCase();
                let designerName2 = designer2.name.toLowerCase();
    
                return designerName1.localeCompare(designerName2);
            })
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