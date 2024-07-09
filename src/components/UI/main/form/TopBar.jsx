
import { Box, Button, TextField } from '@mui/material'

import { useDataForm, useResponseForm } from '../../../../global'
import './styles/topbar.css'

export const TopBar = () => {
    // Status
    const { formResponse, responseForm } = useResponseForm()
    const {
        formTitle,
        setFormTitle,
    } = useDataForm()

    // Methods
    const handleToggleOptions = (option) => {
        if (option === 1) {
            responseForm(true)
        } else {
            responseForm(false)

        }
    }

    return (
        <Box sx={{ width: "100%", height: "56px", display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: "1.5em" }}>
            <Box sx={{ width: "194px", height: "36.5px", border: "solid 2px var(--greyW)", borderRadius: "2em", position: "relative" }}>
                <Button
                    variant={!formResponse ? 'contained' : 'outlined'}
                    className='create-form-btn-status'
                    sx={{ position: "absolute", border: "none", marginRight: "0.5em", left: "-1.5px", top: "-1px" }}
                    onClick={() => handleToggleOptions(2)}
                >
                    Preguntas
                </Button>

                <Button
                    variant={formResponse ? 'contained' : 'outlined'}
                    className='create-form-btn-status'
                    sx={{ position: "absolute", border: "none", left: "102px", top: "-1px" }}
                    onClick={() => handleToggleOptions(1)}
                >
                    Respuestas
                </Button>
            </Box>

            <Box width="395px" padding="0">
                <TextField
                    variant="filled"
                    placeholder="Form title"
                    value={`${formTitle}`}
                    disabled={!!formResponse}
                    sx={{
                        width: "100%"
                    }}
                    InputProps={{
                        style: {
                            height: '56px',
                            backgroundColor: 'var(--white)',
                            padding: '0px !important',
                            textAlign: 'center'
                        },
                        disableUnderline: true,
                        inputProps: {
                            autoComplete: 'off',
                            style: {
                                padding: 0,
                                textAlign: 'center',
                            },
                        },
                    }}
                    onChange={(e) => setFormTitle(e.target.value)}
                />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5em" }}>
                <Box className="create-form-preview">
                    <picture>
                        <img src='../../../../ojo.png' width="100%" />
                    </picture>
                </Box>
                <Box className="create-form-preview">
                    <picture>
                        <img src='../../../../flechaDireccion.png' width="100%" style={{ transform: 'scaleX(-1)' }} />
                    </picture>
                </Box>
                <Box className="create-form-preview">
                    <picture>
                        <img src='../../../../flechaDireccion.png' width="100%" style={{ transform: 'scaleY(-1)' }} />
                    </picture>
                </Box>
                <Button variant='contained' sx={{ width: "100px", height: "30px" }}>Enviar</Button>
            </Box>
        </Box>
    )
}