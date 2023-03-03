"use client";

import React, { useState } from "react";
import styles from "@css/Signup.module.css";

const NGO = () => {
    return (
        <>
            <div classNameName={styles.ele}>
                <label htmlhtmlFor="ngo-name">Name of ngo</label>
                <input type="text" placeholder="Name of NGO" id="ngo-name" />
            </div>
            <div classNameName={styles.ele}>
                <label htmlhtmlFor="ngo-email">E-mail</label>
                <input type="email" id="ngo-email" placeholder="Email" />
            </div>
            <div classNameName={styles.ele}>
                <label htmlhtmlFor="ngo-web-url">Wbsite URL</label>
                <input type="url" placeholder="Website Url" id="ngo-web-url" />
            </div>
            <div classNameName={styles.ele}>
                <label htmlhtmlFor="ngo-certificate">
                    Registration Certificate
                </label>
                <input
                    type="file"
                    placeholder="Registration Certificate"
                    id="ngo-certificate"
                />
            </div>
            <div classNameName={styles.ele}>
                <label htmlhtmlFor="ngo-Act-Name">Account Name</label>
                <input type="text" placeholder="Act Name" id="ngo-Act-Name" />
            </div>
            <div classNameName={styles.ele}>
                <label htmlhtmlFor="ngo-type">Type of Ngo</label>
                <input
                    type="text"
                    placeholder="Type of NGO"
                    id="ngo-type"
                />{" "}
            </div>
            {/* Can be a dropdown*/}
            <div classNameName={styles.ele}>
                <label htmlhtmlFor="ngo-pan">Pan Card</label>
                <input type="file" placeholder="Pan Card" id="ngo-pan" />
            </div>
            <div classNameName={styles.ele}>
                <label htmlhtmlFor="ngo-key">key issues</label>

                <input type="text" placeholder="key issues" id="ngo-key" />
            </div>
            <div>
                <div classNameName={styles.ele}>
                    <div>FCRA Details</div>
                    <div>
                        <input type="checkbox" id="isAvailable" />
                        <label htmlhtmlFor="isAvailable">Is Available</label>
                    </div>
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="ngo-Registration-No">
                        Registration No
                    </label>

                    <input
                        type="number"
                        placeholder="Registration No"
                        id="ngo-Registration-No"
                    />
                </div>
            </div>
            <div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="ngo-place">Place</label>

                    <input type="text" placeholder="Place" id="ngo-place" />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="ngo-city">City</label>

                    <input type="text" placeholder="City" id="ngo-city" />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="ngo-state">State</label>

                    <input type="text" placeholder="State" id="ngo-state" />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="ngo-pincode">Pincode</label>

                    <input
                        type="number"
                        placeholder="Pincode"
                        id="ngo-pincode"
                    />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="ngo-number">Number</label>

                    <input
                        type="number"
                        placeholder="Phone Number"
                        id="ngo-number"
                    />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="ngo-alt-number">AlterateNumber</label>

                    <input
                        type="number"
                        placeholder="Phone Number"
                        id="ngo-alt-number"
                    />
                </div>

                {/* <input type="number" placeholder="Alt Phone Number" /> */}
            </div>
        </>
    );
};

/*RegDetails reg;
address id;
  
    
   
    string pan_card;
    Address addr;
ContactDetails contact;
Address addr;
    PhoneNumber phone_number;
    PhoneNumber alt_phone_number;
    string email;
Member[4] members;

<div classNameName={styles.Family}>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="ngo-pan">Pan Card</label>
                    <input type="file" placeholder="Pan Card" id="ngo-pan" />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="fam-email">E-mail</label>
                    <input type="email" id="fam-email" placeholder="Email" />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="fam-place">Place</label>

                    <input type="text" placeholder="Place" id="fam-place" />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="fam-city">City</label>

                    <input type="text" placeholder="City" id="fam-city" />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="fam-state">State</label>

                    <input type="text" placeholder="State" id="fam-state" />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="fam-pincode">Pincode</label>

                    <input
                        type="number"
                        placeholder="Pincode"
                        id="fam-pincode"
                    />
                </div>
                <div classNameName={styles.ele}>
                    <label htmlhtmlFor="fam-number">Number</label>

                    <input
                        type="number"
                        placeholder="Phone Number"
                        id="fam-number"
                    />
                </div>
            </div>
        

*/
const Family = () => {
    return (
        <>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                    Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                    Address
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                    Address 2
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                    City
                </label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                    State
                </label>
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                    Zip
                </label>
                <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
        </>
    );
};

const Signup = () => {
    const [typepOfAccount, setTypepOfAccount] = useState(false);
    return (
        <>
            <h2 className={styles.heading}>Sign-up</h2>
            <div className="align-center">
                <form className="row g-3">
                    {typepOfAccount ? <NGO /> : <Family />}
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signup;
