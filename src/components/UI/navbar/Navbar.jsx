import { useState } from "react";
import { Box, Card, IconButton, TextField } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

import ProfileImg from "./ProfileImg";
import Menu from "./Menu";
import './styles/navbar.css'

const Navbar = () => {

    // Status
    const [searchValue, setSearchValue] = useState('');
    const [popProfile, setPopProfile] = useState(false);
    const [menuShow, setMenuShow] = useState(false);
    const [origin, setOrigin] = useState({ top: 0, left: 0 });

    const handleClear = () => {
        setSearchValue('');
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    // Activar el pop y Obtener la ubicacion del clic para situar el pop en ella.
    const handleProfileOpen = (event) => {
        if (!popProfile) {
            const rect = event.target.getBoundingClientRect();
            setOrigin({ top: rect.top + window.scrollY, left: rect.left + window.scrollX });
            setPopProfile(true)
        }
    };

    return (
        <>
            <Box className="navbar">
                <Box className="navbar-container flex">
                    <Box className="navbar-container-menu flex">
                        <IconButton
                            sx={{
                                p: '10px', width: "20px", "&.MuiButtonBase-root:hover": {
                                    bgcolor: "transparent"
                                }
                            }}
                            aria-label="menu"
                            color="white"
                            onClick={() => setMenuShow(true)}
                        >
                            <MenuIcon className="navbar-container-menu-item" sx={{ width: "40px" }} />
                        </IconButton >
                    </Box>
                    <Box className="navbar-container-logo flex">
                        <picture>
                            <img
                                className="navbar-container-logo-img"
                                src="../../../multiform_b_a.png"
                                draggable="false"
                            />
                        </picture>
                    </Box>
                </Box>
                <Box className="navbar-container flex">
                    <Box className="navbar-container-search">
                        <TextField
                            type="search"
                            variant="filled"
                            placeholder="🔎 search"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end' sx={{ padding: '0 0 0 2px', }}>
                                        <IconButton>
                                            <SearchIcon sx={{ padding: '2px', border: 'none' }} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                            }}
                            aria-label="menu"
                            color="white"
                            sx={{
                                draggable: 'false',
                                backgroundColor: 'white',
                                borderRadius: '25px',
                                '& .MuiFilledInput-root': {
                                    backgroundColor: 'white',
                                    borderRadius: '25px',
                                },
                                '& .MuiIconButton-root': {
                                    padding: '0px', // Eliminar el padding del IconButton
                                },
                            }}
                        />
                    </Box>
                </Box>
                <Box className="navbar-container flex" sx={{ width: "260px", display: "flex", justifyContent: "end" }}>
                    <Box className="navbar-container-profile">
                        <Card
                            className="navbar-container-profile-card flex"
                            onClick={handleProfileOpen}
                        >
                            <picture>
                                <img
                                    className="navbar-container-profile-card-img"
                                    src="../../../user-profile-default.png"
                                    draggable="false"
                                />
                            </picture>
                        </Card>
                    </Box>
                </Box>
            </Box>

            <Menu
                menuShow={menuShow}
                setMenuShow={setMenuShow}
            />
            <ProfileImg
                popProfile={popProfile}
                setPopProfile={setPopProfile}
                origin={origin}
            />

        </>


    )
}
export default Navbar