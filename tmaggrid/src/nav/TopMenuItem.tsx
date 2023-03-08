import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const TopMenuItem0 = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export interface ISubMenuItem {
  text: string,
  name: string
};

export interface TopMenuCallbackProps {
  onSelect(name: string): void
}

export interface ITopMenuItem {
  text: string,
  callback: TopMenuCallbackProps
  items: ISubMenuItem[]
};

export interface TopMenuItemProps {
  tmi: ITopMenuItem;
}


//export const TopMenuItem = (tmi : ITopMenuItem) => {
//export const TopMenuItem = (tmi: ITopMenuItem) => {

export const TopMenuItem: React.FC<TopMenuItemProps> = ({ tmi }: TopMenuItemProps) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClick = (onSelect: (name: string) => void, name: string) => {
    handleClose();
    onSelect(name);
  };

  const items = tmi.items.map(smi => <MenuItem onClick={() => onClick(tmi.callback.onSelect,smi.name)}>{smi.text}</MenuItem>);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {tmi.text}
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
        {items}
      </Menu>
    </div>
  );
}
