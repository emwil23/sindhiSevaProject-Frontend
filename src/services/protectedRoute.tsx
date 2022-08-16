import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
    children: any
}

const ProtectedRoute: FC<Props> = ({ children }) => {
    const userLoggedIn = useSelector((state: any) => state.isLoggedIn.userLoggedIn);
    const redirectPath = '/';
  return userLoggedIn ? children : <Navigate to={redirectPath} replace />;
}
export default ProtectedRoute;