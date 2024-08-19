import { useEffect, useRef } from "react";
import { Box, TextField, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

export const OptionsTypeSelect = ({ questionData, setQuestionData, index, itemOption, itemOptionId, i2, handleAddOptions, activeIndex }) => {

    // REFS
    // Referencia para el TextField de la opción
    const optionRef = useRef(null);

    // METHODS
    const handleTitleOption = (event, index, i2) => {
        const newCard = [...questionData]
        newCard[index].options[i2].value = event.target.value

        setQuestionData([...newCard])
    }

    const handleDeleteOption = () => {
        if (questionData[index]?.options.length > 1) {
            // Crear una copia de questionData
            const newCard = [...questionData];

            // Filtrar el elemento que se desea eliminar
            const result = newCard[index].options.filter((item, idx) => idx !== i2);

            // Actualizar las opciones en newCard
            newCard[index].options = [...result];

            // Actualizar el estado de questionData
            setQuestionData([...newCard]);
        } else if (questionData[index]?.options.length === 1 && questionData[index]?.options[0]?.value) {
            // Agregar una opción vacía si solo hay una opción en el array
            const newCard = [...questionData];
            newCard[index].options = [{ id: 1, value: '' }];

            // Actualizar el estado de questionData
            setQuestionData([...newCard]);
        }
    }

    // EFFECTS
    // Efecto para enfocar el TextField de la opción cuando se agregan nuevas opciones
    useEffect(() => {
        if (index === activeIndex) {
            if (optionRef.current) {
                optionRef.current.focus();
            }
        }
    }, [questionData[index]?.options]);

    return (
        <>
            <Box className='fadeIn' width="67%" display='flex' justifyContent='space-between'>
                <Box sx={{ display: 'flex', gap: '0.1em', alignItems: 'center', paddingX: '1em' }}>
                    {
                        questionData[index]?.type === 1
                            ? <Typography sx={{ color: '#dadada', borderBottom: '1px dashed #dadada', marginBottom: '1.4em' }}>
                                'Respuesta corta'.
                            </Typography>
                            : questionData[index]?.type === 2
                                ? <Typography sx={{ color: '#dadada', borderBottom: '1px dashed #dadada', marginBottom: '1.4em' }}>
                                    'Respuesta larga'.
                                </Typography>
                                : questionData[index]?.type === 3
                                    ? <Box sx={{ width: '20px', height: '20px', border: '1px solid #dadada', borderRadius: '50%', marginBottom: '1.2em' }} />
                                    : questionData[index]?.type === 4
                                        ? < Box sx={{ width: '20px', height: '20px', border: '1px solid #dadada', marginBottom: '1.2em' }} />
                                        : questionData[index]?.type === 5
                                            ? <Typography sx={{ color: '#dadada', marginBottom: '1.1em' }}>
                                                {itemOptionId}.
                                            </Typography>
                                            : questionData[index]?.type === 6
                                                ? <Typography sx={{ color: '#dadada', borderBottom: '1px dashed #dadada', marginBottom: '1em' }}>
                                                    Los archivos se subiran en una base de datos temporal, estos tendran una vigencia de 1 año.
                                                </Typography>
                                                : questionData[index]?.type === 7
                                                    ? <Typography sx={{ color: '#dadada', borderBottom: '1px dashed #dadada', marginBottom: '1.4em' }}>
                                                        'Mes, dia, año'.
                                                    </Typography>
                                                    : questionData[index]?.type === 8
                                                        ? <Typography sx={{ color: '#dadada', borderBottom: '1px dashed #dadada', marginBottom: '1em' }}>
                                                            'Hora'. <AccessTimeIcon />
                                                        </Typography>
                                                        : ""
                    }

                    {
                        questionData[index]?.type === 9
                            ?
                            <TextField
                                id="question-selection"
                                className="custom-scrollbar"
                                name="question-selection"
                                placeholder="Escribir mensaje"
                                multiline
                                sx={{
                                    height: '80px',
                                    margin: '0 0 0.2em 0',
                                    "& fieldset": { border: "none" },
                                    "& .MuiInputBase-input": {
                                        width: '400px',
                                        fontSize: '0.9rem',
                                        padding: "0 0.3em 0 0.2em",
                                    },
                                    "& .MuiInputBase-root": {
                                        paddingX: '0'
                                    },
                                    overflowY: 'auto'
                                }}
                                value={itemOption?.value}
                                onChange={(event) => handleTitleOption(event, index, i2)}
                            />
                            :
                            <TextField
                                inputRef={optionRef}
                                id="question-selection"
                                name="question-selection"
                                placeholder="Opcion"
                                sx={{
                                    // width: '350px',
                                    height: '35px',
                                    margin: '0 0 0.2em 0',
                                    "& fieldset": { border: "none" },
                                    "& .MuiInputBase-input": {
                                        width: '350px',
                                        fontSize: '0.9rem',
                                        padding: "0 0.5em",
                                    },
                                    display: (questionData[index]?.type === 3
                                        || questionData[index]?.type === 4
                                        || questionData[index]?.type === 5
                                    )
                                        ? 'block'
                                        : 'none'
                                }}
                                value={itemOption?.value}
                                onChange={(event) => handleTitleOption(event, index, i2)}
                            />
                    }

                </Box>

                {
                    questionData[index]?.type === 9 ?

                        <ClearIcon color="secondary"
                            fontSize="medium"
                            cursor="pointer"
                            sx={{ marginTop: '0.7em' }}
                            onClick={() => handleDeleteOption()}
                        />
                        : questionData[index]?.type === 3 ||
                            questionData[index]?.type === 4 ||
                            questionData[index]?.type === 5
                            ?
                            <RemoveIcon
                                color="redMc"
                                fontSize="medium"
                                cursor="pointer"
                                onClick={() => handleDeleteOption()}
                            />
                            : ''
                }
            </Box>
        </>
    )
}