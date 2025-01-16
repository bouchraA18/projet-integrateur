import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';

function AssignmentDetail() {
  // Dummy assignment details
  const assignment = {
    title: 'History of Gov Policies',
    description: 'Write an essay discussing the evolution of government policies over the last century.',
    dueDate: '2025-04-20',
    instructions: 'Please submit your essay in PDF format. Maximum 2000 words.'
  };

  const handleSubmit = () => {
    alert('Submitting your assignment...');
  };

  return (
    <Paper sx={{ m: 3, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {assignment.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {assignment.description}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Due Date: {assignment.dueDate}
      </Typography>
      <Typography variant="body2" sx={{ my: 2 }}>
        {assignment.instructions}
      </Typography>
      <Button variant="contained" onClick={handleSubmit}>
        Submit Assignment
      </Button>
    </Paper>
  );
}

export default AssignmentDetail;
