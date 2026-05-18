

// import { useState } from "react";
// import api from "../services/api";
// import { useNavigate } from "react-router-dom";

// function Login() {

//     const navigate = useNavigate();

//     // LOGIN STATES
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     // RESET PASSWORD STATES
//     const [showReset, setShowReset] = useState(false);
//     const [oldPassword, setOldPassword] = useState("");
//     const [newPassword, setNewPassword] = useState("");

//     // REMEMBER ME
//     const [rememberMe, setRememberMe] = useState(false);

//     const [loading, setLoading] = useState(false);

//     // =========================
//     // LOGIN
//     // =========================

//     const handleLogin = async () => {

//         if (!username || !password) {
//             alert("Enter Username & Password");
//             return;
//         }

//         setLoading(true);

//         try {

//             const res = await api.post("/auth/login", {
//                 username,
//                 password
//             });

//             if (res.data.status === "success") {

//                 // REMEMBER ME
//                 if (rememberMe) {

//                     localStorage.setItem(
//                         "token",
//                         res.data.token
//                     );

//                     localStorage.setItem(
//                         "adminName",
//                         res.data.name
//                     );

//                 } else {

//                     sessionStorage.setItem(
//                         "token",
//                         res.data.token
//                     );

//                     sessionStorage.setItem(
//                         "adminName",
//                         res.data.name
//                     );
//                 }

//                 alert("Login Success 😍");

//                 navigate("/admin");

//             } else {

//                 alert(res.data.message);
//             }

//         } catch (err) {

//             console.log(err);

//             alert("Server Error ❌");

//         } finally {

//             setLoading(false);
//         }
//     };

//     // =========================
//     // RESET PASSWORD
//     // =========================

//     const handleResetPassword = async () => {

//         if (
//             !username ||
//             !oldPassword ||
//             !newPassword
//         ) {

//             alert("Fill all fields");
//             return;
//         }

//         try {

//             const res = await api.put(
//                 "/auth/reset-password",
//                 {
//                     username,
//                     oldPassword,
//                     newPassword
//                 }
//             );

//             alert(res.data.message);

//             if (res.data.status === "success") {

//                 setShowReset(false);

//                 setOldPassword("");
//                 setNewPassword("");
//             }

//         } catch (err) {

//             console.log(err);

//             alert("Reset Failed ❌");
//         }
//     };

//     return (

//         <div style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//             background: "#f4f4f4"
//         }}>

//             <div style={{
//                 background: "white",
//                 padding: "35px",
//                 borderRadius: "15px",
//                 width: "350px",
//                 boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
//             }}>

//                 <h2 style={{
//                     textAlign: "center",
//                     marginBottom: "25px"
//                 }}>
//                     🔐 Admin Login
//                 </h2>

//                 {/* USERNAME */}

//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) =>
//                         setUsername(e.target.value)
//                     }

//                     style={{
//                         width: "100%",
//                         padding: "12px",
//                         marginBottom: "15px",
//                         borderRadius: "10px",
//                         border: "1px solid #ccc"
//                     }}
//                 />

//                 {/* PASSWORD */}

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) =>
//                         setPassword(e.target.value)
//                     }

//                     style={{
//                         width: "100%",
//                         padding: "12px",
//                         marginBottom: "15px",
//                         borderRadius: "10px",
//                         border: "1px solid #ccc"
//                     }}
//                 />

//                 {/* REMEMBER ME */}

//                 <div style={{
//                     marginBottom: "15px"
//                 }}>

//                     <label>

//                         <input
//                             type="checkbox"
//                             checked={rememberMe}
//                             onChange={(e) =>
//                                 setRememberMe(
//                                     e.target.checked
//                                 )
//                             }
//                         />

//                         {" "}Remember Me

//                     </label>

//                 </div>

//                 {/* LOGIN BUTTON */}

//                 <button

//                     onClick={handleLogin}

//                     disabled={loading}

//                     style={{
//                         width: "100%",
//                         padding: "12px",
//                         background: "green",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "10px",
//                         cursor: "pointer"
//                     }}
//                 >

//                     {
//                         loading
//                             ? "Logging in..."
//                             : "Login"
//                     }

//                 </button>

//                 {/* FORGOT PASSWORD */}

//                 <p
//                     onClick={() =>
//                         setShowReset(!showReset)
//                     }

//                     style={{
//                         textAlign: "center",
//                         marginTop: "18px",
//                         cursor: "pointer",
//                         color: "blue"
//                     }}
//                 >

//                     Forgot Password?

//                 </p>

//                 {/* RESET PASSWORD SECTION */}

//                 {
//                     showReset && (

//                         <div style={{
//                             marginTop: "20px"
//                         }}>

//                             <input
//                                 type="password"
//                                 placeholder="Old Password"

//                                 value={oldPassword}

//                                 onChange={(e) =>
//                                     setOldPassword(
//                                         e.target.value
//                                     )
//                                 }

//                                 style={{
//                                     width: "100%",
//                                     padding: "12px",
//                                     marginBottom: "12px",
//                                     borderRadius: "10px",
//                                     border: "1px solid #ccc"
//                                 }}
//                             />

//                             <input
//                                 type="password"
//                                 placeholder="New Password"

//                                 value={newPassword}

//                                 onChange={(e) =>
//                                     setNewPassword(
//                                         e.target.value
//                                     )
//                                 }

//                                 style={{
//                                     width: "100%",
//                                     padding: "12px",
//                                     marginBottom: "12px",
//                                     borderRadius: "10px",
//                                     border: "1px solid #ccc"
//                                 }}
//                             />

//                             <button

//                                 onClick={
//                                     handleResetPassword
//                                 }

//                                 style={{
//                                     width: "100%",
//                                     padding: "12px",
//                                     background: "blue",
//                                     color: "white",
//                                     border: "none",
//                                     borderRadius: "10px",
//                                     cursor: "pointer"
//                                 }}
//                             >

//                                 Reset Password

//                             </button>

//                         </div>
//                     )
//                 }

//             </div>

//         </div>
//     );
// }

// export default Login;

import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // AUTO LOGIN

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token) {
            navigate("/admin");
        }

    }, []);

    const handleLogin = async () => {

        setError("");

        if (!username.trim() || !password.trim()) {

            setError("Please enter username and password 😄");
            return;
        }

        setLoading(true);

        try {

            const res = await api.post("/auth/login", {
                username,
                password
            });

            if (res.data.status === "success") {

                // TOKEN SAVE

                if (rememberMe) {

                    localStorage.setItem(
                        "token",
                        res.data.token
                    );

                } else {

                    sessionStorage.setItem(
                        "token",
                        res.data.token
                    );
                }

                alert("Login Success 😍");

                navigate("/admin");

            } else {

                setError(res.data.message);
            }

        } catch (err) {

            console.log(err);

            setError("Server error ❌");

        } finally {

            setLoading(false);
        }
    };

    return (

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#f4f4f4"
        }}>

            <div style={{
                background: "white",
                padding: "35px",
                borderRadius: "20px",
                width: "350px",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"
            }}>

                <h2 style={{
                    textAlign: "center",
                    marginBottom: "25px"
                }}>
                    🔐 Admin Login
                </h2>

                {
                    error && (

                        <p style={{
                            color: "red",
                            textAlign: "center"
                        }}>
                            {error}
                        </p>
                    )
                }

                <input
                    type="text"
                    placeholder="Username"
                    value={username}

                    onChange={(e) =>
                        setUsername(e.target.value)
                    }

                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        borderRadius: "10px",
                        border: "1px solid #ccc"
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}

                    onChange={(e) =>
                        setPassword(e.target.value)
                    }

                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        borderRadius: "10px",
                        border: "1px solid #ccc"
                    }}
                />

                {/* REMEMBER ME */}

                <div style={{
                    marginBottom: "15px"
                }}>

                    <input
                        type="checkbox"
                        checked={rememberMe}

                        onChange={(e) =>
                            setRememberMe(
                                e.target.checked
                            )
                        }
                    />

                    <span style={{
                        marginLeft: "8px"
                    }}>
                        Remember Me
                    </span>

                </div>

                <button

                    onClick={handleLogin}

                    disabled={loading}

                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "green",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >

                    {
                        loading
                            ? "Logging in..."
                            : "Login"
                    }

                </button>

            </div>

        </div>
    );
}

export default Login;