import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

function Grades() {
  // Dummy data
  const grades = [
    { course: 'Introduction to React', grade: 'A' },
    { course: 'Data Structures', grade: 'B+' },
    { course: 'Linear Algebra', grade: 'A-' },
  ];

  return (
    <Box sx={{ mb: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Grades
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {grades.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.course}</TableCell>
                <TableCell>{item.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default Grades;
