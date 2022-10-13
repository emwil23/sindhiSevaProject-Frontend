import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { openNotification } from "./notificationService";

interface Props {
    children: any
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  
    const userLoggedIn = useSelector((state: any) => state?.isLoggedIn?.userLoggedIn);
    const memberStatus = useSelector((state: any) => state?.currentUser?.userDetails?.status);
    const adminVerified = useSelector((state: any) => state?.currentUser?.userDetails?.adminVerified);
    const validPerson = memberStatus === 'Active' && adminVerified === 'Accepted';
    const redirectPath = '/';
  return userLoggedIn && validPerson ? children : <Navigate to={redirectPath} state={openNotification('Please Contact Admin for support.')} replace />;
}
export default ProtectedRoute;