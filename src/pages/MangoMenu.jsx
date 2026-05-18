import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
function MangoMenu() {

    const [mangoes, setMangoes] =
        useState([]);

    useEffect(() => {

        api.get("/fruits")

            .then((res) => {

                const mangoData =
                    res.data.filter(

                        item =>
                            item.category?.toLowerCase() === "mango"
                    );

                setMangoes(mangoData);
            });

    }, []);

    return (

        <div style={{
            padding: "30px"
        }}>

            <h1>
                🥭 Mango Special Menu
            </h1>

            <div style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap"
            }}>

                {

                    mangoes.map((item) => (

                        <div
                            key={item.id}

                            style={{
                                width: "220px",
                                padding: "20px",
                                border: "1px solid #ddd",
                                borderRadius: "15px"
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

export default MangoMenu;