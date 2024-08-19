import { Box, Button, Typography } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useDataForm, usePreviewForm } from "../../../../../../global"

export const PreviewMenuControl = () => {
    // STATUS
    const { formData } = useDataForm()
    const { setPreview } = usePreviewForm()

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
                    {formData.titleForm}
                </Typography>
            </Box>

            <Box
                display='flex'
                gap='0.8em'
            >
                <Button
                    variant='contained'
                    startIcon={<ChevronLeftIcon />}
                    sx={{
                        height: "28px",
                        backgroundColor: 'var(--secondary)',
                        ':hover': {
                            backgroundColor: 'var(--sbSecondary)',
                        }
                    }}
                    onClick={() => setPreview(false)}
                >
                    Volver al editor
                </Button>

                <Button
                    variant='contained'
                    sx={{ width: "100px", height: "28px" }}
                >
                    Enviar
                </Button>
            </Box>
        </Box>
    )
}