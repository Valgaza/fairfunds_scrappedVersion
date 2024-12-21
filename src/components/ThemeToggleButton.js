// src/components/ThemeToggleButton.js
'use client';

import { useState } from 'react';
import { IconButton, Popover, Switch, Typography, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon
import { useTheme } from '@mui/material/styles';

export default function ThemeToggleButton({ toggleTheme, isDarkMode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme(); // Access the current theme

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'theme-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        {isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box
          sx={{
            p: 2,
            backgroundColor: theme.palette.background.paper,
            borderRadius: '12px', // Rounded edges
            minWidth: '200px',    // Ensure the pop-up has a decent width
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the content horizontally
            justifyContent: 'center', // Center the content vertically
          }}
        >
          <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
            Toggle Theme
          </Typography>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            color="primary"
          />
        </Box>
      </Popover>
    </div>
  );
}
