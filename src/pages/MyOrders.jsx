
import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
        
function MyOrders() {

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);

    // CUSTOMER MOBILE FROM LOCAL STORAGE
    // (later login system se aayega)

    const mobile = localStorage.getItem("customerMobile");

    const statusColors = {

        Pending: "#6b7280",

        Packed: "#f59e0b",

        "Out For Delivery": "#3b82f6",

        Delivered: "#16a34a",

        Cancelled: "#dc2626"
    };

    useEffect(() => {

        loadMyOrders();

    }, []);
const loadMyOrders = () => {

    api.get(`/orders/mobile/${mobile}`)

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

            <Navbar />

            <div style={{
                padding: "30px"
            }}>

                <h1 style={{
                    marginBottom: "30px",
                    color: "#065f46"
                }}>
                    📦 My Orders
                </h1>

                {

                    orders.length === 0

                        ?

                        <div style={{
                            background: "white",
                            padding: "30px",
                            borderRadius: "20px"
                        }}>

                            <h2>No Orders Found 😢</h2>

                        </div>

                        :

                        orders.map((order) => (

                            <div
                                key={order.id}

                                style={{

                                    background: "white",

                                    borderRadius: "20px",

                                    padding: "25px",

                                    marginBottom: "30px",

                                    boxShadow:
                                        "0px 4px 12px rgba(0,0,0,0.08)"
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

                                        <h2>
                                            👤 {order.customerName}
                                        </h2>

                                        <p>
                                            📱 {order.mobile}
                                        </p>

                                        <p>
                                            📍 {order.address}
                                        </p>

                                    </div>

                                    {/* STATUS */}

                                    <div style={{

                                        background:
                                            statusColors[order.orderStatus],

                                        color: "white",

                                        padding: "10px 18px",

                                        borderRadius: "30px",

                                        fontWeight: "bold",

                                        height: "fit-content"
                                    }}>

                                        {order.orderStatus || "Pending"}

                                    </div>

                                </div>

                                {/* ITEMS */}

                                <div style={{
                                    marginTop: "25px"
                                }}>

                                    <h3>
                                        🛒 Ordered Items
                                    </h3>

                                    <div style={{

                                        display: "grid",

                                        gridTemplateColumns:
                                            "repeat(auto-fit,minmax(220px,1fr))",

                                        gap: "20px",

                                        marginTop: "20px"
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
                                                    <p>
    📅 Delivery Date :
    {order.deliveryDate}
</p>

<p>
    ⏰ Delivery Time :
    {order.deliveryTime}
</p>

<p>
    📝 Note :
    {order.customerNote}
</p>

                                                </div>
                                            ))
                                        }

                                    </div>

                                </div>

                                {/* TOTAL */}

                                <div style={{

                                    marginTop: "25px",

                                    background: "#ecfdf5",

                                    padding: "18px",

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

export default MyOrders;

