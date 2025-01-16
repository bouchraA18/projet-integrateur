import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  Divider,
  Grid,
  Box,
  Alert
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Preferences() {
  // General settings
  const getInitialSetting = (key, defaultValue) =>
    localStorage.getItem(key) || defaultValue;

  const [language, setLanguage] = useState(getInitialSetting('language', 'en'));
  const [theme, setTheme] = useState(getInitialSetting('theme', 'light'));
  const [notificationFrequency, setNotificationFrequency] = useState(
    getInitialSetting('notificationFrequency', 'daily')
  );
  const [fontSize, setFontSize] = useState(Number(getInitialSetting('fontSize', 14)));

  // Edit Profile state
  const [fullName, setFullName] = useState(localStorage.getItem('fullName') || 'John Doe');
  const [email, setEmail] = useState(localStorage.getItem('email') || 'john.doe@example.com');
  const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem('avatarUrl') || 'https://i.pravatar.cc/150?img=3');

  // Change Password state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // Alerts for success/error messages
  const [profileAlert, setProfileAlert] = useState('');
  const [passwordAlert, setPasswordAlert] = useState('');
  const [generalAlert, setGeneralAlert] = useState('');

  // Persist general preferences in localStorage on change
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('notificationFrequency', notificationFrequency);
  }, [notificationFrequency]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  // --- Handler Functions ---

  // Handle language selection change
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Handle theme change
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  // Handle notification frequency change
  const handleNotificationFrequencyChange = (event) => {
    setNotificationFrequency(event.target.value);
  };

  // Handle font size change via slider
  const handleFontSizeChange = (event, newValue) => {
    setFontSize(newValue);
  };

  // Handle Edit Profile form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('avatarUrl', avatarUrl);
    setProfileAlert('Profile updated successfully!');
    setTimeout(() => setProfileAlert(''), 3000);
  };

  // Handle Change Password form submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setPasswordAlert('New password and confirmation do not match.');
      setTimeout(() => setPasswordAlert(''), 3000);
      return;
    }
    if (!currentPassword || !newPassword) {
      setPasswordAlert('Please fill all password fields.');
      setTimeout(() => setPasswordAlert(''), 3000);
      return;
    }
    // Simulate API call to update password.
    setPasswordAlert('Password changed successfully!');
    setTimeout(() => setPasswordAlert(''), 3000);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  // Handle submission of general settings (Language, Theme, etc.)
  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    setGeneralAlert('General settings updated successfully!');
    setTimeout(() => setGeneralAlert(''), 3000);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper sx={{ p: 3, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Preferences & Account Settings
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Edit Profile Accordion */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Edit Profile</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {profileAlert && <Alert severity="success" sx={{ mb: 2 }}>{profileAlert}</Alert>}
            <Box component="form" onSubmit={handleProfileSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Avatar URL"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    fullWidth
                    helperText="Enter an online image URL"
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button type="submit" variant="contained">
                  Update Profile
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ my: 2 }} />

        {/* Change Password Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Change Password</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {passwordAlert && <Alert severity="info" sx={{ mb: 2 }}>{passwordAlert}</Alert>}
            <Box component="form" onSubmit={handlePasswordSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Current Password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="New Password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm New Password"
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="secondary">
                  Change Password
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ my: 2 }} />

        {/* General Settings Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">General Settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {generalAlert && <Alert severity="success" sx={{ mb: 2 }}>{generalAlert}</Alert>}
            <Box component="form" onSubmit={handleGeneralSubmit} noValidate>
              {/* Preferred Language */}
              <FormControl variant="outlined" fullWidth sx={{ mb: 3 }}>
                <InputLabel id="language-select-label">Preferred Language</InputLabel>
                <Select
                  labelId="language-select-label"
                  value={language}
                  onChange={handleLanguageChange}
                  label="Preferred Language"
                >
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="ar">Arabic</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                </Select>
              </FormControl>

              {/* Theme */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Theme
                </Typography>
                <RadioGroup
                  row
                  value={theme}
                  onChange={handleThemeChange}
                  aria-label="theme"
                  name="theme"
                >
                  <FormControlLabel value="light" control={<Radio />} label="Light" />
                  <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                </RadioGroup>
              </Box>

              {/* Notification Frequency */}
              <FormControl variant="outlined" fullWidth sx={{ mb: 3 }}>
                <InputLabel id="notification-frequency-label">Notification Frequency</InputLabel>
                <Select
                  labelId="notification-frequency-label"
                  value={notificationFrequency}
                  onChange={handleNotificationFrequencyChange}
                  label="Notification Frequency"
                >
                  <MenuItem value="immediately">Immediately</MenuItem>
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                </Select>
              </FormControl>

              {/* Preferred Font Size */}
              <Box sx={{ mb: 3 }}>
                <Typography gutterBottom>
                  Preferred Font Size ({fontSize}px)
                </Typography>
                <Slider
                  value={fontSize}
                  onChange={handleFontSizeChange}
                  aria-labelledby="font-size-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={12}
                  max={20}
                />
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained">
                  Save General Settings
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ mt: 2 }} />

        {/* Preferences Summary */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Current General Settings:
          </Typography>
          <Typography variant="body2">
            Preferred Language: <strong>{language === 'fr' ? 'French' : language === 'ar' ? 'Arabic' : 'English'}</strong>
          </Typography>
          <Typography variant="body2">
            Theme: <strong>{theme === 'light' ? 'Light' : 'Dark'}</strong>
          </Typography>
          <Typography variant="body2">
            Notification Frequency: <strong>{notificationFrequency}</strong>
          </Typography>
          <Typography variant="body2">
            Preferred Font Size: <strong>{fontSize}px</strong>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Preferences;
