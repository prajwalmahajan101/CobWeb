import React,{ useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from '@mui/material/Avatar';
import avatar from "../assets/avatar.jpg";

const ResponsiveAppBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
                <AppBar position="static"style={{backgroundColor:"#FFFFFF",color:"#2F51A1"}}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href={"/home"}
                                sx={{
                                    ml:2,
                                    mr: 2,
                                    flexGrow: 1,
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                COBWEB

                            </Typography>
                            <Typography
                                variant="h5"
                                component={"span"}
                                sx={{
                                    ml:2,
                                }}
                                >
                                    Admin
                                </Typography>
                            <div>
                            <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 24, height: 24,ml:3,mr:4 }} onClick={handleMenu}/>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem >Reset Password</MenuItem>
                                    <MenuItem >LogOut</MenuItem>
                                </Menu>
                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
    );
};
export default ResponsiveAppBar;