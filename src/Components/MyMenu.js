import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'

export default function MyMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuClicked = (linkData)=>{
    history.push(linkData)
    handleClose()
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" onClick={handleClick}>
      <MenuIcon />
      </Button>
     
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=> menuClicked('/')}>Home</MenuItem>
        <MenuItem onClick={()=> menuClicked('/covid19')}>Covid-19</MenuItem>
       
        <MenuItem onClick={()=> menuClicked('/tobuy')}>To Buy</MenuItem>
        <MenuItem onClick={()=> menuClicked('/todo')}>To Do</MenuItem>
        <MenuItem onClick={()=> menuClicked('/todev')}>To Dev.</MenuItem>
      </Menu>
    </div>
  );
}
