import {
    createBrowserRouter,
} from "react-router-dom";

import Loginscreen from "../screens/Loginscreen";
import Dashboardscreen from "../screens/Dashboardscreen";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Loginscreen />,
        children:[]
    },
    {
        path: "dashboard",
        element: <Dashboardscreen />,
        children: []
    }
])
export default Router;