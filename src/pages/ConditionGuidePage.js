import React from 'react'

export default function ConditionGuidePage(){
    return (
        <React.Fragment>
            {/* Note --- to use MANUAL modal pop up */}

            <article className="container-fluid mt-3">
                <div className="card condition-card v-light-grey-bg">
                    <div className="card-body article-text">
                        <div className="fw-bold">New, with tag</div>
                        <div>
                            A never-worn item with tag is an item which has never been worn and still has the original purchase hangtags on it 
                        </div>
                        <div className="fw-bold mt-3">Never worn</div>
                        <div>
                            Items have never been worn and are as good as brand new, with no tag 
                        </div>
                        <div className="fw-bold mt-3">Pristine</div>
                        <div>
                            Items have been worn once or twice but are still in excellent condition.
                        </div>
                        <div className="fw-bold mt-3">Good</div>
                        <div>
                            Items have been worn but still look great.
                        </div>
                        <div className="fw-bold mt-3">Fair</div>
                        <div>
                            Item has been worn frequently and shows defects (these are mentioned in the description and visible in photos)
                        </div>
                        <div className="fw-bold mt-3">Vintage</div>
                        <div>
                            Condition is relative to age, since imperfections are what give vintage pieces their special character.
                        </div>
                    </div>
                </div>
            </article>

        </React.Fragment>
    )
}