import React from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Notifications() {
  // Sample notifications data
  const notifications = [
    { id: 1, type: 'Assignment', message: 'Assignment 1 submitted for Introduction to React.', date: '2025-04-05 10:00 AM' },
    { id: 2, type: 'BigBlueButton', message: 'Webinar scheduled for Data Structures.', date: '2025-04-04 09:00 AM' },
    { id: 3, type: 'Feedback', message: 'Your feedback on Web Development has been received.', date: '2025-04-03 08:30 AM' },
    // Add more notifications as needed
  ];

  // State for search filter
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredNotifications = notifications.filter(notification =>
    notification.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Notifications
      </Typography>

      {/* Search Bar */}
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Notifications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Notifications List */}
      {filteredNotifications.length === 0 ? (
        <Typography variant="body1" color="text.secondary" align="center">
          You have no notifications.
        </Typography>
      ) : (
        <List>
          {filteredNotifications.map(notification => (
            <React.Fragment key={notification.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={`${notification.type}: ${notification.message}`}
                  secondary={notification.date}
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      )}
    </Container>
  );
}

export default Notifications;
