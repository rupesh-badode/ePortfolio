import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CardMedia,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";

// Skill data with images, experience, and version
const skills = [
  { name: "HTML", experience: "0.6 years", version: "v5", img: "./assets/html5.png" },
  { name: "CSS", experience: "0.6 years", version: "v3", img: "./assets/css.png" },
  { name: "JavaScript", experience: "0.6 years", version: "ES6+", img: "./assets/java-script.png" },
  { name: "React", experience: "0.6 years", version: "v18", img: "/assets/React_.svg" },
  { name: "Firebase", experience: "0.5 years", version: "v9", img: "/assets/icons8-firebase-480.png" },
  { name: "Node.js", experience: "0.6 year", version: "v20", img: "/assets/nodejs.png" },
  { name: "Express.js", experience: "1 year", version: "v4", img: "/assets/icons8-express-js-500.png" },
  { name: "MongoDB", experience: "1 year", version: "v6", img: "/assets/icons8-mongodb-100.png" },
  { name: "Git", experience: "2 years", version: "v2.30", img: "/assets/icons8-git-96.png" },
  { name: "GitHub", experience: "2 years", version: "v3.0", img: "/assets/github.png" },
  { name: "Tailwind CSS", experience: "1 year", version: "v3.0", img: "/assets/icons8-tailwind-css-100.png" },
  { name: "Bootstrap", experience: "1 year", version: "v5.0", img: "/assets/bootstrap.png" },
  { name: "Material-UI", experience: "1 year", version: "v5", img: "/assets/icons8-material-ui-144.png"},
  { name: "Framer Motion", experience: "6 months", version: "v4", img: "/assets/icons8-framer-logo-192.png"},
  { name: "Redux", experience: "1 year", version: "v4", img: "/assets/icons8-redux-100.png" },
  { name: "TypeScript", experience: "6 months", version: "v4.5", img: "/assets/icons8-typescript-100.png" },
  { name: "Next.js", experience: "6 months", version: "v12", img: "/assets/icons8-nextjs-144.png"},
  { name: "VS Code",experience:"",version:"", img: "/assets/visual-studio.png" },
  { name: "Postman", experience: "1 year", version: "v9", img: "/assets/icons8-postman-inc-96.png" }
];

const Skills = () => {
  return (
    <Box sx={{ py: 6, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          My Skills
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  elevation={6}
                  sx={{
                    borderRadius: "20px",
                    textAlign: "center",
                    height: "100%",
                    p: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={skill.img}
                    alt={skill.name}
                    sx={{
                      height: { xs: 60, sm: 80 },
                      objectFit: "contain",
                      mx: "auto",
                      mb: 2,
                      width: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Version: {skill.version}
                    </Typography>
                    <Typography variant="body2">
                      Experience: {skill.experience}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
