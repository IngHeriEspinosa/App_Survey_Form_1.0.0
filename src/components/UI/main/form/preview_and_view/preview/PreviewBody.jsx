import { Box, Typography } from "@mui/material"

import { transformWord } from "../../../../../../utils/transformWord"
import { PreviewTypeOption } from "./PreviewTypeOption"
import { useDataForm } from "../../../../../../global"

export const PreviewBody = () => {

    // STATUS
    const { formData } = useDataForm()

    return (
        <Box
            sx={{
                width: '800px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1em',
                marginTop: '75px'
            }}
        >

            {/* Cabezera del formulario */}
            <Box sx={{
                width: '100%',
                background: "var(--greyW)",
                borderRadius: "1.8em",
                padding: "2.2em 1.6em 1.4em",
                position: 'relative',
            }}
            >
                {/* Descripcion del formulario y nombre del dueño del formulario */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: '0.4em',
                        borderBottom: '1px dashed var(--greyM)',
                        paddingBottom: '0.6em',
                        marginBottom: '0.7em',
                    }}
                >
                    {
                        formData?.descriptionForm ?
                            <>
                                <Typography
                                    color='secondary'
                                    sx={{
                                        fontSize: '0.9rem',
                                        fontStyle: 'italic',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Descripcion:
                                </Typography>

                                <Typography
                                    color='#0d9510'
                                    sx={{
                                        fontSize: '0.9rem',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    {formData?.descriptionForm}
                                </Typography>

                            </>

                            :
                            <>
                                <Typography
                                    color='#0d9510'
                                    sx={{
                                        fontSize: '0.9rem',
                                        fontStyle: 'italic',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Este formulario no contiene descripcion
                                </Typography>
                            </>
                    }

                    {/* Mensaje de campos obligatorios */}
                    <Typography
                        component='p'
                        sx={{
                            fontSize: '0.6rem',
                            position: 'absolute',
                            top: '4px',
                            right: '30px'
                        }}
                    >
                        Los campos marcados con <b style={{ color: 'var(--redMc)' }}>*</b> son obligatorios.
                    </Typography>
                </Box>

                {/* Nombre del dueño del formulario */}
                <Box>
                    <Typography
                        fontSize='0.8rem'
                    >
                        Nombre de la cuenta (usuario dueño del form)
                    </Typography>
                </Box>
            </Box>

            {/* Cuerpo del formulario */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5em',
                    paddingBottom: '3em'
                }}
            >
                {
                    formData?.questionData?.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '100%',
                                background: "var(--greyW)",
                                borderRadius: "1.8em",
                                padding: "1.1em 1.8em",
                                position: 'relative'

                            }}
                        >
                            {/* Titulo de la pregunta */}
                            <Typography
                                component='p'
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: '500'
                                }}
                            >
                                {transformWord(item.title, 1)}
                            </Typography>

                            {/* Descripcion de la pregunta */}
                            <Typography
                                component='p'
                                sx={{
                                    fontSize: '0.8rem',
                                }}
                            >
                                {
                                    item.type === 4 && !item.description
                                        ?
                                        'elige una o varias opciones'
                                        : item.type === 3 && !item.description ||
                                            item.type === 3 && !item.description
                                            ? 'elige una opcion'
                                            : item.type === 7 && !item.description
                                                ? 'especifique la fecha en el calendario'
                                                : transformWord(item.description, 2)
                                }
                            </Typography>
                            <PreviewTypeOption
                                type={item.type}
                                values={item.options}
                            />
                        </Box>
                    ))
                }
            </Box>


        </Box>
    )
}