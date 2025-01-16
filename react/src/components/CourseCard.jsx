import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material';

function CourseCard({ course, onView }) {
  return (
    <Card
      sx={{ maxWidth: 340, m: 2, boxShadow: 3, cursor: 'pointer' }}
      onClick={() => onView(course)}
    >
      {course.image ? (
        <CardMedia
          component="img"
          height="140"
          image={course.image}
          alt={course.name}
        />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/300x200?text=No+Image"
          alt="No Image Available"
        />
      )}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {course.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Instructor: {course.instructor}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {course.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CourseCard;
