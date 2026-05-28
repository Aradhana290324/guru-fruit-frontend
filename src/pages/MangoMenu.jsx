import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";


import { useNavigate } from "react-router-dom";

function MangoMenu() {

    const navigate = useNavigate();

    const [mangoes, setMangoes] =
        useState([]);

    const [cart, setCart] = useState(

        JSON.parse(
            localStorage.getItem("cart")
        ) || []
    );

    useEffect(() => {

        api.get("/fruits")

            .then((res) => {

                const mangoData =
                    res.data.filter(

                        item =>
                            item.category?.toLowerCase() === "mango"
                    );

                setMangoes(mangoData);
            });

    }, []);

    // ADD TO CART

    const addToCart = (fruit) => {

        const existingItem = cart.find(

            item => item.id === fruit.id
        );

        let updatedCart = [];

        if (existingItem) {

            updatedCart = cart.map(item =>

                item.id === fruit.id

                    ? {
                        ...item,
                        qty: item.qty + 1
                    }

                    : item
            );

        } else {

            updatedCart = [

                ...cart,

                {
                    ...fruit,
                    qty: 1
                }
            ];
        }

        setCart(updatedCart);

        localStorage.setItem(

            "cart",

            JSON.stringify(updatedCart)
        );

        alert("Added To Cart 🥭");
    };

    return (

        <div>

            <Navbar />

            <div style={{
                padding: "20px",
                background: "#fffaf0",
                minHeight: "100vh"
            }}>

                <h1 style={{
                    marginBottom: "25px"
                }}>
                    🥭 Mango Special Menu
                </h1>

                <div style={{

                    display: "flex",

                    gap: "20px",

                    flexWrap: "wrap",

                    justifyContent: "center"
                }}>

                    {

                        mangoes.map((item) => (

                            <div
                                key={item.id}

                                style={{

                                    width:
                                        window.innerWidth < 768
                                            ? "100%"
                                            : "240px",

                                    background: "white",

                                    padding: "20px",

                                    borderRadius: "15px",

                                    boxShadow:
                                        "0px 2px 10px rgba(0,0,0,0.1)"
                                }}
                            >

                                <img
                                    src={item.imageUrl}

                                    alt={item.name}

                                    style={{

                                        width: "100%",

                                        height: "180px",

                                        objectFit: "cover",

                                        borderRadius: "10px"
                                    }}
                                />

                                <h3>
                                    {item.name}
                                </h3>

                                <p>
                                    ₹ {item.price}
                                </p>

                                <p>
                                    {item.unit}
                                </p>

                                <button

                                    onClick={() =>
                                        addToCart(item)
                                    }

                                    style={btnStyle}
                                >

                                    Add To Cart

                                </button>

                            </div>
                        ))
                    }

                </div>

                <div style={{
                    textAlign: "center",
                    marginTop: "30px"
                }}>

                    <button

                        onClick={() =>
                            navigate("/cart")
                        }

                        style={checkoutBtn}
                    >

                        🛒 Go To Cart

                    </button>

                </div>

            </div>

        </div>
    );
}

const btnStyle = {

    width: "100%",

    padding: "12px",

    border: "none",

    borderRadius: "10px",

    background: "#f59e0b",

    color: "white",

    cursor: "pointer",

    fontWeight: "bold"
};

const checkoutBtn = {

    padding: "14px 24px",

    border: "none",

    borderRadius: "10px",

    background: "#16a34a",

    color: "white",

    fontSize: "16px",

    fontWeight: "bold",

    cursor: "pointer"
};

export default MangoMenu;