import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function CompanyMenu() {
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
        КОМПАНИЯМ ▾
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
        <MenuItem onClick={handleClose}>ОПТОВЫЕ ПОСТАВКИ</MenuItem>
        <MenuItem onClick={handleClose}> КАРАМЕЛЬ НА ПАЛОЧКЕ ОПТОМ</MenuItem>
        <MenuItem onClick={handleClose}> КОРПОРАТИВНЫЕ ПОДАКИ</MenuItem>
        <MenuItem onClick={handleClose}>  ЭЛКЕРЫ ОПТОМ</MenuItem>
        
      </Menu>
    </div>
  );
}