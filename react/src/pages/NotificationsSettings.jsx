import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  Paper,
  IconButton
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

function NotificationsSettings() {
  // Sample notification settings data
  const [settings, setSettings] = useState([
    {
      category: 'Assignment',
      options: [
        {
          name: 'Assignment Notifications',
          web: true,
          email: true
        },
        {
          name: 'Assignment Due Soon',
          web: true,
          email: false
        }
      ]
    },
    {
      category: 'BigBlueButton',
      options: [
        {
          name: 'Webinar Notifications',
          web: true,
          email: true
        },
        {
          name: 'Webinar Starting Soon',
          web: true,
          email: false
        }
      ]
    },
    {
      category: 'Feedback',
      options: [
        {
          name: 'Feedback Received',
          web: true,
          email: true
        },
        {
          name: 'Feedback Posted',
          web: true,
          email: true
        }
      ]
    }
  ]);

  const handleToggle = (categoryIndex, optionIndex, method) => {
    const updatedSettings = [...settings];
    updatedSettings[categoryIndex].options[optionIndex][method] = !updatedSettings[categoryIndex].options[optionIndex][method];
    setSettings(updatedSettings);
    // Implement API call or state persistence here
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <SettingsIcon sx={{ mr: 1 }} />
        <Typography variant="h4">Notifications Settings</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="notifications settings table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Notification Option</TableCell>
              <TableCell align="center">Web</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {settings.map((category, catIdx) => (
              category.options.map((option, optIdx) => (
                <TableRow key={`${catIdx}-${optIdx}`}>
                  {optIdx === 0 && (
                    <TableCell rowSpan={category.options.length} sx={{ verticalAlign: 'middle' }}>
                      {category.category}
                    </TableCell>
                  )}
                  <TableCell>{option.name}</TableCell>
                  <TableCell align="center">
                    <Switch
                      checked={option.web}
                      onChange={() => handleToggle(catIdx, optIdx, 'web')}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Switch
                      checked={option.email}
                      onChange={() => handleToggle(catIdx, optIdx, 'email')}
                      color="primary"
                    />
                  </TableCell>
                </TableRow>
              ))
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default NotificationsSettings;
