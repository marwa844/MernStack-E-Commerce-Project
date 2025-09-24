import Slider from "react-slick";
import { Card, CardMedia, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderImages() {
     const img_url = "http://localhost:3001/uploads";

  const items = [
        { type: "image", src: `${img_url}/slide2.jpg` },
    { type: "video", src: `${img_url}/vid.mp4` },

    { type: "image", src: `${img_url}/slide.jpg` },
  ];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
};


  return (
    <Box sx={{ maxWidth: "100%", margin: "auto", mb: 4 , borderRadius:"12px", position:"relative"}}>
      <Slider {...settings}>
        {items.map((item, i) => (
      <Card key={i} sx={{ position: "relative", height: "600px" }}>
  {item.type === "image" ? (
    <CardMedia
      component="img"
      image={item.src}
      alt={`slide-${i}`}
      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ) : (
    <CardMedia
      component="video"
      src={item.src}
      autoPlay
      loop
      muted
      playsInline
      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  )}
</Card>


        ))}
      </Slider>
      <div className="overlay"></div>
    </Box>
  );
}
