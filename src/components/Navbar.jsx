import { useState } from "react";
import { AppBar, Box,Container,Drawer, IconButton,Avatar,List,ListItem,ListItemText, Slide, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7 from "@mui/icons-material/Brightness7";
import Brightness4 from "@mui/icons-material/Brightness4";

import { Link ,useLocation} from "react-router-dom";
import { useThemeContext } from "../theme/ThemeProvide";

export default function Navbar(){

    const[mobileOpen,setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }
    const location = useLocation();
    const isActive = (path) => {
      return location.pathname === path;
    };
    const navItems = [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Projects', path: '/projects' },
      { label: 'Skills', path: '/skills' },
      { label: 'Contact', path: '/contact' },
    ];


    const {toggleTheme,mode } = useThemeContext();
    

    return(
      <div>
        <Slide in={true} direction="down" timeout={1000}>
        <AppBar position="sticky" elevation={4} sx={{color:(theme)=>theme.palette.text.primary, bgcolor: (theme) => theme.palette.background.default}} >
        <Container>
          <Toolbar>
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h6" component="div" >
                <Link to='/' > <img src="home-logo.png" alt="logo" style={{width:"50px"}} /></Link>
              </Typography>
              <Box sx={{ display: { xs: 'none',sm:"flex" }, gap:3}}>
                {navItems.map((item) => (
                    <Link key={item.label} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography key={item.label} variant="button" sx={{color:isActive(item.path)?'primary.main':'inherit',cursor: 'pointer',"&:hover": {color: 'primary.main',transform: 'scale(1.05)',transition: 'all 0.3s ease-in-out'}}}>
                        {item.label}
                      </Typography>
                  </Link>
                ))}
              </Box>
              <Box>
                <IconButton onClick={toggleTheme} color="inherit" >
                  {mode==='light'?<Brightness4/> : <Brightness7/> }
                </IconButton>
                <IconButton color="inherit" edge="end" >
                    <Avatar alt="Cindy Baker" src="profile.jpg" />
                </IconButton>
              </Box>
              <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }} >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        <Box
          sx={{ width: 240 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.label}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      </div>
  );
    
}