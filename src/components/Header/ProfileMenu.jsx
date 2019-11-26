import React from 'react';
import { MenuItem, Menu } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const ProfileMenu = ({ anchorEl, id, isProfileMenuOpen, handleProfileMenuClose, logout }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={id}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem>
        <NavLink to={"/customer"}>Profile</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={"/customer"}>lal</NavLink>
      </MenuItem>
      <MenuItem onClick={() => {
        logout();
        handleProfileMenuClose();
      }}>
        Logout
      </MenuItem>
    </Menu>
  )
}

export default ProfileMenu