import React from "react";
import styles from "@css/Signup.module.css";

const Signup = () => {
    return (
        <div>
            <form className={styles.form}>
                <input type="text" placeholder="Name of NGO" />
                <input type="email" placeholder="Email" />
                <input type="url" placeholder="Website Url" />
                <input type="file" placeholder="Registration Certificate" />
                <input type="text" placeholder="Act Name" />
                <input type="text" placeholder="Type of NGO" /> {/* Can be a dropdown*/}
                <input type="file" placeholder="Pan Card" />
                <input type="text" placeholder="key issues" />
                <div>
                    <div>FCRA Details</div>
                    <input type="checkbox" id="isAvailable" />
                    <label htmlFor="isAvailable">Is Available</label>
                    <input type="number" placeholder="Registration No" />
                </div>
                <div>
                    <input type="text" placeholder="Place" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                    <input type="number" placeholder="Pincode" />
                    <input type="number" placeholder="Phone Number" />
                    <input type="number" placeholder="Alt Phone Number" />
                </div>
            </form>
        </div>
    );
};

export default Signup;
