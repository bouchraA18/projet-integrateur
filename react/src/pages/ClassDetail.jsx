import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
  TextField
} from '@mui/material';

// A helper component to render tab panels
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`class-detail-tabpanel-${index}`}
      aria-labelledby={`class-detail-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function ClassDetail() {
  // State for the active tab: 0=Lessons, 1=Assignments, 2=Exams
  const [tabValue, setTabValue] = useState(0);

  // Sample data – replace with real API data as needed

  // Lessons data: Represents all instructional content.
  const lessons = [
    {
      id: 1,
      title: 'Lesson 1: Introduction',
      description: 'Overview of the fundamental concepts in civics and government.'
    },
    {
      id: 2,
      title: 'Lesson 2: Policy Formation',
      description: 'Insight into how public policies are designed and implemented.'
    }
  ];

  // Assignments data
  const assignments = [
    {
      id: 1,
      title: 'Assignment: Essay on Civic Duties',
      description: 'Discuss the role of citizens in a democracy.',
      dueDate: '2025-04-20',
      status: 'Submitted' // or 'Pending'
    },
    {
      id: 2,
      title: 'Assignment: Policy Analysis',
      description: 'Analyze a recent governmental policy.',
      dueDate: '2025-04-25',
      status: 'Pending'
    }
  ];

  // Exams data, including a duration (in minutes) and a due time (as ISO string)
  const exams = [
    {
      id: 1,
      title: 'Midterm Exam: Government Structures',
      description: 'Complete the multiple-choice exam covering the first half of the course.',
      duration: 60, // minutes
      dueTime: '2025-04-30T15:00:00', // ISO date/time string
      status: 'Active', // could be 'Active' or 'Closed'
      result: null // if the exam is graded, result can be a grade (e.g., 'A', 'B+')
    }
  ];

  // For demonstration, we compute a simple exam timer
  const [isExamDeliverable, setIsExamDeliverable] = useState(true);
  const currentTime = new Date();

  useEffect(() => {
    // For each exam, check if current time is past the dueTime.
    // (In a real app, you would handle this per exam.)
    if (exams.length > 0) {
      const examDueTime = new Date(exams[0].dueTime);
      if (currentTime > examDueTime) {
        setIsExamDeliverable(false);
      } else {
        setIsExamDeliverable(true);
      }
    }
  }, [currentTime, exams]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleDeliverAssignment = (assignment) => {
    alert(`Delivering assignment: ${assignment.title}`);
    // Implement file upload and submission logic here.
  };

  const handleDeliverExam = (exam) => {
    if (!isExamDeliverable) {
      alert('The exam time is over. You cannot deliver the exam.');
    } else {
      alert(`Delivering exam: ${exam.title}`);
      // Implement exam delivery (e.g., file or online quiz submission) logic here.
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Class Detail: Civics and Government
      </Typography>
      <Paper sx={{ mt: 2 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="Class Content Tabs"
        >
          <Tab label="Lessons" id="class-detail-tab-0" aria-controls="class-detail-tabpanel-0" />
          <Tab label="Assignments" id="class-detail-tab-1" aria-controls="class-detail-tabpanel-1" />
          <Tab label="Exams & Results" id="class-detail-tab-2" aria-controls="class-detail-tabpanel-2" />
        </Tabs>
        <Divider />

        {/* Lessons Tab */}
        <TabPanel value={tabValue} index={0}>
          <List>
            {lessons.map((lesson) => (
              <ListItem key={lesson.id}>
                <ListItemText
                  primary={lesson.title}
                  secondary={lesson.description}
                />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        {/* Assignments Tab */}
        <TabPanel value={tabValue} index={1}>
          <List>
            {assignments.map((assignment) => (
              <ListItem
                key={assignment.id}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <ListItemText
                  primary={assignment.title}
                  secondary={`Due: ${assignment.dueDate} – ${assignment.description}`}
                />
                <Box sx={{ mt: 1 }}>
                  <Button
                    variant="contained"
                    onClick={() => handleDeliverAssignment(assignment)}
                  >
                    Deliver Assignment
                  </Button>
                </Box>
                <Divider sx={{ my: 1, width: '100%' }} />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        {/* Exams & Results Tab */}
        <TabPanel value={tabValue} index={2}>
          <List>
            {exams.map((exam) => (
              <ListItem key={exam.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <ListItemText
                  primary={exam.title}
                  secondary={`Duration: ${exam.duration} minutes | Due: ${new Date(exam.dueTime).toLocaleString()}`}
                />
                <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    onClick={() => handleDeliverExam(exam)}
                    disabled={!isExamDeliverable}
                  >
                    {isExamDeliverable ? 'Deliver Exam' : 'Exam Closed'}
                  </Button>
                  {exam.result && (
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Result: {exam.result}
                    </Typography>
                  )}
                </Box>
                <Divider sx={{ my: 1, width: '100%' }} />
              </ListItem>
            ))}
          </List>
        </TabPanel>
      </Paper>
    </Container>
  );
}

export default ClassDetail;
