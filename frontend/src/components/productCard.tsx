import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

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
  const img_url = "http://localhost:3001";
  return (
    <Card sx={{ maxWidth: 345 }} key={_id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${img_url}${image}`}
          alt="green iguana"
        />
        <CardContent>
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
        <Button size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
