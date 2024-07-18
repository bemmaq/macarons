import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function MenuPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        style={{color:'black'}}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        ПОДАРОЧНЫЕ НАБОРЫ ▾
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>ВСЕ НАБОРЫ</MenuItem>
        <MenuItem onClick={handleClose}> ДЕНЬ УЧИТЕЛЯ</MenuItem>
        <MenuItem onClick={handleClose}> ДЕНЬ РОЖДЕНИЯ</MenuItem>
        <MenuItem onClick={handleClose}>  МАКАРОНС КЛАСИЧЕСКИЕ</MenuItem>
        <MenuItem onClick={handleClose}> СВАДЕБНЫЕ ПРЕДЛОЖЕНИЯ</MenuItem>
        <MenuItem onClick={handleClose}> КЕНДИ-БАРЫ</MenuItem>
        <MenuItem onClick={handleClose}> ДЕТСКИЕ ПРАЗДНИКИ</MenuItem>
      </Menu>
    </div>
  );
}