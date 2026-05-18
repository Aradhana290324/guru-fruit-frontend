import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    const goAdmin = () => {
        navigate("/admin-login");
    };

    const goMenu = () => {
        navigate("/");
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
            background: "green",
            color: "white"
        }}>

            <h2>🍎 Guru Fruit Shop</h2>

            <div style={{ display: "flex", gap: "10px" }}>

                <button onClick={goMenu}>
                    Menu
                </button>

                <button onClick={goAdmin}>
                    Admin
                </button>

            </div>

        </div>
    );
}

export default Header;