import { useEffect, useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar";
function JamunMenu() {

    const [jamuns, setJamuns] =
        useState([]);

    useEffect(() => {

        api.get("/fruits")

            .then((res) => {

                const jamunData =
                    res.data.filter(

                        item =>
                           item.category?.toLowerCase() === "jamun"
                    );

                setJamuns(jamunData);
            });

    }, []);

    return (

        <div style={{
            padding: "30px"
        }}>
            <Navbar />

            <h1>
                🥭 Jamun Special Menu
            </h1>

            <div style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap"
            }}>

                {

                    jamuns.map((item) => (

                        <div
                            key={item.id}

                            style={{
                              width:
    window.innerWidth < 768
        ? "100%"
        : "240px",
                                padding: "20px",
                                border: "1px solid #ddd",
                                borderRadius: "15px",
                                justifyContent: "center"
                            }}
                        >

                            <img
                                src={item.imageUrl}

                                alt={item.name}

                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover"
                                }}
                            />

                            <h3>
                                {item.name}
                            </h3>

                            <p>
                                ₹ {item.price}
                            </p>

                            <button>
                                Add To Cart
                            </button>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default JamunMenu;