import axios from "axios";

export default axios.create({
     // baseURL: "http://localhost:8080/api"
     baseURL:"https://spring-boot-fruits-production.up.railway.app"
});