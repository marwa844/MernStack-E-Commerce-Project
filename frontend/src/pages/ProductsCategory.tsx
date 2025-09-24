import { useEffect, useState } from "react";
import type { IProduct } from "../utils/data";
import { fetchCategoryProducts } from "../Api/product";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";

export default function ProductsCategory(){

      const { id } = useParams(); // categoryId
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");


  useEffect(() => {
    if (id) {
      fetchCategoryProducts(id)
        .then((data) => {
          setProducts(data)
           if (data.length > 0) {
          setCategoryName(data[0].categoryId?.title || "");
        }

        }
                        )
        .catch((err) => console.log(err));  
      
    }

  }, [id]);
      
    return(
        <>

             <Container sx={{marginTop:5}}>
<Typography variant="h4" sx={{textAlign:"center", marginBottom:"40px"}}>
  {categoryName}
  </Typography>
      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid size={{ xs: 6, md: 3 }}>
            <ProductCard {...p}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Container>
        </>
    )
}