import { Outlet} from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
const Layout = () => {
    const {user} = useContext(UserContext);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;