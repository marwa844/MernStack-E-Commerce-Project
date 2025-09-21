import { useEffect, useState } from "react";
import type { IProduct } from "../utils/data";
import { fetchCategoryProducts } from "../Api/product";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";

export default function ProductsCategory(){

      const { id } = useParams(); // categoryId
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (id) {
      fetchCategoryProducts(id)
        .then((data) => {setProducts(data)
                        console.log("Products for category", id, data);}
)
        .catch((err) => console.log(err));  
      
    }

  }, [id]);
      
    return(
        <>
             <Container sx={{marginTop:5}}>

      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid size={{ xs: 2, md: 3 }}>
            <ProductCard {...p}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Container>
        </>
    )
}