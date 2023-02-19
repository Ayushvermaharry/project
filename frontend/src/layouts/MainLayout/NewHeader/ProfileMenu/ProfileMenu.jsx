import React from 'react'
import { useState } from 'react'
import {    Typography,
            Button,
            Popover,
            Avatar,
            Box, 
            Paper,
            Divider
        } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Ayush from '../../../../assets/images/userprofile/Ayush.png';

const ProfileMenu = () => {
    // const [open, setOpen ] = useState(true);
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
    <Button variant="standard" color="primary" onClick={handleClick}>
        <div className="container inline-flex items-center text-center align-middle">
            <Avatar alt="Remy Sharp" src={Ayush} sx={{ width: 24, height: 24 }} />
            <Typography color="secondary" className="px-2" align='center' variant="button">Hi, <strong>Ayush</strong></Typography>
            <KeyboardArrowDownIcon color="iconColor" />
        </div>
    </Button>
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
            <Paper elevation={2} className="p-2">
                <div className="flex flex-col w-full">
                    <div className="flex p-2">
                        <Typography variant="h6" color="black" align="left">User Profile</Typography>
                    </div>
                    <div className="flex flex-row px-2 pl-2 pr-4">
                            <Avatar src={Ayush} alt="Avatar" sx={{ width:'100px', height: 'auto',m:1,ml:0 }} />
                        <div className="flex flex-col justify-center">
                            <Typography variant="h7" color="black" align="left">Ayush Tamrakar</Typography>
                            <Typography variant="body2" color="secondary" align="left">Administartor</Typography>
                            <div className="inline-flex">
                                <MailOutlineIcon color="iconColor"/>
                                <Typography variant="body2" color="secondary" align="left">admin@sebonetechnologies.com</Typography>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className="flex flex-col">
                        <List>
                            <ListItem>
                                <ListItemButton sx={{ px:0, mx:0}}>
                                    <ListItemIcon >
                                        <PersonOutlineIcon color="primary" sx={{ width:'50px' , height:'auto'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="My Profile" secondary="Account settings"/>
                                </ListItemButton> 
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <Button color="primary" variant="contained" sx={{ width:'100%'}}>
                                    <Typography align="center" variant='button' color="white">Logout</Typography>
                                </Button> 
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Paper>
        </Box>
    </Popover>
    {/* <List>
                    <Box p={2}>
                    <Typography variant="h6" color="black" align="left" >User Profile</Typography>
                    </Box>
                    <div className='flex flex-row'>
                        
                        <Typography variant="h6" color="black" align="left" >User</Typography>
                    </div>
                        <ListItem>
                            <ListItemButton>
                            <ListItemText primary="My Profile" secondary="Account Settings" />
                            </ListItemButton>

                        </ListItem>
                    </List>
                    
                    <Typography variant="body1" color="secondary" align="center">
                        <strong>User</strong>
                    </Typography>
                    <Typography variant="body1" color="secondary" align="center">
                        <strong>
                            <a href="#">
                                <Typography variant="body1" color="secondary" align="center">
                                    <strong>Change Password</strong>
                                </Typography>
                            </a>
                        </strong>
                    </Typography>
                    <Typography variant="body1" color="secondary" align="center">
                        <strong>
                            <a href="#">
                                <Typography variant="body1" color="secondary" align="center">
                                    <strong>Logout</strong>
                                </Typography>
                            </a>
                        </strong>
                    </Typography> */}
    </>
  )
}

export default ProfileMenu