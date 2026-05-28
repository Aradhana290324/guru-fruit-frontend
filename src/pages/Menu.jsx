//     import { useEffect, useState } from "react";

//     import api from "../services/api";

//     // import Header from "../components/Header";
//     import Footer from "../components/Footer";
//     import { useNavigate } from "react-router-dom";
//     import Navbar from "../components/Navbar";

//     function Menu() {

//         const [fruits, setFruits] = useState([]);

//     const [cart, setCart] = useState(

//         JSON.parse(
//             localStorage.getItem("cart")
//         ) || []
//     );
//         const [customerName, setCustomerName] = useState("");

//         const [mobile, setMobile] = useState("");
//         const [address, setAddress] = useState("");

//     const [landmark, setLandmark] = useState("");

//     const [pincode, setPincode] = useState("");
//     const [paymentMethod, setPaymentMethod] = useState("COD");
//     const navigate = useNavigate();
//     const [deliveryDate, setDeliveryDate] = useState("");
//     const [deliveryTime, setDeliveryTime] = useState("");
//     const [customerNote, setCustomerNote] = useState("");

//         // LOAD FRUITS

//         useEffect(() => {

//             api.get("/fruits")
//                 .then((res) => {
//                     setFruits(res.data);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });

//         }, []);
//         useEffect(() => {

//         const savedCustomer = JSON.parse(
//             localStorage.getItem("customerData")
//         );

//         if (savedCustomer) {

//             setCustomerName(
//                 savedCustomer.name || ""
//             );

//             setMobile(
//                 savedCustomer.mobile || ""
//             );

//             setAddress(
//                 savedCustomer.address || ""
//             );

//             setLandmark(
//                 savedCustomer.landmark || ""
//             );

//             setPincode(
//                 savedCustomer.pincode || ""
//             );
//         }

//     }, []);
//     useEffect(() => {

//         try {

//             const savedCart = JSON.parse(
//                 localStorage.getItem("cart")
//             );

//             if (Array.isArray(savedCart)) {

//                 setCart(savedCart);

//             } else {

//                 setCart([]);
//             }

//         } catch (error) {

//             setCart([]);
//         }

//     }, []);
//         // ADD TO CART

//         const addToCart = (fruit) => {

//             if (!fruit.stock) {

//                 alert("Fruit Out Of Stock ❌");

//                 return;
//             }

//             const existingItem = cart.find(
//                 item => item.id === fruit.id
//             );

//             if (existingItem) {

//                 const updatedCart = cart.map(item =>

//                     item.id === fruit.id
//                         ? {
//                             ...item,
//                             qty: item.qty + 1
//                         }
//                         : item
//                 );

//                 setCart(updatedCart);

//             } else {

//                 setCart([
//                     ...cart,
//                     {
//                         ...fruit,
//                         qty: 1
//                     }
//                 ]);
//             }
//         };

//         // INCREASE QTY

//         const increaseQty = (id) => {

//             const updatedCart = cart.map(item =>

//                 item.id === id
//                     ? {
//                         ...item,
//                         qty: item.qty + 1
//                     }
//                     : item
//             );

//             setCart(updatedCart);
//         };

//         // DECREASE QTY

//         const decreaseQty = (id) => {

//             const updatedCart = cart

//                 .map(item =>

//                     item.id === id
//                         ? {
//                             ...item,
//                             qty: item.qty - 1
//                         }
//                         : item
//                 )

//                 .filter(item => item.qty > 0);

//             setCart(updatedCart);
//         };

//         // TOTAL PRICE

//     const totalPrice = (cart || []).reduce(
//             (total, item) =>

//                 total + (item.price * item.qty),

//             0
//         );

//         // PLACE ORDER
//     const placeOrder = () => {

//         // NAME VALIDATION

//         if (customerName.trim() === "") {

//             alert("Please Enter Customer Name");

//             return;
//         }

//         // ONLY LETTERS

//         const nameRegex = /^[A-Za-z ]+$/;

//         if (!nameRegex.test(customerName)) {

//             alert("Name Should Contain Only Letters");

//             return;
//         }

//         // MOBILE VALIDATION

//         const mobileRegex = /^[0-9]{10}$/;

//         if (!mobileRegex.test(mobile)) {

//             alert("Enter Valid 10 Digit Mobile Number");

//             return;
//         }

//         // ADDRESS VALIDATION

//         if (address.trim().length < 10) {

//             alert("Please Enter Proper Address");

//             return;
//         }

//         // LANDMARK VALIDATION

//         if (landmark.trim() === "") {

//             alert("Please Enter Landmark");

//             return;
//         }

//         // PINCODE VALIDATION

//         const pincodeRegex = /^[0-9]{6}$/;

//         if (!pincodeRegex.test(pincode)) {

//             alert("Enter Valid 6 Digit Pincode");

//             return;
//         }

//         // CART VALIDATION

//         if (cart.length === 0) {

//             alert("Cart Is Empty");

//             return;
//         }

//         // ORDER ITEMS

//         const orderItems = cart.map(item => ({

//             fruitName: item.name,

//             qty: item.qty,

//             price: item.price,

//             total: item.price * item.qty
//         }));

//         // FINAL ORDER DATA
//     const customerData = {

//         name: customerName,

//         mobile,

//         address,

//         landmark,

//         pincode
//     };

//     localStorage.setItem(
//         "customerData",
//         JSON.stringify(customerData)
//     );
//     api.post("/customers", {

//     name: customerName,

//     mobile: mobile,

//     address: address,

//     landmark: landmark,

//     pincode: pincode

// })
// .then(() => {

//     console.log("Customer Saved");

// })
// .catch((err) => {

//     console.log(err);

// });
//         const orderData = {

//             customerName,

//             mobile,

//             address,

//             landmark,

//             pincode,

//             paymentMethod,

//             orderStatus: "Pending",

//             totalAmount: totalPrice,

//             items: orderItems,
//             deliveryDate,
//     deliveryTime,
//     customerNote,
//     priority:
//             deliveryTime === "Morning"
//                 ? "High"
//                 : "Normal",
//     items: orderItems
//         };

//         console.log(orderData);
//         localStorage.setItem(
//         "customerMobile",
//         mobile
//     );

//         api.post("/orders", orderData)

//             .then(() => {
//     localStorage.removeItem("cart");
//                 localStorage.setItem(
//         "customerMobile",
//         mobile
//     );

//     localStorage.setItem(
//         "customerName",
//         customerName
//     );

//     localStorage.setItem(
//         "customerAddress",
//         address
//     );

//         // WHATSAPP MESSAGE

//         const orderSummary = cart.map(item =>

//             `${item.name}
//     Qty: ${item.qty}
//     Total: ₹${item.price * item.qty}`

//         ).join("\n\n");

//         const message =

//     `🍎 Guru Fruit Shop Order

//     👤 Customer: ${customerName}

//     📱 Mobile: ${mobile}

//     📍 Address:
//     ${address}

//     🏨 Landmark:
//     ${landmark}

//     📮 Pincode:
//     ${pincode}

//     🛒 Order Details:

//     ${orderSummary}

//     💰 Grand Total:
//     ₹${totalPrice}

//     💳 Payment:
//     ${paymentMethod}
    
//     Delivery Date: 
//     ${ deliveryDate}

//     Delivery Time: 
//     ${deliveryTime}

//     Customer Note:
//     ${customerNote}
    
//     `;

//         // YOUR WHATSAPP NUMBER

//         const whatsappNumber = "8898120899";

//         // ENCODE MESSAGE

//         const whatsappURL =

//     `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

//         // OPEN WHATSAPP

//         window.open(
//             whatsappURL,
//             "_blank"
//         );

//         alert("Order Placed Successfully 😍");

//         // CLEAR FORM

//         setCart([]);

//         setCustomerName("");

//         setMobile("");

//         setAddress("");

//         setLandmark("");

//         setPincode("");
//     })

//             .catch((err) => {

//                 console.log(err);

//                 alert("Order Failed");
//             });
//     };

//         return (

//             <div>

//                 {/* <Header /> */}
//                 <Navbar />

//                 <div style={{
//                     padding: "20px",
//                     minHeight: "80vh",
//                     background: "#f5f5f5"
//                 }}>

//                     {/* <h2 style={{
//                         marginBottom: "25px"
//                     }}>
//                         🍉 Fresh Fruits
//                     </h2> */}
//                     <div style={{
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     marginBottom: "25px"
// }}>

//     <img
//         src="/logo.jpeg"
//         alt="Guru Fruit Logo"
//         style={{
//             width: "55px",
//             height: "55px",
//             borderRadius: "50%",
//             objectFit: "cover"
//         }}
//     />

//     <h2 style={{
//         margin: 0,
//         color: "#0f7b0f"
//     }}>
//         Guru Fruit Shop
//     </h2>

// </div>

//                     {/* FRUITS LIST */}

//                     <div style={{
//                         display: "flex",
//                         gap: "20px",
//                         flexWrap: "wrap"
//                     }}>

//                         {

//                             fruits.map((fruit) => (

//                             <div
//         key={fruit.id}

//        onClick={() => {

//     if ( fruit.category?.toLowerCase() ===
//             "mango") {

//         navigate("/mango-menu");

//     } else if (
//          fruit.category?.toLowerCase() ===
//             "jamun"
//     ) {

//         navigate("/jamun-menu");

//     } else {

//         navigate(`/fruit/${fruit.id}`);
//     }
// }}
//         onMouseEnter={(e) =>
//             e.currentTarget.style.transform =
//                 "scale(1.03)"
//         }

//         onMouseLeave={(e) =>
//             e.currentTarget.style.transform =
//                 "scale(1)"
//         }
//                                     style={{
//                                         border: "1px solid #ddd",
//                                         padding: "20px",
//                                         width: "240px",
//                                         borderRadius: "15px",
//                                         boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
//                                         background: "white",
//                                         cursor: "pointer",
//     transition: "0.3s",
//                                     }}
//                                 >
//     {
//         fruit.imageUrl && (

//             <img
//                 src={fruit.imageUrl}

//                 alt={fruit.name}

//                 style={{
//                     width: "100%",
//                     height: "180px",
//                     objectFit: "cover",
//                     borderRadius: "12px",
//                     marginBottom: "12px"
//                 }}
//             />
//         )
//     }
//                                     <h2>
//                                         {fruit.name}
//                                     </h2>

//                                     <h3>
//                                         ₹ {fruit.price}
//                                     </h3>

//                                     <p>
//                                         Unit : {fruit.unit}
//                                     </p>

//                                     <p>

//                                         {

//                                             fruit.stock

//                                                 ? "✅ Available"

//                                                 : "❌ Out Of Stock"
//                                         }

//                                     </p>

//                                     <button

//                                         onClick={() => addToCart(fruit)}

//                                         disabled={!fruit.stock}

//                                         style={{
//                                             padding: "12px",
//                                             background: fruit.stock
//                                                 ? "orange"
//                                                 : "gray",

//                                             border: "none",

//                                             borderRadius: "10px",

//                                             cursor: fruit.stock
//                                                 ? "pointer"
//                                                 : "not-allowed",

//                                             width: "100%"
//                                         }}
//                                     >

//                                         Add To Cart

//                                     </button>

//                                 </div>
//                             ))
//                         }

//                     </div>

//                     {/* CART */}

//                     <hr style={{
//                         margin: "35px 0"
//                     }} />

//                     <h2>
//                         🛒 Cart
//                     </h2>

//                     {

//                         cart.length === 0

//                             ?

//                             <p>
//                                 Cart Is Empty 😄
//                             </p>

//                             :

//                             cart.map((item) => (

//                                 <div

//                                     key={item.id}

//                                     style={{
//                                         border: "1px solid #ccc",
//                                         padding: "15px",
//                                         marginBottom: "15px",
//                                         borderRadius: "10px",
//                                         background: "white"
//                                     }}
//                                 >

//                                     <h3>
//                                         {item.name}
//                                     </h3>

//                                     <p>
//                                         Price : ₹ {item.price}
//                                     </p>

//                                     <p>
//                                         Unit : {item.unit}
//                                     </p>

//                                     {/* QTY */}

//                                     <div style={{
//                                         display: "flex",
//                                         alignItems: "center",
//                                         gap: "10px",
//                                         marginBottom: "10px"
//                                     }}>

//                                         <button

//                                             onClick={() =>
//                                                 decreaseQty(item.id)
//                                             }

//                                             style={{
//                                                 padding: "5px 12px",
//                                                 cursor: "pointer"
//                                             }}
//                                         >

//                                             -

//                                         </button>

//                                         <span style={{
//                                             fontSize: "18px",
//                                             fontWeight: "bold"
//                                         }}>
//                                             {item.qty}
//                                         </span>

//                                         <button

//                                             onClick={() =>
//                                                 increaseQty(item.id)
//                                             }

//                                             style={{
//                                                 padding: "5px 12px",
//                                                 cursor: "pointer"
//                                             }}
//                                         >

//                                             +

//                                         </button>

//                                     </div>

//                                     <h4>
//                                         Total : ₹ {item.price * item.qty}
//                                     </h4>

//                                 </div>
//                             ))
//                     }

//                     {/* GRAND TOTAL */}

//                     {

//                         cart.length > 0 && (

//                             <div style={{
//                                 marginTop: "20px",
//                                 padding: "20px",
//                                 background: "#fff3cd",
//                                 borderRadius: "10px"
//                             }}>

//                                 <h2>
//                                     Grand Total : ₹ {totalPrice}
//                                 </h2>

//                             </div>
//                         )
//                     }

//                     {/* CHECKOUT */}

//                     {

//                         cart.length > 0 && (

//                             <div style={{
//                                 marginTop: "30px",
//                                 padding: "25px",
//                                 background: "white",
//                                 borderRadius: "15px",
//                                 boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
//                             }}>

//                                 <h2>
//                                     😄 Checkout
//                                 </h2>

//                                 <input
//                                     type="text"

//                                     placeholder="Enter Customer Name"

//                                     value={customerName}

//                                     onChange={(e) =>
//                                         setCustomerName(
//                                             e.target.value
//                                         )
//                                     }

//                                     style={{
//                                         padding: "12px",
//                                         width: "280px",
//                                         marginBottom: "12px",
//                                         borderRadius: "10px",
//                                         border: "1px solid #ccc"
//                                     }}
//                                 />

//                                 <br />

//                                 <input
//                                     type="text"

//                                     placeholder="Enter Mobile Number"

//                                     value={mobile}

//                                     onChange={(e) =>
//                                         setMobile(
//                                             e.target.value
//                                         )
//                                     }

//                                     style={{
//                                         padding: "12px",
//                                         width: "280px",
//                                         marginBottom: "15px",
//                                         borderRadius: "10px",
//                                         border: "1px solid #ccc"
//                                     }}
//                                 />
//                                 <br />

//     <textarea

//         placeholder="Enter Delivery Address"

//         value={address}

//         onChange={(e) =>
//             setAddress(e.target.value)
//         }

//         style={{
//             padding: "12px",
//             width: "280px",
//             height: "80px",
//             marginBottom: "12px",
//             borderRadius: "10px",
//             border: "1px solid #ccc"
//         }}
//     />

//     <br />

//     <input
//         type="text"

//         placeholder="Landmark"

//         value={landmark}

//         onChange={(e) =>
//             setLandmark(e.target.value)
//         }

//         style={{
//             padding: "12px",
//             width: "280px",
//             marginBottom: "12px",
//             borderRadius: "10px",
//             border: "1px solid #ccc"
//         }}
//     />

//     <br />

//     <input
//         type="text"

//         placeholder="Pincode"

//         value={pincode}

//         onChange={(e) =>
//             setPincode(e.target.value)
//         }

//         style={{
//             padding: "12px",
//             width: "280px",
//             marginBottom: "15px",
//             borderRadius: "10px",
//             border: "1px solid #ccc"
//         }}
//     />

//     <input
//         type="date"
//         value={deliveryDate}
//         onChange={(e) =>
//             setDeliveryDate(e.target.value)
//         }

//         style={inputStyle}
//     />

//     <br />

//     <input
//         type="time"
//         value={deliveryTime}
//         onChange={(e) =>
//             setDeliveryTime(e.target.value)
//         }

//         style={inputStyle}
//     />

//     <br />

//     <textarea

//         placeholder="Special Instructions
//     Like:
//     Kal deliver karna
//     Aaj cut fruits chahiye
//     Kadak mango chahiye"

//         value={customerNote}

//         onChange={(e) =>
//             setCustomerNote(e.target.value)
//         }

//         style={{
//             width: "280px",
//             height: "90px",
//             padding: "12px",
//             marginBottom: "15px",
//             borderRadius: "10px",
//             border: "1px solid #ccc"
//         }}
//     />


//     <h3>
//         💳 Select Payment Method
//     </h3>

//     <select

//         value={paymentMethod}

//         onChange={(e) =>
//             setPaymentMethod(e.target.value)
//         }

//         style={{
//             padding: "12px",
//             width: "305px",
//             marginBottom: "20px",
//             borderRadius: "10px",
//             border: "1px solid #ccc"
//         }}
//     >

//         <option value="COD">
//             Cash On Delivery
//         </option>

//         <option value="UPI">
//             UPI Payment
//         </option>

//         <option value="Card">
//             Card Payment
//         </option>

//     </select>

//                                 <br />

//                                 <button

//                                     onClick={placeOrder}

//                                     style={{
//                                         padding: "12px 25px",
//                                         background: "green",
//                                         color: "white",
//                                         border: "none",
//                                         borderRadius: "10px",
//                                         cursor: "pointer",
//                                         fontSize: "16px"
//                                     }}
//                                 >

//                                     Place Order

//                                 </button>

//                             </div>
//                         )
//                     }

//                 </div>

//                 <Footer />

//             </div>
//         );
//     }
//     const inputStyle = {

//         padding: "12px",

//         width: "280px",

//         marginBottom: "12px",

//         borderRadius: "10px",

//         border: "1px solid #ccc"
//     };
//     export default Menu;



  import { useEffect, useState } from "react";

    import api from "../services/api";

    // import Header from "../components/Header";
    import Footer from "../components/Footer";
    import { useNavigate } from "react-router-dom";
    import Navbar from "../components/Navbar";

    function Menu() {

        const [fruits, setFruits] = useState([]);
        const [showOfferPopup, setShowOfferPopup] =
    useState(false);

const [offerAdded, setOfferAdded] =
    useState(false);
    const OFFER_APPLE_ID = 9999;

    const [cart, setCart] = useState(

        JSON.parse(
            localStorage.getItem("cart")
        ) || []
    );
        const [customerName, setCustomerName] = useState("");

        const [mobile, setMobile] = useState("");
        const [address, setAddress] = useState("");

    const [landmark, setLandmark] = useState("");

    const [pincode, setPincode] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const navigate = useNavigate();
    const [deliveryDate, setDeliveryDate] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [customerNote, setCustomerNote] = useState("");
const [search, setSearch] = useState("");

const [selectedCategory, setSelectedCategory] = useState("");

const [maxPrice, setMaxPrice] = useState("");
        // LOAD FRUITS

        useEffect(() => {

            api.get("/fruits")
                .then((res) => {
                    setFruits(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        }, []);
        useEffect(() => {

        const savedCustomer = JSON.parse(
            localStorage.getItem("customerData")
        );

        if (savedCustomer) {

            setCustomerName(
                savedCustomer.name || ""
            );

            setMobile(
                savedCustomer.mobile || ""
            );

            setAddress(
                savedCustomer.address || ""
            );

            setLandmark(
                savedCustomer.landmark || ""
            );

            setPincode(
                savedCustomer.pincode || ""
            );
        }

    }, []);
    useEffect(() => {

        try {

            const savedCart = JSON.parse(
                localStorage.getItem("cart")
            );

            if (Array.isArray(savedCart)) {

                setCart(savedCart);

            } else {

                setCart([]);
            }

        } catch (error) {

            setCart([]);
        }

    }, []);
        // ADD TO CART

        const addToCart = (fruit) => {

            if (!fruit.stock) {

                alert("Fruit Out Of Stock ❌");

                return;
            }

            const existingItem = cart.find(
                item => item.id === fruit.id
            );

            if (existingItem) {

                const updatedCart = cart.map(item =>

                    item.id === fruit.id
                        ? {
                            ...item,
                            qty: item.qty + 1
                        }
                        : item
                );

                setCart(updatedCart);

            } else {

                setCart([
                    ...cart,
                    {
                        ...fruit,
                        qty: 1
                    }
                ]);
            }
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

            setCart(updatedCart);
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

            setCart(updatedCart);
        };

        // TOTAL PRICE
        // TOTAL PRICE

const totalPrice = (cart || []).reduce(

    (total, item) =>

        total + (item.price * item.qty),

    0
);

    const addOfferApple = () => {

    const offerApple = {

        id: OFFER_APPLE_ID,

        name: "🍎 Offer Apple",

        price: 1,

        qty: 1,

        unit: "1 Piece"
    };

    setCart([
        ...cart,
        offerApple
    ]);

    setOfferAdded(true);

    setShowOfferPopup(false);

    setTimeout(() => {

        placeOrder();

    }, 100);
};
const skipOffer = () => {

    setOfferAdded(true);

    setShowOfferPopup(false);

    setTimeout(() => {

        placeOrder();

    }, 100);
};
    const placeOrder = () => {
if (
    totalPrice >= 1000 &&
    !offerAdded
) {

    setShowOfferPopup(true);

    return;
}
        // NAME VALIDATION

        if (customerName.trim() === "") {

            alert("Please Enter Customer Name");

            return;
        }

        // ONLY LETTERS

        const nameRegex = /^[A-Za-z ]+$/;

        if (!nameRegex.test(customerName)) {

            alert("Name Should Contain Only Letters");

            return;
        }

        // MOBILE VALIDATION

        const mobileRegex = /^[0-9]{10}$/;

        if (!mobileRegex.test(mobile)) {

            alert("Enter Valid 10 Digit Mobile Number");

            return;
        }

        // ADDRESS VALIDATION

        if (address.trim().length < 10) {

            alert("Please Enter Proper Address");

            return;
        }

        // LANDMARK VALIDATION

        if (landmark.trim() === "") {

            alert("Please Enter Landmark");

            return;
        }

        // PINCODE VALIDATION

        const pincodeRegex = /^[0-9]{6}$/;

        if (!pincodeRegex.test(pincode)) {

            alert("Enter Valid 6 Digit Pincode");

            return;
        }

        // CART VALIDATION

        if (cart.length === 0) {

            alert("Cart Is Empty");

            return;
        }

        // ORDER ITEMS

        const orderItems = cart.map(item => ({

            fruitName: item.name,

            qty: item.qty,

            price: item.price,

            total: item.price * item.qty
        }));

        // FINAL ORDER DATA
    const customerData = {

        name: customerName,

        mobile,

        address,

        landmark,

        pincode
    };

    localStorage.setItem(
        "customerData",
        JSON.stringify(customerData)
    );
    api.post("/customers", {

    name: customerName,

    mobile: mobile,

    address: address,

    landmark: landmark,

    pincode: pincode

})
.then(() => {

    console.log("Customer Saved");

})
.catch((err) => {

    console.log(err);

});
        const orderData = {

            customerName,

            mobile,

            address,

            landmark,

            pincode,

            paymentMethod,

            orderStatus: "Pending",

            totalAmount: totalPrice,

            items: orderItems,
            deliveryDate,
    deliveryTime,
    customerNote,
    priority:
            deliveryTime === "Morning"
                ? "High"
                : "Normal",
    items: orderItems
        };

        console.log(orderData);
        localStorage.setItem(
        "customerMobile",
        mobile
    );

        api.post("/orders", orderData)

            .then(() => {
    localStorage.removeItem("cart");
                localStorage.setItem(
        "customerMobile",
        mobile
    );

    localStorage.setItem(
        "customerName",
        customerName
    );

    localStorage.setItem(
        "customerAddress",
        address
    );

        // WHATSAPP MESSAGE

        const orderSummary = cart.map(item =>

            `${item.name}
    Qty: ${item.qty}
    Total: ₹${item.price * item.qty}`

        ).join("\n\n");

        const message =

    `🍎 Guru Fruit Shop Order

    👤 Customer: ${customerName}

    📱 Mobile: ${mobile}

    📍 Address:
    ${address}

    🏨 Landmark:
    ${landmark}

    📮 Pincode:
    ${pincode}

    🛒 Order Details:

    ${orderSummary}

    💰 Grand Total:
    ₹${totalPrice}

    💳 Payment:
    ${paymentMethod}
    
    Delivery Date: 
    ${ deliveryDate}

    Delivery Time: 
    ${deliveryTime}

    Customer Note:
    ${customerNote}
    
    `;

        // YOUR WHATSAPP NUMBER

        const whatsappNumber = "8898120899";

        // ENCODE MESSAGE

        const whatsappURL =

    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // OPEN WHATSAPP

        window.open(
            whatsappURL,
            "_blank"
        );

        alert("Order Placed Successfully 😍");

        // CLEAR FORM

        setCart([]);

        setCustomerName("");

        setMobile("");

        setAddress("");

        setLandmark("");

        setPincode("");
    })

            .catch((err) => {

                console.log(err);

                alert("Order Failed");
            });
    };

        return (

            <div>

                {/* <Header /> */}
                <Navbar />

                <div style={{
                    padding: "20px",
                    minHeight: "80vh",
                    background: "#f5f5f5"
                }}>

                    {/* <h2 style={{
                        marginBottom: "25px"
                    }}>
                        🍉 Fresh Fruits
                    </h2> */}
                    <div style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "25px"
}}>

    <img
        src="/logo.jpeg"
        alt="Guru Fruit Logo"
        style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            objectFit: "cover"
        }}
    />

    <h2 style={{
        margin: 0,
        color: "#0f7b0f"
    }}>
        Guru Fruit ..Nature’s Freshness at Your Doorstep
    </h2>

</div>
{/* SEARCH + FILTERS */}

<div style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "25px",
    alignItems: "center"
}}>

    {/* SEARCH BY NAME */}

    <input
        type="text"
        placeholder="🔍 Search Fruit"

        value={search}

        onChange={(e) =>
            setSearch(e.target.value)
        }

        style={{
            padding: "12px",
            width: "240px",
            borderRadius: "10px",
            border: "1px solid #ccc"
        }}
    />

    {/* FILTER BY CATEGORY */}

    <select

        value={selectedCategory}

        onChange={(e) =>
            setSelectedCategory(
                e.target.value
            )
        }

        style={{
            padding: "12px",
            width: "220px",
            borderRadius: "10px",
            border: "1px solid #ccc"
        }}
    >

        <option value="">
            All Categories
        </option>

        <option value="Mango">
            Mango
        </option>

        <option value="Jamun">
            Jamun
        </option>
 <option value="Jam">
            Jam
        </option>

         <option value="grapes">
            grapes
        </option>

         <option value="Jamun">
            ....
        </option>

         <option value="Jamun">
           .....
        </option>
    </select>

    {/* FILTER BY PRICE */}

    <input
        type="number"

        placeholder="💰 Max Price"

        value={maxPrice}

        onChange={(e) =>
            setMaxPrice(e.target.value)
        }

        style={{
            padding: "12px",
            width: "180px",
            borderRadius: "10px",
            border: "1px solid #ccc"
        }}
    />

</div>
                    {/* FRUITS LIST */}

                    <div style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap"
                    }}>

                        {

                            // fruits.map((fruit) => (
fruits

.filter((fruit) => {
const searchText =
    search.toLowerCase();

const matchSearch =

    fruit.name
        ?.toLowerCase()
        .includes(searchText)

    ||

    fruit.category
        ?.toLowerCase()
        .includes(searchText)

    ||

    fruit.description
        ?.toLowerCase()
        .includes(searchText);

   const matchCategory =

    selectedCategory === ""

    ||

    fruit.category
        ?.trim()
        .toLowerCase() ===

    selectedCategory
        .trim()
        .toLowerCase();

    const matchPrice =

        maxPrice === ""

        ||

        fruit.price <= Number(maxPrice);

    return (

        matchSearch &&

        matchCategory &&

        matchPrice
    );
})

.map((fruit) => (
                            <div
        key={fruit.id}

       onClick={() => {

    if ( fruit.category?.toLowerCase() ===
            "mango") {

        navigate("/mango-menu");

    } else if (
         fruit.category?.toLowerCase() ===
            "jamun"
    ) {

        navigate("/jamun-menu");

    } else {

        navigate(`/fruit/${fruit.id}`);
    }
}}
        onMouseEnter={(e) =>
            e.currentTarget.style.transform =
                "scale(1.03)"
        }

        onMouseLeave={(e) =>
            e.currentTarget.style.transform =
                "scale(1)"
        }
                                    style={{
                                        border: "1px solid #ddd",
                                        padding: "20px",
                                        width: "240px",
                                        borderRadius: "15px",
                                        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                                        background: "white",
                                        cursor: "pointer",
    transition: "0.3s",
                                    }}
                                >
    {
        fruit.imageUrl && (

            <img
                src={fruit.imageUrl}

                alt={fruit.name}

                style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "12px"
                }}
            />
        )
    }
                                    <h2>
                                        {fruit.name}
                                    </h2>

                                    <h3>
                                        ₹ {fruit.price}
                                    </h3>

                                    <p>
                                        Unit : {fruit.unit}
                                    </p>

                                    <p>

                                        {

                                            fruit.stock

                                                ? "✅ Available"

                                                : "❌ Out Of Stock"
                                        }

                                    </p>

                                    <button

                                        onClick={() => addToCart(fruit)}

                                        disabled={!fruit.stock}

                                        style={{
                                            padding: "12px",
                                            background: fruit.stock
                                                ? "orange"
                                                : "gray",

                                            border: "none",

                                            borderRadius: "10px",

                                            cursor: fruit.stock
                                                ? "pointer"
                                                : "not-allowed",

                                            width: "100%"
                                        }}
                                    >

                                        Add To Cart

                                    </button>

                                </div>
                            ))
                        }

                    </div>

                    {/* CART */}

                    <hr style={{
                        margin: "35px 0"
                    }} />

                    <h2>
                        🛒 Cart
                    </h2>

                    {

                        cart.length === 0

                            ?

                            <p>
                                Cart Is Empty 😄
                            </p>

                            :

                            cart.map((item) => (

                                <div

                                    key={item.id}

                                    style={{
                                        border: "1px solid #ccc",
                                        padding: "15px",
                                        marginBottom: "15px",
                                        borderRadius: "10px",
                                        background: "white"
                                    }}
                                >

                                    <h3>
                                        {item.name}
                                    </h3>

                                    <p>
                                        Price : ₹ {item.price}
                                    </p>

                                    <p>
                                        Unit : {item.unit}
                                    </p>

                                    {/* QTY */}

                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginBottom: "10px"
                                    }}>

                                        <button

                                            onClick={() =>
                                                decreaseQty(item.id)
                                            }

                                            style={{
                                                padding: "5px 12px",
                                                cursor: "pointer"
                                            }}
                                        >

                                            -

                                        </button>

                                        <span style={{
                                            fontSize: "18px",
                                            fontWeight: "bold"
                                        }}>
                                            {item.qty}
                                        </span>

                                        <button

                                            onClick={() =>
                                                increaseQty(item.id)
                                            }

                                            style={{
                                                padding: "5px 12px",
                                                cursor: "pointer"
                                            }}
                                        >

                                            +

                                        </button>

                                    </div>

                                    <h4>
                                        Total : ₹ {item.price * item.qty}
                                    </h4>

                                </div>
                            ))
                    }

                    {/* GRAND TOTAL */}

                    {

                        cart.length > 0 && (

                            <div style={{
                                marginTop: "20px",
                                padding: "20px",
                                background: "#fff3cd",
                                borderRadius: "10px"
                            }}>

                                <h2>
                                    Grand Total : ₹ {totalPrice}
                                </h2>

                            </div>
                        )
                    }

                    {/* CHECKOUT */}

                    {

                        cart.length > 0 && (

                            <div style={{
                                marginTop: "30px",
                                padding: "25px",
                                background: "white",
                                borderRadius: "15px",
                                boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
                            }}>

                                <h2>
                                    😄 Checkout
                                </h2>

                                <input
                                    type="text"

                                    placeholder="Enter Customer Name"

                                    value={customerName}

                                    onChange={(e) =>
                                        setCustomerName(
                                            e.target.value
                                        )
                                    }

                                    style={{
                                        padding: "12px",
                                        width: "280px",
                                        marginBottom: "12px",
                                        borderRadius: "10px",
                                        border: "1px solid #ccc"
                                    }}
                                />

                                <br />

                                <input
                                    type="text"

                                    placeholder="Enter Mobile Number"

                                    value={mobile}

                                    onChange={(e) =>
                                        setMobile(
                                            e.target.value
                                        )
                                    }

                                    style={{
                                        padding: "12px",
                                        width: "280px",
                                        marginBottom: "15px",
                                        borderRadius: "10px",
                                        border: "1px solid #ccc"
                                    }}
                                />
                                <br />

    <textarea

        placeholder="Enter Delivery Address"

        value={address}

        onChange={(e) =>
            setAddress(e.target.value)
        }

        style={{
            padding: "12px",
            width: "280px",
            height: "80px",
            marginBottom: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc"
        }}
    />

    <br />

    <input
        type="text"

        placeholder="Landmark"

        value={landmark}

        onChange={(e) =>
            setLandmark(e.target.value)
        }

        style={{
            padding: "12px",
            width: "280px",
            marginBottom: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc"
        }}
    />

    <br />

    <input
        type="text"

        placeholder="Pincode"

        value={pincode}

        onChange={(e) =>
            setPincode(e.target.value)
        }

        style={{
            padding: "12px",
            width: "280px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc"
        }}
    />

    <input
        type="date"
        value={deliveryDate}
        onChange={(e) =>
            setDeliveryDate(e.target.value)
        }

        style={inputStyle}
    />

    <br />

    <input
        type="time"
        value={deliveryTime}
        onChange={(e) =>
            setDeliveryTime(e.target.value)
        }

        style={inputStyle}
    />

    <br />

    <textarea

        placeholder="Special Instructions
    Like:
    Kal deliver karna
    Aaj cut fruits chahiye
    Kadak mango chahiye"

        value={customerNote}

        onChange={(e) =>
            setCustomerNote(e.target.value)
        }

        style={{
            width: "280px",
            height: "90px",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc"
        }}
    />


    <h3>
        💳 Select Payment Method
    </h3>

    <select

        value={paymentMethod}

        onChange={(e) =>
            setPaymentMethod(e.target.value)
        }

        style={{
            padding: "12px",
            width: "305px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc"
        }}
    >

        <option value="COD">
            Cash On Delivery
        </option>

        <option value="UPI">
            UPI Payment
        </option>

        <option value="Card">
            Card Payment
        </option>

    </select>

                                <br />

                                <button

                                    onClick={placeOrder}

                                    style={{
                                        padding: "12px 25px",
                                        background: "green",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        fontSize: "16px"
                                    }}
                                >

                                    Place Order

                                </button>

                            </div>
                        )
                    }

                </div>
{
    showOfferPopup && (

        <div style={popupOverlay}>

            <div style={popupBox}>

                <h1>
                    🎁 Special Offer
                </h1>

                <p style={{
                    fontSize: "18px",
                    marginBottom: "25px"
                }}>

                    Your bill is above ₹1000 😍

                    <br /><br />

                    Add 1 Apple for just ₹1 ?

                </p>

                <div style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center"
                }}>

                    <button
                        onClick={addOfferApple}
                        style={yesBtn}
                    >
                        ✅ Yes Add
                    </button>

                    <button
                        onClick={skipOffer}
                        style={noBtn}
                    >
                        ❌ No Thanks
                    </button>

                </div>

            </div>

        </div>
    )
}
                <Footer />

            </div>
        );
    }
    const popupOverlay = {

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
};

const popupBox = {

    background: "white",

    padding: "30px",

    borderRadius: "20px",

    width: "90%",

    maxWidth: "400px",

    textAlign: "center",

    boxShadow: "0px 5px 25px rgba(0,0,0,0.2)"
};

const popupBtn = {

    padding: "12px 20px",

    border: "none",

    borderRadius: "10px",

    color: "white",

    cursor: "pointer",

    fontWeight: "bold",

    fontSize: "15px"
};
const yesBtn = {

    ...popupBtn,

    background: "#16a34a"
};

const noBtn = {

    ...popupBtn,

    background: "#dc2626"
};
    const inputStyle = {

        padding: "12px",

        width: "280px",

        marginBottom: "12px",

        borderRadius: "10px",

        border: "1px solid #ccc"
    };
    export default Menu;