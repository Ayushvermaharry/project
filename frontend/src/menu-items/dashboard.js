// assets
// import { IconDashboard } from '@tabler/icons';
import { Dashboard as IconDashboard} from '@mui/icons-material';
// import { IconHome } from '@tabler/icons';
// import {Home as IconHome} from '@mui/icons-material';
import { CardGiftcard } from '@mui/icons-material';

// constant
const icons = { IconDashboard, CardGiftcard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'CardInfo',
            title: 'Card Info',
            type: 'item',
            url:'/raw-material-view',
            icon: icons.CardGiftcard,
            breadcrumbs: true
        },
        {
            id: 'AppInfo',
            title: 'App Info',
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: true
        }

    ]
};

export default dashboard;
