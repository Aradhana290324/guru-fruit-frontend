import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

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
     const [customerName, setCustomerName] = useState("");
    
            const [mobile, setMobile] = useState("");
            const [address, setAddress] = useState("");
    
        const [landmark, setLandmark] = useState("");
    
        const [pincode, setPincode] = useState("");

       
    useEffect(() => {

        const mobile =
            localStorage.getItem("customerMobile");

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
                    maxWidth: "500px",
                    margin: "auto"
                }}>

                    <h1>
                        👤 My Account
                    </h1>

                    <hr />

                    <h3>
                        Name : {customer.name}
                    </h3>

                    <h3>
                        Mobile : {customer.mobile}
                    </h3>

                    <h3>
                        Area : {customer.area}
                    </h3>

                    <h3>
                        City : {customer.city}
                    </h3>

                    <h3>
                        Pincode : {customer.pincode}
                    </h3>

                    <h3>
                        Landmark : {customer.landmark}
                    </h3>

                </div>

            </div>

        </div>
    );
}

export default Account;