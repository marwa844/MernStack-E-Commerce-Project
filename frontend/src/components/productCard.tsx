import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useCart } from "../context/Cart/cartContext";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

interface Props {
  _id: string;
  title: string;
  description: string;
  image: string;
  onsale: boolean;
  price: number;
  sale: number;
  stock: number;
  categoryId: string;
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
  const{token}= useAuth();
  const {addToCart}= useCart();
  const img_url = "http://localhost:3001";

  const navigate = useNavigate();
    const productHandle = () => {
    navigate(`/product/${_id}`);
   
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={_id}>
      <CardActionArea onClick={productHandle} >
        <CardMedia
          component="img"
          height="140"
          image={`${img_url}${image}`}
          alt="green iguana"
        />
        <CardContent key={_id} onClick={productHandle}  >
          <Typography gutterBottom variant="h5" component="div">
            {title}
            {stock}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {onsale}
            {price}
            {sale}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>addToCart(_id, 1)}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
