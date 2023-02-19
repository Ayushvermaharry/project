import {React, useState} from 'react'
import { Box, Drawer,Paper, Typography } from '@mui/material'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SideDrawer = (props) => {
    const [open, setOpen] = useState(true)

  return (
    <>
    <Drawer 
        open={open}
        variant="persistent"
        anchor="left"
        sx={{width:"100%", m:10, p:5,flex:1}}
        >
        
            <Paper elevation={2}>
                <List>
                    <ListItem>
                        <Typography variant="h7" color="secondary" align="left">Dashboard</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Sign Out" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>
    </Drawer>
    </>
  )
}

export default SideDrawer