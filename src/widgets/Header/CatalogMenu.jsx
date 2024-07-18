import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function CatalogMenu() {
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
        ВЕСЬ КАТАЛОГ ▾
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
        <MenuItem onClick={handleClose}>МАКАРОН</MenuItem>
        <MenuItem onClick={handleClose}> ЭКЛЕРЫ</MenuItem>
        <MenuItem onClick={handleClose}> ПОДАРОЧНЫЕ НАБОРЫ</MenuItem>
        <MenuItem onClick={handleClose}>  КОМБО-НАБОРЫ</MenuItem>
        <MenuItem onClick={handleClose}> КАРАМЕЛЬ НА ПАЛОЧКЕ</MenuItem>
        <MenuItem onClick={handleClose}> ВАФЕЛЬНЫЕ ТРУБОЧКИ</MenuItem>
        <MenuItem onClick={handleClose}> КЕЙК-ПОПСЫ</MenuItem>
      </Menu>
    </div>
  );
}