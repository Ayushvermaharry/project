import {React, lazy} from 'react'

// import MainLayout from '../layouts/MainLayout'
import MainLayoutV2 from '../layouts/MainLayoutV2/Layout'
import Loadable from '../ui-component/Loadable';

//protectionn import
import Protected from "./Protected";

//Common pages import
const Home = Loadable(lazy(() => import('../pages/Home/Home')));

const ViewSms = Loadable(lazy(() => import('../pages/Dashboard/viewSms')));

const RawMaterialViewPage = Loadable(lazy(() => import('../pages/Order/cardInfo')));


const MainRoutes = {
    path: '/',
    element: <MainLayoutV2 />,
    children: [
        {
            path: '/appInfo',
            element: <Protected Component={Home}/>,
        },
        {
            path: '/viewSms',
            element: <Protected Component={ViewSms}/>
        },
        {
            path: 'cardInfo',
            element: <Protected Component={RawMaterialViewPage} />
        },     
    ]
};
  

export default MainRoutes