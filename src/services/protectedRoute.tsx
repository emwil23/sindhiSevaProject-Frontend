import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
    children: any
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  
    const userLoggedIn = useSelector((state: any) => state?.isLoggedIn?.userLoggedIn);
    const memberStatus = useSelector((state: any) => state?.currentUser?.userDetails?.status);
    const redirectPath = '/';
  return userLoggedIn && memberStatus === 'Active' ? children : <Navigate to={redirectPath} replace />;
}
export default ProtectedRoute;