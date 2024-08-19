import { Box, Button, Typography } from "@mui/material"
import { TopBar } from "./TopBar"
import { useDataForm } from "../../../../global"

export const ResponseForm = ({ viewResponseform, setViewResponseform }) => {

    // Variables
    const questionT = [
        { nombres: "Heri", apellidos: "Espinosa", edad: 20, otros: "ok" },
        { nombres: "Fleirin", apellidos: "Cipion", edad: 25, otros: "off" },
        { nombres: "Jose", apellidos: "Almanzar", edad: 19, otros: "lt" },
        { nombres: "Michael", apellidos: "Albert", edad: 29, otros: "ok" },
        // { nombres: "Pedro", apellidos: "Santana", edad: 30, otros: "not" },
    ]

    // Status
    const { formData } = useDataForm()
    const { titleForm } = formData

    return (
        <Box>
            <TopBar
                viewResponseform={viewResponseform}
                setViewResponseform={setViewResponseform}
            />


            <Box
                className="flex fadeIn"
                sx={{
                    width: "100%",
                    height: "calc(100vh - 110px)",
                    flexDirection: "column",
                    justifyContent: "start",
                    gap: "1em",
                    background: "var(--mcBlackBlue)",
                    padding: "1em"
                }}>
                <Box
                    sx={{
                        width: "750px",
                        borderRadius: "1.8em",
                        padding: "1.2em 2em",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "var(--white)"
                    }}>
                    <Typography component='h1' variant="h6" sx={{ color: 'var(--greyM)', padding: '0.2em 0 0.1em' }}>{titleForm}</Typography>
                    <Typography component='h1' variant="body2" sx={{ color: 'var(--primary)', padding: '0 0.2em' }}>{"7"} Respuestas</Typography>
                </Box>

                <Box position='relative'>
                    <Box
                        sx={{
                            width: "750px",
                            borderRadius: "1.8em",
                            padding: "1.2em 2em",
                            display: "flex",
                            flexDirection: "column",
                            ustifyContent: "center",
                            backgroundColor: "var(--white)"
                        }}
                    >
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <Typography
                                component='h5'
                                variant="body2"
                                sx={{ color: 'var(--greyM)', }}
                            >
                                Resultados
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{
                                    height: '32px',
                                    padding: '1em',
                                    borderRadius: '0.8em',
                                    backgroundColor: 'var(--secondary)',
                                    ':hover': {
                                        backgroundColor: 'var(--sbSecondary)',
                                        transition: 'all 0.3s ease-in-out',
                                    },
                                }}
                            >
                                Descargar
                            </Button>
                        </Box>

                        <Box width='100%' height="300px" display='flex' margin='0 auto' position="relative">
                            <Box className='custom-scrollbar' width='50%' height="300px" sx={{ overflowY: 'auto' }}>
                                {
                                    questionT.map((item, index) => (
                                        <Box key={index}>
                                            <Typography>1. Nombres</Typography>
                                            <Typography
                                                component='a'
                                                variant="caption"
                                                sx={{
                                                    color: "var(--primary)",
                                                    cursor: "pointer",
                                                    borderBottom: '1px dashed var(--primary)',
                                                    marginLeft: '1.6em',
                                                    fontSize: '11px'
                                                }}
                                            >
                                                Mas detalles
                                            </Typography>

                                            <Box
                                                width='100%'
                                                display='flex'
                                                flexDirection='column'
                                                alignItems='center'
                                                padding='0.8em 1em 1em 4em'
                                            >
                                                <Typography
                                                    component='h3'
                                                    variant='h3'
                                                    sx={{ fontSize: "2rem", color: 'var(--greyM)', fontWeight: 'bold' }}>{questionT.length}</Typography>
                                                <Typography
                                                    component='h5'
                                                    variant="caption"
                                                    sx={{ color: 'var(--greyM)' }}
                                                >
                                                    Respuestas
                                                </Typography>

                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>

                            <Box
                                width='50%'
                                sx={{
                                    padding: "1.5em",
                                    color: 'var(--greyM)',
                                    fontStyle: "italic",
                                    fontSize: "0.9rem",
                                    textAlign: "center",
                                    overflowY: 'auto'
                                }}
                            >
                                <Typography marginTop='1.2em'>Ultimas respuestas</Typography>
                                <br />
                                {
                                    questionT.map((item, index) => (
                                        <Typography
                                            key={index}
                                            component='p'
                                            variant="p"

                                        >{item.nombres} {item.apellidos}</Typography>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </Box>
    )
}