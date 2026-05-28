import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function CustomerLogin() {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [mobile, setMobile] = useState("");

    // LOGIN FUNCTION

   const handleLogin = () => {

    if (!name || !mobile) {

        alert("Enter All Details");

        return;
    }

    if (mobile.length !== 10) {

        alert("Enter Valid Mobile Number");

        return;
    }

    const customerData = {

        name,
        mobile
    };

    // SAVE / UPDATE CUSTOMER IN DB

    api.post("/customers", customerData)

        .then((res) => {

            // SAVE LOCAL

            localStorage.setItem(
                "customerData",
                JSON.stringify(res.data)
            );

            localStorage.setItem(
                "customerLoggedIn",
                "true"
            );

            localStorage.setItem(
                "customerMobile",
                res.data.mobile
            );

            localStorage.setItem(
                "customerName",
                res.data.name
            );

            alert("Login Successful 😍");

            navigate("/profile");
        })

        .catch((err) => {

            console.log(err);

            alert("Login Failed");
        });
};

    return (

        <div style={{

            minHeight: "100vh",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            background:
                "linear-gradient(to right,#fff7ed,#ffedd5)"
        }}>

            <div style={{

                background: "white",

                padding: "40px",

                borderRadius: "25px",

                width: "350px",

                boxShadow:
                    "0px 8px 30px rgba(0,0,0,0.1)"
            }}>

                <h1 style={{

                    textAlign: "center",

                    marginBottom: "30px",

                    color: "#ea580c"
                }}>

                    🍉 Customer Login

                </h1>

                {/* NAME INPUT */}

                <input

                    type="text"

                    placeholder="Enter Your Name"

                    value={name}

                    onChange={(e) =>
                        setName(e.target.value)
                    }

                    style={inputStyle}
                />

                {/* MOBILE INPUT */}

                <input

                    type="text"

                    placeholder="Enter Mobile Number"

                    value={mobile}

                    onChange={(e) =>
                        setMobile(e.target.value)
                    }

                    style={inputStyle}
                />

                {/* BUTTON */}

                <button

                    onClick={handleLogin}

                    style={btnStyle}
                >

                    Continue

                </button>

            </div>

        </div>
    );
}

const inputStyle = {

    width: "100%",

    padding: "14px",

    marginBottom: "18px",

    borderRadius: "12px",

    border: "1px solid #ddd",

    fontSize: "16px"
};

const btnStyle = {

    width: "100%",

    padding: "14px",

    border: "none",

    borderRadius: "12px",

    background: "#ea580c",

    color: "white",

    fontSize: "17px",

    fontWeight: "bold",

    cursor: "pointer"
};

export default CustomerLogin;