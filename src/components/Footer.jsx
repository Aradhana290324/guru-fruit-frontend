function Footer() {

    return (

    <div style={{

        background:
            "linear-gradient(135deg,#0f172a,#14532d)",

        color: "white",

        padding: "18px 25px",

        marginTop: "40px"
    }}>

        <div style={{

            display: "flex",

            justifyContent: "space-between",

            flexWrap: "wrap",

            gap: "20px",

            alignItems: "center"
        }}>

            {/* LEFT */}

            <div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                }}>

                    <img
                        src="/logo.jpeg"
                        alt="logo"

                        style={{
                            width: "55px",
                            height: "55px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid white"
                        }}
                    />

                    <div>

                        <h2 style={{
                            margin: 0,
                            fontSize: "24px"
                        }}>
                            The Guru Fruit Shop
                        </h2>

                        <p style={{
                            margin: "4px 0",
                            color: "#d1fae5",
                            fontSize: "13px"
                        }}>
                            Fresh Fruits • Fast Delivery • Pure Happiness 🍓
                        </p>

                    </div>

                </div>

                <p style={{
                    marginTop: "12px",
                    lineHeight: "1.6",
                    color: "#e5e7eb",
                    fontSize: "14px"
                }}>
                    📍 NavPada, Vile Parle East,
                    Front of bharti watch company,
                    Mumbai - 400057
                </p>

                <p style={{
                    fontSize: "14px",
                    marginTop: "8px"
                }}>
                    📞 +91 9876543210
                </p>

            </div>

            {/* RIGHT */}

            <div>
{/* 
                <a
                    href="https://maps.google.com/?q=The Guru fruit shop"
                    target="_blank"
                    rel="noreferrer"

                    style={{

                        background: "#22c55e",

                        color: "white",

                        padding: "12px 18px",

                        borderRadius: "12px",

                        textDecoration: "none",

                        fontWeight: "bold",

                        display: "inline-block"
                    }}
                >
                    📍 Visit Our Shop
                </a> */}

                <a
    href="https://maps.google.com/?q=The Guru fruit shop"
    target="_blank"
    rel="noreferrer"

    style={{

        background: "#22c55e",

        color: "white",

        padding: "14px 20px",

        borderRadius: "14px",

        textDecoration: "none",

        fontWeight: "bold",

        display: "inline-flex",

        alignItems: "center",

        gap: "8px",

        boxShadow:
            "0px 4px 12px rgba(0,0,0,0.2)"
    }}
>
    🗺️ See Our Shop On Google Maps
</a>

            </div>

        </div>

        <hr style={{
            margin: "18px 0",
            borderColor: "rgba(255,255,255,0.15)"
        }} />

        <p style={{
            textAlign: "center",
            margin: 0,
            fontSize: "13px",
            color: "#d1d5db"
        }}>
            © 2026 The Guru Fruit Shop • Made With ❤️ In Mumbai
        </p>

    </div>
);
}

export default Footer;