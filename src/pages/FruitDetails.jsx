import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import BottomNav from "../components/BottomNav";
function FruitDetails() {

    const { id } = useParams();
const navigate = useNavigate();
    const [fruit, setFruit] = useState(null);
    const [activeTab, setActiveTab] = useState("description");
    const [allFruits, setAllFruits] = useState([]);

    useEffect(() => {
api.get("/fruits")
.then((res)=>{
    setAllFruits(res.data);
});
        api.get(`/fruits/${id}`)

            .then((res) => {

                setFruit(res.data);
            })

            .catch((err) => {

                console.log(err);
            });

    }, [id]);
    const addToCart = () => {

    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    const existingItem = cart.find(
        item => item.id === fruit.id
    );

    if (existingItem) {

        cart = cart.map(item =>

            item.id === fruit.id

                ? {
                    ...item,
                    qty: item.qty + 1
                }

                : item
        );

    } else {

        cart.push({

            ...fruit,

            qty: 1
        });
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    toast.success("Added To Cart 🛒");

    navigate("/");
};

const AccordionItem = ({
    title,
    id,
    content
}) => (

    <div
        style={{
            marginTop: "15px",
            borderRadius: "15px",
            overflow: "hidden",
            border: "1px solid #eee"
        }}
    >

        <div

            onClick={() =>
                setActiveTab(
                    activeTab === id
                        ? ""
                        : id
                )
            }

            style={{
                padding: "18px",
                cursor: "pointer",
                fontWeight: "700",
              background: "linear-gradient(90deg,#fff8e1,#fff)",
              borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between"
            }}
        >

            <span>{title}</span>

            <span>
                {activeTab === id
                    ? "▲"
                    : "▼"}
            </span>

        </div>

        <div
            style={{
                maxHeight:
                    activeTab === id
                        ? "500px"
                        : "0px",

                overflow: "hidden",

                transition: "0.4s"
            }}
        >

            <p
                style={{
                    padding: "20px",
                    lineHeight: "30px",
                    color: "#555"
                }}
            >
                {content}
            </p>

        </div>

    </div>
);
    if (!fruit) {

        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontSize: "28px",
                fontWeight: "600"
            }}>
                
                Loading...
            </div>
        );
    }
const similarFruits = allFruits
.filter(item => item.id !== fruit?.id)
.slice(0,4);
    return (
<div>

        <BottomNav />

        <div style={{
            
            background: "#f8f8f8",
            minHeight: "100vh",
            padding: "30px 15px",
            fontFamily: "Poppins, sans-serif"
        }}>

            <div style={{
                maxWidth: "1200px",
                margin: "auto",
                background: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
            }}>

                {/* IMAGE */}

                {/* <img
                    src={fruit.imageUrl}
                    alt={fruit.name}
                    style={{
                        width: "100%",
                        maxHeight: "520px",
                        objectFit: "cover"
                    }}
                /> */}
                <img
  src={fruit.imageUrl}
  alt={fruit.name}
  style={{
    width: "100%",
    height: window.innerWidth < 768 ? "250px" : "450px",
    objectFit: "contain",
    background: "#fff"
  }}
/>

                {/* CONTENT */}

                <div style={{
                    padding: window.innerWidth < 768 ? "20px" : "40px"
                }}>

                    {/* TITLE */}

                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "15px"
                    }}>

                        <div>

                            <h1 style={{
                                fontSize: window.innerWidth < 768 ? "32px" : "48px",
                                fontWeight: "700",
                                color: "#222",
                                marginBottom: "8px"
                            }}>
                                {fruit.name}
                            </h1>

                            <div style={{
                                display: "flex",
                                gap: "10px",
                                flexWrap: "wrap"
                            }}>

                                <span style={{
                                    background: "#fff3cd",
                                    padding: "8px 14px",
                                    borderRadius: "30px",
                                    fontSize: "14px",
                                    fontWeight: "600"
                                }}>
                                    🔥 Best Seller
                                </span>

                                <span style={{
                                    background: "#d4edda",
                                    padding: "8px 14px",
                                    borderRadius: "30px",
                                    fontSize: "14px",
                                    fontWeight: "600"
                                }}>
                                    🥭 Farm Fresh
                                </span>

                                <span style={{
                                    background: "#d1ecf1",
                                    padding: "8px 14px",
                                    borderRadius: "30px",
                                    fontSize: "14px",
                                    fontWeight: "600"
                                }}>
                                    🚚 Fast Delivery
                                </span>

                            </div>

                        </div>

                        <div>

                            <h2 style={{
                                color: "#1b5e20",
                                fontSize: window.innerWidth < 768 ? "30px" : "42px",
                                fontWeight: "700"
                            }}>
                                ₹ {fruit.price}
                            </h2>

                            <p style={{
                                color: "#777",
                                textAlign: "right",
                                fontSize: "16px"
                            }}>
                                Per {fruit.unit}
                            </p>

                        </div>

                    </div>

                    {/* SEASON */}

                    <div style={{
                        marginTop: "20px"
                    }}>

                        <span style={{
                            background: "#ffe0b2",
                            color: "#e65100",
                            padding: "10px 18px",
                            borderRadius: "40px",
                            fontWeight: "600"
                        }}>
                            🌞 {fruit.seasonTag}
                        </span>
</div>
                   <AccordionItem
    title="📝 Product Description"
    id="description"
    content={fruit.description}
/>

<AccordionItem
    title="⭐ Premium Quality"
    id="quality"
    content={fruit.quality}
/>

<AccordionItem
    title="💪 Health Benefits"
    id="benefits"
    content={fruit.benefits}
/>

<AccordionItem
    title="🚚 Delivery Information"
    id="delivery"
    content={fruit.deliveryInfo}
/>
{/* ADD TO CART */}

<div style={{
    marginTop: "35px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap"
}}>

    <button

        onClick={addToCart}

        style={{

            background: "#ff6b00",

            color: "white",

            border: "none",

            padding: "16px 30px",

            borderRadius: "14px",

            fontSize: "18px",

            fontWeight: "700",

            cursor: "pointer",

            boxShadow:
                "0px 4px 14px rgba(255,107,0,0.3)"
        }}
    >

        🛒 Add To Cart

    </button>

    <button

        onClick={() => navigate("/")}

        style={{

            background: "#222",

            color: "white",

            border: "none",

            padding: "16px 30px",

            borderRadius: "14px",

            fontSize: "18px",

            fontWeight: "700",

            cursor: "pointer"
        }}
    >

        ← Back To Shop

    </button>

</div>
                    {/* TRUST */}

                    <div style={{
                        marginTop: "24px",
                        background: "#f5f5f5",
                        padding: "28px",
                        borderRadius: "18px"
                    }}>

                        <h2 style={{
                            fontSize: "28px",
                            marginBottom: "20px",
                            color: "#222"
                        }}>
                            ❤️ Why Customers Love Us
                        </h2>
<h2 style={{
    marginTop:"40px",
    marginBottom:"15px"
}}>
 Similar Fruits
</h2>

<div style={{
    display:"grid",
    gridTemplateColumns:
    "repeat(auto-fit,minmax(160px,1fr))",
    gap:"15px"
}}>
{
similarFruits.map(item=>(
<div

key={item.id}

onClick={()=>
navigate(`/fruit/${item.id}`)
}

style={{
cursor:"pointer",
background:"#fff",
padding:"12px",
borderRadius:"15px",
boxShadow:
"0 2px 10px rgba(0,0,0,0.08)"
}}
>

<img
src={item.imageUrl}
alt=""
style={{
width:"100%",
height:"120px",
objectFit:"contain"
}}
/>

<h4>{item.name}</h4>

<p>
₹ {item.price}
</p>

</div>
))
}
</div>
                        <ul style={{
                            lineHeight: "40px",
                            fontSize: "18px",
                            color: "#444",
                            paddingLeft: "20px"
                        }}>

                            <li>✅ Farm Fresh Fruits</li>
                            <li>✅ Handpicked Premium Quality</li>
                            <li>✅ Hygienic Packaging</li>
                            <li>✅ Fast Delivery Within 24 Hours</li>
                            <li>✅ Trusted Local Fruit Shop</li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>
         </div>
    );
}

export default FruitDetails;
