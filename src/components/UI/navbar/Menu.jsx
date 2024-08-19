import { Box, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LogoutIcon from '@mui/icons-material/Logout';
import DescriptionIcon from '@mui/icons-material/Description';
import ShareIcon from '@mui/icons-material/Share';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import './styles/menu.css';
import { useEffect, useRef, useState } from "react";

const Menu = ({ menuShow, setMenuShow }) => {
    const [closing, setClosing] = useState(false);
    const menuShowRef = useRef();

    const handleClickOutside = (event) => {
        if (menuShowRef.current && !menuShowRef.current.contains(event.target)) {
            setClosing(true);
        }
    };

    const handleAnimationEnd = () => {
        if (closing) {
            setClosing(false);
            setMenuShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (menuShow) {
            setClosing(false);
        }
    }, [menuShow]);

    return (
        (menuShow || closing) && (
            <Box
                className={closing ? "slide-out-tl" : "slide-in-tl"}
                sx={{
                    width: '210px',
                    height: '100vh',
                    backgroundColor: 'var(--white)',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    zIndex: '500',
                }}
                onAnimationEnd={handleAnimationEnd}
            >
                <Box position='relative' ref={menuShowRef}>
                    <Box
                        width='100%'
                        height='60px'
                        display='flex'
                        gap='0.3em'
                        justifyContent='center'
                        alignItems='center'
                        padding='0.5em 1em 0.5em 0.7em'
                        borderBottom='1px solid var(--greyW)'
                    >
                        <HighlightOffIcon
                            sx={{ fontSize: '25px', marginBottom: '3px' }}
                            color="secondary"
                            cursor="pointer"
                            onClick={() => setClosing(true)}
                        />
                        <picture>
                            <img className="menu__logo" src="../../../../multiform.png" />
                        </picture>
                    </Box>

                    <Box
                        width='100%'
                        height='calc(100vh - 60px)'
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-between'
                    >
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                margin: '0 auto',
                                gap: '1em',
                                paddingTop: '3em',
                                letterSpacing: '1px'
                            }}
                            margin='0 auto'
                        >
                            <Box display='flex' alignItems='center' gap='0.5em' sx={{ cursor: 'pointer' }}>
                                <DescriptionIcon color='greyW' />
                                <Typography
                                    component='p'
                                    variant="p"
                                    fontSize='0.9rem'
                                    color='var(--greyM)'
                                >
                                    Mis formularios
                                </Typography>
                            </Box>
                            <Box display='flex' alignItems='center' gap='0.5em' sx={{ cursor: 'pointer' }}>
                                <ShareIcon color='greyW' />
                                <Typography
                                    component='p'
                                    variant="p"
                                    fontSize='0.9rem'
                                    color='var(--greyM)'
                                >
                                    Compartidos
                                </Typography>
                            </Box>
                            <Box display='flex' alignItems='center' gap='0.5em' sx={{ cursor: 'pointer' }}>
                                <StarOutlineIcon color='greyW' />
                                <Typography
                                    component='p'
                                    variant="p"
                                    fontSize='0.9rem'
                                    color='var(--greyM)'
                                >
                                    Favoritos
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            display='flex'
                            alignItems='center'
                            gap='0.5em'
                            position='absolute'
                            bottom='1px'
                            padding='0 0 1.5em 0.8em'
                            sx={{ cursor: 'pointer' }}
                        >
                            <LogoutIcon color='secondary' />
                            <Typography
                                component='h6'
                                fontWeight='bold'
                                fontSize='0.9rem'
                                color='secondary'
                            >
                                Cerrar sesion
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    );
};

export default Menu;
