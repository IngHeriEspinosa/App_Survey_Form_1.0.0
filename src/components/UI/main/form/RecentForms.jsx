import { Box, MenuItem, TextField, Typography } from "@mui/material"
import { CardViewForm } from "./card/CardViewForm"

export const RecentForms = () => {

    // const titulo = "En que piso le gustaria trabajar en el edificio nuevo"
    // MAXIMO DE 80 CARACTERES.
    const titulo = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates reiciendis"
    const nombre = "Heri Espinosa"
    const respuestas = "10 respuestas"

    const handleChange = (event) => {
        // Hacer algo con el valor seleccionado, si es necesario
        console.log('Seleccionado:', event.target.value);
    };

    return (
        <Box sx={{ width: "100%", height: "calc(100vh - 200px)", backgroundColor: "var(--greyW)", display: "flex", justifyContent: "center" }}>
            <Box sx={{ padding: 0 }}>
                <Box sx={{ width: "85%", height: "80px", display: "flex", justifyContent: "space-between", padding: "0.5em" }}>
                    <Typography sx={{ padding: "1em 5em", color: "var(--greyM)" }}>Formularios recientes</Typography>
                </Box>

                <Box
                    className='custom-scrollbar'
                    sx={{
                        height: '100%',
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "1em",
                        padding: "1em 1.5em 7em 0",
                        overflowY: 'auto'
                    }}>
                    <CardViewForm
                        formFavorite={false}
                        titulo={titulo}
                        nombre={nombre}
                        respuestas={respuestas}
                    />
                    <CardViewForm
                        formFavorite={false}
                        titulo={titulo}
                        nombre={nombre}
                        respuestas={respuestas}
                    />
                    <CardViewForm
                        formFavorite={true}
                        titulo={titulo}
                        nombre={nombre}
                        respuestas={respuestas}
                    />
                    <CardViewForm
                        formFavorite={false}
                        titulo={titulo}
                        nombre={nombre}
                        respuestas={respuestas}
                    />
                </Box>
            </Box>

            <Box sx={{ width: "200px", display: "flex", padding: "0.2em" }}>
                <TextField
                    size='small'
                    select
                    defaultValue={1}
                    sx={{
                        width: "210px",
                        height: "42px",
                        margin: "1.5em auto",
                        "& fieldset": {
                            borderColor: "var(--primary)",
                            borderRadius: "2em",
                            border: "none",
                        },
                    }}
                    onChange={handleChange}>
                    <MenuItem value={1}><em>Recientes</em></MenuItem>
                    <MenuItem value={2}><em>Mis formularios</em></MenuItem>
                    <MenuItem value={3}><em>Compartidos conmigo</em></MenuItem>
                    <MenuItem value={4}><em>Favoritos</em></MenuItem>
                </TextField>
            </Box>
        </Box>
    )
}