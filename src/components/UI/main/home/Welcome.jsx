import { Box, Button, Typography } from "@mui/material"
import './styles/welcome.css'

export const Welcome = ({ setCreateform }) => {

    const nombre = "Heri Espinosa"
    return (
        <Box
            sx={{
                width: "100%",
                height: "135px",
                background: "var(--white)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                gap: "0.7em",
                paddingLeft: "60px"
            }}
        >
            <Box sx={{ width: "100%" }}>
                <Typography component="h3" sx={{ color: "var(--greyM)", marginBottom: "-5px" }}>Bienvenido/a!</Typography>
                <Typography component="h2" variant="h5" sx={{ color: "var(--greyM)", fontWeight: "bold" }}>{nombre}</Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
                <Button
                    className="btn-mc"
                    variant="contained"
                    sx={{ width: '150px', fontSize: '0.7rem' }}
                    onClick={() => setCreateform(true)}
                >
                    Nuevo Formulario
                </Button>
            </Box>
        </Box>
    )
}