import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

import './styles/profileimg.css';

const ProfileImg = ({ popProfile, setPopProfile, origin }) => {

    // STATES
    const [closing, setClosing] = useState(false);

    // REFS
    const popupRef = useRef(null);

    // METHODS
    // Cerrar el pop del perfil al dar clic en un lugar que no sea el mismo pop
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setClosing(true);
        }
    };

    // Destruir el componente al cerrar la animacion 
    const handleAnimationEnd = () => {
        if (closing) {
            setClosing(false);
            setPopProfile(false);
        }
    };

    // EFFECT
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        (popProfile || closing) && (
            <Box
                className={closing ? "slide-out-tr" : "slide-in-tr"}
                ref={popupRef}
                sx={{
                    position: 'fixed',
                    top: `${origin.top + 7}px`,
                    left: `${origin.left - 268}px`,
                    transformOrigin: `${origin.left - 260}px ${origin.top}px`,
                    zIndex: '500',
                    backgroundColor: 'var(--greyW)',
                    width: '300px',
                    height: '180px',
                    borderRadius: '0.8em',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onAnimationEnd={handleAnimationEnd}
            >
                <ClearIcon
                    color="secondary"
                    onClick={() => setClosing(true)}
                    sx={{ position: 'absolute', top: '4px', left: '5px', cursor: 'pointer' }}
                />
                <Box width="150px" display='flex' justifyContent='center'>
                    <Box
                        sx={{
                            width: '100px',
                            height: '100px',
                            backgroundColor: 'var(--white)',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        <picture>
                            <img className="profileImg_logo-img" src="../../../../../../user-profile-default.png" />
                        </picture>
                    </Box>
                </Box>
                <Box width="200px" padding="0.5em">
                    <Typography component='p' sx={{ fontSize: '1rem', fontWeight: 'bold', fontStyle: 'italic' }}>Heri Espinosa</Typography>
                    <Typography component='p' sx={{ fontSize: '9px', wordWrap: 'break-word' }}>heri.espinosa@multicomputos.com</Typography>
                </Box>
            </Box>
        )
    );
};

export default ProfileImg;
