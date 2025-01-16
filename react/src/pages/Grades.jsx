import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';

function Grades() {
  // Dummy grade data – replace with real data or fetch from an API.
  const grades = [
    { course: 'Civics and Government', grade: 'A' },
    { course: 'Public Policy Analysis', grade: 'B+' },
    { course: 'Economic Governance', grade: 'A-' }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 3, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Grades
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List>
          {grades.map((item, index) => (
            <ListItem key={index} sx={{ py: 1 }}>
              <ListItemText
                primary={item.course}
                secondary={
                  <Typography variant="body1" color="text.primary">
                    Grade: <strong>{item.grade}</strong>
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default Grades;
