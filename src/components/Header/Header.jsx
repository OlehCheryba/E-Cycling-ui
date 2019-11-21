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
import FavoriteIcon from '@material-ui/icons/Favorite';
import CartContainer from '../Cart/CartContainer';

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


const Header = ({ login, isAuth, logout, userId, role, handleDrawerOpen }) => {
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
  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem>
        <NavLink to={"/customers/" + userId}>Profile</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={"/customers/" + userId}>lal</NavLink>
      </MenuItem>
      <MenuItem onClick={() => {
        logout();
        handleProfileMenuClose();
      }}>
        Logout
      </MenuItem>
    </Menu>
  ); 

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <NavLink to='/' className="text-white">E-Cycling</NavLink>
          </Typography>
          <div className={classes.grow} />  
          <div className={classes.sectionDesktop}>
            <NavLink className="mx-3 my-auto text-white" to="/">Products</NavLink>
            <NavLink className="mx-3 my-auto text-white" to="/vacancies">Vacancies</NavLink>
            <NavLink className="mx-3 my-auto text-white" to="/customers">Customers</NavLink>
            {(role === 'owner' || role === 'admin') && (
              <NavLink className="mx-3 my-auto text-white" to="/admin">Admin panel</NavLink>
            )} 
          </div>
          <CartContainer />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={7} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
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
      {renderProfileMenu}
    </div>
  )
}

export default Header