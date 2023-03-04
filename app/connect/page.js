"use client";

import React, { useState, useEffect, useContext } from "react";
import styles from "@css/Connect.module.css";
import mainContext from "../context/mainContext";


const Connect = () => {

    const { setAccountType, accountType, mainSignUp, pageUseEffect } = useContext(mainContext); 

    useEffect(() => {
        // if (window.ethereum) {
        //     const provider = new ethers.providers.Web3Provider(window.ethereum);
        //     setProvider(provider);
        //     let contract = {};
        //     let NGOContract = new ethers.Contract(
        //         address["NGOContract"],
        //         abi,
        //         provider
        //     );
        //     let FamilyContract = new ethers.Contract(
        //         address["FamilyContract"],
        //         abi,
        //         provider
        //     );
        //     let AdminContract = new ethers.Contract(
        //         address["AdminContract"],
        //         abi,
        //         provider
        //     );
        //     contract.AdminContract = AdminContract;
        //     contract.FamilyContract = FamilyContract;
        //     contract.NGOContract = NGOContract;
        //     setContract(contract);
        // }
        pageUseEffect(); 
    }, []);

    // const [provider, setProvider] = useState(null);
    // const [contract, setContract] = useState(null);
    // const [accountType, setAccountType] = useState("Select Account Type");
    // const [user, setUser] = useState(null); 

    const signUp = async () => {
        // if (accountType !== "Select Account Type") {
        //     if (window.ethereum) {
        //         await provider.send("eth_requestAccounts", []);

        //         let signers = provider.getSigner();
        //         try {
        //             if (accountType === "Admin") {
        //                 let user = contract.AdminContract.connect(signers);
        //                 await user.isAdmin();
        //             } else if (accountType === "NGO") {
        //                 let user = contract.NGOContract.connect(signers);
        //                 await user.isNGOFunc();
        //             } else if (accountType === "Family") {
        //                 let user = contract.FamilyContract.connect(signers);
        //                 await user.isFamilyFunc();
        //             }
        //         } catch (err) {
        //             if (err.message.includes("Account doesn't exist")) {
        //                 if (accountType === "NGO") {
        //                     window.location.href =
        //                         "http://localhost:3000/signup?true";
        //                 } else
        //                     window.location.href =
        //                         "http://localhost:3000/signup?false";
        //             }
        //         }
        //     } else {
        //         document.getElementById("toggleModal").click();
        //     }
        // }

        mainSignUp()

    };

    return (
        <div>
            <div className={styles.header}>Connect Metamask Wallet</div>
            <div className={`${styles.dropdown} dropdown`}>
                <button
                    className="btn btn-secondary dropdown-toggle w-30"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ backgroundColor: "#6c757d !important" }}
                >
                    {accountType}
                </button>
                <ul
                    className="dropdown-menu"
                    defaultValue="Select Account Type"
                >
                    <li onClick={(e) => setAccountType("Admin")}>
                        <a className="dropdown-item" href="#">
                            Admin
                        </a>
                    </li>
                    <li onClick={(e) => setAccountType("NGO")}>
                        <a className="dropdown-item" href="#">
                            NGO
                        </a>
                    </li>
                    <li onClick={(e) => setAccountType("Family")}>
                        <a className="dropdown-item" href="#">
                            Family
                        </a>
                    </li>
                </ul>
            </div>
            <div className="align-center">
                <button
                    type="button"
                    className="btn btn-primary w-50 my-3"
                    onClick={signUp}
                >
                    Connect
                </button>
            </div>
            <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="toggleModal"
            ></button>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Metamask Account Needed
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            To access all the features you need to have a
                            metamask account, you can create one very easily by
                            below button
                        </div>
                        <div className="modal-footer">
                            <a
                                href="https://metamask.io/download/"
                                className="btn btn-primary"
                                target="_blank"
                            >
                                Create Metamask Account
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
