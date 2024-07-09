import { Box, Card, IconButton, TextField } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import './styles/navbar.css'

const Navbar = () => {
    return (
        <Box className="navbar">
            <Box className="navbar-container flex">
                <Box className="navbar-container-menu flex">
                    <IconButton sx={{
                        p: '10px', width: "20px", "&.MuiButtonBase-root:hover": {
                            bgcolor: "transparent"
                        }
                    }} aria-label="menu" color="white" >
                        <MenuIcon className="navbar-container-menu-item" sx={{ width: "150px" }} />
                    </IconButton>
                </Box>
                <Box className="navbar-container-logo flex">
                    <picture>
                        <img className="navbar-container-logo-img" src="../../../multiform_b_a.png" />
                    </picture>
                </Box>
            </Box>
            <Box className="navbar-container flex">
                <Box className="navbar-container-search">
                    <TextField type="search" variant="filled" placeholder="search" InputProps={{
                        disableUnderline: true, // <== added this
                    }} />
                </Box>
            </Box>
            <Box className="navbar-container flex" sx={{ width: "260px", display: "flex", justifyContent: "end" }}>
                <Box className="navbar-container-profile">
                    <Card className="navbar-container-profile-card flex" >
                        <picture>
                            <img className="navbar-container-profile-card-img" src="../../../user-profile-default.png" />
                        </picture>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}
export default Navbar