import {React, lazy} from 'react'

// import MainLayout from '../layouts/MainLayout'
import MainLayoutV2 from '../layouts/MainLayoutV2/Layout'
import Loadable from '../ui-component/Loadable';

//protectionn import
import Protected from "./Protected";

//Common pages import
const Home = Loadable(lazy(() => import('../pages/Home/Home')));
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard/Dashboard')));


const RawMaterialViewPage = Loadable(lazy(() => import('../pages/Order/RawMaterialViewPage')));






const MainRoutes = {
    path: '/',
    element: <MainLayoutV2 />,
    children: [
        {
            path: '/',
            element: <Protected Component={Home}/>,
        },
        {
            path: '/dashboard',
            element: <Protected Component={Dashboard}/>
        },
        {
            path: '/',
            children: [
                // Product Page related Routes
                {
                    path: 'raw-material-view',
                    element: <Protected Component={RawMaterialViewPage} />
                },

            ]
        },
        // {

        // },           
    ]
};
  

export default MainRoutes