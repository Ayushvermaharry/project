// assets
// import { IconKey } from '@tabler/icons';
import { Key as IconKey} from '@mui/icons-material';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'All Pages',
    type: 'group',
    children: [
        {
            id: 'product',
            title: 'Products',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'productList',
                    title: 'Product List',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        }
    ]
};

export default pages;