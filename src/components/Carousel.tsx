"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "https://picsum.photos/800/400?random=1",
    title: "First Slide",
    description: "This is the first slide description with some content.",
    buttonText: "Learn More",
  },
  {
    id: 2,
    image: "https://picsum.photos/800/400?random=2",
    title: "Second Slide",
    description: "This is the second slide description with different content.",
    buttonText: "Explore",
  },
  {
    id: 3,
    image: "https://picsum.photos/800/400?random=3",
    title: "Third Slide",
    description: "This is the third slide description with unique content.",
    buttonText: "Get Started",
  },
];

interface CarouselProps {
  className?: string;
}

export default function Carousel({ className = "" }: CarouselProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-xl"
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Card className="relative overflow-hidden">
              <div className="relative h-[400px] w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <CardContent className="text-center text-white">
                    <Typography
                      variant="h4"
                      component="h2"
                      className="mb-4 font-bold"
                    >
                      {slide.title}
                    </Typography>
                    <Typography variant="body1" className="mb-6">
                      {slide.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      className="hover:scale-105 transition-transform"
                    >
                      {slide.buttonText}
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4 z-10">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center pointer-events-auto transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center pointer-events-auto transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
