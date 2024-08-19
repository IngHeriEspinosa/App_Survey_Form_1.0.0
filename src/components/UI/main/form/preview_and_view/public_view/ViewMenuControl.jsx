import { Box, Button, Typography } from "@mui/material"

import { dataFormExample } from "../../../../../../data/pruebaForm"


// VARIABLES
const {
    titleForm,
} = dataFormExample

export const ViewMenuControl = () => {

    return (
        <Box
            sx={{
                width: '100%',
                height: '60px',
                backgroundColor: 'var(--greyW)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1em',
                position: 'fixed',
                zIndex: 500
            }}
        >
            <Box display='flex' gap='0.7em'>

                <Typography
                    color='secondary'
                    sx={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        letterSpacing: '1px'
                    }}
                >
                    Titulo:
                </Typography>
                <Typography
                    sx={{
                        fontSize: '0.9rem',
                        fontWeight: '500',
                    }}
                >
                    {titleForm}
                </Typography>
            </Box>

            <Typography
            >
            </Typography>

            <Button variant='contained' sx={{ width: "100px", height: "28px" }}>Enviar</Button>

        </Box>
    )
}