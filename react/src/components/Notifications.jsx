import React from 'react';
import { Box, Paper, Typography, List, ListItem } from '@mui/material';

function Notifications() {
  // Dummy data
  const notifications = [
    'Assignment 1 due tomorrow',
    'Midterm exam next week',
    'New discussion post in Data Structures',
  ];

  return (
    <Box sx={{ mb: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Notifications</Typography>
        <List>
          {notifications.map((note, index) => (
            <ListItem key={index}>{note}</ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default Notifications;
