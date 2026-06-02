// import axios from "axios";

// export default axios.create({
//      // baseURL: "http://localhost:8080/api"
//      baseURL:"https://spring-boot-fruits-production.up.railway.app"
// });
import axios from "axios";

const api = axios.create({
    
    baseURL: "https://spring-boot-fruits-production.up.railway.app/api",
    headers: {
        "Content-Type": "application/json"
    }
    
});
console.log("UPLOAD RESPONSE =", response.data);
export default api;