import { useEffect, useState } from "react";
import type { ICategory } from "../utils/data";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { fetchCategory } from "../Api/category";
import CategoryCard from "../components/categoryCard";

export function Home() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    fetchCategory()
      .then((data) => setCategories(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {categories.map((c) => (
          <Grid size={{ xs: 2, md: 3 }}>
            {<CategoryCard {...c}></CategoryCard>}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
