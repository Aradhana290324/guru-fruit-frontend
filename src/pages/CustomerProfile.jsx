import { useEffect, useState } from "react";

function CustomerProfile() {

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

    const saveProfile = () => {

        localStorage.setItem(
            "customerData",
            JSON.stringify(customer)
        );

        alert("Profile Saved 😍");
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