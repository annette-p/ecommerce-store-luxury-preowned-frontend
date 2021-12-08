import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import videoAuthentication from '../media/authentication.mp4'

export default function AuthenticationPage(){
    return (
        <React.Fragment>
            <h4 className="mt-4 mb-4 text-center">
                AUTHENTICATION <span>
                <FontAwesomeIcon icon={faSearch} className="ms-3 magnify-glass"/></span>
            </h4> 
            <div className="container-fluid d-flex justify-content-center mb-4">
                <video src={videoAuthentication} id="vdo" controls="controls" muted="true" autoplay="true" />
            </div>
            <article className="article-text pt-3 pb-3">
                <div>
                    The Luxury Pre-owned team combines years of luxury goods authentication expertise with the power of new technology and backed by our unconditional guarantee so that you never have to worry. <span className="fw-bold">Authentication is our business. </span>
                </div>
                <div className="mt-4">
                    We stand by our authenticators and the authenticity of each item we sell and we offer a lifetime return policy should any item we sell prove to be non-authentic.
                </div>
                <div className="mt-4 mb-4">
                    <span className="fw-bold">We guarantee the authenticity of every item we sell or 100% of your money back</span> -- Ensuring your trust is most important to us.
                </div>
                
            </article>


            
            
        </React.Fragment>
    )
}

