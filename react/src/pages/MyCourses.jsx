import React, { useState, useContext } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CourseCard from '../components/CourseCard';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

function MyCourses() {
  const navigate = useNavigate();
  // Layout state: 'grid' or 'list'
  const [layout, setLayout] = useState('grid');

  // Use context for search term (provided from Navbar)
  const { searchTerm } = useContext(SearchContext);

  // State for filter menu
  const [anchorElLayout, setAnchorElLayout] = useState(null);
  const openLayout = Boolean(anchorElLayout);

  const handleLayoutButtonClick = (event) => {
    setAnchorElLayout(event.currentTarget);
  };

  const handleCloseLayoutMenu = () => {
    setAnchorElLayout(null);
  };

  const handleLayoutSelect = (newLayout) => {
    setLayout(newLayout);
    handleCloseLayoutMenu();
  };

  // Sample courses using picsum.photos images
  const courses = [
    {
      id: 1,
      name: 'Civics and Government',
      description: 'Overview of governmental structures and civic responsibilities.',
      instructor: 'Dr. Smith',
      image: 'https://picsum.photos/seed/picsum1/300/200'
    },
    {
      id: 2,
      name: 'Public Policy Analysis',
      description: 'Learn to analyze public policies and their impacts.',
      instructor: 'Prof. Johnson',
      image: 'https://picsum.photos/seed/picsum2/300/200'
    },
    {
      id: 3,
      name: 'Economic Governance',
      description: 'Introduction to economic policies and governance.',
      instructor: 'Dr. Brown',
      image: 'https://picsum.photos/seed/picsum3/300/200'
    }
  ];

  // Filter courses based on the search term
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewCourse = (course) => {
    navigate('/class-detail');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Classes
      </Typography>

      {/* Layout Filter Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={handleLayoutButtonClick}>
          <FilterListIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElLayout}
          open={openLayout}
          onClose={handleCloseLayoutMenu}
        >
          <MenuItem onClick={() => handleLayoutSelect('grid')}>Grid View</MenuItem>
          <MenuItem onClick={() => handleLayoutSelect('list')}>List View</MenuItem>
        </Menu>
      </Box>

      {layout === 'grid' ? (
        // Grid view: display course cards (clickable)
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onView={handleViewCourse} />
          ))}
        </Box>
      ) : (
        // List view: display a clickable list with avatars
        <List>
          {filteredCourses.map((course) => (
            <ListItem key={course.id} button onClick={() => handleViewCourse(course)}>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  src={course.image}
                  alt={course.name}
                  sx={{ width: 80, height: 80, mr: 2 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={course.name}
                secondary={`${course.instructor} - ${course.description}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default MyCourses;
