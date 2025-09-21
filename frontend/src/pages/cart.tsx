import { useAuth } from "../context/Auth/AuthContext";
import { useCart } from "../context/Cart/cartContext";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { DeleteOutline, RemoveFromQueue } from "@mui/icons-material";
import ButtonGroup from '@mui/material/ButtonGroup';
import "./cart.css";
import {  useNavigate } from "react-router-dom";
export default function Cart() {

    const { token } = useAuth();
    const {cartItems, totalAmount , updateItemQtyCart, deleteItemInCart, emptyCart} = useCart();
     const img_url = "http://localhost:3001";

     const navigate = useNavigate();
    const handleQtyCart =(productId:string, quantity:number)=>{
        if(quantity <= 0){
            return;
        }
        updateItemQtyCart(productId, quantity);
    }

    const handleCheckout =()=>{
        navigate("/checkout");
    }
/*

    const [cart, setCart] = useState();

    useEffect(() => {
        if (!token) {
            return;
        }
        fetchCart(token)
            .then((data) => setCart(data))
            .catch((err) => alert(err));

    }, [token])

    console.log({cart})


*/

    return (
        <>
            <h1>Cart</h1>
         <Box> {cartItems.length >0 ? 
         (
               <Box>
            <Box><Button variant="outlined" onClick={emptyCart}><DeleteOutline></DeleteOutline> Clear All </Button></Box>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="Cart table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Product</TableCell>
                        <TableCell align="right">Unit Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Subtotal</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cartItems.map((row) => (
                        <TableRow
                        key={row.productId}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            <Button onClick={()=>deleteItemInCart(row.productId)}><DeleteOutline></DeleteOutline></Button>
                        </TableCell>
                        <TableCell align="right"><img src={`${img_url}${row.image}`} alt={row.title} className="cart-img"/></TableCell>
                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right">{row.onsale ? (
                                <>
                                <del>{row.price}</del> {row.sale}
                                </>
                            ) : row.price}
                        </TableCell>

                        <TableCell align="right"> 
                            <ButtonGroup variant="contained" aria-label="Basic button group">
                                <Button onClick={()=>handleQtyCart(row.productId, row.quantity+1)}>+</Button>
                                <Button>{row.quantity}</Button>
                                <Button onClick={()=>handleQtyCart(row.productId, row.quantity-1)}>-</Button>
                            </ButtonGroup></TableCell>

                        <TableCell align="right">{row.quantity * row.unitprice}</TableCell>

                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box>
                <Typography variant="h5"> Total : {totalAmount}</Typography>
                    <Button variant="contained" onClick={handleCheckout}>Pocessed to checkout</Button>
            </Box>
        
</Box>
         ):
         <Typography> No Data is exit</Typography>
        
        }

            </Box> 
     

        </>
    )
}