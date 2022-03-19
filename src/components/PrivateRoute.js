
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {


    if (!localStorage.getItem("Authorization")) {
        return <Navigate to={"/Login"} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;