import { Paper,Button,Typography,IconButton,Box,Avatar } from '@mui/material'
import {React, useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';


import Search from '../Header/HeaderContents/Search';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import NotificationPanel from './Notification/NotificationPanel';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerClick = () => {
        setOpen(!open)
    }
    
  return (
      <>
          <header className="box-border fixed top-0 right-0 left-auto flex flex-col w-full bg-white shadow-md z-1100">
              <div className="min-h-[64px] px-[25px] relative flex items-center box-border color-[rgb(148, 157, 178)] flex-row divide-x w-full justify-between">
                  <div className="relative pr-3 text-xl font-extrabold text-center font-display">
                      <Typography variant="h6" color="secondary" align="center">FABRIL DIGITAL</Typography>
                  </div>
                  <div className="place-content-start">
                      <IconButton color="inherit" onClick={handleDrawerClick}>
                          <MenuIcon color="iconColor" />
                      </IconButton>
                  </div>
                  <div className="flex-1 pl-2">
                      <Search />
                  </div>
                  <div className="flex flex-row justify-between divide-x">
                        <NotificationPanel/>
                    <div className="flex flex-1">
                        <ProfileMenu/>
                    </div>
                  </div>
              </div>
          </header>
      </>
)
}

export default Header