import React from 'react'

export default function CartColumns() {
return (
    <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                <h6 className="text-uppercase">slika</h6>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h6 className="text-uppercase">izdelek</h6>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h6 className="text-uppercase">cena</h6>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h6 className="text-uppercase">število</h6>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h6 className="text-uppercase">odstrani</h6>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h6 className="text-uppercase">skupaj</h6>
            </div>
        </div>
    </div>
);
}
