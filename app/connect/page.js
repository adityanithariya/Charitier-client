// "use client";

// import React, { useState, useEffect } from "react";

// const Connect = () => {
//     useEffect(() => {
//         if (window.ethereum) {
//             const provider = new ethers.providers.Web3Provider(window.ethereum);
//             setProvider(provider);
//             let { abi } = require("./artifacts/contracts/Poll.sol/PollMe.json");
//             let contract = new ethers.Contract(
//                 process.env.REACT_APP_CONTRACT_ADDRESS,
//                 abi,
//                 provider
//             );
//             setContract(contract);
//         }
//     }, [window.ethereum]);

//     const [provider, setProvider] = useState(null);
//     const [contract, setContract] = useState(null);
//     const [accountType, setAccountType] = useState(null);

//     const signUp = async () => {
//         if (window.ethereum) {
//             await provider.send("eth_requestAccounts", []);

//             let signers = provider.getSigner();
//             let user = contract.connect(signers);
//             await user
//                 .createUser("adityanithariya")
//                 .then(async (tx) => {
//                     await tx.wait();
//                 })
//                 .catch((error) => {
//                     if (String(error).includes("user rejected transaction"))
//                         console.log(error);
//                 });

//             await user
//                 .authenticate("adityanithariya")
//                 .then(async (tx) => {
//                     await tx.wait();
//                 })
//                 .catch((error) => {
//                     if (String(error).includes("user rejected transaction"))
//                         console.log(error);
//                 });
//         } else alert("Please install metamask!");
//     };

//     return (
//         <div>
//             <div className="dropdown">
//                 <button
//                     className="btn btn-secondary dropdown-toggle"
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                 >
//                     {accountType}
//                 </button>
//                 <ul className="dropdown-menu">
//                     <li onClick={e => setAccountType("Admin")}>
//                         <a className="dropdown-item" href="#">
//                             Admin
//                         </a>
//                     </li>
//                     <li onClick={e => setAccountType("NGO")}>
//                         <a className="dropdown-item" href="#">
//                             NGO
//                         </a>
//                     </li>
//                     <li onClick={e => setAccountType("Family")}>
//                         <a className="dropdown-item" href="#">
//                             Family
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Connect;
