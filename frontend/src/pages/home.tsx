import { useEffect, useState } from "react";
import type { ICategory } from "../utils/data";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { fetchCategory } from "../Api/category";
import CategoryCard from "../components/categoryCard";
import SliderImages from "../components/slider";
import { TypeSpecimenTwoTone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import OnsaleProductList from "../components/OnSaleProducts";

export function Home() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    fetchCategory()
      .then((data) => setCategories(data))
      .catch((err) => alert(err));
  }, []);

 

  return (
    <>
    <SliderImages></SliderImages>

    <Container sx={{marginTop:"60px"}}>
      <Typography variant="h4" sx={{ textAlign:"center"}}> Our Categories</Typography>
      <Grid container spacing={2}>
        {categories.map((c) => (
          <Grid size={{ xs: 12, md: 4 }}>
            {<CategoryCard {...c}></CategoryCard>}
          </Grid>
        ))}
      </Grid>
    </Container>

    <Box sx={{ marginTop:"100px", marginBottom:"60px"}}>
      <Typography variant="h5" sx={{ textAlign:"center", marginBottom:"40px"}}>Onsale Products </Typography>
        <OnsaleProductList></OnsaleProductList>
    </Box>
    </>
  );
}

export default Home;
