"use client";

import { createContext, useState } from "react";
import { ethers } from "ethers";
const { abi } = require("@artifacts/contracts/NGO.sol/NGOContract.json");
import address from "../../../server/scripts/address.json";

const mainContext = createContext();

function Provider({ children }) {

    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [accountType, setAccountType] = useState("Select Account Type");
    const [user, setUser] = useState(null);

    const pageUseEffect = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider);
            let contract = {};
            let NGOContract = new ethers.Contract(
                address["NGOContract"],
                abi,
                provider
            );
            let FamilyContract = new ethers.Contract(
                address["FamilyContract"],
                abi,
                provider
            );
            let AdminContract = new ethers.Contract(
                address["AdminContract"],
                abi,
                provider
            );
            contract.AdminContract = AdminContract;
            contract.FamilyContract = FamilyContract;
            contract.NGOContract = NGOContract;
            setContract(contract);
        }
    }


    const mainSignUp = async () => {
        if (accountType !== "Select Account Type") {
            if (window.ethereum) {
                await provider.send("eth_requestAccounts", []);

                let signers = provider.getSigner();
                try {
                    if (accountType === "Admin") {
                        let user = contract.AdminContract.connect(signers);
                        await user.isAdmin();
                    } else if (accountType === "NGO") {
                        let user = contract.NGOContract.connect(signers);
                        console.log(user)
                        console.log(await user.isNGOFunc());
                        console.log("success")
                    } else if (accountType === "Family") {
                        let user = contract.FamilyContract.connect(signers);
                        await user.isFamilyFunc();
                    }
                } catch (err) {
                    if (err.message.includes("Account doesn't exist")) {
                        if (accountType === "NGO") {
                            window.location.href =
                                "http://localhost:3000/signup?true";
                        } else
                            window.location.href =
                                "http://localhost:3000/signup?false";
                    }
                    else
                        console.log(err)
                }
            } else {
                document.getElementById("toggleModal").click();
            }
        }
    }

    const valuestoShare = {
        setProvider, provider, setContract, contract, setAccountType, accountType, setUser, user, mainSignUp, setProvider, pageUseEffect
    };


    return (
        <mainContext.Provider value={valuestoShare}>
            {children}
        </mainContext.Provider>
    );
};

export { Provider };
export default mainContext; 
