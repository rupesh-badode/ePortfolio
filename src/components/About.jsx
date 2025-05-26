import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade, Paper, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const About = () => {
  const [showSchool, setShowSchool] = useState(false);
  const [showCollege, setShowCollege] = useState(false);
  const [showInternship, setShowInternship] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSchool(true), 500);
    const timer2 = setTimeout(() => setShowCollege(true), 1500);
    const timer3 = setTimeout(() => setShowCourses(true), 2500);
    const timer4 = setTimeout(() => setShowInternship(true), 3500);


    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);

    };
  }, []);

  return (
    <Container>
      <Box sx={{ p: 4 }}>
   
        {/* School Section */}
        <Fade in={showSchool} timeout={1000}>
          <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
            <Typography variant="h6">🏫 Abhinav Public School</Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              2018 – 2022
            </Typography>
            <Typography variant="body1">
              I studied at Abhinav public High School, where I developed a strong foundation in mathematics and science.
            </Typography>
          </Paper>
        </Fade>


        {/* College Section */}
        <Fade in={showCollege} timeout={1000}>
          <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
            <Typography variant="h6">🎓 SDITS College</Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              2022 – 2024
            </Typography>
            <Typography variant="body1" gutterBottom>
              I completed my B.Tech graduation from RGPV University with a degree in Computer Science.
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              🔧 Major Project:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="E-commerce Web Application"
                  secondary="Built using React, Firebase, and FakeStore API with user authentication and shopping cart."
                />
              </ListItem>
            </List>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              🛠️ Minor Project:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="Portfolio Website"
                  secondary="Created with HTML, CSS, and JavaScript. Hosted on GitHub Pages."
                />
              </ListItem>
            </List>
          </Paper>
        </Fade>


                                {/* Technology Courses Section */}
        <Fade in={showCourses} timeout={1000}>
        <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
            <Typography variant="h6">📚 Courses</Typography>
            <Typography variant="body1" gutterBottom>
            I completed several courses and certifications to strengthen my technical skills and stay updated with industry trends.
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Aug 2022 – Dec 2022
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                    <CheckCircleIcon color="info" />
                    </ListItemIcon>
                    <ListItemText
                    primary="Frontend Development with React"
                    secondary="Coursera - Learned React fundamentals, hooks, and component-based development."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                    <CheckCircleIcon color="info" />
                    </ListItemIcon>
                    <ListItemText
                    primary="JavaScript Algorithms and Data Structures"
                    secondary="freeCodeCamp - Mastered JS fundamentals, ES6, and problem-solving."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                    <CheckCircleIcon color="info" />
                    </ListItemIcon>
                    <ListItemText
                    primary="Responsive Web Design"
                    secondary="Udemy - Covered HTML5, CSS3, and building mobile-first layouts."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                    <CheckCircleIcon color="info" />
                    </ListItemIcon>
                    <ListItemText
                    primary="Firebase Essentials"
                    secondary="Google Cloud - Explored Firebase Authentication, Firestore, and Hosting."
                    />
                </ListItem>
            </List>
        </Paper>
        </Fade>




        {/* Internship Section */}
        <Fade in={showInternship} timeout={1000}>
          <Paper elevation={3} sx={{ p: 3 ,mb: 2}}>
            <Typography variant="h6">💼 Internship at Signamius tech Indore</Typography>
             <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Jan 2025 – Present
            </Typography>
            <Typography variant="body1" gutterBottom>
              I worked as a Frontend Developer Intern, where I gained hands-on experience in building responsive user interfaces.
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              ✅ Responsibilities:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Developed UI components using React and Tailwind-CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Integrated REST APIs and handled state with Redux" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Collaborated using Git, GitHub, and vercel tools like Tech" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Participated in code reviews and team meetings" />
               </ListItem>
               <ListItem>
                <ListItemIcon>
                    <Typography variant="h6" color="primary">
                    Currently working here
                    </Typography>
                    <List>
                    {/* ...your existing ListItems... */}
                    </List>
                </ListItemIcon>
               </ListItem>
            </List>
          </Paper>
        </Fade>
      </Box>
    </Container>
  );
};

export default About;
