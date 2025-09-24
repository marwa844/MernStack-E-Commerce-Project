import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

interface Props {
  _id: string;
  title: string;
  image: string;
}

export default function CategoryCard({ _id, title, image }: Props) {
  const img_url = "http://localhost:3001";

  const navigate = useNavigate();
    const handleClick = () => {
    navigate(`/category/${_id}`);
   
  };

  return (
    <Container sx={{mt:5}}>
    <Card sx={{ maxWidth: "100%" }} key={_id}  onClick={handleClick} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={`${img_url}${image}`}
          alt="green iguana"
        />
        <CardContent className="cat-title">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </Container>
  );
}
