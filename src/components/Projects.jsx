import React, { useEffect } from 'react';
import AOS from 'aos';
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

const projects = [
  {
    title: 'Weather App',
    description: 'A weather app using OpenWeatherMap API and React.',
    image: '/Projects/Weather.png',
    sourceLink: 'https://github.com/yourusername/ecommerce-app',
    liveLink: 'https://ecommerce-app.vercel.app'
  },
  {
    title: 'E-commerce App',
    description: 'An e-commerce app built with NextJs, React, Redux, and Firebase.',
    image: '/Projects/E-commerce.png',
    sourceLink: 'https://github.com/rupesh-badode/E-Commerce',
    liveLink: 'https://e-commerce-tawny-eta-11.vercel.app/'
  },
  {
    title: 'Job Portal',
    description: 'A job portal application built with React ,spring and SQL .',
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

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
          <Grid
            item
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger animation
          >
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: 3,
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
