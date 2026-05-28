import { useEffect, useState } from "react";
import api from "../services/api";
import AdminNavbar from "../components/AdminNavbar";
// import Navbar from "../components/Navbar";


function Orders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const statusColors = {

        Pending: "#6b7280",

        Packed: "#f59e0b",

        "Out For Delivery": "#3b82f6",

        Delivered: "#16a34a",

        Cancelled: "#dc2626"
    };

    const loadOrders = () => {

        setLoading(true);

        api.get("/orders")

            .then((res) => {

                setOrders(res.data);
            })

            .catch((err) => {

                console.log(err);
            })

            .finally(() => {

                setLoading(false);
            });
    };

    useEffect(() => {

        loadOrders();

    }, []);

    const updateStatus = (order, status) => {

        const updatedOrder = {

            ...order,

            orderStatus: status
        };

        api.put(`/orders/${order.id}`, updatedOrder)

            .then(() => {

                loadOrders();
            });
    };

    if (loading) {

        return (

            <h2 style={{
                padding: "30px"
            }}>
                Loading Orders...
            </h2>
        );
    }

    return (

        <div style={{
            background: "#f3f4f6",
            minHeight: "100vh"
        }}>

            <AdminNavbar />
            {/* <Navbar /> */}

            <div style={{
                padding: "30px"
            }}>

                <h1 style={{
                    marginBottom: "30px",
                    color: "#065f46"
                }}>
                    📦 Customer Orders
                </h1>

                {

                    orders.length === 0

                        ?

                        <div style={{
                            background: "white",
                            padding: "30px",
                            borderRadius: "20px"
                        }}>

                            No Orders Found

                        </div>

                        :

                        // orders.map((order) => (

                            orders

.filter(
    (order) =>
        order.orderStatus !==
        "Cancelled"
)

.map((order) => (
                            <div
                                key={order.id}

                                style={{

                                    background: "white",

                                    borderRadius: "20px",

                                    padding: "25px",

                                    marginBottom: "30px",

                                    boxShadow: "0px 4px 12px rgba(0,0,0,0.08)"
                                }}
                            >

                                {/* TOP */}

                                <div style={{

                                    display: "flex",

                                    justifyContent: "space-between",

                                    flexWrap: "wrap",

                                    gap: "20px"
                                }}>

                                    <div>

                                        <h2 style={{
                                            marginBottom: "10px"
                                        }}>
                                            👤 {order.customerName}
                                        </h2>

                                        <p>📱 {order.mobile}</p>

                                        <p>📍 {order.address}</p>

                                        <p>🏨 {order.landmark}</p>

                                        <p>📮 {order.pincode}</p>

                                        <p>
                                            💳 {order.paymentMethod}
                                        </p>

                                    </div>

                                    <div>

                                        <div style={{

                                            background:
                                                statusColors[order.orderStatus],

                                            color: "white",

                                            padding: "10px 18px",

                                            borderRadius: "30px",

                                            fontWeight: "bold",

                                            textAlign: "center"
                                        }}>

                                            {order.orderStatus || "Pending"}

                                        </div>

                                    </div>

                                </div>

                                {/* ACTION BUTTONS */}

                                <div style={{

                                    display: "flex",

                                    gap: "12px",

                                    flexWrap: "wrap",

                                    marginTop: "20px"
                                }}>

                                    <button
                                        onClick={() =>
                                            updateStatus(order, "Packed")
                                        }

                                        style={btnStyle("#f59e0b")}
                                    >
                                        Packed
                                    </button>

                                    <button
                                        onClick={() =>
                                            updateStatus(
                                                order,
                                                "Out For Delivery"
                                            )
                                        }

                                        style={btnStyle("#3b82f6")}
                                    >
                                        Out For Delivery
                                    </button>

                                    <button
                                        onClick={() =>
                                            updateStatus(order, "Delivered")
                                        }

                                        style={btnStyle("#16a34a")}
                                    >
                                        Delivered
                                    </button>

                                    <button
                                        onClick={() =>
                                            updateStatus(order, "Cancelled")
                                        }

                                        style={btnStyle("#dc2626")}
                                    >
                                        Cancel
                                    </button>

                                </div>

                                {/* ITEMS */}

                                <div style={{
                                    marginTop: "30px"
                                }}>

                                    <h3 style={{
                                        marginBottom: "20px"
                                    }}>
                                        🛒 Ordered Items
                                    </h3>

                                    <div style={{

                                        display: "grid",

                                        gridTemplateColumns:
                                            "repeat(auto-fit,minmax(220px,1fr))",

                                        gap: "20px"
                                    }}>

                                        {

                                            order.items?.map((item, index) => (

                                                <div
                                                    key={index}

                                                    style={{

                                                        border:
                                                            "1px solid #eee",

                                                        borderRadius: "15px",

                                                        padding: "18px",

                                                        background:
                                                            "#fafafa"
                                                    }}
                                                >

                                                    <h3>
                                                        {item.fruitName}
                                                    </h3>

                                                    <p>
                                                        Qty : {item.qty}
                                                    </p>

                                                    <p>
                                                        Price : ₹ {item.price}
                                                    </p>

                                                    <p>
                                                        Total : ₹ {item.total}
                                                    </p>

                                                </div>
                                            ))
                                        }

                                    </div>

                                </div>

                                {/* TOTAL */}

                                <div style={{

                                    marginTop: "25px",

                                    padding: "20px",

                                    background: "#ecfdf5",

                                    borderRadius: "15px"
                                }}>

                                    <h2 style={{
                                        color: "#065f46"
                                    }}>
                                        Grand Total : ₹ {order.totalAmount}
                                    </h2>

                                </div>

                            </div>
                        ))
                }

            </div>

        </div>
    );
}

const btnStyle = (bg) => ({

    padding: "10px 18px",

    border: "none",

    borderRadius: "10px",

    background: bg,

    color: "white",

    cursor: "pointer",

    fontWeight: "bold"
});

export default Orders
