import { CheckCircle, Margin } from "@mui/icons-material";
import { useCart } from "../context/Cart/cartContext";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Thankyou() {

    const { orderId, orderNo}= useCart();
    const navigate = useNavigate();

    return(
        
         
        <>
        {(orderId=="" || orderNo == 0)? navigate("/"): 
            <Box sx={{ display:"flex" , flexDirection:"column", alignItems:"center", gap:3, marginTop:5}}>

                <Typography variant="h5" sx={{fontWeight:"bold"}}> Order placed successfully</Typography>
                <Typography variant="h6" sx={{fontWeight:"bold"}}> Order No : {orderNo}</Typography>
                <Typography variant="body1">Thank you for shopping with us </Typography>
                <Typography variant="body1">Your order has been confirmed </Typography>
                <CheckCircle sx={{fontSize:"100px", color:"green"}}></CheckCircle>

                <Typography variant="body1">You will contact you  </Typography>


            </Box>
        }
        

            
        </>

    )
}