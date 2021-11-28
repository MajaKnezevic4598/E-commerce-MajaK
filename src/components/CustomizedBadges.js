import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  icon: {
   fontSize:"7vh"
  },
});


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    width:"3vh",
    height:"3vh",
    backgroundColor:"gray",
    fontSize:"2vh",
    borderRadius:"50%"

  
   
    
  },
}));

export default function CustomizedBadges() {
    const cartState = useSelector((state) => state.shop.cart);
    const numberOfProducts = Object.keys(cartState).length;
    const classes = useStyles();
  return (
    <IconButton aria-label="cart" >
      <StyledBadge badgeContent={numberOfProducts} color="secondary">
        <ShoppingCartIcon className={classes.icon} />
      </StyledBadge>
    </IconButton>
  );
}
