import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";

function Cart() {

    const navigate = useNavigate();

    const [cart, setCart] = useState([]);

    // LOAD CART

    useEffect(() => {

        const savedCart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];

        setCart(savedCart);

    }, []);

    // UPDATE LOCALSTORAGE

    const updateCart = (updatedCart) => {

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };

    // INCREASE QTY

    const increaseQty = (id) => {

        const updatedCart = cart.map(item =>

            item.id === id

                ? {
                    ...item,
                    qty: item.qty + 1
                }

                : item
        );

        updateCart(updatedCart);
    };

    // DECREASE QTY

    const decreaseQty = (id) => {

        const updatedCart = cart

            .map(item =>

                item.id === id

                    ? {
                        ...item,
                        qty: item.qty - 1
                    }

                    : item
            )

            .filter(item => item.qty > 0);

        updateCart(updatedCart);
    };

    // REMOVE ITEM

    const removeItem = (id) => {

        const updatedCart = cart.filter(
            item => item.id !== id
        );

        updateCart(updatedCart);
    };

    // TOTAL

    const totalPrice = cart.reduce(

        (total, item) =>

            total + (item.price * item.qty),

        0
    );

    return (

        <div>

            <Navbar />

            <div style={{

                padding: "20px",

                minHeight: "100vh",

                background: "#f5f5f5"
            }}>

                <h1 style={{
                    marginBottom: "25px"
                }}>
                    🛒 My Cart
                </h1>

                {
                    cart.length === 0

                        ?

                        <div style={{

                            background: "white",

                            padding: "40px",

                            borderRadius: "15px",

                            textAlign: "center"
                        }}>

                            <h2>
                                Cart Is Empty 😢
                            </h2>

                            <button

                                onClick={() =>
                                    navigate("/")
                                }

                                style={btnStyle}
                            >

                                Continue Shopping

                            </button>

                        </div>

                        :

                        <>
                            {
                                cart.map((item) => (

                                    <div

                                        key={item.id}

                                        style={cardStyle}
                                    >

                                        {
                                            item.imageUrl && (

                                                <img

                                                    src={item.imageUrl}

                                                    alt={item.name}

                                                    style={imageStyle}
                                                />
                                            )
                                        }

                                        <div style={{
                                            flex: 1
                                        }}>

                                            <h2>
                                                {item.name}
                                            </h2>

                                            <p>
                                                ₹ {item.price}
                                            </p>

                                            <p>
                                                Unit :
                                                {item.unit}
                                            </p>

                                            <div style={{

                                                display: "flex",

                                                gap: "10px",

                                                alignItems: "center",

                                                marginTop: "10px"
                                            }}>

                                                <button

                                                    onClick={() =>
                                                        decreaseQty(item.id)
                                                    }

                                                    style={qtyBtn}
                                                >
                                                    -
                                                </button>

                                                <span>
                                                    {item.qty}
                                                </span>

                                                <button

                                                    onClick={() =>
                                                        increaseQty(item.id)
                                                    }

                                                    style={qtyBtn}
                                                >
                                                    +
                                                </button>

                                            </div>

                                            <h3>
                                                Total :
                                                ₹ {item.price * item.qty}
                                            </h3>

                                            <button

                                                onClick={() =>
                                                    removeItem(item.id)
                                                }

                                                style={removeBtn}
                                            >

                                                Remove

                                            </button>

                                        </div>

                                    </div>
                                ))
                            }

                            <div style={{

                                background: "white",

                                padding: "25px",

                                borderRadius: "15px",

                                marginTop: "25px"
                            }}>

                                <h2>
                                    Grand Total :
                                    ₹ {totalPrice}
                                </h2>

                                <button

                                    onClick={() =>
                                        navigate("/")
                                    }

                                    style={btnStyle}
                                >

                                    Place Order

                                </button>

                            </div>
                        </>
                }

            </div>

        </div>
    );
}

const cardStyle = {

    background: "white",

    padding: "20px",

    borderRadius: "15px",

    marginBottom: "20px",

    display: "flex",

    gap: "20px",

    flexWrap: "wrap",

    alignItems: "center"
};

const imageStyle = {

    width: "150px",

    height: "150px",

    objectFit: "cover",

    borderRadius: "12px"
};

const btnStyle = {

    padding: "12px 20px",

    border: "none",

    borderRadius: "10px",

    background: "#16a34a",

    color: "white",

    cursor: "pointer",

    fontWeight: "bold",

    marginTop: "15px"
};

const qtyBtn = {

    padding: "6px 12px",

    border: "none",

    borderRadius: "8px",

    background: "#f59e0b",

    color: "white",

    cursor: "pointer"
};

const removeBtn = {

    padding: "10px 16px",

    border: "none",

    borderRadius: "10px",

    background: "#dc2626",

    color: "white",

    cursor: "pointer",

    marginTop: "10px"
};

export default Cart;