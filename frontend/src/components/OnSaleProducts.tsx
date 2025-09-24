import { useEffect, useState } from "react";
import type { IProduct } from "../utils/data";
import { fetchOnSaleProducts } from "../Api/product";
import Slider from "react-slick";
import ProductCard from "./productCard";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OnsaleProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchOnSaleProducts()
      .then((data) => setProducts(data))
      .catch((err) => alert(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="products-carousel">
      {products.map((item) => (
        <Box key={item._id} px={1}>
          <ProductCard {...item} />
        </Box>
      ))}
    </Slider>
  );
}
