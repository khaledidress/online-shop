import React from 'react'
import '../landing.css'

export default function RedirectSignup() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img className="mx-auto d-block banner" alt="asx" src="../img/asx.svg" />
                        <h1 className="mt-4 text-center" >
                            You must <span style={{ borderBottom: "4px solid #ff9900", fontWeight: "bold" }}>Register</span> first<br />
                        </h1>

                        <p className="mt-4 text-center" style={{ fontSize: "25px", fontWeight: "bold" }}>
                            How Could You Access Cart Without Registering , Ha?
                        </p>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
