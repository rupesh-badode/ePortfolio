import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Weather App',
    description: 'A weather app using OpenWeatherMap API and React.',
    image: '/Projects/Weather.png',
    sourceLink: 'https://github.com/yourusername/ecommerce-app',
    liveLink: 'https://ecommerce-app.vercel.app'
  },
  {
    title: 'Job Portal',
    description: 'from intership we will build web-app called job portal.by using React+Tailwind,JWT token ,axios ,formik etc.',
    image: 'https://via.placeholder.com/300x180',
    sourceLink: 'https://github.com/yourusername/portfolio',
    liveLink: 'https://yourportfolio.vercel.app'
  },
  {
    title: 'Weather App',
    description: 'Weather app using OpenWeatherMap API and React.',
    image: 'https://via.placeholder.com/300x180',
    sourceLink: 'https://github.com/yourusername/weather-app',
    liveLink: 'https://weather-app.vercel.app'
  },
  {
    title: 'Weather App',
    description: 'Weather app using OpenWeatherMap API and React.',
    image: 'https://via.placeholder.com/300x180',
    sourceLink: 'https://github.com/yourusername/weather-app',
    liveLink: 'https://weather-app.vercel.app'
  },
  {
    title: 'Weather App',
    description: 'Weather app using OpenWeatherMap API and React.',
    image: 'https://via.placeholder.com/300x180',
    sourceLink: 'https://github.com/yourusername/weather-app',
    liveLink: 'https://weather-app.vercel.app'
  }
];

const Projects = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        My Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 12px 24px rgba(0,0,0,0.2)',
              }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              style={{ borderRadius: 12 }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: '0.3s',
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
