import React from "react";
import styles from "@css/Signup.module.css";

const Signup = () => {
    return (
        <>
            <h2 className={styles.heading}>Sign-up</h2>
            <div className="align-center">
                <form className={styles.form}>
                    <div className={styles.ele}>
                        <label htmlFor="ngo-name">Name of ngo</label>
                        <input
                            type="text"
                            placeholder="Name of NGO"
                            id="ngo-name"
                        />
                    </div>
                    <div className={styles.ele}>
                        <label htmlFor="ngo-email">E-mail</label>
                        <input
                            type="email"
                            id="ngo-email"
                            placeholder="Email"
                        />
                    </div>
                    <div className={styles.ele}>
                        <label htmlFor="ngo-web-url">Wbsite URL</label>
                        <input
                            type="url"
                            placeholder="Website Url"
                            id="ngo-web-url"
                        />
                    </div>
                    <div className={styles.ele}>
                        <label htmlFor="ngo-certificate">
                            Registration Certificate
                        </label>
                        <input
                            type="file"
                            placeholder="Registration Certificate"
                            id="ngo-certificate"
                        />
                    </div>
                    <div className={styles.ele}>
                        <label htmlFor="ngo-Act-Name">Account Name</label>
                        <input
                            type="text"
                            placeholder="Act Name"
                            id="ngo-Act-Name"
                        />
                    </div>
                    <div className={styles.ele}>
                        <label htmlFor="ngo-type">Type of Ngo</label>
                        <input
                            type="text"
                            placeholder="Type of NGO"
                            id="ngo-type"
                        />{" "}
                    </div>
                    {/* Can be a dropdown*/}
                    <div className={styles.ele}>
                        <label htmlFor="ngo-pan">Pan Card</label>
                        <input
                            type="file"
                            placeholder="Pan Card"
                            id="ngo-pan"
                        />
                    </div>
                    <div className={styles.ele}>
                        <label htmlFor="ngo-key">key issues</label>

                        <input
                            type="text"
                            placeholder="key issues"
                            id="ngo-key"
                        />
                    </div>
                    <div>
                        <div>FCRA Details</div>
                        <div className={styles.ele}>
                            <input type="checkbox" id="isAvailable" />
                            <label htmlFor="isAvailable">Is Available</label>
                        </div>
                        <div className={styles.ele}>
                            <label htmlFor="ngo-Registration-No">
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
                        <div className={styles.ele}>
                            <label htmlFor="ngo-place">Place</label>

                            <input
                                type="text"
                                placeholder="Place"
                                id="ngo-place"
                            />
                        </div>
                        <div className={styles.ele}>
                            <label htmlFor="ngo-city">City</label>

                            <input
                                type="text"
                                placeholder="City"
                                id="ngo-city"
                            />
                        </div>
                        <div className={styles.ele}>
                            <label htmlFor="ngo-state">State</label>

                            <input
                                type="text"
                                placeholder="State"
                                id="ngo-state"
                            />
                        </div>
                        <div className={styles.ele}>
                            <label htmlFor="ngo-pincode">Name of ngo</label>

                            <input
                                type="number"
                                placeholder="Pincode"
                                id="ngo-pincode"
                            />
                        </div>
                        <div className={styles.ele}>
                            <label htmlFor="ngo-number">Number</label>

                            <input
                                type="number"
                                placeholder="Phone Number"
                                id="ngo-number"
                            />
                        </div>
                        <div className={styles.ele}>
                            <label htmlFor="ngo-alt-number">
                                AlterateNumber
                            </label>

                            <input
                                type="number"
                                placeholder="Phone Number"
                                id="ngo-alt-number"
                            />
                        </div>

                        {/* <input type="number" placeholder="Alt Phone Number" /> */}
                    </div>
                </form>
            </div>
            <button className={styles.btn}>Submit</button>
        </>
    );
};

export default Signup;
