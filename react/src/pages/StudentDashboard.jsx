import React, { useState } from 'react';
import { Box, Typography, Divider, List, ListItem } from '@mui/material';

function StudentDashboard() {
  // Sample timeline data (one frame for simplicity)
  const timelineItem = {
    activity: 'Assignment "History of Gov Policies" submitted.',
    date: '2025-04-05 10:00 AM'
  };

  // Sample assignments data
  const assignments = [
    {
      id: 1,
      title: 'History of Gov Policies',
      description: 'Write an essay on the evolution of governmental policies over the last century.',
      dueDate: '2025-04-20',
      status: 'Submitted'
    },
    {
      id: 2,
      title: 'Budget Analysis',
      description: 'Analyze the state budget and prepare a brief report.',
      dueDate: '2025-04-25',
      status: 'Pending'
    }
  ];

  // Sample quizzes data
  const quizzes = [
    {
      id: 1,
      title: 'Civics 101 Quiz',
      dueDate: '2025-04-18',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Ethics in Government Quiz',
      dueDate: '2025-04-22',
      status: 'Upcoming'
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>

      {/* Timeline Section */}
      <Box sx={{ my: 4, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
        <Typography variant="h6">Timeline</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1">{timelineItem.activity}</Typography>
        <Typography variant="caption" color="text.secondary">
          {timelineItem.date}
        </Typography>
      </Box>

      {/* Assignments Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Current Assignments
        </Typography>
        <List>
          {assignments.map((assign) => (
            <ListItem key={assign.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="body1">
                <strong>{assign.title}</strong> - Due: {assign.dueDate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {assign.description}
              </Typography>
              <Typography variant="caption" color={assign.status === 'Submitted' ? 'green' : 'orange'}>
                Status: {assign.status}
              </Typography>
              <Divider sx={{ my: 1, width: '100%' }} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Quizzes Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Quizzes
        </Typography>
        <List>
          {quizzes.map((quiz) => (
            <ListItem key={quiz.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="body1">
                <strong>{quiz.title}</strong> - Due: {quiz.dueDate}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Status: {quiz.status}
              </Typography>
              <Divider sx={{ my: 1, width: '100%' }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default StudentDashboard;
