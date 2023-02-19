// assets
import HelpIcon from '@mui/icons-material/Help';
import GoogleIcon from '@mui/icons-material/Google';
// constant
const icons = { GoogleIcon, HelpIcon };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: '/sample-page',
            icon: icons.GoogleIcon,
            breadcrumbs: true
        },
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/',
            icon: icons.HelpIcon,
            external: true,
            target: true
        }
    ]
};

export default other;
