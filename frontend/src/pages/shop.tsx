import { useEffect, useState } from "react";
import type { IProduct } from "../utils/data";
import { fetchProducts } from "../Api/product";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/productCard";

export function Shop() {
  const [products, setProducts] = useState<IProduct[]>([]);
  

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid size={{ xs: 2, md: 3 }}>
            <ProductCard {...p}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Shop;
