import {React, useState} from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Divider, Button } from '@mui/material';

const NotificationPanel = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
      };

  return (
    <>
        <IconButton color="inherit" onClick={handleClick}>
            <NotificationsIcon color="iconColor" />
        </IconButton>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
    >
        <Box>
            <Paper elevation={2} className="w-full p-4">
                <div className="inline-flex pt-2 pr-2">
                    <Typography variant="h6" color="black" align="left">Notifications</Typography>
                    <div className="px-2 py-1 ml-2 rounded-lg bg-[#FB9678] min-w-fit ">
                        <Typography variant="body2" color="white" align="right">5 new</Typography>
                    </div>
                </div>

                <div>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="human" />
                        </ListItemIcon>
                        <ListItemText primary="Notification 1" secondary="text" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Button color="primary" variant="contained" sx={{ width:'100%'}}>
                            <Typography align="center" variant='body1' color="white">View All Notifications</Typography>
                        </Button> 
                    </ListItem>
                </List>
                </div>
            </Paper>
        </Box>
    </Popover>
    </>
  )
}

export default NotificationPanel