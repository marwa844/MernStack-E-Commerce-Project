import { FacebookOutlined } from "@mui/icons-material";
import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import { FaTiktok, FaSnapchatGhost  } from "react-icons/fa";
import { Typography } from "@mui/joy";




export default function FooterSec(){
    const navigate = useNavigate();
    return(
        <>
        <Box className={"footer"} sx={{display: { xs: "none", md: "flex" }}}>
            <ButtonGroup variant="text" aria-label="Basic button group" className="social" >
                <IconButton onClick={()=> navigate("/")}>         
                     <InstagramIcon  />
                </IconButton>
                <IconButton onClick={()=> navigate("/")}>         
                     <FacebookIcon   />
                </IconButton>
                <IconButton component="a" href="/" target="_blank">
                    <FaTiktok  />
                </IconButton>
               <IconButton component="a" href="/" target="_blank">
                    <FaSnapchatGhost />
                </IconButton>
            </ButtonGroup>
             <Typography className="footer-text"> &copy; Designed & Develpoed By My Store</Typography>

        </Box>
        </>
    )
}