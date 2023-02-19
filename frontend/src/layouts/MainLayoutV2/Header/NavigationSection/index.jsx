import {React,useState,useRef} from 'react';
import { 
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Popover,
    Typography,
    ListItemText, 
    Grid,
    Container,
    Box,
    IconButton,
    Button,
    Tooltip} from '@mui/material';

// import { IconHome } from '@tabler/icons';
import {Home as IconHome} from '@mui/icons-material';

// import { IconChevronDown } from '@tabler/icons';
import { ChevronLeft as  IconChevronDown} from '@mui/icons-material';

// material-ui
import { useTheme, styled } from '@mui/material/styles';


const NavigationSection = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const theme  = useTheme();

    const PopoverStyle = styled(Popover)(({ theme }) => ({
        popover:{
            pointerEvents: 'none',
        },
        popoverContent: {
            pointerEvents: 'auto',
        },
    }));


    // const useStyles = makeStyles((theme) => ({
    //     popover:{
    //         pointerEvents: 'none',
    //     },
    //     popoverContent:{
    //         pointerEvents: 'auto',
    //     },
    //     paper:{
    //         padding: theme.spacing(1),
    //     },
    //     }));
    // const classes = useStyles();
    
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }
    
    const handlePopoverClose = () => {
        setAnchorEl(null);   
    }

    const open = Boolean(anchorEl);
    
    console.log(props.menuItems);
  return (
    <>
    <div className="container flex flex-row">
        <div className="flex-1">
            <Box 
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}    
            
            sx={{display:"flex", direction:"row",cursor:"pointer",transition: "all 300ms linear"}}>
                <IconHome stroke={1.5} size="1.2rem" color={theme.palette.grey[500]} />
                <Typography variant="button" align='center' sx={{px:1}}>Home</Typography>   
                <IconChevronDown stroke={1.5} size="1.2rem" color={theme.palette.grey[800]}/>            
            </Box>
            <Tooltip title="Add" arrow>
                <Button>Arrow</Button>
            </Tooltip>
            <PopoverStyle
                id="mouse-over-popover"
                
                sx={{
                    pointerEvents: 'none',
                    borderRadius: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                 <Typography sx={{ p: 1 }}>I use Popover.</Typography>
                 <Typography sx={{ p: 1 }}>I use Popover.</Typography>
                 <Typography sx={{ p: 1 }}>I use Popover.</Typography>
                 <Typography sx={{ p: 1 }}>I use Popover.</Typography>
            </PopoverStyle>
        </div>
    </div>


    {/* <List 
        direction="row"
        sx={{m:0, p:0}}>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <IconHome stroke={1.5} size="1rem" color={theme.palette.grey[500]}/>
                </ListItemIcon>
                <Typography variant='button'>Home</Typography>
                <ListItemIcon>
                    <IconChevronDown stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <IconHome stroke={1.5} size="1rem" color={theme.palette.grey[500]}/>
                </ListItemIcon>
                <Typography variant='button'>Home</Typography>
                <ListItemIcon>
                    <IconChevronDown stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <IconHome stroke={1.5} size="1rem" color={theme.palette.grey[500]}/>
                </ListItemIcon>
                <Typography variant='button'>Home</Typography>
                <ListItemIcon>
                    <IconChevronDown stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <IconHome stroke={1.5} size="1rem" color={theme.palette.grey[500]}/>
                </ListItemIcon>
                <Typography variant='button'>Home</Typography>
                <ListItemIcon>
                    <IconChevronDown stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <IconHome stroke={1.5} size="1rem" color={theme.palette.grey[500]}/>
                </ListItemIcon>
                <Typography variant='button'>Home</Typography>
                <ListItemIcon>
                    <IconChevronDown stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    </List> */}
    </>
  )
}

export default NavigationSection
