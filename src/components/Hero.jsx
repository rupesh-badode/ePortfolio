import Slider from "react-slick";
import {Typography,Card,CardHeader,CardMedia,CardContent,CardActions, Container, Button, Stack, Slide,Box,Paper, Grid,useTheme, duration} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {motion} from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";

export default function Hero(){
    

  useEffect(() => {
    AOS.init({
      duration:2000,
      once:false,
    })
  },[])

    const theme = useTheme();
    const MotionCard = motion(Card);

                         // Why Choose Us Section

     const reasons = [
        {
          image:"/whyChhoseus/responsive-design.png",
          title: "Responsive",
          description: "Your website layout will change based on the device a person is using. Our responsive web designing team will create a layout for all screen sizes to ensure that your website visitors are able to view the information properly, which could help increase your conversions",
        },
        {
          image:"/whyChhoseus/seo_5538713.png",
          title: "SEO Friendly",
          description: "We perform intensive on-page and off-page optimization to ensure that every aspect of your SEO in on point. We're out there spreading the news about how great your website is. The race to the top never ends. We continue to monitor and test what's working and what's not.",
        },
        {
          image:"/whyChhoseus/fast-loading.png",
          title: "Affordable Pricing",
          description: "We offer affordable web design services without compromising on quality. Our pricing is transparent, and we provide detailed quotes upfront, so you know exactly what you're paying for. We believe that quality web design should be accessible to businesses of all sizes.",
        },
      ];
    
                              // Carousel images and settings
     const images = [
      {
        src: "/carousel/React_.svg",
        title: "React", 
      },
      {
        src: "/carousel/Bootstrap.png",
        title: "Bootstrap",
      },
      {
        src: "/carousel/java-script.png",
        title: "JavaScript",
      },
      {
        src: "/carousel/MongoDB_Fores-Green.svg",
        title: "MongoDB",
      },
      {
        src: "/carousel/express.png",
        title: "Express.js",
      },
      {
        src: "/carousel/nodejs.png",
        title: "Node.js",
      },
      {
        src: "/carousel/nextjs.png",
        title: "Next.js",
      },
      {
        src: "../assets/icons8-redux-100.png",
        title: "Redux",
      },
      {
        src: "/carousel/Meterial-UI.png",
        title: "Material UI",
      },
      {
        src: "../assets/icons8-git-96.png",
        title: "Git Hub",
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
                <CardHeader title="MERN Stack Developer" />
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

        {/* Carousel Section */}
      
        <Container sx={{p:5}}  data-aos="fade-up" data-aos-duration="2000">
          <Typography variant="h4" align="center" gutterBottom>Build <span style={{ color: 'red' }}>fast</span>, Component based sites</Typography>
            <Box sx={{ maxWidth:1000, mx: "auto", my: 5,p:2}}>
            <Slider {...settings}>
              {images.map((item, index) => (
                <Paper key={index} elevation={0} sx={{ p: 1, textAlign: "center",transition: "transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"scale(1.02)"}}}>
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
                      bgcolor:" text.primary",
                    }}
                  />
                  <Typography variant="h6" mt={2}>
                    {item.title}
                  </Typography>
                </Paper>
              ))}
            </Slider>
           </Box>
        </Container>

        {/* Welcome Section */}

        <Container sx={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",p:5}} data-aos="fade-up">
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to <b>My Responsive</b> <span style={{ color: "green" }}>Portfolio</span>
          </Typography>
          <Box
            component="img"
            src="iPhone-13-Pro-Max-localhost.png"
            alt="mobile"
            sx={{ width: "250" }}
          />
        </Container>
        

               {/* Why Choose Us Section  */}
        <div style={{ padding: '40px 20px', background: theme.palette.background.default }} data-aos="fade-up">
          <Typography variant="h4" gutterBottom align="center">
            Why Choose Us ?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {reasons.map((reason, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
              >
                <Card
                  elevation={4}
                  sx={{
                    maxWidth: 345,
                    mx: 'auto',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={reason.image}
                    alt={reason.title}
                  />
                  <CardContent>
                    <Typography variant="h6" color="success.main" gutterBottom>
                      {reason.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {reason.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>

        </>
    )
}