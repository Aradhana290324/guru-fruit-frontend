
// import { useNavigate } from "react-router-dom";

// function Navbar() {

//     const navigate = useNavigate();

//     return (

//         <div style={styles.navbar}>

//             <div
//                 style={styles.left}

//                 onClick={() => navigate("/")}
//             >

//                 <img
//                     src="/logo.png"
//                     alt="logo"
//                     style={styles.logo}
//                 />

//                 <h2 style={styles.title}>
//                     Guru Fruit Shop
//                 </h2>

//             </div>

//             <div style={styles.right}>

//                 <button
//                     style={styles.button}

//                     onClick={() => navigate("/cart")}
//                 >
//                     🛒 Cart
//                 </button>

//                 <button
//                     style={styles.button}

//                     onClick={() => navigate("/my-orders")}
//                 >
//                     📦 My Orders
//                 </button>

//                 <button
//                     style={styles.loginBtn}

//                     onClick={() => navigate("/login")}
//                 >
//                     Login
//                 </button>

//             </div>

//         </div>
//     );
// }

// const styles = {

//     navbar: {

//         display: "flex",

//         justifyContent: "space-between",

//         alignItems: "center",

//         padding: "15px 30px",

//         background: "white",

//         boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",

//         position: "sticky",

//         top: 0,

//         zIndex: 999,

//         flexWrap: "wrap"
//     },

//     left: {

//         display: "flex",

//         alignItems: "center",

//         gap: "12px",

//         cursor: "pointer"
//     },

//     logo: {

//         width: "55px",

//         height: "55px",

//         borderRadius: "50%"
//     },

//     title: {

//         color: "#0f7b0f"
//     },

//     right: {

//         display: "flex",

//         gap: "12px",

//         flexWrap: "wrap"
//     },

//     button: {

//         padding: "10px 16px",

//         borderRadius: "10px",

//         border: "none",

//         background: "#0f7b0f",

//         color: "white",

//         cursor: "pointer"
//     },

//     loginBtn: {

//         padding: "10px 16px",

//         borderRadius: "10px",

//         border: "none",

//         background: "#f59e0b",

//         color: "white",

//         cursor: "pointer"
//     }
// };

// export default Navbar;

import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
const customerLoggedIn =
    localStorage.getItem(
        "customerLoggedIn"
    );
    const adminToken =
        localStorage.getItem("token");

    const customerMobile =
        localStorage.getItem("customerMobile");

    // const logoutCustomer = () => {

    //     localStorage.removeItem("customerMobile");

    //     localStorage.removeItem("customerName");

    //     localStorage.removeItem("customerAddress");

    //     navigate("/");
    // };
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
                        Guru Fruit Shop
                    </h2>

                    <p style={styles.subtitle}>
                        Fresh Fruits Delivered
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
                    customerMobile && (

                        <button

    style={styles.accountBtn}

    onClick={() =>
        navigate("/account")
    }
>
    👤 Account
</button>
                    )
                }

                {
                    adminToken && (

                        <>
                            <button
                                style={styles.adminBtn}

                                onClick={() =>
                                    navigate("/admin")
                                }
                            >
                                👨‍💼 Admin
                            </button>

                            {/* <button
                                style={styles.adminBtn}

                                onClick={() =>
                                    navigate("/orders")
                                }
                            >
                                📋 Orders
                            </button> */}
                        </>
                    )
                }

                {
                    customerMobile

                        ?

                        <button
                            style={styles.logoutBtn}

                            onClick={logoutCustomer}
                        >
                            Logout
                        </button>

                        :

                        <button
                            style={styles.loginBtn}

                            onClick={() =>
                                navigate("/login")
                            }
                        >
                            Login
                        </button>
                }

                {
                    adminToken && (

                        <button
                            style={styles.logoutBtn}

                            onClick={logoutAdmin}
                        >
                            Admin Logout
                        </button>
                    )
                }

            </div>

        </div>
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

        flexWrap: "wrap"
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

        alignItems: "center"
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
    }
};

export default Navbar;