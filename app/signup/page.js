"use client";

import React, { useState } from "react";
import styles from "@css/Signup.module.css";

const NGO = () => {
    return (
        <>
            <div className="col-md-12">
                <label htmlFor="inputname" className="form-label">
                    Name of NGO
                </label>
                <input type="text" className="form-control" id="inputname" />
            </div>
            <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">
                    Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>

            <div className="input-group align-center">
                <label
                    htmlFor="inputGroupFile04"
                    className="form-label col-md-2"
                >
                    Pan card
                </label>
                <input
                    type="file"
                    className="form-control col-md-10"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    // width={"70%"}
                />
            </div>
            <div className="input-group flex ">
                <label
                    htmlFor="inputGroupFile05"
                    className="form-label col-md-4"
                >
                    Registeration Certificate
                </label>
                <input
                    type="file"
                    className="form-control col-md-8"
                    id="inputGroupFile05"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    // width={"70%"}
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
            <div className="col-md-12">
                <label htmlFor="inputname" className="form-label">
                    Key Issues
                </label>
                <input type="text" className="form-control" id="inputname" />
            </div>
            <div>
                <div className="mb-2">FCRA Details</div>
                <div className="form-check pl-10">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Is Available
                    </label>
                </div>
                <div className="col-12 pl-10">
                    <label htmlFor="inputReg" className="form-label">
                        Registration No.
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputReg"
                        placeholder="1234 Main St"
                    />
                </div>
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
                    <option>Select State</option>
                    <option>Rajasthan</option>
                    <option>up</option>
                    <option>mp</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                    Pincode
                </label>
                <input type="text" className="form-control" id="inputZip" />
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
            <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">
                    Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>

            <div className="input-group flex ">
                <label
                    htmlFor="inputGroupFile04"
                    className="form-label col-md-2"
                >
                    Pan card
                </label>
                <input
                    type="file"
                    className="form-control col-md-10"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    // width={"70%"}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="inputGroupFileAddon04"
                >
                    upload
                </button>
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
                    <option>Select State</option>
                    <option>Rajasthan</option>
                    <option>up</option>
                    <option>mp</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                    Pincode
                </label>
                <input type="text" className="form-control" id="inputZip" />
            </div>
        </>
    );
};

const Signup = () => {
    const [typeOfAccount, setTypeOfAccount] = useState(true);
    return (
        <>
            <h2 className={styles.heading}>Sign-up</h2>
            <div className="align-center">
                <form className="row g-3">
                    {typeOfAccount ? <NGO /> : <Family />}
                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ backgroundColor: "#0d6efd" }}
                        >
                            Sign in
                        </button>
                    </div>
                    <div
                        style={{
                            width: "50%",
                            textAlign: "left",
                            fontSize: "15px",
                            color: "#0d6efd",
                            textDecoration: "underline",
                            cursor: "pointer",
                        }}
                        onClick={(e) => setTypeOfAccount(!typeOfAccount)}
                    >
                        {typeOfAccount ? "Sign in as Family" : "Sign in as NGO"}
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signup;
