"use client";

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button, Typography, Container, Box, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import {  ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    primary: {
      main: '#1a1a1a',
    },
    secondary: {
      main: '#6b46c1',
    },
  },
});

const services = [
  {
    title: 'Exclusive Access',
    description: 'Priority reservations & exclusive dining experiences',
    image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Personalised Attention',
    description: 'Your gateway to exclusive experiences',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Impeccable Discretion',
    description: 'Our service is built on confidentiality and discretion',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
  },

  {
    title: 'Personalised Attention',
    description: 'Your gateway to exclusive experiences',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Impeccable Discretion',
    description: 'Our service is built on confidentiality and discretion',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
  },
];

const experiences = [
  {
    title: 'Golf Access',
    description: 'Exclusive access to top-tier golf courses',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Exclusive Dining Access',
    description: 'VIP priority reservations and exclusive dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'International Airport Experiences',
    description: 'Seamless airport journey',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider theme={theme}>
      <main className="min-h-screen">
        {/* Hero Section */}
        <Box
          sx={{
            height: '100vh',
            position: 'relative',
            backgroundImage: 'url(https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
          }}
        >
          <Container sx={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center' }}>
            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 2 }}>
              Celebrating the Art of Elevated Living
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Exclusive luxury services and experiences for you
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<ArrowRight />}
              sx={{ borderRadius: '28px', px: 4 }}
            >
              Explore Premier Moments
            </Button>
          </Container>
        </Box>

        {/* Services Section */}
        <Box sx={{ py: 10, bgcolor: "#f8f9fa" }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4, alignItems: "center" }}>
          <Typography variant="h3">Where Elegance Meets Exclusivity</Typography>
          <IconButton onClick={() => swiperRef.current?.slideNext()}>
            <ArrowRight />
          </IconButton>
        </Box>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          // pagination={{ clickable: true }}
          // autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ height: "400px", position: "relative" }}>
                <CardMedia component="img" height="100%" image={service.image} alt={service.title} sx={{ position: "absolute" }} />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: "rgba(0,0,0,0.7)",
                    color: "white",
                    p: 3,
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
        {/* Experiences Section */}
        <Box sx={{ py: 10 }}>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, gap: 2 }}>
              <Typography
                variant="h4"
                component="span"
                sx={{ borderBottom: '2px solid #6b46c1', pb: 1 }}
              >
                Infiniti
              </Typography>
              <Typography variant="h4" component="span" sx={{ color: '#6b46c1' }}>
                Imperia
              </Typography>
            </Box>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {experiences.map((experience, index) => (
                <SwiperSlide key={index}>
                  <Card sx={{ height: '400px', position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={experience.image}
                      alt={experience.title}
                      sx={{ position: 'absolute' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        p: 3,
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {experience.title}
                      </Typography>
                      <Typography variant="body2">{experience.description}</Typography>
                    </Box>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Box>

        {/* Call to Action Section */}
        <Box
          sx={{
            py: 15,
            backgroundImage: 'url(https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?auto=format&fit=crop&q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
            },
          }}
        >
          <Container sx={{ position: 'relative', textAlign: 'center', color: 'white' }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Persistent dedication unlocks limitless possibilities
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Do what you can, with what you have, where you are
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ borderRadius: '28px', px: 4, bgcolor: '#6b46c1', '&:hover': { bgcolor: '#553c9a' } }}
            >
              Join Us
            </Button>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 4 }}>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>PREMIER MOMENTS</Typography>
                <Typography variant="caption">©2024 Copyrights and Logos of the team belongs to NEXT-STACK LTD.</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Typography variant="body2">BLOG</Typography>
                <Typography variant="body2">FAQS</Typography>
                <Typography variant="body2">TERMS AND CONDITIONS</Typography>
                <Typography variant="body2">PRIVACY POLICY</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton color="inherit" size="small"><Facebook /></IconButton>
                <IconButton color="inherit" size="small"><Instagram /></IconButton>
                <IconButton color="inherit" size="small"><Twitter /></IconButton>
                {/* <IconButton color="inherit" size="small"><LinkedIn /></IconButton> */}
              </Box>
            </Box>
            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: 'gray' }}>
              Powered by Europ Assistance
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}