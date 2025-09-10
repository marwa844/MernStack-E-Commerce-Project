import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface Props {
  _id: string;
  title: string;
  image: string;
}

export default function CategoryCard({ _id, title, image }: Props) {
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
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
