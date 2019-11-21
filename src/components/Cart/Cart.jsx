import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, IconButton, Badge } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Cart = ({ items }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const itemsCount = Object.keys(items).length

  return (
    <>
      <IconButton onClick={handleOpen} color="inherit">
        <Badge badgeContent={itemsCount} color="secondary">
          <ShoppingBasketIcon/>
        </Badge>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2>Text in a modal</h2>
          <p>
            {JSON.stringify(items)}
          </p>
        </div>
      </Modal>
    </>
  );
}

export default Cart