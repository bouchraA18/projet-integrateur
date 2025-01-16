import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Badge, InputBase, Button, Menu, MenuItem, Divider, Avatar, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/navbar.scss';
import { SearchContext } from '../context/SearchContext';

function Navbar() {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  // Profile menu state
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const openProfile = Boolean(anchorElProfile);
  const handleProfileClick = (event) => setAnchorElProfile(event.currentTarget);
  const handleCloseProfileMenu = () => setAnchorElProfile(null);
  const handleMenuNavigation = (path) => {
    navigate(path);
    handleCloseProfileMenu();
  };

  // Notifications menu state
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);
  const openNotifications = Boolean(anchorElNotifications);
  const handleNotificationsClick = (event) => setAnchorElNotifications(event.currentTarget);
  const handleCloseNotificationsMenu = () => setAnchorElNotifications(null);
  const notifications = [
    { id: 1, message: 'Assignment 1 submission received.' },
    { id: 2, message: 'New policy update available.' },
    { id: 3, message: 'Exam schedule has been updated.' },
  ];

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="navbar__toolbar">
        {/* Logo / Branding */}
        <Box className="navbar__logo" onClick={() => navigate('/')}>
          <h1>GovEd Platform</h1>
        </Box>

        {/* Search Bar */}
        <Box className="navbar__search">
          <SearchIcon className="navbar__searchIcon" />
          <InputBase
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="navbar__searchInput"
          />
        </Box>

        {/* Navigation Links */}
        <Box className="navbar__links">
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/my-courses">My Classes</Button>
        </Box>

        {/* Notifications */}
        <IconButton color="inherit" onClick={handleNotificationsClick}>
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Menu
          anchorEl={anchorElNotifications}
          open={openNotifications}
          onClose={handleCloseNotificationsMenu}
          className="navbar__notificationsMenu"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {/* Search in Notifications */}
          <Box className="navbar__notificationsSearch">
            <SearchIcon />
            <InputBase placeholder="Search Notifications..." />
          </Box>
          <Divider />
          {notifications.length === 0 ? (
            <Box sx={{ p: 2 }}>
              <p>You have no notifications.</p>
            </Box>
          ) : (
            notifications.map((notif) => (
              <MenuItem key={notif.id}>{notif.message}</MenuItem>
            ))
          )}
          <Divider />
          <MenuItem onClick={() => { navigate('/notifications'); handleCloseNotificationsMenu(); }}>
            See All
          </MenuItem>
          <MenuItem onClick={() => { navigate('/notifications-settings'); handleCloseNotificationsMenu(); }}>
            <SettingsIcon fontSize="small" sx={{ mr: 1 }} />
            Settings
          </MenuItem>
        </Menu>

        {/* Profile */}
        <IconButton color="inherit" onClick={handleProfileClick}>
          <Avatar src="https://i.pravatar.cc/150?img=3" />
          <ExpandMoreIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElProfile}
          open={openProfile}
          onClose={handleCloseProfileMenu}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={() => handleMenuNavigation('/profile')}>Profile</MenuItem>
          <MenuItem onClick={() => handleMenuNavigation('/grades')}>Grades</MenuItem>
          <Divider />
          <MenuItem onClick={() => handleMenuNavigation('/preferences')}>Language & Preferences</MenuItem>
          <Divider />
          <MenuItem onClick={() => handleMenuNavigation('/logout')}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
