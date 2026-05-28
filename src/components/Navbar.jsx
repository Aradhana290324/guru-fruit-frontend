
// // import { useNavigate } from "react-router-dom";

// // function Navbar() {

// //     const navigate = useNavigate();
// // const customerLoggedIn =
// //     localStorage.getItem(
// //         "customerLoggedIn"
// //     );
// //     const adminToken =
// //         localStorage.getItem("token");

// //     const customerMobile =
// //         localStorage.getItem("customerMobile");

// //     // const logoutCustomer = () => {

// //     //     localStorage.removeItem("customerMobile");

// //     //     localStorage.removeItem("customerName");

// //     //     localStorage.removeItem("customerAddress");

// //     //     navigate("/");
// //     // };
// //     const logoutCustomer = () => {

// //     localStorage.removeItem("customerLoggedIn");

// //     localStorage.removeItem("customerMobile");

// //     localStorage.removeItem("customerName");

// //     localStorage.removeItem("customerAddress");

// //     navigate("/");
// // };

// //     const logoutAdmin = () => {

// //         localStorage.removeItem("token");

// //         sessionStorage.removeItem("token");

// //         navigate("/admin-login");
// //     };

// //     return (

// //         <div style={styles.navbar}>

// //             {/* LEFT */}

// //             <div
// //                 style={styles.left}

// //                 onClick={() => navigate("/")}
// //             >

// //                 <img
// //                     src="/logo.jpeg"
// //                     alt="logo"
// //                     style={styles.logo}
// //                 />

// //                 <div>

// //                     <h2 style={styles.title}>
// //                         The Guru Fruit Shop
// //                     </h2>

// //                     <p style={styles.subtitle}>
// //                         <b>Nature’s Freshness at Your Doorstep</b>     <br />
// //                         Fresh Fruits • Fast Delivery • Pure Happiness
// //                     </p>

// //                 </div>

// //             </div>

// //             {/* RIGHT */}

// //             <div style={styles.right}>

// //                 <button
// //                     style={styles.button}

// //                     onClick={() => navigate("/")}
// //                 >
// //                     🏠 Home
// //                 </button>

// //                 <button
// //                     style={styles.button}

// //                     onClick={() => navigate("/my-orders")}
// //                 >
// //                     📦 My Orders
// //                 </button>

// //                 <button
// //                     style={styles.button}

// //                     onClick={() => navigate("/cart")}
// //                 >
// //                     🛒 Cart
// //                 </button>

// //                 {
// //                     customerLoggedIn  && (

// //                         <button

// //     style={styles.accountBtn}

// //     onClick={() =>
// //         navigate("/account")
// //     }
// // >
// //     👤 Account
// // </button>
// //                     )
// //                 }
// // {/* 
// //                 {
// //                     adminToken && (

// //                         <>
// //                             <button
// //                                 style={styles.adminBtn}

// //                                 onClick={() =>
// //                                     navigate("/admin")
// //                                 }
// //                             >
// //                                 👨‍💼 Admin
// //                             </button>

// //                             {/* <button
// //                                 style={styles.adminBtn}

// //                                 onClick={() =>
// //                                     navigate("/orders")
// //                                 }
// //                             >
// //                                 📋 Orders
// //                             </button> */}
// //                         {/* </> */}
// //                     {/* ) */}
// //                 {/* }  */}
// // {/*  */}
// // {
// //     adminToken ? (

// //         <>
// //             <button
// //                 style={styles.adminBtn}

// //                 onClick={() =>
// //                     navigate("/admin")
// //                 }
// //             >
// //                 👨‍💼 Admin Panel
// //             </button>

// //             <button
// //                 style={styles.logoutBtn}

// //                 onClick={logoutAdmin}
// //             >
// //                 Admin Logout
// //             </button>
// //         </>

// //     ) : (

// //         <button
// //             style={styles.adminBtn}

// //             onClick={() =>
// //                 navigate("/admin-login")
// //             }
// //         >
// //             🔐 Admin Login
// //         </button>
// //     )
// // }
// //                 {
// //                     customerMobile

// //                         ?

// //                         <button
// //                             style={styles.logoutBtn}

// //                             onClick={logoutCustomer}
// //                         >
// //                             Logout
// //                         </button>

// //                         :

// //                         <button
// //                             style={styles.loginBtn}

// //                             onClick={() =>
// //                                 navigate("/login")
// //                             }
// //                         >
// //                             Login
// //                         </button>
// //                 }
// // {/* 
// //                 {
// //                     adminToken && (

// //                         <button
// //                             style={styles.logoutBtn}

// //                             onClick={logoutAdmin}
// //                         >
// //                             Admin Logout
// //                         </button>
// //                     )
// //                 } */}

// //             </div>

// //         </div>
// //     );
// // }

// // const styles = {

// //     navbar: {

// //         display: "flex",

// //         justifyContent: "space-between",

// //         alignItems: "center",

// //         padding: "15px 30px",

// //         background: "white",

// //         boxShadow: "0px 2px 12px rgba(0,0,0,0.08)",

// //         position: "sticky",

// //         top: 0,

// //         zIndex: 1000,

// //         flexWrap: "wrap",
// //         gap: "15px"
// //     },

// //     left: {

// //         display: "flex",

// //         alignItems: "center",

// //         gap: "12px",

// //         cursor: "pointer"
// //     },

// //     logo: {

// //         width: "60px",

// //         height: "60px",

// //         borderRadius: "50%",

// //         objectFit: "cover"
// //     },

// //     title: {

// //         margin: 0,

// //         color: "#0f7b0f",

// //         fontSize: "24px"
// //     },

// //     subtitle: {

// //         margin: 0,

// //         color: "#777",

// //         fontSize: "13px"
// //     },

// //     right: {

// //         display: "flex",

// //         gap: "12px",

// //         flexWrap: "wrap",

// //         alignItems: "center",
// //         justifyContent: "center"
// //     },

// //     button: {

// //         padding: "10px 16px",

// //         borderRadius: "10px",

// //         border: "none",

// //         background: "#0f7b0f",

// //         color: "white",

// //         cursor: "pointer",

// //         fontWeight: "bold"
// //     },

// //     loginBtn: {

// //         padding: "10px 16px",

// //         borderRadius: "10px",

// //         border: "none",

// //         background: "#f59e0b",

// //         color: "white",

// //         cursor: "pointer",

// //         fontWeight: "bold"
// //     },

// //     logoutBtn: {

// //         padding: "10px 16px",

// //         borderRadius: "10px",

// //         border: "none",

// //         background: "#dc2626",

// //         color: "white",

// //         cursor: "pointer",

// //         fontWeight: "bold"
// //     },

// //     adminBtn: {

// //         padding: "10px 16px",

// //         borderRadius: "10px",

// //         border: "none",

// //         background: "#111827",

// //         color: "white",

// //         cursor: "pointer",

// //         fontWeight: "bold"
// //     },

// //     accountBtn: {

// //         padding: "10px 16px",

// //         borderRadius: "10px",

// //         border: "none",

// //         background: "#2563eb",

// //         color: "white",

// //         cursor: "pointer",

// //         fontWeight: "bold"
// //     }
// // };

// // export default Navbar;
// //--------------------------------------------------------------------------------------------------
// import { useNavigate } from "react-router-dom";

// import {
//     useState
// } from "react";
// function Navbar() {
//     const [showAccountModal,
//     setShowAccountModal] =
//     useState(false);

// const [editName,
//     setEditName] =
//     useState(
//         localStorage.getItem(
//             "customerName"
//         ) || ""
//     );

// const [editMobile,
//     setEditMobile] =
//     useState(
//         localStorage.getItem(
//             "customerMobile"
//         ) || ""
//     );

// const [editHouse,
//     setEditHouse] =
//     useState("");

// const [editArea,
//     setEditArea] =
//     useState("");

// const [editLandmark,
//     setEditLandmark] =
//     useState("");

// const [editCity,
//     setEditCity] =
//     useState("");

// const [editPincode,
//     setEditPincode] =
//     useState("");

// const [isEditing,
//     setIsEditing] =
//     useState(false);

//     const navigate = useNavigate();
// const customerLoggedIn =
//     localStorage.getItem(
//         "customerLoggedIn"
//     );
//     const adminToken =
//         localStorage.getItem("token");

//     const customerMobile =
//         localStorage.getItem("customerMobile");

//     // const logoutCustomer = () => {

//     //     localStorage.removeItem("customerMobile");

//     //     localStorage.removeItem("customerName");

//     //     localStorage.removeItem("customerAddress");

//     //     navigate("/");
//     // };
//     const logoutCustomer = () => {

//     localStorage.removeItem("customerLoggedIn");

//     localStorage.removeItem("customerMobile");

//     localStorage.removeItem("customerName");

//     localStorage.removeItem("customerAddress");

//     navigate("/");
// };

//     const logoutAdmin = () => {

//         localStorage.removeItem("token");

//         sessionStorage.removeItem("token");

//         navigate("/admin-login");
//     };

//     return (

//       <>
    
//     <div style={styles.navbar}>

//             {/* LEFT */}

//             <div
//                 style={styles.left}

//                 onClick={() => navigate("/")}
//             >

//                 <img
//                     src="/logo.jpeg"
//                     alt="logo"
//                     style={styles.logo}
//                 />

//                 <div>

//                     <h2 style={styles.title}>
//                         The Guru Fruit Shop
//                     </h2>

//                     <p style={styles.subtitle}>
//                         <b>Nature’s Freshness at Your Doorstep</b>     <br />
//                         Fresh Fruits • Fast Delivery • Pure Happiness
//                     </p>

//                 </div>

//             </div>

//             {/* RIGHT */}

//             <div style={styles.right}>

//                 <button
//                     style={styles.button}

//                     onClick={() => navigate("/")}
//                 >
//                     🏠 Home
//                 </button>

//                 <button
//                     style={styles.button}

//                     onClick={() => navigate("/my-orders")}
//                 >
//                     📦 My Orders
//                 </button>

//                 <button
//                     style={styles.button}

//                     onClick={() => navigate("/cart")}
//                 >
//                     🛒 Cart
//                 </button>

//                 {
//                     customerLoggedIn  && (

//                         <button

//     style={styles.accountBtn}

//     onClick={() =>
//     setShowAccountModal(true)
// }
// >
//     👤 Account
// </button>
//                     )
//                 }
// {/* 
//                 {
//                     adminToken && (

//                         <>
//                             <button
//                                 style={styles.adminBtn}

//                                 onClick={() =>
//                                     navigate("/admin")
//                                 }
//                             >
//                                 👨‍💼 Admin
//                             </button>

//                             {/* <button
//                                 style={styles.adminBtn}

//                                 onClick={() =>
//                                     navigate("/orders")
//                                 }
//                             >
//                                 📋 Orders
//                             </button> */}
//                         {/* </> */}
//                     {/* ) */}
//                 {/* }  */}
// {/*  */}
// {
//     adminToken ? (

//         <>
//             <button
//                 style={styles.adminBtn}

//                 onClick={() =>
//                     navigate("/admin")
//                 }
//             >
//                 👨‍💼 Admin Panel
//             </button>

//             <button
//                 style={styles.logoutBtn}

//                 onClick={logoutAdmin}
//             >
//                 Admin Logout
//             </button>
            
//         </>
        

//     ) : (

//         <button
//             style={styles.adminBtn}

//             onClick={() =>
//                 navigate("/admin-login")
//             }
//         >
//             🔐 Admin Login
//         </button>
//     )
// }
//                 {
//                     customerMobile

//                         ?

//                         <button
//                             style={styles.logoutBtn}

//                             onClick={logoutCustomer}
//                         >
//                             Logout
//                         </button>

//                         :

//                         <button
//                             style={styles.loginBtn}

//                             onClick={() =>
//                                 navigate("/login")
//                             }
//                         >
//                             Login
//                         </button>
//                 }
// {/* 
//                 {
//                     adminToken && (

//                         <button
//                             style={styles.logoutBtn}

//                             onClick={logoutAdmin}
//                         >
//                             Admin Logout
//                         </button>
//                     )
//                 } */}

//             </div>

//        </div>

// {
//     showAccountModal && (

//         <div style={styles.modalOverlay}>

//             <div style={styles.modalBox}>

//                 <h2 style={{
//                     marginBottom: "20px",
//                     color: "#0f7b0f"
//                 }}>
//                     👤 My Account
//                 </h2>

//                 <input
//                     type="text"

//                     placeholder="Name"

//                     value={editName}

//                     onChange={(e) =>
//                         setEditName(
//                             e.target.value
//                         )
//                     }

//                     style={styles.modalInput}
//                 />

//                 <input
//                     type="text"

//                     placeholder="Mobile"

//                     value={editMobile}

//                     onChange={(e) =>
//                         setEditMobile(
//                             e.target.value
//                         )
//                     }

//                     style={styles.modalInput}
//                 />

//                 <textarea

//                     placeholder="Address"

//                     value={editAddress}

//                     onChange={(e) =>
//                         setEditAddress(
//                             e.target.value
//                         )
//                     }

//                     style={{
//                         ...styles.modalInput,
//                         height: "80px"
//                     }}
//                 />

//                 <div style={{
//                     display: "flex",
//                     gap: "10px",
//                     marginTop: "20px"
//                 }}>

//                     <button

//                         onClick={() => {

//                             localStorage.setItem(
//                                 "customerName",
//                                 editName
//                             );

//                             localStorage.setItem(
//                                 "customerMobile",
//                                 editMobile
//                             );

//                             localStorage.setItem(
//                                 "customerAddress",
//                                 editAddress
//                             );

//                             alert(
//                                 "Profile Updated 😍"
//                             );

//                             setShowAccountModal(false);
//                         }}

//                         style={styles.saveBtn}
//                     >
//                         Save
//                     </button>

//                     <button

//                         onClick={() =>
//                             setShowAccountModal(false)
//                         }

//                         style={styles.closeBtn}
//                     >
//                         Close
//                     </button>

//                 </div>

//             </div>

//         </div>
//     )
// }

// </>

// );
// }

// const styles = {

//     navbar: {

//         display: "flex",

//         justifyContent: "space-between",

//         alignItems: "center",

//         padding: "15px 30px",

//         background: "white",

//         boxShadow: "0px 2px 12px rgba(0,0,0,0.08)",

//         position: "sticky",

//         top: 0,

//         zIndex: 1000,

//         flexWrap: "wrap",
//         gap: "15px"
//     },

//     left: {

//         display: "flex",

//         alignItems: "center",

//         gap: "12px",

//         cursor: "pointer"
//     },

//     logo: {

//         width: "60px",

//         height: "60px",

//         borderRadius: "50%",

//         objectFit: "cover"
//     },

//     title: {

//         margin: 0,

//         color: "#0f7b0f",

//         fontSize: "24px"
//     },

//     subtitle: {

//         margin: 0,

//         color: "#777",

//         fontSize: "13px"
//     },

//     right: {

//         display: "flex",

//         gap: "12px",

//         flexWrap: "wrap",

//         alignItems: "center",
//         justifyContent: "center"
//     },

//     button: {

//         padding: "10px 16px",

//         borderRadius: "10px",

//         border: "none",

//         background: "#0f7b0f",

//         color: "white",

//         cursor: "pointer",

//         fontWeight: "bold"
//     },

//     loginBtn: {

//         padding: "10px 16px",

//         borderRadius: "10px",

//         border: "none",

//         background: "#f59e0b",

//         color: "white",

//         cursor: "pointer",

//         fontWeight: "bold"
//     },

//     logoutBtn: {

//         padding: "10px 16px",

//         borderRadius: "10px",

//         border: "none",

//         background: "#dc2626",

//         color: "white",

//         cursor: "pointer",

//         fontWeight: "bold"
//     },

//     adminBtn: {

//         padding: "10px 16px",

//         borderRadius: "10px",

//         border: "none",

//         background: "#111827",

//         color: "white",

//         cursor: "pointer",

//         fontWeight: "bold"
//     },

//     accountBtn: {

//         padding: "10px 16px",

//         borderRadius: "10px",

//         border: "none",

//         background: "#2563eb",

//         color: "white",

//         cursor: "pointer",

//         fontWeight: "bold"
//     },
//     modalOverlay: {

//     position: "fixed",

//     top: 0,

//     left: 0,

//     width: "100%",

//     height: "100%",

//     background: "rgba(0,0,0,0.5)",

//     display: "flex",

//     justifyContent: "center",

//     alignItems: "center",

//     zIndex: 9999
// },

// modalBox: {

//     background: "white",

//     padding: "30px",

//     borderRadius: "20px",

//     width: "90%",

//     maxWidth: "400px",

//     boxShadow:
//         "0px 5px 25px rgba(0,0,0,0.2)"
// },

// modalInput: {

//     width: "100%",

//     padding: "12px",

//     marginBottom: "15px",

//     borderRadius: "10px",

//     border: "1px solid #ccc"
// },

// saveBtn: {

//     flex: 1,

//     padding: "12px",

//     border: "none",

//     borderRadius: "10px",

//     background: "#16a34a",

//     color: "white",

//     cursor: "pointer",

//     fontWeight: "bold"
// },

// closeBtn: {

//     flex: 1,

//     padding: "12px",

//     border: "none",

//     borderRadius: "10px",

//     background: "#dc2626",

//     color: "white",

//     cursor: "pointer",

//     fontWeight: "bold"
// }
// };

// export default Navbar;

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api";

function Navbar() {

    const navigate = useNavigate();

    // LOGIN DATA

    const customerLoggedIn =
        localStorage.getItem("customerLoggedIn");

    const adminToken =
        localStorage.getItem("token");

    const customerMobile =
        localStorage.getItem("customerMobile");

    // MODAL
const [editAddress,
    setEditAddress] =
    useState("");
    const [showAccountModal,
        setShowAccountModal] =
        useState(false);

    const [isEditing,
        setIsEditing] =
        useState(false);

    // CUSTOMER DATA

    const [editName,
        setEditName] =
        useState("");

    const [editMobile,
        setEditMobile] =
        useState("");

    const [editHouse,
        setEditHouse] =
        useState("");

    const [editArea,
        setEditArea] =
        useState("");

    const [editLandmark,
        setEditLandmark] =
        useState("");

    const [editCity,
        setEditCity] =
        useState("");

    const [editPincode,
        setEditPincode] =
        useState("");

    // LOAD CUSTOMER DATA

    useEffect(() => {

        if (customerMobile) {

            api.get(`/customers/${customerMobile}`)

                .then((res) => {

                    const data = res.data;

                    setEditName(data.name || "");

                    setEditMobile(data.mobile || "");

                    setEditHouse(data.house || "");

                    setEditArea(data.area || "");

                    setEditLandmark(data.landmark || "");

                    setEditCity(data.city || "");

                    setEditPincode(data.pincode || "");
                })

                .catch((err) => {

                    console.log(err);
                });
        }

    }, [customerMobile]);

    // SAVE PROFILE

    const saveProfile = () => {

        const updatedCustomer = {

            name: editName,

            mobile: editMobile,

            house: editHouse,

            area: editArea,

            landmark: editLandmark,

            city: editCity,

            pincode: editPincode
        };

        api.put(
            `/customers/${editMobile}`,
            updatedCustomer
        )

            .then(() => {

                alert("Profile Updated 😍");

                localStorage.setItem(
                    "customerName",
                    editName
                );

                setIsEditing(false);
            })

            .catch((err) => {

                console.log(err);

                alert("Update Failed ❌");
            });
    };

    // LOGOUT

    const logoutCustomer = () => {

        localStorage.removeItem("customerLoggedIn");

        localStorage.removeItem("customerMobile");

        localStorage.removeItem("customerName");

        localStorage.removeItem("customerAddress");

        navigate("/");
    };

    const logoutAdmin = () => {

        localStorage.removeItem("token");

        sessionStorage.removeItem("token");

        navigate("/admin-login");
    };

    return (

        <>

            {/* NAVBAR */}

            <div style={styles.navbar}>

                {/* LEFT */}

                <div
                    style={styles.left}
                    onClick={() => navigate("/")}
                >

                    <img
                        src="/logo.jpeg"
                        alt="logo"
                        style={styles.logo}
                    />

                    <div>

                        <h2 style={styles.title}>
                            The Guru Fruit Shop
                        </h2>

                        <p style={styles.subtitle}>
                            <b>
                                Nature’s Freshness at Your Doorstep
                            </b>
                            <br />

                            Fresh Fruits • Fast Delivery • Pure Happiness
                        </p>

                    </div>

                </div>

                {/* RIGHT */}

                <div style={styles.right}>

                    <button
                        style={styles.button}
                        onClick={() => navigate("/")}
                    >
                        🏠 Home
                    </button>

                    <button
                        style={styles.button}
                        onClick={() => navigate("/my-orders")}
                    >
                        📦 My Orders
                    </button>

                    <button
                        style={styles.button}
                        onClick={() => navigate("/cart")}
                    >
                        🛒 Cart
                    </button>

                    {
                        customerLoggedIn && (

                            <button
                                style={styles.accountBtn}
                                onClick={() =>
                                    setShowAccountModal(true)
                                }
                            >
                                👤 Account
                            </button>
                        )
                    }

                    {
                        adminToken ? (

                            <>

                                <button
                                    style={styles.adminBtn}
                                    onClick={() =>
                                        navigate("/admin")
                                    }
                                >
                                    👨‍💼 Admin Panel
                                </button>

                                <button
                                    style={styles.logoutBtn}
                                    onClick={logoutAdmin}
                                >
                                    Admin Logout
                                </button>

                            </>

                        ) : (

                            <button
                                style={styles.adminBtn}
                                onClick={() =>
                                    navigate("/admin-login")
                                }
                            >
                                🔐 Admin Login
                            </button>
                        )
                    }

                    {
                        customerMobile ? (

                            <button
                                style={styles.logoutBtn}
                                onClick={logoutCustomer}
                            >
                                Logout
                            </button>

                        ) : (

                            <button
                                style={styles.loginBtn}
                                onClick={() =>
                                    navigate("/login")
                                }
                            >
                                Login
                            </button>
                        )
                    }

                </div>

            </div>

            {/* ACCOUNT MODAL */}

            {
                showAccountModal && (

                    <div style={styles.modalOverlay}>

                        <div style={styles.modalBox}>

                            {/* CLOSE */}

                            <button
                                onClick={() =>
                                    setShowAccountModal(false)
                                }
                                style={styles.closeIcon}
                            >
                                ✖
                            </button>

                            <h2 style={styles.modalTitle}>
                                👤 My Account
                            </h2>

                            {/* NAME */}

                            <div style={styles.fieldBox}>

                                <label>
                                    Full Name
                                </label>

                                <input
                                    type="text"

                                    value={editName}

                                    disabled={!isEditing}

                                    onChange={(e) =>
                                        setEditName(
                                            e.target.value
                                        )
                                    }

                                    style={styles.modalInput}
                                />

                            </div>

                            {/* MOBILE */}

                            <div style={styles.fieldBox}>

                                <label>
                                    Mobile Number
                                </label>

                                <input
                                    type="text"

                                    value={editMobile}

                                    disabled

                                    style={{
                                        ...styles.modalInput,
                                        background: "#f3f4f6"
                                    }}
                                />

                            </div>

                            {/* HOUSE */}

                            <div style={styles.fieldBox}>

                                <label>
                                    Flat / House No
                                </label>

                                <input
                                    type="text"

                                    value={editHouse}

                                    disabled={!isEditing}

                                    onChange={(e) =>
                                        setEditHouse(
                                            e.target.value
                                        )
                                    }

                                    style={styles.modalInput}
                                />

                            </div>

                            {/* AREA */}

                            <div style={styles.fieldBox}>

                                <label>
                                    Area
                                </label>

                                <input
                                    type="text"

                                    value={editArea}

                                    disabled={!isEditing}

                                    onChange={(e) =>
                                        setEditArea(
                                            e.target.value
                                        )
                                    }

                                    style={styles.modalInput}
                                />

                            </div>

                            {/* LANDMARK */}

                            <div style={styles.fieldBox}>

                                <label>
                                    Landmark
                                </label>

                                <input
                                    type="text"

                                    value={editLandmark}

                                    disabled={!isEditing}

                                    onChange={(e) =>
                                        setEditLandmark(
                                            e.target.value
                                        )
                                    }

                                    style={styles.modalInput}
                                />

                            </div>

                            {/* CITY */}

                            <div style={styles.fieldBox}>

                                <label>
                                    City
                                </label>

                                <input
                                    type="text"

                                    value={editCity}

                                    disabled={!isEditing}

                                    onChange={(e) =>
                                        setEditCity(
                                            e.target.value
                                        )
                                    }

                                    style={styles.modalInput}
                                />

                            </div>

                            {/* PINCODE */}

                            <div style={styles.fieldBox}>

                                <label>
                                    Pincode
                                </label>

                                <input
                                    type="text"

                                    value={editPincode}

                                    disabled={!isEditing}

                                    onChange={(e) =>
                                        setEditPincode(
                                            e.target.value
                                        )
                                    }

                                    style={styles.modalInput}
                                />

                            </div>

                            {/* BUTTONS */}

                            {
                                !isEditing ? (

                                    <button
                                        onClick={() =>
                                            setIsEditing(true)
                                        }
                                        style={styles.editBtn}
                                    >
                                        ✏ Edit Profile
                                    </button>

                                ) : (

                                    <button
                                        onClick={saveProfile}
                                        style={styles.saveBtn}
                                    >
                                        💾 Save Changes
                                    </button>
                                )
                            }

                        </div>

                    </div>
                )
            }

        </>
    );
}

const styles = {

    navbar: {

        display: "flex",

        justifyContent: "space-between",

        alignItems: "center",

        padding: "15px 30px",

        background: "white",

        boxShadow: "0px 2px 12px rgba(0,0,0,0.08)",

        position: "sticky",

        top: 0,

        zIndex: 1000,

        flexWrap: "wrap",

        gap: "15px"
    },

    left: {

        display: "flex",

        alignItems: "center",

        gap: "12px",

        cursor: "pointer"
    },

    logo: {

        width: "60px",

        height: "60px",

        borderRadius: "50%",

        objectFit: "cover"
    },

    title: {

        margin: 0,

        color: "#0f7b0f",

        fontSize: "24px"
    },

    subtitle: {

        margin: 0,

        color: "#777",

        fontSize: "13px"
    },

    right: {

        display: "flex",

        gap: "12px",

        flexWrap: "wrap",

        alignItems: "center",

        justifyContent: "center"
    },

    button: {

        padding: "10px 16px",

        borderRadius: "10px",

        border: "none",

        background: "#0f7b0f",

        color: "white",

        cursor: "pointer",

        fontWeight: "bold"
    },

    loginBtn: {

        padding: "10px 16px",

        borderRadius: "10px",

        border: "none",

        background: "#f59e0b",

        color: "white",

        cursor: "pointer",

        fontWeight: "bold"
    },

    logoutBtn: {

        padding: "10px 16px",

        borderRadius: "10px",

        border: "none",

        background: "#dc2626",

        color: "white",

        cursor: "pointer",

        fontWeight: "bold"
    },

    adminBtn: {

        padding: "10px 16px",

        borderRadius: "10px",

        border: "none",

        background: "#111827",

        color: "white",

        cursor: "pointer",

        fontWeight: "bold"
    },

    accountBtn: {

        padding: "10px 16px",

        borderRadius: "10px",

        border: "none",

        background: "#2563eb",

        color: "white",

        cursor: "pointer",

        fontWeight: "bold"
    },

    modalOverlay: {

        position: "fixed",

        top: 0,

        left: 0,

        width: "100%",

        height: "100%",

        background: "rgba(0,0,0,0.5)",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        zIndex: 9999
    },

    modalBox: {

        background: "white",

        padding: "30px",

        borderRadius: "20px",

        width: "90%",

        maxWidth: "500px",

        maxHeight: "90vh",

        overflowY: "auto",

        position: "relative",

        boxShadow:
            "0px 5px 25px rgba(0,0,0,0.2)"
    },

    closeIcon: {

        position: "absolute",

        top: "15px",

        right: "15px",

        border: "none",

        background: "#dc2626",

        color: "white",

        borderRadius: "50%",

        width: "32px",

        height: "32px",

        cursor: "pointer"
    },

    modalTitle: {

        marginBottom: "25px",

        color: "#0f7b0f"
    },

    fieldBox: {

        marginBottom: "16px"
    },

    modalInput: {

        width: "100%",

        padding: "12px",

        borderRadius: "10px",

        border: "1px solid #ccc",

        marginTop: "5px",

        fontSize: "15px"
    },

    editBtn: {

        width: "100%",

        padding: "14px",

        border: "none",

        borderRadius: "12px",

        background: "#2563eb",

        color: "white",

        cursor: "pointer",

        fontWeight: "bold"
    },

    saveBtn: {

        width: "100%",

        padding: "14px",

        border: "none",

        borderRadius: "12px",

        background: "#16a34a",

        color: "white",

        cursor: "pointer",

        fontWeight: "bold"
    }
};

export default Navbar;