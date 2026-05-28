// import { useEffect, useState } from "react";

// import api from "../services/api";

// import Navbar from "../components/Navbar";

// function MyOrders() {

//     const [orders, setOrders] = useState([]);

//     const [loading, setLoading] = useState(true);

//     const mobile =
//         localStorage.getItem(
//             "customerMobile"
//         );

//     const statusColors = {

//         Pending: "#6b7280",

//         Packed: "#f59e0b",

//         "Out For Delivery": "#3b82f6",

//         Delivered: "#16a34a",

//         Cancelled: "#dc2626"
//     };

//     useEffect(() => {

//         loadMyOrders();

//         // AUTO REFRESH
//         const interval = setInterval(() => {

//             loadMyOrders();

//         }, 5000);

//         return () =>
//             clearInterval(interval);

//     }, []);

//     const loadMyOrders = () => {

//         api.get(`/orders/mobile/${mobile}`)

//             .then((res) => {

//                 setOrders(res.data);

//                 // DELIVERY POPUP
//                 res.data.forEach((order) => {

//                     if (
//                         order.orderStatus ===
//                             "Delivered" &&

//                         !localStorage.getItem(
//                             `delivered_${order.id}`
//                         )
//                     ) {

//                         alert(
//                             `🎉 Your Order #${order.id} Has Been Delivered Successfully 😍`
//                         );

//                         localStorage.setItem(
//                             `delivered_${order.id}`,
//                             "true"
//                         );
//                     }
//                 });
//             })

//             .catch((err) => {

//                 console.log(err);
//             })

//             .finally(() => {

//                 setLoading(false);
//             });
//     };

//     // CANCEL ORDER

//     const cancelOrder = (id) => {

//         const confirmCancel =
//             window.confirm(
//                 "Are You Sure To Cancel This Order ?"
//             );

//         if (!confirmCancel) {

//             return;
//         }

//         api.put(
//             `/orders/cancel/${id}`,
//             {
//                 orderStatus:
//                     "Cancelled"
//             }
//         )

//             .then(() => {

//                 alert(
//                     "Order Cancelled ❌"
//                 );

//                 loadMyOrders();
//             })

//             .catch((err) => {

//                 console.log(err);

//                 alert(
//                     "Cancel Failed"
//                 );
//             });
//     };

//     if (loading) {

//         return (

//             <h2 style={{
//                 padding: "30px"
//             }}>
//                 Loading Orders...
//             </h2>
//         );
//     }

//     return (

//         <div style={{
//             background: "#f3f4f6",
//             minHeight: "100vh"
//         }}>

//             <Navbar />

//             <div style={{
//                 padding: "20px"
//             }}>

//                 <h1 style={{
//                     marginBottom: "30px",
//                     color: "#065f46",
//                     textAlign: "center"
//                 }}>
//                     📦 My Orders
//                 </h1>

//                 {

//                     orders.length === 0

//                         ?

//                         <div style={{
//                             background: "white",
//                             padding: "30px",
//                             borderRadius: "20px",
//                             textAlign: "center"
//                         }}>

//                             <h2>
//                                 No Orders Found 😢
//                             </h2>

//                         </div>

//                         :

//                         orders.map((order) => (

//                             <div

//                                 key={order.id}

//                                 style={{

//                                     background: "white",

//                                     borderRadius: "20px",

//                                     padding: "25px",

//                                     marginBottom: "30px",

//                                     boxShadow:
//                                         "0px 4px 12px rgba(0,0,0,0.08)"
//                                 }}
//                             >

//                                 {/* TOP */}

//                                 <div style={{

//                                     display: "flex",

//                                     justifyContent: "space-between",

//                                     flexWrap: "wrap",

//                                     gap: "20px"
//                                 }}>

//                                     <div>

//                                         <h2>
//                                             👤 {order.customerName}
//                                         </h2>

//                                         <p>
//                                             📱 {order.mobile}
//                                         </p>

//                                         <p>
//                                             📍 {order.address}
//                                         </p>
//                                         <p style={{
//     color: "#6b7280",
//     fontWeight: "500"
// }}>
//     🕒 Ordered On :
//     {

//         order.orderDate

//         ?

//         new Date(
//             order.orderDate
//         ).toLocaleString(
//             "en-IN",
//             {
//                 dateStyle: "medium",
//                 timeStyle: "short"
//             }
//         )

//         :

//         "N/A"
//     }
// </p>

//                                     </div>

//                                     {/* STATUS */}

//                                     <div>

//                                         <div style={{

//                                             background:
//                                                 statusColors[
//                                                 order.orderStatus
//                                                 ],

//                                             color: "white",

//                                             padding: "10px 18px",

//                                             borderRadius: "30px",

//                                             fontWeight: "bold",

//                                             textAlign: "center",

//                                             marginBottom: "12px"
//                                         }}>

//                                             {
//                                                 order.orderStatus ||
//                                                 "Pending"
//                                             }

//                                         </div>

//                                         {

//                                             order.orderStatus !==
//                                             "Delivered"

//                                             &&

//                                             order.orderStatus !==
//                                             "Cancelled"

//                                             && (

//                                                 <button

//                                                     onClick={() =>
//                                                         cancelOrder(
//                                                             order.id
//                                                         )
//                                                     }

//                                                     style={{

//                                                         padding:
//                                                             "10px 18px",

//                                                         background:
//                                                             "#dc2626",

//                                                         color:
//                                                             "white",

//                                                         border:
//                                                             "none",

//                                                         borderRadius:
//                                                             "10px",

//                                                         cursor:
//                                                             "pointer",

//                                                         fontWeight:
//                                                             "bold",

//                                                         width:
//                                                             "100%"
//                                                     }}
//                                                 >

//                                                     ❌ Cancel Order

//                                                 </button>
//                                             )
//                                         }

//                                     </div>

//                                 </div>

//                                 {/* ITEMS */}

//                                 <div style={{
//                                     marginTop: "25px"
//                                 }}>

//                                     <h3>
//                                         🛒 Ordered Items
//                                     </h3>

//                                     <div style={{

//                                         display: "grid",

//                                         gridTemplateColumns:
//                                             "repeat(auto-fit,minmax(220px,1fr))",

//                                         gap: "20px",

//                                         marginTop: "20px"
//                                     }}>

//                                         {

//                                             order.items?.map((item, index) => (

//                                                 <div

//                                                     key={index}

//                                                     style={{

//                                                         border:
//                                                             "1px solid #eee",

//                                                         borderRadius: "15px",

//                                                         padding: "18px",

//                                                         background: "#fafafa"
//                                                     }}
//                                                 >

//                                                     <h3>
//                                                         {item.fruitName}
//                                                     </h3>

//                                                     <p>
//                                                         Qty :
//                                                         {item.qty}
//                                                     </p>

//                                                     <p>
//                                                         Price :
//                                                         ₹ {item.price}
//                                                     </p>

//                                                     <p>
//                                                         Total :
//                                                         ₹ {item.total}
//                                                     </p>

//                                                     <hr />

//                                                     <p>
//                                                         📅 Delivery :
//                                                         {order.deliveryDate}
//                                                     </p>

//                                                     <p>
//                                                         ⏰ Time :
//                                                         {order.deliveryTime}
//                                                     </p>

//                                                     <p>
//                                                         📝 Note :
//                                                         {order.customerNote}
//                                                     </p>

//                                                 </div>
//                                             ))
//                                         }

//                                     </div>

//                                 </div>

//                                 {/* TOTAL */}

//                                 <div style={{

//                                     marginTop: "25px",

//                                     background: "#ecfdf5",

//                                     padding: "18px",

//                                     borderRadius: "15px",

//                                     textAlign: "center"
//                                 }}>

//                                     <h2 style={{
//                                         color: "#065f46"
//                                     }}>
//                                         Grand Total :
//                                         ₹ {order.totalAmount}
//                                     </h2>

//                                 </div>

//                             </div>
//                         ))
//                 }

//             </div>

//         </div>
//     );
// }

// export default MyOrders; 

import { useEffect, useState } from "react";

import api from "../services/api";

import Navbar from "../components/Navbar";

function MyOrders() {

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);

    const mobile =
        localStorage.getItem(
            "customerMobile"
        );

    const statusColors = {

        Pending: "#6b7280",

        Packed: "#f59e0b",

        "Out For Delivery": "#3b82f6",

        Delivered: "#16a34a",

        Cancelled: "#dc2626"
    };

    useEffect(() => {

        loadMyOrders();

        // AUTO REFRESH
        const interval = setInterval(() => {

            loadMyOrders();

        }, 5000);

        return () =>
            clearInterval(interval);

    }, []);

    const loadMyOrders = () => {

        api.get(`/orders/mobile/${mobile}`)

            .then((res) => {

                setOrders(res.data);

                // DELIVERY POPUP
                // DELIVERY CONFIRMATION POPUP

res.data.forEach((order) => {

    if (

        order.orderStatus === "Delivered"

        &&

        !localStorage.getItem(
            `delivery_confirm_${order.id}`
        )

    ) {

        const received =
            window.confirm(

`🎉 Your Order #${order.id} Has Been Delivered 😍

Did You Receive Your Order Successfully ?`

            );

        // USER CLICKED OK

        if (received) {

            alert(
                "Thank You For Shopping With Us ❤️"
            );
        }

        // USER CLICKED CANCEL

        else {

            alert(
                "Please Contact Support 📞"
            );
        }

        localStorage.setItem(
            `delivery_confirm_${order.id}`,
            "true"
        );
    }
});
            })

            .catch((err) => {

                console.log(err);
            })

            .finally(() => {

                setLoading(false);
            });
    };

    // CANCEL ORDER

    const cancelOrder = (id) => {

        const confirmCancel =
            window.confirm(
                "Are You Sure To Cancel This Order ?"
            );

        if (!confirmCancel) {

            return;
        }

        api.put(
            `/orders/cancel/${id}`,
            {
                orderStatus:
                    "Cancelled"
            }
        )

            .then(() => {

                alert(
                    "Order Cancelled ❌"
                );

                loadMyOrders();
            })

            .catch((err) => {

                console.log(err);

                alert(
                    "Cancel Failed"
                );
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
                padding: "20px"
            }}>

                <h1 style={{
                    marginBottom: "30px",
                    color: "#065f46",
                    textAlign: "center"
                }}>
                    📦 My Orders
                </h1>

                {

                    orders.length === 0

                        ?

                        <div style={{
                            background: "white",
                            padding: "30px",
                            borderRadius: "20px",
                            textAlign: "center"
                        }}>

                            <h2>
                                No Orders Found 😢
                            </h2>

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
                                        <p style={{
    color: "#6b7280",
    fontWeight: "500"
}}>
    🕒 Ordered On :
    {

        order.orderDate

        ?

        new Date(
            order.orderDate
        ).toLocaleString(
            "en-IN",
            {
                dateStyle: "medium",
                timeStyle: "short"
            }
        )

        :

        "N/A"
    }
</p>

                                    </div>

                                    {/* STATUS */}

                                    <div>

                                        <div style={{

                                            background:
                                                statusColors[
                                                order.orderStatus
                                                ],

                                            color: "white",

                                            padding: "10px 18px",

                                            borderRadius: "30px",

                                            fontWeight: "bold",

                                            textAlign: "center",

                                            marginBottom: "12px"
                                        }}>

                                            {
                                                order.orderStatus ||
                                                "Pending"
                                            }

                                        </div>

                                        {

                                            order.orderStatus !==
                                            "Delivered"

                                            &&

                                            order.orderStatus !==
                                            "Cancelled"

                                            && (

                                                <button

                                                    onClick={() =>
                                                        cancelOrder(
                                                            order.id
                                                        )
                                                    }

                                                    style={{

                                                        padding:
                                                            "10px 18px",

                                                        background:
                                                            "#dc2626",

                                                        color:
                                                            "white",

                                                        border:
                                                            "none",

                                                        borderRadius:
                                                            "10px",

                                                        cursor:
                                                            "pointer",

                                                        fontWeight:
                                                            "bold",

                                                        width:
                                                            "100%"
                                                    }}
                                                >

                                                    ❌ Cancel Order

                                                </button>
                                            )
                                        }

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

                                                        background: "#fafafa"
                                                    }}
                                                >

                                                    <h3>
                                                        {item.fruitName}
                                                    </h3>

                                                    <p>
                                                        Qty :
                                                        {item.qty}
                                                    </p>

                                                    <p>
                                                        Price :
                                                        ₹ {item.price}
                                                    </p>

                                                    <p>
                                                        Total :
                                                        ₹ {item.total}
                                                    </p>

                                                    <hr />

                                                    <p>
                                                        📅 Delivery :
                                                        {order.deliveryDate}
                                                    </p>

                                                    <p>
                                                        ⏰ Time :
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

                                    borderRadius: "15px",

                                    textAlign: "center"
                                }}>

                                    <h2 style={{
                                        color: "#065f46"
                                    }}>
                                        Grand Total :
                                        ₹ {order.totalAmount}
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