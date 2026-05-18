
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {

//     const token =
//         localStorage.getItem("token") ||
//         sessionStorage.getItem("token");

//     if (!token) {

//         return <Navigate to="/admin-login" />;
//     }

//     return children;
// }

// export default ProtectedRoute;
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const token =
        localStorage.getItem("token") ||
        sessionStorage.getItem("token");

    if (!token) {

        return <Navigate to="/admin-login" />;
    }

    return children;
}

export default ProtectedRoute;