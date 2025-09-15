

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { useAuth } from "../context/Auth/AuthContext";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const pages = ["Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { email, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const loginHandle = () => {
    navigate("/login")
  }

  const logoutHandle = () => {
    logout();
    handleCloseNavMenu();
    navigate("/");
  }
  
  const cartHandle =()=>{
    navigate("/cart")
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box  sx={{display:"flex" , justifyContent:"center", alignItems:"center", flexGrow: 0 }}>
            <IconButton aria-label="cart" onClick={cartHandle}>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart  sx={{color:"#fff"}}/>
              </Badge>
            </IconButton>
            {isAuthenticated ?
              <>
                <Tooltip title="Open settings" >
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid >
                      <Typography variant="h6">{email || ""}</Typography>
                    </Grid>
                    <Grid >
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt={email || ""} src="/static/images/avatar/2.jpg" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      My Orders
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={logoutHandle}>
                    <Typography sx={{ textAlign: "center" }} >
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </> : <Button onClick={loginHandle} sx={{ background: "transparent", border: "none" }} > <PersonIcon sx={{ color: '#fff', mr: 1, my: 0.5 }}></PersonIcon> </Button>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}
export default ResponsiveAppBar;
