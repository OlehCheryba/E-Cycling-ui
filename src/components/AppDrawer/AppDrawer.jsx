import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { IconButton, Badge } from '@material-ui/core';
import { FavoriteIcon } from '@material-ui/icons/Favorite';
import { NavLink } from 'react-router-dom';
import CartContainer from '../Cart/CartContainer';
import MenuItem from '@material-ui/core/MenuItem';

const AppDrawer = ({ isDrawerOpen, handleDrawerClose, isAuth, role, login, logout, userId }) => {
  return (
    <Drawer
      open={isDrawerOpen} onClose={handleDrawerClose} 
    > 
      <MenuItem>
        <NavLink className="mx-3" to="/">Products</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink className="mx-3" to="/vacancies">Vacancies</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink className="mx-3" to="/customers">Customers</NavLink>
      </MenuItem>
      <CartContainer /> 
      {isAuth && (
        <>
          <MenuItem>
            <NavLink to={"/customers/" + userId}>Profile</NavLink>
          </MenuItem>
          {(role === 'owner' || role === 'admin') && (
            <MenuItem>
              <NavLink to="/admin">Admin panel</NavLink>
            </MenuItem>
          )} 
          <MenuItem>
            <NavLink to={"/customers/" + userId}>lal</NavLink>
          </MenuItem>
          <MenuItem onClick={logout}>
            Logout
          </MenuItem>
        </>
      )} 
      {!isAuth && (
        <MenuItem>
          <NavLink className="mx-3" to="/login">Login</NavLink>
        </MenuItem>
      )}
    </Drawer>
  )
}

export default AppDrawer