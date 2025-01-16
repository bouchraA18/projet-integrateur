import React, { useState } from 'react';
import {
  Box,
  Container,
  Avatar,
  Typography,
  Paper,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Button
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';

function Profile() {
  // Dummy user data; in a real application, replace with API data.
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    lastLogin: 'March 25, 2025, 10:30 AM',
    enrolledCourses: [
      { id: 1, name: 'Introduction to React' },
      { id: 2, name: 'Data Structures' },
      { id: 3, name: 'Web Development' }
    ],
    bio: 'A dedicated student focused on web development, eager to learn innovative technologies and methodologies.'
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Profile Header */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              src={user.avatarUrl}
              alt={user.name}
              sx={{ width: 150, height: 150, margin: '0 auto' }}
            />
            <Typography variant="h5" sx={{ mt: 2 }}>
              {user.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Student
            </Typography>
          </Grid>
          {/* Profile Details */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6">About Me</Typography>
            <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
              {user.bio}
            </Typography>
            <Divider />
            <Box sx={{ mt: 2 }}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Email" secondary={user.email} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccessTimeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Last Login" secondary={user.lastLogin} />
                </ListItem>
              </List>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Enrolled Courses
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {user.enrolledCourses.map((course) => (
                <Chip
                  key={course.id}
                  icon={<SchoolIcon />}
                  label={course.name}
                  color="primary"
                />
              ))}
            </Box>
          </Grid>
          {/* Profile Actions */}
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Edit Profile
              </Button>
              <Button variant="outlined" color="primary">
                View Activity
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Profile;
