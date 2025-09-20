import { useAuth } from "../context/Auth/AuthContext";
import { useCart } from "../context/Cart/cartContext";
import { Alert, Box, Button, Container, MenuItem, OutlinedInput, Select, TextField, Typography} from "@mui/material";
import "./cart.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCountry } from "../Api/country";
import type { ICheckout, ICountry } from "../utils/data";
import { checkoutFetch } from "../Api/checkout";

export default function Checkout() {

    const { token } = useAuth();
    const {cartItems, totalAmount , setOrderRef} = useCart();
     const img_url = "http://localhost:3001";

  const navigate = useNavigate();


  const [error, SetError] = React.useState("")
  const [success, SetSuccess] = React.useState("")



  const fullNameRef = React.useRef<HTMLInputElement>(null);

  const cityRef = React.useRef<HTMLInputElement>(null);

  const phoneRef = React.useRef<HTMLInputElement>(null);

  const addressRef = React.useRef<HTMLInputElement>(null);

  const address2Ref = React.useRef<HTMLInputElement>(null);

  const [country, setCountry] = useState<ICountry[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");



// Fetch Country
  useEffect(() => {
     fetchCountry()
       .then((data) => setCountry(data))
       .catch((err) => alert(err));

   }, []);


   
// Create Order
const handleOrder = async()=>{
     try {
          const fullName = fullNameRef.current?.value;
          const city = cityRef.current?.value;
          const phone = phoneRef.current?.value;
          const address = addressRef.current?.value;
          const address2 = address2Ref.current?.value;
         const countryId = selectedCountry;
    
          if (!fullName || !city || !phone || !address || !address2) {
            SetError("Please fill all fields");
            SetSuccess("")
            return;
          }

           if (!token) {
            SetError("No Token exit");
            SetSuccess("")   
            return;
          }

           if (!countryId) {
            alert("Please select a country");
            return;
         }
         
    
          // fetch api register
        const orderDetails: ICheckout = { fullName, phone, city, address, address2, countryId};

const data = await checkoutFetch({ data: orderDetails, token });
         

          SetSuccess("Successfully Created Order");
          SetError("");
         
         const orderNo =  await data.orderNo;
         const  orderId = await data._id;

          setOrderRef({orderId , orderNo});
          navigate("/thankyou");
        }
    
        catch (err: unknown) {
          if (err instanceof Error) {
            SetError(err.message);
          } else {
            SetError("An unknown error occurred");
          }
          SetSuccess("");
        }
    
}

    

    return (
        <>

            <Container>

                <h1>Checkout</h1>
 <Box sx={{marginBottom:2}}>
          {error && <Alert severity="error">{error} </Alert>}
          {success && <Alert severity="success">{success} </Alert>
          }
        </Box>
                <Box> {cartItems.length >0 ? 
                (
                    <>
                        <Box sx={{ display: "flex" , justifyContent:"space-between" , alignItems:"flex-start"}}>

                            <Box sx={{ minWidth: "55%", border:"1px solid hsl(0deg 0% 7% / 11%)", borderRadius:"5px", boxSizing: "border-box" , padding:"40px", display:"inline-flex", flexDirection:"column", gap:2 }} >
                                    
                                        <TextField id="outlined-basic" label="Full Name" variant="outlined"  required inputRef={fullNameRef}/>
                                        <TextField id="outlined-basic" label="Phone" variant="outlined"  required inputRef={phoneRef}/>

                                        <Select
                                            displayEmpty
                                            value={selectedCountry}
                                            onChange={(e) => setSelectedCountry(e.target.value)}
                                            input={<OutlinedInput />}
                                            renderValue={(selected) => {
                                            if (!selected) {
                                                return <em>Select Country</em>;
                                            }
                                            const countryObj = country.find((c) => c._id === selected);
                                            return countryObj ? countryObj.name : "";
                                            }}
                                            inputProps={{ "aria-label": "Without label" }}
                                        >
                                            <MenuItem disabled value="">
                                            <em>Select Country</em>
                                            </MenuItem>
                                            {country.map((item) => (
                                            <MenuItem key={item._id} value={item._id}>
                                                {item.name}
                                            </MenuItem>
                                            ))}
                                        </Select>

                                        <TextField id="outlined-basic" label="City" variant="outlined"  required inputRef={cityRef}/>

                                        <TextField id="outlined-basic" label="Address" variant="outlined"  required inputRef={addressRef}/>
                                    <TextField id="outlined-basic" label="Address2" variant="outlined"   inputRef={address2Ref}/>


                                    <Box sx={{marginTop:5}}> 
                                        <Typography variant="h6">Cash On Delivery</Typography> 
                        <Typography variant="body2">
                            We will contact you soon to determine the shipping price and complete the payment process
                        </Typography>
                                     </Box>

                                     <Button variant="contained" sx={{marginTop:3}} onClick={handleOrder}> Place Order</Button>
                            </Box>

                            <Box sx={{ minWidth: "40%", border:"1px solid hsl(0deg 0% 7% / 11%)", borderRadius:"5px", boxSizing: "border-box" , padding:"40px", display:"inline-flex", flexDirection:"column" }} >
                                <Typography variant="h6"  sx={{ fontWeight:"700"}}> Order Summary</Typography>
                                <Box sx={{ marginTop:3}}>
                                    {cartItems.map((row) => (
                                        <Box sx={{display:"flex",  justifyContent:"space-between", alignItems:"center" , width:"100%", marginBottom:2 , borderBottom:"1px solid hsl(0deg 0% 7% / 11%)", paddingBottom:2}}>

                                            <Box key={row.productId} sx={{display:"flex", width:"70%"}}>
                                                <img src={`${img_url}${row.image}`} alt={row.title} className="cart-img" />
                                                <Box sx={{marginLeft:"10px"}}>
                                                    <Typography variant="body2"> {row.title}</Typography>
                                                    <Typography variant="body1"> {row.quantity} * {row.unitprice} </Typography>

                                                </Box>
                                            </Box>

                                            <Box>
                                                {row.quantity * row.unitprice}
                                            </Box>
                                        </Box>

                                    ))}
                                </Box>
                                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                                    <Typography variant="body2" sx={{ fontWeight:"700"}}> Total :</Typography>
                                    <Typography> {totalAmount} </Typography>
                                </Box>



                            </Box>

                            
                        </Box>

                        
                    </>

                ):
                     <Typography> No Data is exit</Typography>
                }
                </Box>


            </Container>
       

        </>
    )
}