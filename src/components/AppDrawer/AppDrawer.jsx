import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

const AppDrawer = ({ isDrawerOpen, closeDrawer, isAuth, role, login, logout }) => {
  return (
    <Drawer
      open={isDrawerOpen} onClose={closeDrawer} 
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
      {isAuth && (
        <>
          <MenuItem>
            <NavLink to={"/customer"}>Profile</NavLink>
          </MenuItem>
          {(role === 'owner' || role === 'admin') && (
            <MenuItem>
              <NavLink to="/admin">Admin panel</NavLink>
            </MenuItem>
          )} 
          <MenuItem>
            <NavLink to={"/customer"}>lal</NavLink>
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