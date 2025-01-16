import React from 'react';
import { Box, Paper, Typography, List, ListItem } from '@mui/material';

function EnrolledCourses() {
  // Dummy data
  const courses = [
    { id: 1, name: 'Introduction to React' },
    { id: 2, name: 'Data Structures' },
    { id: 3, name: 'Linear Algebra' },
  ];

  return (
    <Box sx={{ mb: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Enrolled Courses</Typography>
        <List>
          {courses.map((course) => (
            <ListItem key={course.id}>{course.name}</ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default EnrolledCourses;
