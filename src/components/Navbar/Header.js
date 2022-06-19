import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListIcon from "@mui/icons-material/List";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../static/img/image.svg";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  
  const cartPage = () => {
      navigate("/cart")
  }

  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="" height={50} width={50} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            Bazarsardar - health
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            Bazarsardar - health
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="My Orders">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <ListIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Open cart">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={cartPage}
              >
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" height={10} width ={10} /> */}
                <AccountCircleIcon />
              </IconButton>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
