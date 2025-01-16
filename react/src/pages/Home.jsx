import React from 'react';
import '../styles/global.scss'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Button,
  Divider 
} from '@mui/material';

function Home() {
  // Dummy data for recent announcements and upcoming events.
  const announcements = [
    'Governmental policy update: New guidelines for public school funding.',
    'Platform Notice: Maintenance scheduled for this weekend.',
    'Important: New deadlines for exam submissions have been set.'
  ];

  const upcomingEvents = [
    { title: 'Midterm Exam', date: 'April 30, 2025' },
    { title: 'Webinar on Public Policy', date: 'May 5, 2025' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero/Banner Section */}
      <Paper 
        sx={{
          p: 4,
          mb: 4,
          background: 'linear-gradient(135deg, #003366 30%, #0055a5 90%)',
          color: '#fff'
        }}
        elevation={4}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Governmental Education Platform
        </Typography>
        <Typography variant="h6" align="center">
          Manage your classes, assignments, and stay updated with the latest public sector education news.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button variant="contained" color="secondary" sx={{ mr: 2 }} href="/dashboard">
            Dashboard
          </Button>
          <Button variant="outlined" color="inherit" href="/my-courses">
            My Classes
          </Button>
        </Box>
      </Paper>

      {/* Announcements Section */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Announcements
            </Typography>
            {announcements.map((ann, index) => (
              <Box key={index} sx={{ mb: 1 }}>
                <Typography variant="body1">• {ann}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Upcoming Events Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Upcoming Events
            </Typography>
            {upcomingEvents.map((event, index) => (
              <Box key={index} sx={{ mb: 1 }}>
                <Typography variant="body1">
                  • <strong>{event.title}</strong> – {event.date}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Quick Actions / Shortcuts Section */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }} elevation={2}>
            <Typography variant="h6" gutterBottom>
              Dashboard
            </Typography>
            <Typography variant="body2" gutterBottom>
              View your overall activity and progress.
            </Typography>
            <Button variant="contained" color="primary" href="/dashboard">
              Go to Dashboard
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }} elevation={2}>
            <Typography variant="h6" gutterBottom>
              My Classes
            </Typography>
            <Typography variant="body2" gutterBottom>
              Access your assigned classes and materials.
            </Typography>
            <Button variant="contained" color="primary" href="/my-courses">
              View Classes
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }} elevation={2}>
            <Typography variant="h6" gutterBottom>
              Grades & Results
            </Typography>
            <Typography variant="body2" gutterBottom>
              Check your latest grades and feedback.
            </Typography>
            <Button variant="contained" color="primary" href="/grades">
              View Grades
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Additional Info/Call-to-Action if needed */}
      <Paper sx={{ p: 3, textAlign: 'center' }} elevation={2}>
        <Typography variant="body1">
          Stay informed with real-time updates and manage your academic responsibilities easily.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Home;
