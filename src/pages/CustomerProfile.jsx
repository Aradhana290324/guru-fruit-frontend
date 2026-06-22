import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import BottomNav from "../components/BottomNav";
function CustomerProfile() {

    const navigate = useNavigate();
    const [customer, setCustomer] = useState({

        name: "",

        mobile: "",

        house: "",

        area: "",

        landmark: "",

        city: "",

        pincode: ""
    });

    // LOAD SAVED DATA

    useEffect(() => {

        const savedData =
            JSON.parse(
                localStorage.getItem("customerData")
            );

        if (savedData) {

            setCustomer({

                name: savedData.name || "",

                mobile: savedData.mobile || "",

                house: savedData.house || "",

                area: savedData.area || "",

                landmark: savedData.landmark || "",

                city: savedData.city || "",

                pincode: savedData.pincode || ""
            });
        }

    }, []);

    // HANDLE INPUT

    const handleChange = (e) => {

        setCustomer({

            ...customer,

            [e.target.name]: e.target.value
        });
    };

    // SAVE DATA

    // const saveProfile = () => {

    //     localStorage.setItem(
    //         "customerData",
    //         JSON.stringify(customer)
    //     );

    //     alert("Profile Saved 😍");
    // };
//     const saveProfile = () => {

//     api.post("/customers", {

//         name: customer.name,

//         mobile: customer.mobile,

//         buildingNumber: customer.house,

//         address:
//             `${customer.house},
//              ${customer.area}`,

//         landmark: customer.landmark,

//         city: customer.city,

//         pincode: customer.pincode
//     })

//     .then((res) => {

//         localStorage.setItem(
//             "customerData",
//             JSON.stringify(res.data)
//         );

//         localStorage.setItem(
//             "customerMobile",
//             customer.mobile
//         );

//         toast.success("Profile Saved 😍");

//         navigate("/");
//     })

//     .catch((err) => {

//         console.log(err);

//         toast.error("Failed To Save");
//     });
// };
const saveProfile = () => {

    // ✅ NAME VALIDATION (only letters + spaces)
    const nameRegex = /^[A-Za-z ]+$/;

    if (!customer.name.trim()) {
        toast.error("Name is required");
        return;
    }

    if (!nameRegex.test(customer.name)) {
        toast.error("Name should contain only letters");
        return;
    }

    // ✅ MOBILE VALIDATION (10 digits only)
    const mobileRegex = /^[0-9]{10}$/;

    if (!customer.mobile.trim()) {
        toast.error("Mobile number is required");
        return;
    }

    if (!mobileRegex.test(customer.mobile)) {
        toast.error("Enter valid 10 digit mobile number");
        return;
    }

    // ✅ HOUSE VALIDATION
    if (!customer.house.trim()) {
        toast.error("House / Flat number is required");
        return;
    }

    // ✅ AREA VALIDATION
    if (!customer.area.trim()) {
        toast.error("Area is required");
        return;
    }

    // ✅ LANDMARK VALIDATION
    if (!customer.landmark.trim()) {
        toast.error("Landmark is required");
        return;
    }

    // ✅ CITY VALIDATION
    if (!customer.city.trim()) {
        toast.error("City is required");
        return;
    }

    // ✅ PINCODE VALIDATION (6 digits)
    const pincodeRegex = /^[0-9]{6}$/;

    if (!customer.pincode.trim()) {
        toast.error("Pincode is required");
        return;
    }

    if (!pincodeRegex.test(customer.pincode)) {
        toast.error("Enter valid 6 digit pincode");
        return;
    }

    // ✅ API CALL (ONLY IF VALID)
    api.post("/customers", {
        name: customer.name.trim(),
        mobile: customer.mobile.trim(),
        buildingNumber: customer.house,
        address: `${customer.house}, ${customer.area}`,
        landmark: customer.landmark,
        city: customer.city,
        pincode: customer.pincode
    })
    .then((res) => {

        localStorage.setItem(
            "customerData",
            JSON.stringify(res.data)
        );

        localStorage.setItem(
            "customerMobile",
            customer.mobile
        );

        toast.success("Profile Saved 😍");

        navigate("/");
    })
    .catch((err) => {

        console.log(err);
        toast.error("Failed To Save");
    });
};

    return (

        <div style={{

            minHeight: "100vh",

            background: "#fff7ed",

            padding: "30px"
        }}>

            <div style={{

                maxWidth: "500px",

                margin: "auto",

                background: "white",

                padding: "30px",

                borderRadius: "20px",

                boxShadow:
                    "0px 5px 20px rgba(0,0,0,0.1)"
            }}>

                <h1 style={{

                    textAlign: "center",

                    marginBottom: "25px",

                    color: "#ea580c"
                }}>

                    👤 Customer Profile

                </h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={customer.name}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={customer.mobile}
                    onChange={handleChange}
                    style={inputStyle}
                    
                />
                

                <input
                    type="text"
                    name="house"
                    placeholder="Flat / House No"
                    value={customer.house}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    type="text"
                    name="area"
                    placeholder="Area"
                    value={customer.area}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    type="text"
                    name="landmark"
                    placeholder="Landmark"
                    value={customer.landmark}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={customer.city}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={customer.pincode}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <button
                    onClick={saveProfile}
                    style={btnStyle}
                >

                    Save Profile

                </button>

            </div>

        </div>
    );
}

const inputStyle = {

    width: "100%",

    padding: "14px",

    marginBottom: "15px",

    borderRadius: "10px",

    border: "1px solid #ddd",

    fontSize: "16px"
};

const btnStyle = {

    width: "100%",

    padding: "14px",

    border: "none",

    borderRadius: "10px",

    background: "#ea580c",

    color: "white",

    fontSize: "16px",

    fontWeight: "bold",

    cursor: "pointer"
};

export default CustomerProfile;