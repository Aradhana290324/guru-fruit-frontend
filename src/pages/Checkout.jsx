// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import api from "../services/api";
// // function Checkout() {
// // // useEffect(() => {

// // //     const savedCustomer = JSON.parse(
// // //         localStorage.getItem("customerData")
// // //     );

// // //     if (savedCustomer) {

// // //         setForm(prev => ({
// // //             ...prev,
// // //             name: savedCustomer.name || "",
// // //             mobile: savedCustomer.mobile || "",
// // //             house: savedCustomer.address || "",
// // //             landmark: savedCustomer.landmark || "",
// // //             pincode: savedCustomer.pincode || ""
// // //         }));
// // //     }

// // // }, []);
// // useEffect(() => {

// //     const mobile =
// //         localStorage.getItem("customerMobile");

// //     if (!mobile) return;

// //     api.get(`/customers/mobile/${mobile}`)

// //         .then((res) => {

// //             setForm(prev => ({
// //                 ...prev,
// //                 name: res.data.name || "",
// //                 mobile: res.data.mobile || "",
// //                 house: res.data.address || "",
// //                 landmark: res.data.landmark || "",
// //                 pincode: res.data.pincode || ""
// //             }));

// //         })

// //         .catch(console.log);

// // }, []);
// //     const navigate = useNavigate();

// //     const [form, setForm] = useState({
// //         name: "",
// //         mobile: "",
// //         house: "",
// //         area: "",
// //         landmark: "",
// //         city: "",
// //         pincode: "",
// //         payment: "COD"
// //     });

// //     const handleChange = (e) => {

// //         setForm({
// //             ...form,
// //             [e.target.name]: e.target.value
// //         });
// //     };

// //     const placeOrder = () => {

// //         alert("Order Placed Successfully 🎉");

// //         localStorage.removeItem("cart");

// //         navigate("/");
// //     };

// //     return (

// //         <div style={styles.page}>

// //             <div style={styles.container}>

// //                 <h1 style={styles.heading}>
// //                     🛒 Checkout
// //                 </h1>

// //                 <p style={styles.subHeading}>
// //                     Delivery Address
// //                 </p>

// //                 <input
// //                  name="name"
// //     value={form.name}
// //     placeholder="Full Name"
// //     onChange={handleChange}
// //     style={styles.input}
// //                 />

// //               <input
// //     name="mobile"
// //     value={form.mobile}
// //     placeholder="Mobile Number"
// //     onChange={handleChange}
// //     style={styles.input}
// // />

// //               <input
// //     name="house"
// //     value={form.house}
// //     placeholder="House / Flat No"
// //     onChange={handleChange}
// //     style={styles.input}
// // />

// //                 <input
// //                     name="area"
// //                     placeholder="Area"
// //                     onChange={handleChange}
// //                     style={styles.input}
// //                 />

// //                <input
// //     name="landmark"
// //     value={form.landmark}
// //     placeholder="Landmark"
// //     onChange={handleChange}
// //     style={styles.input}
// // />

// //                 <input
// //                     name="city"
// //                     placeholder="City"
// //                     onChange={handleChange}
// //                     style={styles.input}
// //                 />

// //                 <input
// //     name="pincode"
// //     value={form.pincode}
// //     placeholder="Pincode"
// //     onChange={handleChange}
// //     style={styles.input}
// // />

// //                 <div style={styles.paymentBox}>

// //                     <h3>
// //                         Payment Method
// //                     </h3>

// //                     <label>
// //                         <input
// //                             type="radio"
// //                             name="payment"
// //                             value="COD"
// //                             checked={form.payment === "COD"}
// //                             onChange={handleChange}
// //                         />

// //                         Cash On Delivery
// //                     </label>

// //                     <br />

// //                     <label>
// //                         <input
// //                             type="radio"
// //                             name="payment"
// //                             value="UPI"
// //                             checked={form.payment === "UPI"}
// //                             onChange={handleChange}
// //                         />

// //                         UPI Payment
// //                     </label>

// //                 </div>

// //                 <button
// //                     onClick={placeOrder}
// //                     style={styles.button}
// //                 >

// //                     Place Order 🚀

// //                 </button>

// //             </div>

// //         </div>
// //     );
// // }

// // const styles = {

// //     page: {
// //         minHeight: "100vh",
// //         background: "#f5f5f5",
// //         padding: "20px"
// //     },

// //     container: {
// //         maxWidth: "600px",
// //         margin: "auto",
// //         background: "#fff",
// //         padding: "25px",
// //         borderRadius: "20px",
// //         boxShadow:
// //             "0 5px 20px rgba(0,0,0,0.08)"
// //     },

// //     heading: {
// //         textAlign: "center"
// //     },

// //     subHeading: {
// //         fontWeight: "600"
// //     },

// //     input: {
// //         width: "100%",
// //         padding: "14px",
// //         marginTop: "12px",
// //         borderRadius: "12px",
// //         border: "1px solid #ddd",
// //         boxSizing: "border-box"
// //     },

// //     paymentBox: {
// //         marginTop: "20px",
// //         background: "#fafafa",
// //         padding: "15px",
// //         borderRadius: "12px"
// //     },

// //     button: {
// //         width: "100%",
// //         marginTop: "25px",
// //         padding: "16px",
// //         border: "none",
// //         borderRadius: "12px",
// //         background: "#16a34a",
// //         color: "white",
// //         fontSize: "18px",
// //         fontWeight: "700",
// //         cursor: "pointer"
// //     }
// // };

// // export default Checkout;
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import { toast } from "react-toastify";

// function Checkout() {

//     const navigate = useNavigate();
// const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
// );
//     const [form, setForm] = useState({
//         name: "",
//         mobile: "",
//         house: "",
//         area: "",
//         landmark: "",
//         city: "",
//         pincode: "",
//         payment: "COD",

//     deliveryDate: "",
//     deliveryTime: "",
//     customerNote: ""
//     });
// const [showOfferPopup, setShowOfferPopup] =
// useState(false);

// const [offerAdded, setOfferAdded] =
// useState(false);

// const OFFER_APPLE_ID = 9999;
//     // LOAD CUSTOMER DATA FROM DB

//     useEffect(() => {

//         const mobile =
//             localStorage.getItem("customerMobile");

//         if (!mobile) return;

//         api.get(`/customers/${mobile}`)

//             .then((res) => {

//                 const customer = res.data;

//                 setForm(prev => ({
//                     ...prev,
//                     name: customer.name || "",
//                     mobile: customer.mobile || "",
//                     house: customer.address || "",
//                     area: customer.area || "",
//                     city: customer.city || "",
//                     landmark: customer.landmark || "",
//                     pincode: customer.pincode || ""
//                 }));

//             })

//             .catch((err) => {
//                 console.log(err);
//             });

//     }, []);

//     const handleChange = (e) => {

//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     };
// const addOfferApple = () => {

//     const offerApple = {

//         id: OFFER_APPLE_ID,

//         name: "🍎 Offer Apple",

//         price: 1,

//         qty: 1,

//         unit: "1 Piece"
//     };

//     const updatedCart = [
//         ...cart,
//         offerApple
//     ];

//     setCart(updatedCart);

//     localStorage.setItem(
//         "cart",
//         JSON.stringify(updatedCart)
//     );

//     setOfferAdded(true);

//     setShowOfferPopup(false);

//     setTimeout(() => {

//         placeOrder(true);

//     }, 100);
// };

// const skipOffer = () => {

//     setOfferAdded(true);

//     setShowOfferPopup(false);

//     setTimeout(() => {

//         placeOrder(true);

//     }, 100);
// };
// const totalPrice = cart.reduce(
//     (total, item) =>
//         total + (item.price * item.qty),
//     0
// );
// // const placeOrder = async (skipOfferCheck = false) => {

// // if (
// //     totalPrice >= 1000 &&
// //     !offerAdded &&
// //     !skipOfferCheck
// // ) {
// //     setShowOfferPopup(true);
// //     return;
// // }
// //         try {

// //             // SAVE UPDATED CUSTOMER DETAILS

// //     // SAVE CUSTOMER

// //     await api.post("/customers", {
// //         name: form.name,
// //         mobile: form.mobile,
// //         address: form.house,
// //         area: form.area,
// //         city: form.city,
// //         landmark: form.landmark,
// //         pincode: form.pincode
// //     });

// //     // ORDER ITEMS

// //     const orderItems = cart.map(item => ({
// //         fruitName: item.name,
// //         qty: item.qty,
// //         price: item.price,
// //         total: item.price * item.qty
// //     }));

// //     // ORDER DATA

// //     const orderData = {

// //         customerName: form.name,

// //         mobile: form.mobile,

// //         address: form.house,

// //         landmark: form.landmark,

// //         pincode: form.pincode,

// //         paymentMethod: form.payment,

// //         orderStatus: "Pending",

// //         totalAmount: totalPrice,

// //         deliveryDate: form.deliveryDate,

// //         deliveryTime: form.deliveryTime,

// //         customerNote: form.customerNote,

// //         priority:
// //             form.deliveryTime === "Morning"
// //                 ? "High"
// //                 : "Normal",

// //         items: orderItems
// //     };

// //     // SAVE ORDER

// //     // api.post("/orders", orderData)
// //     await api.post("/orders", orderData);

// //     // WHATSAPP MESSAGE

// //     const orderSummary = cart.map(item =>

// //         `${item.name}
// // Qty: ${item.qty}
// // Total: ₹${item.price * item.qty}`

// //     ).join("\n\n");

// //     const message =

// // `🍎 Guru Fruit Shop Order

// // 👤 Customer: ${form.name}

// // 📱 Mobile: ${form.mobile}

// // 📍 Address:
// // ${form.house}

// // 🏨 Landmark:
// // ${form.landmark}

// // 📮 Pincode:
// // ${form.pincode}

// // 🛒 Order Details:

// // ${orderSummary}

// // 💰 Grand Total:
// // ₹${totalPrice}

// // 💳 Payment:
// // ${form.payment}

// // 📅 Delivery Date:
// // ${form.deliveryDate}

// // ⏰ Delivery Time:
// // ${form.deliveryTime}

// // 📝 Customer Note:
// // ${form.customerNote}
// // `;

// //     const whatsappNumber =
// //         "91" + "7715082461";

// //     const whatsappURL =
// //         `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

// //     window.open(
// //         whatsappURL,
// //         "_blank"
// //     );

  
// //   Swal.fire({
// //       title: "Order Placed Successfully 🎉",
// //       html: `
// //           <div style="text-align:center">
// //               <img src="/logo.jpeg" 
// //                   style="width:80px;height:80px;border-radius:50%;border:2px solid #16a34a;margin-bottom:10px;" />
  
// //               <p><b>Thank you for ordering from Guru Fruit Shop 🍉</b></p>
  
// //               <p>Our team has received your order.</p>
  
// //               <p>Fresh fruits will be delivered to your doorstep 🚚</p>
  
// //               <hr/>
  
// //               <p style="font-size:14px;color:#555">
// //                   🙏 We appreciate your trust!
// //               </p>
// //           </div>
// //       `,
// //       icon: "success",
// //       confirmButtonColor: "#16a34a",
// //       confirmButtonText: "OK"
// //   });
  
// //     localStorage.removeItem("cart");

// //     navigate("/");

// // } catch (err) {

// //     console.log(err);

// //     alert("Order Failed ❌");
// // }
        
// //     };
// const placeOrder = async (skipOfferCheck = false) => {
//     if (
//     !form.name ||
//     !form.mobile ||
//     !form.house ||
//     !form.landmark ||
//     !form.pincode
// ) {
//     toast.warning("Please fill all required fields");
//     return;
// }
//   if (
//     totalPrice >= 1000 &&
//     !offerAdded &&
//     !skipOfferCheck
//   ) {
//     setShowOfferPopup(true);
//     return;
//   }

//   try {
//     // 1. SAVE CUSTOMER FIRST
//     await api.post("/customers", {
//       name: form.name,
//       mobile: form.mobile,
//       address: form.house,
//       area: form.area,
//       city: form.city,
//       landmark: form.landmark,
//       pincode: form.pincode
//     });

//     // 2. BUILD ORDER ITEMS (IMPORTANT: use latest cart)
//     const latestCart = JSON.parse(localStorage.getItem("cart")) || [];

//     const orderItems = latestCart.map(item => ({
//       fruitName: item.name,
//       qty: item.qty,
//       price: item.price,
//       total: item.price * item.qty
//     }));

//   const orderData = {
//     customerName: form.name.trim(),
//     mobile: form.mobile.trim(),
//     address: form.house.trim(),
//     landmark: form.landmark.trim(),
//     pincode: form.pincode.trim(),
//     paymentMethod: form.payment,
//     orderStatus: "Pending",
//     totalAmount: totalPrice,
//     deliveryDate: form.deliveryDate || "",
//     deliveryTime: form.deliveryTime || "",
//     customerNote: form.customerNote || "",
//     priority: form.deliveryTime === "Morning" ? "High" : "Normal",
//     items: orderItems
// };
// console.log("CHECKOUT ORDER DATA:", orderData);
//     // 3. SAVE ORDER (WAIT FOR IT)
//     const res = await api.post("/orders", orderData);

//     console.log("ORDER SAVED:", res.data);

//     // 4. NOW CLEAR CART ONLY AFTER SUCCESS
//     localStorage.removeItem("cart");

//     setCart([]);

//     // 5. NAVIGATE ONLY AFTER SUCCESS
//     navigate("/");

//   } catch (err) {
//     console.log(err);
//     alert("Order Failed ❌");
//   }
// };

//     return (

//         <div style={styles.page}>

//             <div style={styles.container}>

//                 <h1 style={styles.heading}>
//                     🛒 Checkout
//                 </h1>

//                 <p style={styles.subHeading}>
//                     Delivery Address
//                 </p>

//                 <input
//                     name="name"
//                     value={form.name}
//                     placeholder="Full Name"
//                     onChange={handleChange}
//                     style={styles.input}
//                 />

//                 <input
//                     name="mobile"
//                     value={form.mobile}
//                     placeholder="Mobile Number"
//                     onChange={handleChange}
//                     style={styles.input}
//                 />

//                 <input
//                     name="house"
//                     value={form.house}
//                     placeholder="House / Flat No"
//                     onChange={handleChange}
//                     style={styles.input}
//                 />

//                 <input
//                     name="area"
//                     value={form.area}
//                     placeholder="Area"
//                     onChange={handleChange}
//                     style={styles.input}
//                 />

//                 <input
//                     name="landmark"
//                     value={form.landmark}
//                     placeholder="Landmark"
//                     onChange={handleChange}
//                     style={styles.input}
//                 />

//                 <input
//                     name="city"
//                     value={form.city}
//                     placeholder="City"
//                     onChange={handleChange}
//                     style={styles.input}
//                 />

//                 <input
//                     name="pincode"
//                     value={form.pincode}
//                     placeholder="Pincode"
//                     onChange={handleChange}
//                     style={styles.input}
//                 />
//                 <input
//     type="date"
//     name="deliveryDate"
//     placeholder="delivery date"
//     value={form.deliveryDate}
//     onChange={handleChange}
//     style={styles.input}
// />

// <input
//     type="time"
//     name="deliveryTime"
//     placeholder="delivery Time"
//     value={form.deliveryTime}
//     onChange={handleChange}
//     style={styles.input}
// />

// <textarea
//     name="customerNote"
//     value={form.customerNote}
//     onChange={handleChange}
//     placeholder={`Special Instructions

// Example:
// • Kal deliver karna
// • Aaj cut fruits chahiye
// • Kadak mango chahiye`}
//     style={{
//         ...styles.input,
//         minHeight: "100px",
//         resize: "vertical"
//     }}
// />

//                 <div style={styles.paymentBox}>

//                     <h3>
//                         Payment Method
//                     </h3>

//                     <label>
//                         <input
//                             type="radio"
//                             name="payment"
//                             value="COD"
//                             checked={form.payment === "COD"}
//                             onChange={handleChange}
//                         />

//                         Cash On Delivery
//                     </label>

//                     <br />

//                     <label>
//                         <input
//                             type="radio"
//                             name="payment"
//                             value="UPI"
//                             checked={form.payment === "UPI"}
//                             onChange={handleChange}
//                         />

//                         UPI Payment
//                     </label>

//                 </div>

//                 <button
//                     onClick={placeOrder}
//                     style={styles.button}
//                 >
//                     Place Order 🚀
//                 </button>
//                 {
//     showOfferPopup && (

//         <div style={popupOverlay}>

//             <div style={popupBox}>

//                 <h2>
//                     🎁 Special Offer
//                 </h2>

//                 <p>

//                     Your bill is above ₹1000 😍

//                     <br /><br />

//                     Add 1 Apple for just ₹1 ?

//                 </p>

//                 <div
//                     style={{
//                         display: "flex",
//                         gap: "10px",
//                         justifyContent: "center"
//                     }}
//                 >

//                     <button
//                         onClick={addOfferApple}
//                     >
//                         Yes Add
//                     </button>

//                     <button
//                         onClick={skipOffer}
//                     >
//                         No Thanks
//                     </button>

//                 </div>

//             </div>

//         </div>
//     )
// }

//             </div>

//         </div>
//     );
// }
// const popupOverlay = {

//     position: "fixed",

//     top: 0,

//     left: 0,

//     width: "100%",

//     height: "100%",

//     background: "rgba(0,0,0,0.5)",

//     display: "flex",

//     justifyContent: "center",

//     alignItems: "center",

//     zIndex: 9999
// };

// const popupBox = {

//     background: "white",

//     padding: "30px",

//     borderRadius: "20px",

//     textAlign: "center",

//     width: "350px"
// };
// const styles = {

//     page: {
//         minHeight: "100vh",
//         background: "#f5f5f5",
//         padding: "20px"
//     },

//     container: {
//         maxWidth: "600px",
//         margin: "auto",
//         background: "#fff",
//         padding: "25px",
//         borderRadius: "20px",
//         boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
//     },

//     heading: {
//         textAlign: "center"
//     },

//     subHeading: {
//         fontWeight: "600"
//     },

//     input: {
//         width: "100%",
//         padding: "14px",
//         marginTop: "12px",
//         borderRadius: "12px",
//         border: "1px solid #ddd",
//         boxSizing: "border-box"
//     },

//     paymentBox: {
//         marginTop: "20px",
//         background: "#fafafa",
//         padding: "15px",
//         borderRadius: "12px"
//     },

//     button: {
//         width: "100%",
//         marginTop: "25px",
//         padding: "16px",
//         border: "none",
//         borderRadius: "12px",
//         background: "#16a34a",
//         color: "white",
//         fontSize: "18px",
//         fontWeight: "700",
//         cursor: "pointer"
//     }
// };

// export default Checkout;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// function Checkout() {
// // useEffect(() => {

// //     const savedCustomer = JSON.parse(
// //         localStorage.getItem("customerData")
// //     );

// //     if (savedCustomer) {

// //         setForm(prev => ({
// //             ...prev,
// //             name: savedCustomer.name || "",
// //             mobile: savedCustomer.mobile || "",
// //             house: savedCustomer.address || "",
// //             landmark: savedCustomer.landmark || "",
// //             pincode: savedCustomer.pincode || ""
// //         }));
// //     }

// // }, []);
// useEffect(() => {

//     const mobile =
//         localStorage.getItem("customerMobile");

//     if (!mobile) return;

//     api.get(`/customers/mobile/${mobile}`)

//         .then((res) => {

//             setForm(prev => ({
//                 ...prev,
//                 name: res.data.name || "",
//                 mobile: res.data.mobile || "",
//                 house: res.data.address || "",
//                 landmark: res.data.landmark || "",
//                 pincode: res.data.pincode || ""
//             }));

//         })

//         .catch(console.log);

// }, []);
//     const navigate = useNavigate();

//     const [form, setForm] = useState({
//         name: "",
//         mobile: "",
//         house: "",
//         area: "",
//         landmark: "",
//         city: "",
//         pincode: "",
//         payment: "COD"
//     });

//     const handleChange = (e) => {

//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     };

//     const placeOrder = () => {

//         alert("Order Placed Successfully 🎉");

//         localStorage.removeItem("cart");

//         navigate("/");
//     };

//     return (

//         <div style={styles.page}>

//             <div style={styles.container}>

//                 <h1 style={styles.heading}>
//                     🛒 Checkout
//                 </h1>

//                 <p style={styles.subHeading}>
//                     Delivery Address
//                 </p>

//                 <input
//                  name="name"
//     value={form.name}
//     placeholder="Full Name"
//     onChange={handleChange}
//     style={styles.input}
//                 />

//               <input
//     name="mobile"
//     value={form.mobile}
//     placeholder="Mobile Number"
//     onChange={handleChange}
//     style={styles.input}
// />

//               <input
//     name="house"
//     value={form.house}
//     placeholder="House / Flat No"
//     onChange={handleChange}
//     style={styles.input}
// />

//                 <input
//                     name="area"
//                     placeholder="Area"
//                     onChange={handleChange}
//                     style={styles.input}
//                 />

//                <input
//     name="landmark"
//     value={form.landmark}
//     placeholder="Landmark"
//     onChange={handleChange}
//     style={styles.input}
// />

//                 <input
//                     name="city"
//                     placeholder="City"
//                     onChange={handleChange}
//                     style={styles.input}
//                 />

//                 <input
//     name="pincode"
//     value={form.pincode}
//     placeholder="Pincode"
//     onChange={handleChange}
//     style={styles.input}
// />

//                 <div style={styles.paymentBox}>

//                     <h3>
//                         Payment Method
//                     </h3>

//                     <label>
//                         <input
//                             type="radio"
//                             name="payment"
//                             value="COD"
//                             checked={form.payment === "COD"}
//                             onChange={handleChange}
//                         />

//                         Cash On Delivery
//                     </label>

//                     <br />

//                     <label>
//                         <input
//                             type="radio"
//                             name="payment"
//                             value="UPI"
//                             checked={form.payment === "UPI"}
//                             onChange={handleChange}
//                         />

//                         UPI Payment
//                     </label>

//                 </div>

//                 <button
//                     onClick={placeOrder}
//                     style={styles.button}
//                 >

//                     Place Order 🚀

//                 </button>

//             </div>

//         </div>
//     );
// }

// const styles = {

//     page: {
//         minHeight: "100vh",
//         background: "#f5f5f5",
//         padding: "20px"
//     },

//     container: {
//         maxWidth: "600px",
//         margin: "auto",
//         background: "#fff",
//         padding: "25px",
//         borderRadius: "20px",
//         boxShadow:
//             "0 5px 20px rgba(0,0,0,0.08)"
//     },

//     heading: {
//         textAlign: "center"
//     },

//     subHeading: {
//         fontWeight: "600"
//     },

//     input: {
//         width: "100%",
//         padding: "14px",
//         marginTop: "12px",
//         borderRadius: "12px",
//         border: "1px solid #ddd",
//         boxSizing: "border-box"
//     },

//     paymentBox: {
//         marginTop: "20px",
//         background: "#fafafa",
//         padding: "15px",
//         borderRadius: "12px"
//     },

//     button: {
//         width: "100%",
//         marginTop: "25px",
//         padding: "16px",
//         border: "none",
//         borderRadius: "12px",
//         background: "#16a34a",
//         color: "white",
//         fontSize: "18px",
//         fontWeight: "700",
//         cursor: "pointer"
//     }
// };

// export default Checkout;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
// const [showOfferPopup, setShowOfferPopup] =
//     useState(false);

// const [offerAdded, setOfferAdded] =
//     useState(false);
    // const OFFER_APPLE_ID = 9999;

function Checkout() {

    const navigate = useNavigate();
const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
);
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        house: "",
        area: "",
        landmark: "",
        city: "",
        pincode: "",
        payment: "COD",

    deliveryDate: "",
    deliveryTime: "",
    customerNote: ""
    });
const [showOfferPopup, setShowOfferPopup] =
useState(false);

const [offerAdded, setOfferAdded] =
useState(false);

const OFFER_APPLE_ID = 9999;
    // LOAD CUSTOMER DATA FROM DB

    useEffect(() => {

        const mobile =
            localStorage.getItem("customerMobile");

        if (!mobile) return;

        api.get(`/customers/${mobile}`)

            .then((res) => {

                const customer = res.data;

                setForm(prev => ({
                    ...prev,
                    name: customer.name || "",
                    mobile: customer.mobile || "",
                    house: customer.address || "",
                    area: customer.area || "",
                    city: customer.city || "",
                    landmark: customer.landmark || "",
                    pincode: customer.pincode || ""
                }));

            })

            .catch((err) => {
                console.log(err);
            });

    }, []);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
const addOfferApple = () => {

    const offerApple = {

        id: OFFER_APPLE_ID,

        name: "🍎 Offer Apple",

        price: 1,

        qty: 1,

        unit: "1 Piece"
    };

    const updatedCart = [
        ...cart,
        offerApple
    ];

    setCart(updatedCart);

    localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
    );

    setOfferAdded(true);

    setShowOfferPopup(false);

    setTimeout(() => {

        placeOrder(true);

    }, 100);
};

const skipOffer = () => {

    setOfferAdded(true);

    setShowOfferPopup(false);

    setTimeout(() => {

        placeOrder(true);

    }, 100);
};
const totalPrice = cart.reduce(
    (total, item) =>
        total + (item.price * item.qty),
    0
);
console.log("TOTAL PRICE:", totalPrice);
// const placeOrder = async (skipOfferCheck = false) => {

// if (
//     totalPrice >= 1000 &&
//     !offerAdded &&
//     !skipOfferCheck
// ) {
//     setShowOfferPopup(true);
//     return;
// }
//         try {

//             // SAVE UPDATED CUSTOMER DETAILS

//     // SAVE CUSTOMER

//     await api.post("/customers", {
//         name: form.name,
//         mobile: form.mobile,
//         address: form.house,
//         area: form.area,
//         city: form.city,
//         landmark: form.landmark,
//         pincode: form.pincode
//     });

//     // ORDER ITEMS

//     const orderItems = cart.map(item => ({
//         fruitName: item.name,
//         qty: item.qty,
//         price: item.price,
//         total: item.price * item.qty
//     }));

//     // ORDER DATA

//     const orderData = {

//         customerName: form.name,

//         mobile: form.mobile,

//         address: form.house,

//         landmark: form.landmark,

//         pincode: form.pincode,

//         paymentMethod: form.payment,

//         orderStatus: "Pending",

//         totalAmount: totalPrice,

//         deliveryDate: form.deliveryDate,

//         deliveryTime: form.deliveryTime,

//         customerNote: form.customerNote,

//         priority:
//             form.deliveryTime === "Morning"
//                 ? "High"
//                 : "Normal",

//         items: orderItems
//     };

//     // SAVE ORDER

//     // api.post("/orders", orderData)
//     await api.post("/orders", orderData);

//     // WHATSAPP MESSAGE

//     const orderSummary = cart.map(item =>

//         `${item.name}
// Qty: ${item.qty}
// Total: ₹${item.price * item.qty}`

//     ).join("\n\n");

//     const message =

// `🍎 Guru Fruit Shop Order

// 👤 Customer: ${form.name}

// 📱 Mobile: ${form.mobile}

// 📍 Address:
// ${form.house}

// 🏨 Landmark:
// ${form.landmark}

// 📮 Pincode:
// ${form.pincode}

// 🛒 Order Details:

// ${orderSummary}

// 💰 Grand Total:
// ₹${totalPrice}

// 💳 Payment:
// ${form.payment}

// 📅 Delivery Date:
// ${form.deliveryDate}

// ⏰ Delivery Time:
// ${form.deliveryTime}

// 📝 Customer Note:
// ${form.customerNote}
// `;

//     const whatsappNumber =
//         "91" + "7715082461";

//     const whatsappURL =
//         `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

//     window.open(
//         whatsappURL,
//         "_blank"
//     );

  
//   Swal.fire({
//       title: "Order Placed Successfully 🎉",
//       html: `
//           <div style="text-align:center">
//               <img src="/logo.jpeg" 
//                   style="width:80px;height:80px;border-radius:50%;border:2px solid #16a34a;margin-bottom:10px;" />
  
//               <p><b>Thank you for ordering from Guru Fruit Shop 🍉</b></p>
  
//               <p>Our team has received your order.</p>
  
//               <p>Fresh fruits will be delivered to your doorstep 🚚</p>
  
//               <hr/>
  
//               <p style="font-size:14px;color:#555">
//                   🙏 We appreciate your trust!
//               </p>
//           </div>
//       `,
//       icon: "success",
//       confirmButtonColor: "#16a34a",
//       confirmButtonText: "OK"
//   });
  
//     localStorage.removeItem("cart");

//     navigate("/");

// } catch (err) {

//     console.log(err);

//     alert("Order Failed ❌");
// }
        
// //     };
// const placeOrder = async (skipOfferCheck = false) => {
//     if (
//     !form.name ||
//     !form.mobile ||
//     !form.house ||
//     !form.landmark ||
//     !form.pincode
// ) {
//     toast.warning("Please fill all required fields");
//     return;
// }
//   if (
//     totalPrice >= 1000 &&
//     !offerAdded &&
//     !skipOfferCheck
//   ) {
//     setShowOfferPopup(true);
//     return;
//   }

//   try {
//     // 1. SAVE CUSTOMER FIRST
//     await api.post("/customers", {
//       name: form.name,
//       mobile: form.mobile,
//       address: form.house,
//       area: form.area,
//       city: form.city,
//       landmark: form.landmark,
//       pincode: form.pincode
//     });

//     // 2. BUILD ORDER ITEMS (IMPORTANT: use latest cart)
//     const latestCart = JSON.parse(localStorage.getItem("cart")) || [];

//     const orderItems = latestCart.map(item => ({
//       fruitName: item.name,
//       qty: item.qty,
//       price: item.price,
//       total: item.price * item.qty
//     }));

//   const orderData = {
//     customerName: form.name.trim(),
//     mobile: form.mobile.trim(),
//     address: form.house.trim(),
//     landmark: form.landmark.trim(),
//     pincode: form.pincode.trim(),
//     paymentMethod: form.payment,
//     orderStatus: "Pending",
//     totalAmount: totalPrice,
//     deliveryDate: form.deliveryDate || "",
//     deliveryTime: form.deliveryTime || "",
//     customerNote: form.customerNote || "",
//     priority: form.deliveryTime === "Morning" ? "High" : "Normal",
//     items: orderItems
// };
// console.log("CHECKOUT ORDER DATA:", orderData);
//     // 3. SAVE ORDER (WAIT FOR IT)
//     const res = await api.post("/orders", orderData);

//     console.log("ORDER SAVED:", res.data);

//     // 4. NOW CLEAR CART ONLY AFTER SUCCESS
//     localStorage.removeItem("cart");

//     setCart([]);

//     // 5. NAVIGATE ONLY AFTER SUCCESS
//     navigate("/");

//   } catch (err) {
//     console.log(err);
//     alert("Order Failed ❌");
//   }
// };


const placeOrder = async (skipOfferCheck = false) => {
console.log("PLACE ORDER CLICKED");
console.log("totalPrice =", totalPrice);
console.log("offerAdded =", offerAdded);
console.log("skipOfferCheck =", skipOfferCheck);
    if (
        !form.name ||
        !form.mobile ||
        !form.house ||
        !form.landmark ||
        !form.pincode
    ) {
        toast.warning("Please fill all required fields");
        return;
    }

    // OFFER APPLE POPUP
   if (
    totalPrice >= 1000 &&
    !offerAdded &&
    !skipOfferCheck
) {
    console.log("OPENING OFFER POPUP");

    setShowOfferPopup(true);

    return;
}

    try {

        // SAVE CUSTOMER
        await api.post("/customers", {
            name: form.name,
            mobile: form.mobile,
            address: form.house,
            area: form.area,
            city: form.city,
            landmark: form.landmark,
            pincode: form.pincode
        });

        // LATEST CART
        const latestCart =
            JSON.parse(localStorage.getItem("cart")) || [];

        // ORDER ITEMS
        const orderItems = latestCart.map(item => ({
            fruitName: item.name,
            qty: item.qty,
            price: item.price,
            total: item.price * item.qty
        }));

        // ORDER DATA
        const orderData = {

            customerName: form.name.trim(),

            mobile: form.mobile.trim(),

            address: form.house.trim(),

            landmark: form.landmark.trim(),

            pincode: form.pincode.trim(),

            paymentMethod: form.payment,

            orderStatus: "Pending",

            totalAmount: latestCart.reduce(
                (sum, item) =>
                    sum + item.price * item.qty,
                0
            ),

            deliveryDate: form.deliveryDate || "",

            deliveryTime: form.deliveryTime || "",

            customerNote: form.customerNote || "",

            priority:
                form.deliveryTime === "Morning"
                    ? "High"
                    : "Normal",

            items: orderItems
        };

        // SAVE ORDER
        const res =
            await api.post("/orders", orderData);

        console.log(
            "ORDER SAVED:",
            res.data
        );
//         console.log("BEFORE WHATSAPP");

// window.open(
//   "https://wa.me/917715082461?text=TEST",
//   "_blank"
// );

// console.log("AFTER WHATSAPP");


         // WHATSAPP MESSAGE
        const orderSummary =
            latestCart.map(item =>

                `🍎 ${item.name}
Qty: ${item.qty}
Price: ₹${item.price}
Total: ₹${item.price * item.qty}`

            ).join("\n\n");

        const grandTotal =
            latestCart.reduce(
                (sum, item) =>
                    sum + item.price * item.qty,
                0
            );

        const message =

`🍎 Guru Fruit Shop Order

👤 Customer:
${form.name}

📱 Mobile:
${form.mobile}

📍 Address:
${form.house}

🏨 Landmark:
${form.landmark}

📮 Pincode:
${form.pincode}

🛒 Order Details:

${orderSummary}

💰 Grand Total:
₹${grandTotal}

💳 Payment:
${form.payment}

📅 Delivery Date:
${form.deliveryDate}

⏰ Delivery Time:
${form.deliveryTime}

📝 Customer Note:
${form.customerNote}
`;

       
    const whatsappNumber =
        "91" + "7715082461";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappURL,
            "_blank"
        );

        // CLEAR CART
        localStorage.removeItem("cart");

        setCart([]);

        
  Swal.fire({
      title: "Order Placed Successfully 🎉",
      html: `
          <div style="text-align:center">
              <img src="/logo.jpeg" 
                  style="width:80px;height:80px;border-radius:50%;border:2px solid #16a34a;margin-bottom:10px;" />
  
              <p><b>Thank you for ordering from Guru Fruit Shop 🍉</b></p>
  
              <p>Our team has received your order.</p>
  
              <p>Fresh fruits will be delivered to your doorstep 🚚</p>
  
              <hr/>
  
              <p style="font-size:14px;color:#555">
                  🙏 We appreciate your trust!
              </p>
          </div>
      `,
      icon: "success",
      confirmButtonColor: "#16a34a",
      confirmButtonText: "OK"
  });

        setTimeout(() => {

            navigate("/");

        }, 1500);

    } catch (err) {

        console.log(err);

        toast.error(
            "Order Failed ❌"
        );
    }
};

    return (

        <div style={styles.page}>

            <div style={styles.container}>

                <h1 style={styles.heading}>
                    🛒 Checkout
                </h1>

                <p style={styles.subHeading}>
                    Delivery Address
                </p>

                <input
                    name="name"
                    value={form.name}
                    placeholder="Full Name"
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="mobile"
                    value={form.mobile}
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="house"
                    value={form.house}
                    placeholder="House / Flat No"
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="area"
                    value={form.area}
                    placeholder="Area"
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="landmark"
                    value={form.landmark}
                    placeholder="Landmark"
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="city"
                    value={form.city}
                    placeholder="City"
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="pincode"
                    value={form.pincode}
                    placeholder="Pincode"
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
    type="date"
    name="deliveryDate"
    placeholder="delivery date"
    value={form.deliveryDate}
    onChange={handleChange}
    style={styles.input}
/>

<input
    type="time"
    name="deliveryTime"
    placeholder="delivery Time"
    value={form.deliveryTime}
    onChange={handleChange}
    style={styles.input}
/>

<textarea
    name="customerNote"
    value={form.customerNote}
    onChange={handleChange}
    placeholder={`Special Instructions

Example:
• Kal deliver karna
• Aaj cut fruits chahiye
• Kadak mango chahiye`}
    style={{
        ...styles.input,
        minHeight: "100px",
        resize: "vertical"
    }}
/>

                <div style={styles.paymentBox}>

                    <h3>
                        Payment Method
                    </h3>

                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="COD"
                            checked={form.payment === "COD"}
                            onChange={handleChange}
                        />

                        Cash On Delivery
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="UPI"
                            checked={form.payment === "UPI"}
                            onChange={handleChange}
                        />

                        UPI Payment
                    </label>

                </div>

                <button
    onClick={() => placeOrder()}
    style={styles.button}
>
    Place Order 🚀
</button>
                {
    showOfferPopup && (

        <div style={popupOverlay}>

            <div style={popupBox}>

                <h2>
                    🎁 Special Offer
                </h2>

                <p>

                    Your bill is above ₹1000 😍

                    <br /><br />

                    Add 1 Apple for just ₹1 ?

                </p>

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center"
                    }}
                >

                    <button
                        onClick={addOfferApple}
                    >
                        Yes Add
                    </button>

                    <button
                        onClick={skipOffer}
                    >
                        No Thanks
                    </button>

                </div>

            </div>

        </div>
    )
}

            </div>

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

// const popupBox = {

//     background: "white",

//     padding: "30px",

//     borderRadius: "20px",

//     textAlign: "center",

//     width: "350px"
// };
const popupBox = {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    width: "380px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    animation: "popupScale 0.3s ease"
};

const styles = {

    page: {
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px"
    },

    container: {
        maxWidth: "600px",
        margin: "auto",
        background: "#fff",
        padding: "25px",
        borderRadius: "20px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
    },

    heading: {
        textAlign: "center"
    },

    subHeading: {
        fontWeight: "600"
    },

    input: {
        width: "100%",
        padding: "14px",
        marginTop: "12px",
        borderRadius: "12px",
        border: "1px solid #ddd",
        boxSizing: "border-box"
    },

    paymentBox: {
        marginTop: "20px",
        background: "#fafafa",
        padding: "15px",
        borderRadius: "12px"
    },

    button: {
        width: "100%",
        marginTop: "25px",
        padding: "16px",
        border: "none",
        borderRadius: "12px",
        background: "#16a34a",
        color: "white",
        fontSize: "18px",
        fontWeight: "700",
        cursor: "pointer"
    }
};

export default Checkout;