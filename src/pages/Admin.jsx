
// import { useEffect, useState } from "react";

// import api from "../services/api";
// import AdminNavbar from "../components/AdminNavbar";
// // import Navbar from "../components/Navbar";

// function Admin() {

//     const [fruits, setFruits] = useState([]);

//     const [name, setName] = useState("");
//     const [price, setPrice] = useState("");
//     const [unit, setUnit] = useState("");
//     const [image, setImage] = useState(null);
// const [description, setDescription] = useState("");

// const [benefits, setBenefits] = useState("");

// const [quality, setQuality] = useState("");

// const [deliveryInfo, setDeliveryInfo] = useState("");

// const [category, setCategory] = useState("");

// const [seasonTag, setSeasonTag] = useState("");
//     const [editingId, setEditingId] = useState(null);
// const [editImage, setEditImage] = useState(null);
//     // UNITS

//     const units = [
//         "kg",
//         "Dozen(12 pieces)",
//         "Piece",
//         "Box"
//     ];

//     // LOAD FRUITS

//     const loadFruits = () => {

//         api.get("/fruits")
//             .then((res) => {
//                 setFruits(res.data);
//             });
//     };

//     useEffect(() => {

//         loadFruits();

//     }, []);

//     // ADD FRUIT

//     // const addFruit = () => {

//     //     if (
//     //         name.trim() === "" ||
//     //         price.trim() === "" ||
//     //         unit.trim() === ""
//     //     ) {

//     //         alert("Please Fill All Fields 😄");

//     //         return;
//     //     }

//     //     if (price <= 0) {

//     //         alert("Price Must Be Greater Than 0");

//     //         return;
//     //     }

//     //     const newFruit = {

//     //         name,
//     //         price,
//     //         unit,
//     //         stock: true
//     //     };

//     //     api.post("/fruits", newFruit)

//     //         .then(() => {

//     //             alert("Fruit Added Successfully 😄");

//     //             loadFruits();

//     //             setName("");
//     //             setPrice("");
//     //             setUnit("");
//     //         });
//     // };
// const addFruit = async () => {

//     if (
//         name.trim() === "" ||
//         price.trim() === "" ||
//         unit.trim() === ""
//     ) {

//         alert("Please Fill All Fields 😄");
//         return;
//     }

//     try {

//         let imageUrl = "";

//         // IMAGE UPLOAD

//         if (image) {

//             const formData = new FormData();

//             formData.append("file", image);

//             const uploadRes =
//                 await api.post(
//                     "/upload",
//                     formData,
//                     {
//                         headers: {
//                             "Content-Type":
//                                 "multipart/form-data"
//                         }
//                     }
//                 );

//             imageUrl = uploadRes.data;
//         }

//         const newFruit = {

//     name,
//     price,
//     unit,
//     stock: true,
//     imageUrl,
//     description,
//     benefits,
//     quality,
//     deliveryInfo,
//     category,
//     seasonTag
// };
// setDescription("");
// setBenefits("");
// setQuality("");
// setDeliveryInfo("");
// setCategory("");
// setSeasonTag("");
//         await api.post(
//             "/fruits",
//             newFruit
//         );

//         alert("Fruit Added 😍");

//         loadFruits();

//         setName("");
//         setPrice("");
//         setUnit("");
//         setImage(null);

//     } catch (err) {

//         console.log(err);

//         alert("Upload Failed ❌");
//     }
// };
//     // DELETE

//     const deleteFruit = (id) => {

//         const confirmDelete = window.confirm(
//             "Delete This Fruit ?"
//         );

//         if (!confirmDelete) {
//             return;
//         }

//         api.delete(`/fruits/${id}`)

//             .then(() => {

//                 alert("Fruit Deleted");

//                 loadFruits();
//             });
//     };

//     // TOGGLE STOCK

//     const toggleStock = (fruit) => {

//         const updatedFruit = {

//             ...fruit,

//             stock: !fruit.stock
//         };

//         api.put(`/fruits/${fruit.id}`, updatedFruit)

//             .then(() => {

//                 loadFruits();
//             });
//     };

//     // SAVE EDIT

//     // const saveEdit = (fruit) => {

//     //     if (
//     //         fruit.name.trim() === "" ||
//     //         fruit.price === "" ||
//     //         fruit.unit.trim() === ""
//     //     ) {

//     //         alert("Fields Cannot Be Empty");

//     //         return;
//     //     }

//     //     api.put(`/fruits/${fruit.id}`, fruit)

//     //         .then(() => {

//     //             alert("Fruit Updated 😄");

//     //             setEditingId(null);

//     //             loadFruits();
//     //         });
//     // };

//     const saveEdit = async (fruit) => {

//     if (
//         fruit.name.trim() === "" ||
//         fruit.price === "" ||
//         fruit.unit.trim() === ""
//     ) {

//         alert("Fields Cannot Be Empty");

//         return;
//     }

//     try {

//         let imageUrl = fruit.imageUrl;

//         // IMAGE UPLOAD
//         if (editImage) {

//             const formData = new FormData();

//             formData.append("file", editImage);

//             const uploadRes = await api.post(
//                 "/upload",
//                 formData,
//                 {
//                     headers: {
//                         "Content-Type":
//                             "multipart/form-data"
//                     }
//                 }
//             );

//             imageUrl = uploadRes.data;
//         }

//        const updatedFruit = {

//     ...fruit,

//     imageUrl: imageUrl,

//     description: fruit.description,

//     benefits: fruit.benefits,

//     quality: fruit.quality,

//     deliveryInfo: fruit.deliveryInfo,

//     category: fruit.category,

//     seasonTag: fruit.seasonTag
// };

//         await api.put(
//             `/fruits/${fruit.id}`,
//             updatedFruit
//         );

//         alert("Fruit Updated 😄");

//         setEditingId(null);

//         setEditImage(null);

//         loadFruits();

//     } catch (err) {

//         console.log(err);

//         alert("Update Failed ❌");
//     }
// };

//     // HANDLE CHANGE

//     const handleChange = (id, field, value) => {

//         const updatedFruits = fruits.map((fruit) =>

//             fruit.id === id

//                 ? {
//                     ...fruit,
//                     [field]: value
//                 }

//                 : fruit
//         );

//         setFruits(updatedFruits);
//     };

//     return (

//         <div style={{
//             padding: "30px",
//             background: "#f4f4f4",
//             minHeight: "100vh",
//             fontFamily: "Arial"
//         }}>
//         <AdminNavbar />
//         {/* <Navbar /> */}

//             <h1 style={{
//                 marginBottom: "30px"
//             }}>
//                 👨‍💼 Guru Fruit Admin Panel
//             </h1>

//             {/* ADD FRUIT FORM */}

//             <div style={{
//                 background: "white",
//                 padding: "25px",
//                 borderRadius: "15px",
//                 marginBottom: "40px",
//                 boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
//             }}>

//                 <h2>
//                     ➕ Add New Fruit
//                 </h2>

//                 <input
//                     type="text"
//                     placeholder="Enter Fruit Name"
//                     value={name}

//                     onChange={(e) =>
//                         setName(e.target.value)
//                     }

//                     style={{
//                         padding: "12px",
//                         width: "280px",
//                         marginBottom: "12px",
//                         borderRadius: "10px",
//                         border: "1px solid #ccc"
//                     }}
//                 />

//                 <br />

//                 <input
//                     type="number"
//                     placeholder="Enter Price"
//                     value={price}

//                     onChange={(e) =>
//                         setPrice(e.target.value)
//                     }

//                     style={{
//                         padding: "12px",
//                         width: "280px",
//                         marginBottom: "12px",
//                         borderRadius: "10px",
//                         border: "1px solid #ccc"
//                     }}
//                 />
// <input
//     type="file"

//     onChange={(e) =>
//         setImage(e.target.files[0])
//     }

//     style={{
//         marginBottom: "15px"
//     }}
// />
//                 <br />

//                 <select

//                     value={unit}

//                     onChange={(e) =>
//                         setUnit(e.target.value)
//                     }

//                     style={{
//                         padding: "12px",
//                         width: "305px",
//                         marginBottom: "15px",
//                         borderRadius: "10px",
//                         border: "1px solid #ccc"
//                     }}
//                 >

//                     <option value="">
//                         Select Unit
//                     </option>

//                     {

//                         units.map((u) => (

//                             <option
//                                 key={u}
//                                 value={u}
//                             >

//                                 {u}

//                             </option>
//                         ))
//                     }

//                 </select>
// <textarea

//     placeholder="Fruit Description"

//   value={description}

//     onChange={(e) =>
//         setDescription(e.target.value)
//     }

//     style={{
//         width: "280px",
//         height: "80px",
//         padding: "12px",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />

// <br />

// <textarea

//     placeholder="Health Benefits"
// value={benefits}

//     onChange={(e) =>
//         setBenefits(e.target.value)
//     }

//     style={{
//         width: "280px",
//         height: "80px",
//         padding: "12px",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />

// <br />

// <input
//     type="text"

//     placeholder="Quality Info"

//    value={quality}

//     onChange={(e) =>
//         setQuality(e.target.value)
//     }

//     style={{
//         width: "280px",
//         padding: "12px",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />

// <br />

// <input
//     type="text"

//     placeholder="Delivery Info"

//     value={deliveryInfo}

//     onChange={(e) =>
//         setDeliveryInfo(e.target.value)
//     }

//     style={{
//         width: "280px",
//         padding: "12px",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />

// <br />

// <input
//     type="text"

//     placeholder="Category (Mango, Jamun)"

//    value={category}

//     onChange={(e) =>
//         setCategory(e.target.value)
//     }

//     style={{
//         width: "280px",
//         padding: "12px",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />

// <br />

// <input
//     type="text"

//     placeholder="Season Tag"

//     value={seasonTag}

//     onChange={(e) =>
//         setSeasonTag(e.target.value)
//     }

//     style={{
//         width: "280px",
//         padding: "12px",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />

// <br />
//                 <br />

//                 <button

//                     onClick={addFruit}

//                     style={{
//                         padding: "12px 22px",
//                         background: "green",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "10px",
//                         cursor: "pointer",
//                         fontSize: "15px"
//                     }}
//                 >

//                     Add Fruit

//                 </button>

//             </div>

//             {/* FRUIT LIST */}

//             <div style={{
//                 display: "flex",
//                 gap: "20px",
//                 flexWrap: "wrap"
//             }}>

//                 {

//                     fruits.map((fruit) => (

//                         <div

//                             key={fruit.id}

//                             style={{
//                                 background: "white",
//                                 padding: "20px",
//                                 width: "290px",
//                                 borderRadius: "15px",
//                                 boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
//                             }}
//                         >

//                             {

//                                 editingId === fruit.id

//                                     ?

//                                     <>

//                                         <input
//                                             type="text"

//                                             placeholder="Fruit Name"

//                                             value={fruit.name}

//                                             onChange={(e) =>
//                                                 handleChange(
//                                                     fruit.id,
//                                                     "name",
//                                                     e.target.value
//                                                 )
//                                             }

//                                             style={{
//                                                 width: "100%",
//                                                 padding: "10px",
//                                                 marginBottom: "10px",
//                                                 borderRadius: "10px",
//                                                 border: "1px solid #ccc"
//                                             }}
//                                         />

//                                         <input
//                                             type="number"

//                                             placeholder="Price"

//                                             value={fruit.price}

//                                             onChange={(e) =>
//                                                 handleChange(
//                                                     fruit.id,
//                                                     "price",
//                                                     e.target.value
//                                                 )
//                                             }

//                                             style={{
//                                                 width: "100%",
//                                                 padding: "10px",
//                                                 marginBottom: "10px",
//                                                 borderRadius: "10px",
//                                                 border: "1px solid #ccc"
//                                             }}
//                                         />
//                                         {/* <textarea

//     placeholder="Fruit Description"

//     value={description}

//     // onChange={(e) =>
//     //     setDescription(e.target.value)
//     // }
    

//     style={{
//         padding: "12px",
//         width: "280px",
//         height: "80px",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// /> */}
// <textarea
//     placeholder="Fruit Description"

//     value={fruit.description || ""}

//     onChange={(e) =>
//         handleChange(
//             fruit.id,
//             "description",
//             e.target.value
//         )
//     }

//     style={{
//         padding: "12px",
//         width: "100%",
//         height: "80px",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />
// <textarea
//     placeholder="Health Benefits"

//     value={fruit.benefits || ""}

//     onChange={(e) =>
//         handleChange(
//             fruit.id,
//             "benefits",
//             e.target.value
//         )
//     }

//     style={{
//         padding: "12px",
//         width: "100%",
//         height: "80px",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />
// <input
//     type="text"

//     placeholder="Quality Info"

//     value={fruit.quality || ""}

//     onChange={(e) =>
//         handleChange(
//             fruit.id,
//             "quality",
//             e.target.value
//         )
//     }

//     style={{
//         padding: "12px",
//         width: "100%",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />
// <input
//     type="text"

//     placeholder="Delivery Info"

//     value={fruit.deliveryInfo || ""}

//     onChange={(e) =>
//         handleChange(
//             fruit.id,
//             "deliveryInfo",
//             e.target.value
//         )
//     }

//     style={{
//         padding: "12px",
//         width: "100%",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />

// <input
//     type="text"

//     placeholder="Category"

//     value={fruit.category || ""}

//     onChange={(e) =>
//         handleChange(
//             fruit.id,
//             "category",
//             e.target.value
//         )
//     }

//     style={{
//         padding: "12px",
//         width: "100%",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />
// <input
//     type="text"

//     placeholder="Season Tag"

//     value={fruit.seasonTag || ""}

//     onChange={(e) =>
//         handleChange(
//             fruit.id,
//             "seasonTag",
//             e.target.value
//         )
//     }

//     style={{
//         padding: "12px",
//         width: "100%",
//         marginBottom: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ccc"
//     }}
// />




//                                         <select

//                                             value={fruit.unit}
                                            

//                                             onChange={(e) =>
//                                                 handleChange(
//                                                     fruit.id,
//                                                     "unit",
//                                                     e.target.value
//                                                 )
//                                             }
                                            

//                                             style={{
//                                                 width: "100%",
//                                                 padding: "10px",
//                                                 marginBottom: "10px",
//                                                 borderRadius: "10px",
//                                                 border: "1px solid #ccc"
//                                             }}
//                                         >

//                                             {

//                                                 units.map((u) => (

//                                                     <option
//                                                         key={u}
//                                                         value={u}
//                                                     >

//                                                         {u}

//                                                     </option>
//                                                 ))
//                                             }

//                                         </select>
//                                         <input
//     type="file"

//     onChange={(e) =>
//         setEditImage(e.target.files[0])
//     }

//     style={{
//         width: "100%",
//         padding: "10px",
//         marginBottom: "10px"
//     }}
// />

// {/* {
//     fruit.imageUrl && (

//         <img
//             src={fruit.imageUrl}

//             alt={fruit.name}

//             style={{
//                 width: "100%",
//                 height: "150px",
//                 objectFit: "cover",
//                 borderRadius: "10px",
//                 marginBottom: "10px"
//             }}
//         />
//     )
// } */}

// {
//     fruit.imageUrl && (

//         <img
//             src={`http://localhost:8080${fruit.imageUrl}`}
//             alt="fruit"
//             style={{
//                 width: "100%",
//                 height: "150px",
//                 objectFit: "cover",
//                 borderRadius: "10px",
//                 marginBottom: "10px"
//             }}
//         />
//     )
// }

//                                     </>

//                                     :

//                                     <>
// <img
//     src={fruit.imageUrl}

//     alt={fruit.name}

//     style={{
//         width: "100%",
//         height: "180px",
//         objectFit: "cover",
//         borderRadius: "12px",
//         marginBottom: "10px"
//     }}
// />
//                                         <h2>
//                                             {fruit.name}
//                                         </h2>

//                                         <h3>
//                                             ₹ {fruit.price}
//                                         </h3>

//                                         <p>
//                                             Unit : {fruit.unit}
//                                         </p>

//                                     </>
//                             }

//                             <p>

//                                 {

//                                     fruit.stock

//                                         ? "✅ In Stock"

//                                         : "❌ Out Of Stock"
//                                 }

//                             </p>

//                             <div style={{
//                                 display: "flex",
//                                 gap: "10px",
//                                 flexWrap: "wrap"
//                             }}>

//                                 <button

//                                     onClick={() => toggleStock(fruit)}

//                                     style={{
//                                         padding: "10px",
//                                         background: "orange",
//                                         border: "none",
//                                         borderRadius: "10px",
//                                         cursor: "pointer"
//                                     }}
//                                 >

//                                     Stock

//                                 </button>

//                                 {

//                                     editingId === fruit.id

//                                         ?

//                                         <>

//                                             <button

//                                                 onClick={() =>
//                                                     saveEdit(fruit)
//                                                 }

//                                                 style={{
//                                                     padding: "10px",
//                                                     background: "green",
//                                                     color: "white",
//                                                     border: "none",
//                                                     borderRadius: "10px",
//                                                     cursor: "pointer"
//                                                 }}
//                                             >

//                                                 Save

//                                             </button>

//                                             <button

//                                                 onClick={() =>
//                                                     setEditingId(null)
//                                                 }

//                                                 style={{
//                                                     padding: "10px",
//                                                     background: "gray",
//                                                     color: "white",
//                                                     border: "none",
//                                                     borderRadius: "10px",
//                                                     cursor: "pointer"
//                                                 }}
//                                             >

//                                                 Cancel

//                                             </button>

//                                         </>

//                                         :

//                                         <button

//                                             onClick={() =>
//                                                 setEditingId(fruit.id)
//                                             }

//                                             style={{
//                                                 padding: "10px",
//                                                 background: "blue",
//                                                 color: "white",
//                                                 border: "none",
//                                                 borderRadius: "10px",
//                                                 cursor: "pointer"
//                                             }}
//                                         >

//                                             Edit

//                                         </button>
//                                 }

//                                 <button

//                                     onClick={() =>
//                                         deleteFruit(fruit.id)
//                                     }

//                                     style={{
//                                         padding: "10px",
//                                         background: "red",
//                                         color: "white",
//                                         border: "none",
//                                         borderRadius: "10px",
//                                         cursor: "pointer"
//                                     }}
//                                 >

//                                     Delete

//                                 </button>

//                             </div>

//                         </div>
//                     ))
//                 }

//             </div>

//         </div>
//     );
// }

// export default Admin;

import { useEffect, useState } from "react";

import api from "../services/api";
import AdminNavbar from "../components/AdminNavbar";
import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";

function Admin() {

    const [fruits, setFruits] = useState([]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [unit, setUnit] = useState("");
    const [image, setImage] = useState(null);
const [description, setDescription] = useState("");

const [benefits, setBenefits] = useState("");

const [quality, setQuality] = useState("");

const [deliveryInfo, setDeliveryInfo] = useState("");

const [category, setCategory] = useState("");

const [seasonTag, setSeasonTag] = useState("");
    const [editingId, setEditingId] = useState(null);
const [editImage, setEditImage] = useState(null);
const [filterCategory, setFilterCategory] = useState("");
    // UNITS

    const units = [
        "kg",
        "Dozen(12 pieces)",
        "Piece",
        "Box"
    ];

    // LOAD FRUITS

    const loadFruits = () => {

        api.get("/fruits")
            .then((res) => {
                setFruits(res.data);
            });
    };

    useEffect(() => {

        loadFruits();

    }, []);

    // ADD FRUIT

    // const addFruit = () => {

    //     if (
    //         name.trim() === "" ||
    //         price.trim() === "" ||
    //         unit.trim() === ""
    //     ) {

    //         alert("Please Fill All Fields 😄");

    //         return;
    //     }

    //     if (price <= 0) {

    //         alert("Price Must Be Greater Than 0");

    //         return;
    //     }

    //     const newFruit = {

    //         name,
    //         price,
    //         unit,
    //         stock: true
    //     };

    //     api.post("/fruits", newFruit)

    //         .then(() => {

    //             alert("Fruit Added Successfully 😄");

    //             loadFruits();

    //             setName("");
    //             setPrice("");
    //             setUnit("");
    //         });
    // };
const addFruit = async () => {

    if (
        name.trim() === "" ||
        price.trim() === "" ||
        unit.trim() === ""
    ) {

        toast.warning("Please Fill All Fields");
        return;
    }

    try {

        let imageUrl = "";

        // IMAGE UPLOAD

        if (image) {

            const formData = new FormData();

            formData.append("file", image);

            const uploadRes =
                await api.post(
                    "/upload",
                    formData,
                    {
                        headers: {
                            "Content-Type":
                                "multipart/form-data"
                        }
                    }
                );

            imageUrl = uploadRes.data;
        }

        const newFruit = {

    name,
    price,
    unit,
    stock: true,
    imageUrl,
    description,
    benefits,
    quality,
    deliveryInfo,
    category,
    seasonTag
};
setDescription("");
setBenefits("");
setQuality("");
setDeliveryInfo("");
setCategory("");
setSeasonTag("");
        await api.post(
            "/fruits",
            newFruit
        );

        toast.success("Fruit Added ");

        loadFruits();

        setName("");
        setPrice("");
        setUnit("");
        setImage(null);

    } catch (err) {

        console.log(err);

        toast.error("Upload Failed ");
    }
};
    // DELETE

    const deleteFruit = (id) => {

        const confirmDelete = window.confirm(
            "Delete This Fruit ?"
        );

        if (!confirmDelete) {
            return;
        }

        api.delete(`/fruits/${id}`)

            .then(() => {

                toast.delete("Fruit Deleted");

                loadFruits();
            });
    };

    // TOGGLE STOCK

    const toggleStock = (fruit) => {

        const updatedFruit = {

            ...fruit,

            stock: !fruit.stock
        };

        api.put(`/fruits/${fruit.id}`, updatedFruit)

            .then(() => {

                loadFruits();
            });
    };

    // SAVE EDIT

    // const saveEdit = (fruit) => {

    //     if (
    //         fruit.name.trim() === "" ||
    //         fruit.price === "" ||
    //         fruit.unit.trim() === ""
    //     ) {

    //         alert("Fields Cannot Be Empty");

    //         return;
    //     }

    //     api.put(`/fruits/${fruit.id}`, fruit)

    //         .then(() => {

    //             alert("Fruit Updated 😄");

    //             setEditingId(null);

    //             loadFruits();
    //         });
    // };

    const saveEdit = async (fruit) => {

    if (
        fruit.name.trim() === "" ||
        fruit.price === "" ||
        fruit.unit.trim() === ""
    ) {

        toast.warning("Fields Cannot Be Empty");

        return;
    }

    try {

        let imageUrl = fruit.imageUrl;

        // IMAGE UPLOAD
        if (editImage) {

            const formData = new FormData();

            formData.append("file", editImage);

            const uploadRes = await api.post(
                "/upload",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data"
                    }
                }
            );

            imageUrl = uploadRes.data;
        }

       const updatedFruit = {

    ...fruit,

    imageUrl: imageUrl,

    description: fruit.description,

    benefits: fruit.benefits,

    quality: fruit.quality,

    deliveryInfo: fruit.deliveryInfo,

    category: fruit.category,

    seasonTag: fruit.seasonTag
};

        await api.put(
            `/fruits/${fruit.id}`,
            updatedFruit
        );

        toast.info("Fruit Updated ");

        setEditingId(null);

        setEditImage(null);

        loadFruits();

    } catch (err) {

        console.log(err);

        toast.error("Update Failed ");
    }
};

    // HANDLE CHANGE

    const handleChange = (id, field, value) => {

        const updatedFruits = fruits.map((fruit) =>

            fruit.id === id

                ? {
                    ...fruit,
                    [field]: value
                }

                : fruit
        );

        setFruits(updatedFruits);
    };

    return (

        <div style={{
    padding:
        window.innerWidth < 768
            ? "15px"
            : "30px",

    background: "#f4f4f4",

    minHeight: "100vh",

    fontFamily: "Arial",
      overflowX: "hidden"
}}>
        <AdminNavbar />
        {/* <Navbar /> */}
<h1 style={{

    marginBottom: "30px",

    fontSize:
        window.innerWidth < 768
            ? "24px"
            : "38px",

    textAlign: "center"
}}>
                👨‍💼 Guru Fruit Admin Panel
            </h1>

            {/* ADD FRUIT FORM */}

            <div style={{

    background: "white",

    padding:
        window.innerWidth < 768
            ? "18px"
            : "25px",

    borderRadius: "15px",

    marginBottom: "40px",

    boxShadow:
        "0px 2px 10px rgba(0,0,0,0.1)"
}}>

                <h2>
                    ➕ Add New Fruit
                </h2>

                <input
                    type="text"
                    placeholder="Enter Fruit Name"
                    value={name}

                    onChange={(e) =>
                        setName(e.target.value)
                    }

                    style={{
                        padding: "12px",
                        width:
    window.innerWidth < 768
        ? "100%"
        : "280px",
                        marginBottom: "12px",
                        borderRadius: "10px",
                        border: "1px solid #ccc"
                    }}
                />

                <br />

                <input
                    type="number"
                    placeholder="Enter Price"
                    value={price}

                    onChange={(e) =>
                        setPrice(e.target.value)
                    }

                    style={{
                        padding: "12px",
                       width:
    window.innerWidth < 768
        ? "100%"
        : "280px",
                        marginBottom: "12px",
                        borderRadius: "10px",
                        border: "1px solid #ccc"
                    }}
                />
<input
    type="file"

    onChange={(e) =>
        setImage(e.target.files[0])
    }

    style={{
 marginBottom: "15px",
    width: "100%",
    maxWidth: "100%"    }}
/>
                <br />

                <select

                    value={unit}

                    onChange={(e) =>
                        setUnit(e.target.value)
                    }

                    style={{
                        padding: "12px",
                        width:
    window.innerWidth < 768
        ? "100%"
        : "280px",
                        marginBottom: "15px",
                        borderRadius: "10px",
                        border: "1px solid #ccc"
                    }}
                >

                    <option value="">
                        Select Unit
                    </option>

                    {

                        units.map((u) => (

                            <option
                                key={u}
                                value={u}
                            >

                                {u}

                            </option>
                        ))
                    }

                </select>
<textarea

    placeholder="Fruit Description"

  value={description}

    onChange={(e) =>
        setDescription(e.target.value)
    }

    style={{
       width: "100%",
maxWidth: "100%",
        height: "80px",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>

<br />

<textarea

    placeholder="Health Benefits"
value={benefits}

    onChange={(e) =>
        setBenefits(e.target.value)
    }

    style={{
      width: "100%",
maxWidth: "100%",
        height: "80px",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>

<br />

<input
    type="text"

    placeholder="Quality Info"

   value={quality}

    onChange={(e) =>
        setQuality(e.target.value)
    }

    style={{
        width:
    window.innerWidth < 768
        ? "100%"
        : "280px",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>

<br />

<input
    type="text"

    placeholder="Delivery Info"

    value={deliveryInfo}

    onChange={(e) =>
        setDeliveryInfo(e.target.value)
    }

    style={{
       width:
    window.innerWidth < 768
        ? "100%"
        : "280px",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>

<br />

<input
    type="text"

    placeholder="Category (Mango, Jamun)"

   value={category}

    onChange={(e) =>
        setCategory(e.target.value)
    }

    style={{
        width:
    window.innerWidth < 768
        ? "100%"
        : "280px",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>

<br />

<input
    type="text"

    placeholder="Season Tag"

    value={seasonTag}

    onChange={(e) =>
        setSeasonTag(e.target.value)
    }

    style={{
        width:
    window.innerWidth < 768
        ? "100%"
        : "280px",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>

<br />
                <br />

                <button

                    onClick={addFruit}

                    style={{
                        padding: "12px 22px",
                        background: "green",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "15px"
                    }}
                >

                    Add Fruit

                </button>

            </div>
<div style={{
    marginBottom: "25px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    alignItems: "center"
}}>

    <h3 style={{ margin: 0 }}>
        🔍 Filter By Category :
    </h3>

    <select

        value={filterCategory}

        onChange={(e) =>
            setFilterCategory(e.target.value)
        }

        style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            minWidth: "200px"
        }}
    >

        <option value="">
            All Categories
        </option>

        {

            [...new Set(
                fruits.map(
                    (f) => f.category
                )
            )]

            .filter(Boolean)

            .map((cat, index) => (

                <option
                    key={index}
                    value={cat}
                >

                    {cat}

                </option>
            ))
        }

    </select>

</div>
            {/* FRUIT LIST */}

            {/* <div style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap"
            }}> */}
<div style={{
    display: "grid",

    gridTemplateColumns:
        "repeat(auto-fit,minmax(280px,1fr))",

    gap: "20px"
}}>
                {

                    fruits.map((fruit) => (

                        <div

                            key={fruit.id}

                            style={{
                                background: "white",
                                padding: "20px",
                                boxSizing: "border-box",
overflow: "hidden",
                                width: "100%",
                                borderRadius: "15px",
                                boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
                            }}
                        >

                            {

                                editingId === fruit.id

                                    ?

                                    <>

                                        <input
                                            type="text"

                                            placeholder="Fruit Name"

                                            value={fruit.name}

                                            onChange={(e) =>
                                                handleChange(
                                                    fruit.id,
                                                    "name",
                                                    e.target.value
                                                )
                                            }

                                            style={{
                                                
      width: "100%",
maxWidth: "100%",
                                                padding: "10px",
                                                marginBottom: "10px",
                                                borderRadius: "10px",
                                                border: "1px solid #ccc"
                                            }}
                                        />

                                        <input
                                            type="number"

                                            placeholder="Price"

                                            value={fruit.price}

                                            onChange={(e) =>
                                                handleChange(
                                                    fruit.id,
                                                    "price",
                                                    e.target.value
                                                )
                                            }

                                            style={{
                                               width: "100%",
maxWidth: "100%",
                                                padding: "10px",
                                                marginBottom: "10px",
                                                borderRadius: "10px",
                                                border: "1px solid #ccc"
                                            }}
                                        />
                                        {/* <textarea

    placeholder="Fruit Description"

    value={description}

    // onChange={(e) =>
    //     setDescription(e.target.value)
    // }
    

    style={{
        padding: "12px",
        width: "280px",
        height: "80px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/> */}
<textarea
    placeholder="Fruit Description"

    value={fruit.description || ""}

    onChange={(e) =>
        handleChange(
            fruit.id,
            "description",
            e.target.value
        )
    }

    style={{
        padding: "12px",
        width: "100%",
        height: "80px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>
<textarea
    placeholder="Health Benefits"

    value={fruit.benefits || ""}

    onChange={(e) =>
        handleChange(
            fruit.id,
            "benefits",
            e.target.value
        )
    }

    style={{
        padding: "12px",
        width: "100%",
        height: "80px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>
<input
    type="text"

    placeholder="Quality Info"

    value={fruit.quality || ""}

    onChange={(e) =>
        handleChange(
            fruit.id,
            "quality",
            e.target.value
        )
    }

    style={{
        padding: "12px",
        width: "100%",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>
<input
    type="text"

    placeholder="Delivery Info"

    value={fruit.deliveryInfo || ""}

    onChange={(e) =>
        handleChange(
            fruit.id,
            "deliveryInfo",
            e.target.value
        )
    }

    style={{
        padding: "12px",
width: "100%",
maxWidth: "100%",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>

<input
    type="text"

    placeholder="Category"

    value={fruit.category || ""}

    onChange={(e) =>
        handleChange(
            fruit.id,
            "category",
            e.target.value
        )
    }

    style={{
        padding: "12px",
        width: "100%",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>
<input
    type="text"

    placeholder="Season Tag"

    value={fruit.seasonTag || ""}

    onChange={(e) =>
        handleChange(
            fruit.id,
            "seasonTag",
            e.target.value
        )
    }

    style={{
        padding: "12px",
        width: "100%",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc"
    }}
/>




                                        <select

                                            value={fruit.unit}
                                            

                                            onChange={(e) =>
                                                handleChange(
                                                    fruit.id,
                                                    "unit",
                                                    e.target.value
                                                )
                                            }
                                            

                                            style={{
                                                width: "100%",
                                                padding: "10px",
                                                marginBottom: "10px",
                                                borderRadius: "10px",
                                                border: "1px solid #ccc"
                                            }}
                                        >

                                            {

                                                units.map((u) => (

                                                    <option
                                                        key={u}
                                                        value={u}
                                                    >

                                                        {u}

                                                    </option>
                                                ))
                                            }

                                        </select>
                                        <input
    type="file"

    onChange={(e) =>
        setEditImage(e.target.files[0])
    }

    style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px"
    }}
/>

{/* {
    fruit.imageUrl && (

        <img
            src={fruit.imageUrl}

            alt={fruit.name}

            style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px"
            }}
        />
    )
} */}

{
    fruit.imageUrl && (

        <img
            src={`http://localhost:8080${fruit.imageUrl}`}
            alt="fruit"
            style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px"
            }}
        />
    )
}

                                    </>

                                    :

                                    <>
<img
    src={fruit.imageUrl}

    alt={fruit.name}

    style={{
        width: "100%",
        height: "220px",
        objectFit: "cover",
        borderRadius: "12px",
        marginBottom: "10px"
    }}
/>
                                        <h2>
                                            {fruit.name}
                                        </h2>

                                        <h3>
                                            ₹ {fruit.price}
                                        </h3>

                                        <p>
                                            Unit : {fruit.unit}
                                        </p>

                                    </>
                            }

                            <p>

                                {

                                    fruit.stock

                                        ? "✅ In Stock"

                                        : "❌ Out Of Stock"
                                }

                            </p>

                            <div style={{

    display: "flex",

gap: "10px",

flexWrap: "wrap",



    justifyContent:
        window.innerWidth < 768
            ? "center"
            : "flex-start"
}}>

                                <button

                                    onClick={() => toggleStock(fruit)}

                                    style={{
                                        padding: "10px",
                                        background: "orange",
                                        border: "none",
                                        borderRadius: "10px",
                                        cursor: "pointer"
                                    }}
                                >

                                    Stock

                                </button>

                                {

                                    editingId === fruit.id

                                        ?

                                        <>

                                            <button

                                                onClick={() =>
                                                    saveEdit(fruit)
                                                }

                                                style={{
                                                    padding: "10px",
                                                    background: "green",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "10px",
                                                    cursor: "pointer"
                                                }}
                                            >

                                                Save

                                            </button>

                                            <button

                                                onClick={() =>
                                                    setEditingId(null)
                                                }

                                                style={{
                                                    padding: "10px",
                                                    background: "gray",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "10px",
                                                    cursor: "pointer"
                                                }}
                                            >

                                                Cancel

                                            </button>

                                        </>

                                        :

                                        <button

                                            onClick={() =>
                                                setEditingId(fruit.id)
                                            }

                                            style={{
                                                padding: "10px",
                                                background: "blue",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "10px",
                                                cursor: "pointer"
                                            }}
                                        >

                                            Edit

                                        </button>
                                }

                                <button

                                    onClick={() =>
                                        deleteFruit(fruit.id)
                                    }

                                    style={{
                                        padding: "10px",
                                        background: "red",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "10px",
                                        cursor: "pointer"
                                    }}
                                >

                                    Delete

                                </button>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Admin;