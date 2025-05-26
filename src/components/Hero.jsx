import Slider from "react-slick";
import {Typography,Card,CardHeader,CardMedia,CardContent,CardActions, Container, Button, Stack, Slide,Box,Paper} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



export default function Hero(){

     const images = [
      {
        src: "/carousel/React_.svg",
        title: "React", 
        description: "Description for project one.",
      },
      {
        src: "/carousel/Bootstrap.png",
        title: "Bootstrap",
        description: "Description for project one.",
      },
      {
        src: "/carousel/java-script.png",
        title: "JavaScript",
        description: "Description for project four.",
      },
      {
        src: "/carousel/MongoDB_Fores-Green.svg",
        title: "MongoDB",
        description: "Description for project five.",
      },
      {
        src: "/carousel/express.png",
        title: "Express.js",
        description: "Description for project six.",
      },
      {
        src: "/carousel/nodejs.png",
        title: "Node.js",
        description: "Description for project six.",
      },
      {
        src: "/carousel/nextjs.png",
        title: "Next.js",
        description: "Description for project seven.",
      },
      {
        src: "/carousel/redux.png",
        title: "Redux",
        description: "Description for project eight.",
      },
      {
        src: "/carousel/Meterial-UI.png",
        title: "Material UI",
        description: "Description for project ten.",
      },
      {
        src: "/carousel/github.png",
        title: "Git Hub",
        description: "Description for project eleven.",
      },
    ];





        const settings = {
          dots: true,
          infinite: true,
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: true,
        }

 
    return(
        <>
          <Container>
            <Card sx={{ maxWidth:1500,margin:4,transition: "transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"scale(1.02)"}}}>
              <Slide in={true} direction="up" timeout={1000}>
                <div><CardHeader title="MERN Stack Developer" /> </div>
              </Slide>
              <Slide in={true} direction="left" timeout={1000} >
                <CardMedia component="img" height="350" image="Hero.JPEG" alt="Paella dish"/>
              </Slide>
                <CardContent>
                  <Slide in={true} direction="right" timeout={1000} >
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        I am Rupesh an aspiring <strong>REACT</strong> and <strong>UI Developer</strong>. who is trying to seek a role to enhance and explore my technical knowledge in your company. I am a passionate React Developer with a strong foundation in front-end development, specializing in building interactive and scalable web applications. I have experience working with <strong> React.js, JavaScript (ES6+), TypeScript, Redux, Tailwind CSS, and Next.js.</strong> I enjoy crafting user-friendly interfaces and optimizing performance to enhance user experience. My problem-solving skills, attention to detail, and ability to learn quickly help me stay up-to-date with the latest technologies.
                    </Typography>
                  </Slide>
                </CardContent>
                <CardActions disableSpacing>
                  <Stack direction="row" spacing={2} >
                    <Slide in={true} direction="up" timeout={1000} ><Button variant="contained" href="CV.pdf" target="blank"  color="primary" endIcon={<ChevronRightIcon/>}>Resume</Button></Slide>
                    <Slide in={true} direction="up" timeout={1500} ><Button variant="contained" href="/contact" color="success" >Hire me !</Button></Slide>
                  </Stack>
                </CardActions>
          </Card>
        </Container>


        <Container >
          <Typography variant="h4" align="center" gutterBottom>Build fast, Componant based sites</Typography>
            <Box sx={{ maxWidth:1000, mx: "auto", my: 5,p:2}}>
            <Slider {...settings}>
              {images.map((item, index) => (
                <Paper key={index} elevation={0} sx={{ p: 2, textAlign: "center",transition: "transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"scale(1.02)"}}}>
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: { xs: 200, md: 400 },
                      objectFit: "contain",
                      mx: "auto",
                      borderRadius:4,
                    }}
                  />
                  <Typography variant="h6" mt={2}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              ))}
            </Slider>
           </Box>
        </Container>



        <Container sx={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to My Responsive <span style={{ color: "green" }}>Portfolio</span>
          </Typography>
          <Box
            component="img"
            src="Mobile.jpeg"
            alt="mobile"
            sx={{ width: "250" }}
          />
          <Typography variant="h4" sx={{p:4}} >
            We build websites that build your <span style={{color:"blue"}}>Business</span>
          </Typography>
        </Container>

        </>
    )
}