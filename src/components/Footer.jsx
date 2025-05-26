import { Box, Typography, Link as MuiLink, IconButton, Grid, Slide, Container } from "@mui/material";
import { GitHub, LinkedIn, Email} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <Slide direction="up" in={true} timeout={1000} mountOnEnter unmountOnExit>
        <Box
          component="footer"
          sx={{
            py: 4,
            px: 2,
            backgroundColor: "background.paper",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <Grid container spacing={4} justifyContent="space-between" alignItems="center">
            
            {/* Left: Branding */}
            <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
              <Typography variant="subtitle2" color="text.secondary">
                © {new Date().getFullYear()} Rupesh Badode. All rights reserved.
              </Typography>
            </Grid>

                  {/* Middle: Quick Links - Vertical Stack */}
            <Grid item xs={12} md={4} textAlign="center">
              <Box display="flex" flexDirection="row" gap={1}>
                <MuiLink component={Link} to="/" underline="hover" color="text.primary">
                  Home
                </MuiLink>
                <MuiLink component={Link} to="/projects" underline="hover" color="text.primary">
                  Projects
                </MuiLink>
                <MuiLink component={Link} to="/contact" underline="hover" color="text.primary">
                  Contact
                </MuiLink>
                <MuiLink href="CV.pdf" target="blank" underline="hover" color="text.primary">
                  Resume
                </MuiLink>
              </Box>
            </Grid>


            {/* Right: Social Media Icons */}
            <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
              <IconButton href="https://github.com/rupesh-badode" target="_blank" rel="noopener" aria-label="GitHub">
                <GitHub sx={{ color: "#1c1c1c" }} />
              </IconButton>
              <IconButton href="https://linkedin.com/in/rupesh-badode" target="_blank" rel="noopener" aria-label="LinkedIn">
                <LinkedIn color="primary" />
              </IconButton>
              <IconButton
                href="mailto:rupeshbadode77@gmail.com"
                aria-label="Email"
                title="Email"
                target="_blank">
                <Email sx={{ color: "#3f51b5" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Slide>
  </Container>
  );
}
