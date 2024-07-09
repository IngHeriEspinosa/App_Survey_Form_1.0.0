import { Box, Button, Typography } from "@mui/material"
import './styles/welcome.css'
import { useCreateForm } from "../../../../global"

export const Welcome = () => {

    const { createForm } = useCreateForm()

    const nombre = "Heri Espinosa"
    return (
        <Box sx={{ width: "100%", height: "180px", background: "var(--white)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", gap: "1.3em", padding: "1em" }}>
            <Box sx={{ width: "100%", paddingLeft: "70px" }}>
                <Typography component="h3" sx={{ color: "var(--greyM)", marginBottom: "-5px" }}>Bienvenido/a!</Typography>
                <Typography component="h2" variant="h5" sx={{ color: "var(--greyM)", fontWeight: "bold" }}>{nombre}</Typography>
            </Box>
            <Box sx={{ width: "100%", padding: "0 0 20px 68px" }}>
                <Button className="btn-mc" variant="contained" width="100%" onClick={() => createForm(true)}>
                    Nuevo Formulario
                </Button>
            </Box>
        </Box>
    )
}