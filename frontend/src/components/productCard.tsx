import React from "react";
import { useNavigate } from "react-router-dom";

// MUI Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

// Contexts
import { useCart } from "../context/Cart/cartContext";
import { useAuth } from "../context/Auth/AuthContext";

// Icons
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface Props {
  _id: string;
  title: string;
  description?: string;
  image: string;
  onsale: boolean;
  price: number;
  sale: number;
  stock: number;
  categoryId?: string;
}

export default function ProductCard({
  _id,
  title,
  image,
  onsale,
  price,
  sale,
  stock,
}: Props) {
  const { token } = useAuth();
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();
  const img_url = "http://localhost:3001";

  const productHandle = () => {
    navigate(`/product/${_id}`);
  };

  const handleAddToCart = () => {
    if (!token) navigate("/login");
    else addToCart(_id, 1);
  };

  //calculate quantity 
    const qtyItems = cartItems.reduce((acc:number, cur) => acc + cur.quantity ,0) ;


  return (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: 3, position:"relative" }}>
      <CardActionArea onClick={productHandle}>
        <CardMedia
          component="img"
          height="200"
          image={`${img_url}${image}`}
          alt={title}
        />
        <CardContent >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontWeight:"bold"}}>
            {onsale ? (
              <>
                <del>KD{price}</del> <span>KD{sale}</span>
              </>
            ) : (
              <>Kd{price}</>
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Only <b>{stock}</b> left in stock
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display: qtyItems<stock? "block": "none"}}>
        <Button 
          size="medium"
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleAddToCart}
          endIcon={<ArrowOutwardIcon />}
        >
          Add to Cart
        </Button>
      </CardActions>
      <Typography className="saleBadge">{onsale ? "SALE":""}</Typography>

    </Card>
  );
}
