import { useEffect, useState } from "react";
import type { ICategory } from "../utils/data";
import Container from "@mui/material/Container";
import CategoryCard from "../components/categoryCard";
import { fetchCategory } from "../Api/category";
import { Grid } from "@mui/material";

export function MainCategory() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    fetchCategory()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <Container sx={{ marginTop: "60px",  marginBottom: "100px"  }}>
       <Grid container spacing={2}>
              {categories.map((c) => (
                <Grid size={{ xs: 12, md: 4 }}>
                  {<CategoryCard {...c}></CategoryCard>}
                </Grid>
              ))}
            </Grid>
    </Container>
  );
}

export default MainCategory;
