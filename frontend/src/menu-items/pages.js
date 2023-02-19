// assets
// import { IconBuildingStore } from '@tabler/icons';
import { Store as IconBuildingStore } from '@mui/icons-material';
// import { IconReceipt } from '@tabler/icons';
import { Receipt as IconReceipt} from '@mui/icons-material';
// import { IconBuildingFactory2 } from '@tabler/icons';
import { Factory as IconBuildingFactory2} from '@mui/icons-material';

// constant
const icons = {
    IconBuildingStore,
    IconReceipt,
    IconBuildingFactory2,
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'products',
            title: 'Products',
            type: 'collapse',
            icon: icons.IconBuildingStore,
            // breadcrumbs:true,

            children: [
                {
                    id: 'allProducts',
                    title: 'All Products',
                    type: 'item',
                    url: '/products',
                    target: false,
                    breadcrumbs: true
                },
                {
                    id: 'addProduct',
                    title: 'Add Product',
                    type: 'item',
                    url: '/add-new-product',
                    target: false,
                    breadcrumbs: true 
                },
                {
                    id: 'productList',
                    title: 'Product List',
                    type: 'item',
                    url: '/product-list',
                    target: false,
                    breadcrumbs: true
                },
            ]
        },
        {
            id: 'order',
            title: 'Order',
            type: 'collapse',
            icon: icons.IconReceipt,
            children: [
                {
                    id: 'createNewOrder',
                    title: 'Create New Order',
                    type: 'item',
                    url: '/create-new-order',
                    icons: icons.IconBuildingFactory2,
                    target: false,
                    breadcrumbs: true,
                },
                {
                    id: 'orderList',
                    title: 'Orders List',
                    type: 'item',
                    url: '/orders-list',
                    target: false,
                    breadcrumbs: true,
                },
                {
                    id: 'rawMaterialView',
                    title: 'Raw Material Planning',
                    type: 'item',
                    url: '/raw-material-view',
                    target: false,
                    breadcrumbs: true,
                },
            ]
        },
        {
            id: 'vendor',
            title: 'Vendor',
            type: 'collapse',
            icon: icons.IconBuildingFactory2,
            children: [
                {
                    id: 'vendorOnboarding',
                    title: 'Vendor Onboarding',
                    type: 'item',
                    url: '/vendor-onboarding',
                    target: false,
                    breadcrumbs: true,
                },
                {
                    id: 'vendorList',
                    title: 'Vendor List',
                    type: 'item',
                    url: '/vendors-list',
                    target: false,
                    breadcrumbs: true,
                }
            ]
        }
    ]
};

export default pages;
