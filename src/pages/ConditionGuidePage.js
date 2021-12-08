import React from 'react'
import ConditionGuide from '../components/main/ConditionGuide'

export default function ConditionGuidePage(){
    return (
        <React.Fragment>
            <article className="container-fluid mt-3">
                <div className="card condition-card v-light-grey-bg">
                    <ConditionGuide/>
                </div>
            </article>
        </React.Fragment>
    )
}
