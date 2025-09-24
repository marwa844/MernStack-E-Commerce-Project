import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth/AuthContext";
import { fetchOrder } from "../Api/orders";

export default function Order(){

  const {token}= useAuth();
  const [order, setOrder]= useState<any>([]);
   const img_url = "http://localhost:3001";

  useEffect(()=>{

     if (!token) {
            return;
        }

    fetchOrder(token).then((data)=>setOrder(data)).catch((err) => alert(err));
      console.log({order})

  }, [])



    return (
        <Container  sx={{width:"60%", margin:"auto" , marginTop:"100px"}}>
            <Typography variant="h5" textAlign={"center"} sx={{marginBottom:"40px"}}> My Orders</Typography>

 <div>
 
      { order.map((i:any)=> (
<Accordion >
        <AccordionSummary  key={i._id}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="order-header"
        >
          <Typography component="span">OrderNo:  #{i.orderNo} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            
            {i.items.map((p:any)=>(

              <Box>
                <Box sx={{display:"flex", justifyContent:"space-between"}} >
                  <Box sx={{display:"flex"}}>
                    <Box> <img src={`${img_url}${p.image}`} alt={p.title} style={{ width: "40px", marginRight:"10px", marginBottom:"20px" }} /> </Box>

                    <Box> {p.title}</Box>
                  </Box>
        
                <Box> {p.quantity} * {p.unitprice}</Box>

                </Box>
                
              </Box>
            ))}
          </Box>
        </AccordionDetails>
        <Box sx={{display:"flex", justifyContent:"space-between",     background: "#cccccc33",
    padding: "10px"}}>
<Typography variant="h5">Total Amount : </Typography>
<b>{i.totalAmount}</b>
                </Box>
      </Accordion>
      ))}
      
    
    </div>
        </Container>
    )
}