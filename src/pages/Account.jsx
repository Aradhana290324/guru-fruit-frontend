// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import api from "../services/api";
// import BottomNav from "../components/BottomNav";
// function Account() {

//     const [customer, setCustomer] = useState({

//         name: "",
//         mobile: "",
//         house: "",
//         area: "",
//         landmark: "",
//         city: "",
//         pincode: ""
//     });
//      const [customerName, setCustomerName] = useState("");
    
//             const [mobile, setMobile] = useState("");
//             const [address, setAddress] = useState("");
    
//         const [landmark, setLandmark] = useState("");
    
//         const [pincode, setPincode] = useState("");

       
//     useEffect(() => {

//         const mobile =
//             localStorage.getItem("customerMobile");

//         if (mobile) {

//             api.get(`/customers/${mobile}`)

//                 .then((res) => {

//                     if (res.data) {

//                         setCustomer(res.data);
//                     }
//                 })

//                 .catch((err) => {

//                     console.log(err);
//                 });
//         }

//     }, []);

//     return (

//         <div>

//             <Navbar />

//             <div style={{
//                 padding: "30px",
//                 minHeight: "100vh",
//                 background: "#f5f5f5"
//             }}>

//                 <div style={{
//                     background: "white",
//                     padding: "30px",
//                     borderRadius: "15px",
// maxWidth: "600px",
// boxShadow:
// "0 10px 30px rgba(0,0,0,0.08)",
// border: "1px solid #eee",                    margin: "auto"
//                 }}>

//                     <h1>
//                         👤 My Account
//                     </h1>

//                     <hr />
// <div style={{
//     display: "flex",
//     flexDirection: "column",
//     gap: "12px",
//     marginTop: "20px"
// }}>

// <button
//     onClick={() =>
//         window.location.href="/profile"
//     }
//     style={{
//         padding: "12px",
//         border: "none",
//         borderRadius: "10px",
//         background: "#2563eb",
//         color: "white",
//         fontWeight: "bold"
//     }}
// >
//     ✏️ Edit Profile
// </button>

// <button
//     onClick={() =>
//         window.location.href="/my-orders"
//     }
//     style={{
//         padding: "12px",
//         border: "none",
//         borderRadius: "10px",
//         background: "#16a34a",
//         color: "white",
//         fontWeight: "bold"
//     }}
// >
//     📦 My Orders
// </button>

// <button
//     onClick={() => {

//         localStorage.removeItem(
//             "customerLoggedIn"
//         );

//         localStorage.removeItem(
//             "customerMobile"
//         );

//         localStorage.removeItem(
//             "customerName"
//         );

//         window.location.href="/";
//     }}
//     style={{
//         padding: "12px",
//         border: "none",
//         borderRadius: "10px",
//         background: "#dc2626",
//         color: "white",
//         fontWeight: "bold"
//     }}
// >
//     🚪 Logout
// </button>

// </div>
//                     <h3>
//                         Name : {customer.name}
//                     </h3>

//                     <h3>
//                         Mobile : {customer.mobile}
//                     </h3>

//                     <h3>
//                         Area : {customer.area}
//                     </h3>

//                     <h3>
//                         City : {customer.city}
//                     </h3>

//                     <h3>
//                         Pincode : {customer.pincode}
//                     </h3>

//                     <h3>
//                         Landmark : {customer.landmark}
//                     </h3>

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default Account;


import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import BottomNav from "../components/BottomNav";

function Account() {
    const [customer, setCustomer] = useState({
        name: "",
        mobile: "",
        house: "",
        area: "",
        landmark: "",
        city: "",
        pincode: ""
    });

    useEffect(() => {
        const mobile = localStorage.getItem("customerMobile");

        if (mobile) {
            api.get(`/customers/${mobile}`)
                .then((res) => {
                    if (res.data) {
                        setCustomer(res.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("customerLoggedIn");
        localStorage.removeItem("customerMobile");
        localStorage.removeItem("customerName");
        window.location.href = "/";
    };

    const infoCard = {
        background: "#fafafa",
        padding: "12px",
        borderRadius: "10px",
        marginBottom: "10px",
        border: "1px solid #eee"
    };

    const buttonStyle = (color) => ({
        padding: "12px",
        border: "none",
        borderRadius: "10px",
        background: color,
        color: "white",
        fontWeight: "bold",
        cursor: "pointer"
    });

    return (
        <div>
            <Navbar />

            <div style={{
                padding: "30px",
                minHeight: "100vh",
                background: "#f5f5f5"
            }}>
                <div style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "15px",
                    maxWidth: "600px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    border: "1px solid #eee",
                    margin: "auto"
                }}>
                    <h1>👤 My Account</h1>
                    <hr />

                    <div style={infoCard}>
                        <b>👤 Name</b>
                        <p>{customer.name}</p>
                    </div>

                    <div style={infoCard}>
                        <b>📱 Mobile</b>
                        <p>{customer.mobile}</p>
                    </div>

                    <div style={infoCard}>
                        <b>📍 Area</b>
                        <p>{customer.area}</p>
                    </div>

                    <div style={infoCard}>
                        <b>🏙 City</b>
                        <p>{customer.city}</p>
                    </div>

                    <div style={infoCard}>
                        <b>📮 Pincode</b>
                        <p>{customer.pincode}</p>
                    </div>

                    <div style={infoCard}>
                        <b>🏨 Landmark</b>
                        <p>{customer.landmark}</p>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        marginTop: "20px"
                    }}>
                        <button
                            onClick={() => window.location.href = "/profile"}
                            style={buttonStyle("#2563eb")}
                        >
                            ✏️ Edit Profile
                        </button>

                        <button
                            onClick={() => window.location.href = "/my-orders"}
                            style={buttonStyle("#16a34a")}
                        >
                            📦 My Orders
                        </button>

                        <button
                            onClick={handleLogout}
                            style={buttonStyle("#dc2626")}
                        >
                            🚪 Logout
                        </button>
                    </div>
                </div>
            </div>

            <BottomNav />
        </div>
    );
}

export default Account;