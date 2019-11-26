import React from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ProfileMenu from './ProfileMenu';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const Header = ({ login, isAuth, logout, role, totalAmount, openDrawer, openCart }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isProfileMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              onClick={openDrawer}
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            <NavLink to='/' className="text-white">E-Cycling</NavLink>
          </Typography>
          <div className={classes.grow} />  
          <div className={classes.sectionDesktop}>
            <NavLink className="mx-3 my-auto text-white" to="/">Products</NavLink>
            <NavLink className="mx-3 my-auto text-white" to="/vacancies">Vacancies</NavLink>
            {(role === 'owner' || role === 'admin') && (
              <NavLink className="mx-3 my-auto text-white" to="/admin">Admin panel</NavLink>
            )} 
          </div>
          <IconButton onClick={openCart} color="inherit">
            <Badge badgeContent={totalAmount} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
          <div className={classes.sectionDesktop}>
            {isAuth && (
              <IconButton
                edge="end"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className='my-auto'
              >
                {login}⮟
              </IconButton>
            )} 
            {!isAuth && (
              <NavLink className="my-auto mx-3 text-white" to="/login">Login</NavLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <ProfileMenu
        id={menuId}
        anchorEl={anchorEl}
        handleProfileMenuClose={handleProfileMenuClose}
        logout={logout}
        isProfileMenuOpen={isProfileMenuOpen}
      />
    </div>
  )
}

export default Header