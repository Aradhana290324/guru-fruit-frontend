import { useNavigate } from "react-router-dom";

function BottomNav() {

    const navigate = useNavigate();

    return (

        <div style={styles.bottomNav}>

            <button
                style={styles.btn}
                onClick={() => navigate("/")}
            >
                🏠
                <span>Home</span>
            </button>

            <button
                style={styles.btn}
                onClick={() =>
                    navigate("/my-orders")
                }
            >
                📦
                <span>Orders</span>
            </button>

            <button
                style={styles.btn}
                onClick={() =>
                    navigate("/cart")
                }
            >
                🛒
                <span>Cart</span>
            </button>

            <button
    style={styles.btn}
    onClick={() => {

        const customerLoggedIn =
            localStorage.getItem(
                "customerLoggedIn"
            );

        if (customerLoggedIn) {

            navigate("/account");

        } else {

            navigate("/login");
        }
    }}
>
    👤
    <span>Account</span>
</button>

<button
                                style={styles.btn}
                                onClick={() =>
                                    navigate("/admin-login")
                                }
                            >
                                👨🏻‍💼
                                 <span>Seller</span>
                            </button>

        </div>
    );
}

const styles = {

    bottomNav: {

        position: "fixed",

        bottom: 0,

        left: 0,

        width: "100%",

        background: "white",

        display: "flex",

        justifyContent: "space-around",

        alignItems: "center",

        padding: "10px 0",

        boxShadow:
            "0 -2px 10px rgba(0,0,0,0.15)",

        zIndex: 9999
    },

    btn: {

        border: "none",

        background: "transparent",

        display: "flex",

        flexDirection: "column",

        alignItems: "center",

        fontSize: "18px",

        cursor: "pointer"
    }
};

export default BottomNav;