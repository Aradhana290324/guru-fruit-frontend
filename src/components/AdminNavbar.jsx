import { useNavigate } from "react-router-dom";

function AdminNavbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        sessionStorage.removeItem("token");

        navigate("/admin-login");
    };

    return (

        <div style={styles.navbar}>

            {/* LEFT */}

            <div
                style={styles.leftSection}

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
                        Admin Dashboard
                    </p>

                </div>

            </div>

            {/* RIGHT */}

            <div style={styles.rightSection}>

                <button
                    onClick={() => navigate("/")}

                    style={styles.button}
                >
                    Dashboard
                </button>

                <button
                    onClick={() => navigate("/orders")}

                    style={styles.button}
                >
                    Orders
                </button>

                <button
                    onClick={logout}

                    style={styles.logoutBtn}
                >
                    Logout
                </button>

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

        boxShadow: "0px 2px 12px rgba(0,0,0,0.1)",

        position: "sticky",

        top: 0,

        zIndex: 1000,

        flexWrap: "wrap"
    },

    leftSection: {

        display: "flex",

        alignItems: "center",

        gap: "15px",

        cursor: "pointer"
    },

    logo: {

        width: "60px",

        height: "60px",

        objectFit: "contain",

        borderRadius: "50%"
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

    rightSection: {

        display: "flex",

        gap: "12px",

        flexWrap: "wrap"
    },

    button: {

        padding: "10px 18px",

        border: "none",

        borderRadius: "10px",

        background: "#0f7b0f",

        color: "white",

        fontWeight: "bold",

        cursor: "pointer",

        transition: "0.3s"
    },

    logoutBtn: {

        padding: "10px 18px",

        border: "none",

        borderRadius: "10px",

        background: "#dc2626",

        color: "white",

        fontWeight: "bold",

        cursor: "pointer"
    }
};

export default AdminNavbar;