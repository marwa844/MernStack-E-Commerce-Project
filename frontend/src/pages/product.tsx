import { useEffect, useState } from "react";
import type { IProduct } from "../utils/data";
import { fetchProductId } from "../Api/product";
import { Alert, Box, Button, ButtonGroup, Container, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/Cart/cartContext";
import { useAuth } from "../context/Auth/AuthContext";
import React from "react";


export default function Product() {
        const{token}= useAuth();

        const { addToCart , updateItemQtyCart} = useCart();
        const navigate = useNavigate();
  const { id } = useParams(); // productId
  const [product, setProduct] = useState<IProduct | null>(null);
  const img_url = "http://localhost:3001";
const [quantity, setQuantity] = useState<number>(1)


  const [error, SetError] = React.useState("")
  const [success, SetSuccess] = React.useState("")


  useEffect(() => {
    if (id) {
      fetchProductId(id)
        .then((data) => setProduct(data))
        .catch((err) => console.log(err));
    }
  }, [id]);
  

  if (!product) return <p>Loading...</p>;
   const handleQtyCart =(productId:string, quantity:number)=>{
        if(quantity <= 0){
            return;
        }
        updateItemQtyCart(productId, quantity);
    }

    const increment = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
}


  return (
    <Container sx={{ marginTop: 5 }}>
      
<Grid container spacing={6}>
  <Grid size={{xs:12, md:5}}>
    <Box>
      <img src={`${img_url}${product.image}`} alt={product.title} style={{ width: "100%" }} />
    </Box>
  </Grid>
  <Grid  size={{xs:12, md:5}}>
    <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
      <Typography variant="h4" sx={{fontWeight:"bold"}}>{product.title}</Typography>
       <Typography variant="h6"> KD {product.onsale ? (
                                <>
                                <del>{product.price}</del> {product.sale}
                                </>
                            ) : product.price}</Typography> 
      <Typography variant="body1" sx={{marginTop:3, marginBottom:3}}>{product.description}</Typography>

<Typography variant="body1" sx={{ fontWeight: "bold", color: product.stock > 0 ? "green" : "red" }}>
  {product.stock > 0 ? "In Stock" : "Out of Stock"}
</Typography>

<Box sx={{display:"flex", gap:3}}>
    <ButtonGroup variant="outlined" aria-label="Basic button group">
                                <Button onClick={increment}>+</Button>
                                <Button>{quantity}</Button>
                                <Button onClick={decrement}>-</Button>
                            </ButtonGroup>

    <Button variant="contained"  onClick={()=>{
        if(!token){
            navigate("/login")
        }
        addToCart(product._id, quantity) 
        SetSuccess("Successfully Added to cart")
        console.log(quantity)
    }}> Add to cart</Button>
</Box>

 <Box sx={{marginBottom:2}}>
          {error && <Alert severity="error">{error} </Alert>}
          {success && <Alert severity="success">{success} </Alert>
          }
        </Box>

    </Box>
  </Grid>
</Grid>


    </Container>
  );
}
